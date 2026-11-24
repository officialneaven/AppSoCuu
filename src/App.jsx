import { useState, useCallback } from 'react'

/* ==================== DATA (ported from HTML dataset) ==================== */

const signs12 = [
  ['Da', 'layers', [
    ['Da tái nhợt / xám', 'p:shock', 1],
    ['Da lạnh, ẩm, vã mồ hôi', 'sugar_history', 1],
    ['Da rất nóng', 'heat_alert', 1],
    ['Da đỏ, nóng', 'heat_alert', 1],
    ['Nổi mề đay / ban ngứa', 'allergy_obs', 1],
    ['Da tím tái', 'awake_breath', 2],
    ['Phồng rộp / bóng nước', 'p:burn', 1],
    ['Bầm tím', 'injury', 1],
    ['Vết rách đang chảy máu', 'injury', 1],
    ['Máu chảy ồ ạt / phun thành tia', 'p:bleed', 2],
  ]],
  ['Mắt', 'eye', [
    ['Đỏ mắt', 'eye_kind', 1],
    ['Chảy nước mắt', 'eye_kind', 1],
    ['Cộm / có dị vật', 'eye_kind', 1],
    ['Đau mắt', 'eye_kind', 1],
    ['Sưng quanh mắt', 'eye_kind', 1],
    ['Nhìn mờ đột ngột / mất thị lực', 'p:stroke', 2],
    ['Nhìn đôi đột ngột', 'p:stroke', 2],
    ['Hai đồng tử khác kích thước mới xuất hiện', 'p:unknown', 2],
    ['Hóa chất bắn vào mắt (không có vật xuyên)', 'p:chemical_eye', 2],
    ['Vật cắm xuyên mắt', 'p:eye_pierced', 2],
  ]],
  ['Mũi', 'wind', [
    ['Chảy máu mũi', 'nose_check12', 1],
    ['Máu mũi chảy rất nhiều', 'nose_check12', 2],
    ['Nghẹt mũi', '', 0],
    ['Chảy nước mũi', '', 0],
    ['Hắt hơi liên tục', 'allergy_obs', 1],
    ['Mũi sưng', 'injury', 1],
    ['Mũi biến dạng sau va đập', 'p:head', 1],
    ['Đau mũi sau va đập', 'injury', 1],
    ['Dịch trong chảy từ mũi sau đập đầu', 'p:head', 2],
    ['Có muội đen quanh mũi sau cháy', 'p:smoke10', 2],
  ]],
  ['Miệng', 'mouth', [
    ['Đột ngột méo miệng', 'p:stroke', 2],
    ['Đột ngột không nói được / nói đớ', 'p:stroke', 2],
    ['Môi hoặc lưỡi tím', 'awake_breath', 2],
    ['Lưỡi / họng sưng nhanh', 'p:anaphylaxis', 2],
    ['Môi sưng', 'allergy_obs', 1],
    ['Khó nuốt', 'swallow_check12', 1],
    ['Chảy nước dãi bất thường', 'swallow_check12', 1],
    ['Ho sặc, không lấy được hơi khi ăn', 'choke_severity', 2],
    ['Máu chảy trong miệng sau chấn thương', 'injury', 1],
    ['Miệng khô, rất khát', 'context', 1],
  ]],
  ['Chân', 'leg', [
    ['Đột ngột yếu / tê một bên chân', 'p:stroke', 2],
    ['Đột ngột mất thăng bằng', 'p:stroke', 2],
    ['Đau chân', 'injury', 1],
    ['Sưng chân', '', 0],
    ['Bầm tím chân', 'injury', 1],
    ['Chuột rút', 'heat_alert', 1],
    ['Chân biến dạng sau tai nạn', 'p:fracture', 1],
    ['Không cử động được sau chấn thương', 'injury', 1],
    ['Bàn chân đột ngột lạnh, tái, đau', 'p:unknown', 2],
    ['Máu chảy ồ ạt ở chân', 'p:bleed', 2],
  ]],
]

const signsIndex12 = Object.fromEntries(
  signs12.flatMap((g, gi) => g[2].map((x, i) => [`${gi}-${i}`, { region: g[0], label: x[0], target: x[1], level: x[2] }]))
)

const labels12 = {
  'p:bleed': 'Cầm máu ngay',
  awake_breath: 'Kiểm tra lại hô hấp',
  'p:anaphylaxis': 'Xử trí nghi phản vệ',
  choke_severity: 'Kiểm tra tắc đường thở',
  'p:stroke': 'Xử trí nghi đột quỵ',
  'p:chemical_eye': 'Xử trí hóa chất vào mắt',
  'p:eye_pierced': 'Bảo vệ mắt bị xuyên',
  'p:head': 'Đánh giá chấn thương đầu',
  'p:smoke10': 'Xử trí hít khói',
  'p:unknown': 'Đánh giá khẩn cấp chưa rõ nguyên nhân',
  'p:amputation': 'Xử trí đứt lìa chi',
  nose_check12: 'Đánh giá chảy máu mũi',
  sugar_history: 'Kiểm tra dấu hiệu hạ đường',
  heat_alert: 'Kiểm tra tiếp xúc nhiệt',
  allergy_obs: 'Kiểm tra dấu hiệu dị ứng',
  injury: 'Đánh giá chấn thương',
  eye_kind: 'Đánh giá tổn thương mắt',
  'p:burn': 'Đánh giá bỏng',
  'p:fracture': 'Đánh giá nghi gãy xương',
  'p:shock': 'Đánh giá dấu hiệu choáng',
  swallow_check12: 'Kiểm tra khó nuốt',
  context: 'Hỏi thêm hoàn cảnh',
}

const Q = {
  scene: {
    title: 'Đến gần nạn nhân có an toàn không?',
    desc: 'Quan sát xe cộ, điện, lửa, nước sâu, khí độc.',
    options: [['An toàn', 'response'], ['Nguy hiểm / không chắc', 'unsafe']],
  },
  response: {
    title: 'Nạn nhân có phản ứng không?',
    desc: 'Gọi to, chạm nhẹ vai (bé dưới 1 tuổi: lòng bàn chân). Mở mắt, nhìn hoặc cử động có chủ đích là có phản ứng, dù không nói được. Máu chảy ồ ạt: ép ngay.',
    options: [['Có phản ứng', 'awake_breath'], ['Không phản ứng / không rõ', 'breath'], ['Máu chảy ồ ạt', 'p:bleed']],
  },
  awake_breath: {
    title: 'Nạn nhân thở thế nào?',
    desc: 'Quan sát ngực và nhịp thở. Không nói được chưa chắc là nghẹt thở.',
    options: [['Thở bình thường', 'breathawake'], ['Khó thở / nghẹn / tím môi', 'breath_cause'], ['Mất phản ứng / thở ngáp / không chắc', 'breath']],
  },
  breathawake: {
    title: 'Dấu hiệu nào nổi bật nhất?',
    desc: 'Chọn dấu hiệu đang thấy. Nếu máu chảy ồ ạt, ép ngay.',
    options: [
      ['Đột ngột khó nói, méo mặt, yếu một bên hoặc mất thăng bằng / nhìn bất thường', 'p:stroke'],
      ['Co giật, đau ngực, chảy máu hoặc lú lẫn', 'urgent9'],
      ['Dấu hiệu khác', 'context'],
    ],
  },
  breath_cause: {
    title: 'Khó thở bắt đầu khi nào?',
    desc: 'Nếu thở rất khó hoặc tím môi: nhờ gọi 115 ngay. Không ép bụng chỉ vì không nói được.',
    options: [
      ['Vừa hóc, sặc hoặc có vật mắc', 'choke_severity'],
      ['Sưng môi / lưỡi / họng hoặc choáng sau dị ứng', 'p:anaphylaxis'],
      ['Không do hóc hoặc dị ứng / chưa rõ', 'breath_other7'],
    ],
  },
  breath_other7: {
    title: 'Có dấu hiệu nào kèm theo?',
    desc: 'Khó thở nặng cần cấp cứu. Nếu mất phản ứng, chọn Tình trạng đổi.',
    options: [
      ['Khò khè, giống cơn hen trước', 'p:asthma'],
      ['Va đập ngực, khói / khí độc hoặc thuốc', 'breath_other_detail7'],
      ['Đau ngực hoặc không rõ', 'p:chest'],
    ],
  },
  choke_severity: {
    title: 'Có dấu hiệu vật mắc làm cản luồng khí không?',
    desc: 'Hóc dị vật thường xảy ra khi ăn hoặc đưa vật vào miệng, kèm ho sặc, ho yếu, thở rít hoặc không đưa được không khí vào. Không nói được đơn độc không đủ để kết luận hóc.',
    options: [
      ['Có dấu hiệu hóc nhưng vẫn ho mạnh, vẫn lấy được hơi', 'p:choke_mild'],
      ['Có dấu hiệu hóc và ho rất yếu/không ho được, không lấy được hơi hoặc tím tái', 'choke_age'],
      ['Vẫn thở đều nhưng đột ngột không nói được / nói đớ', 'p:stroke'],
      ['Đã mất phản ứng', 'breath'],
      ['Dị vật đã ra, thở bình thường', 'p:choke_clear'],
      ['Không chắc có hóc, đang khó thở', 'p:chest'],
    ],
  },
  urgent9: {
    title: 'Dấu hiệu nào đang có?',
    desc: 'Nếu máu chảy ồ ạt, ép ngay.',
    options: [
      ['Máu chảy ồ ạt', 'p:bleed'],
      ['Đau ngực mới xuất hiện / dữ dội', 'p:chest'],
      ['Co giật hoặc lú lẫn', 'neuro_short9'],
    ],
    critical: true,
  },
  neuro_short9: {
    title: 'Nạn nhân đang thế nào?',
    desc: 'Nếu lú lẫn mới xuất hiện, cần trợ giúp khẩn cấp.',
    options: [
      ['Đang co giật', 'p:seizure'],
      ['Lú lẫn / rất buồn ngủ', 'altered_context'],
      ['Đã ngất và tỉnh lại', 'faint_flags'],
    ],
    critical: true,
  },
  context: {
    title: 'Hoàn cảnh',
    desc: 'Mô tả ngắn gọn điều gì đã xảy ra.',
    options: [
      ['Bệnh nền / thuốc / dị ứng', 'medical'],
      ['Tai nạn, tiếp xúc môi trường hoặc chất lạ', 'exposure'],
      ['Bệnh nền, triệu chứng khác hoặc chưa rõ', 'food'],
    ],
  },
  medical: {
    title: 'Bệnh nền / thuốc',
    desc: 'Nạn nhân có bệnh nền, dùng thuốc hoặc dị ứng không?',
    options: [['Hen, dị ứng hoặc co giật', 'allergy_obs'], ['Không rõ', 'p:unknown']],
  },
  exposure: {
    title: 'Tiếp xúc môi trường',
    desc: 'Nóng, lạnh, điện, nước, hóa chất, thuốc, động vật.',
    options: [['Điện, nước, nóng hoặc lạnh', 'heat_alert'], ['Hóa chất, thuốc, khói khí', 'toxin_kind'], ['Động vật, côn trùng hoặc không rõ', 'bite_kind']],
  },
  food: {
    title: 'Ăn uống / hóc',
    desc: 'Nạn nhân vừa ăn, hóc hoặc nuốt chất lạ không?',
    options: [['Hóc, dị ứng hoặc nuốt chất lạ', 'choke_severity'], ['Run đói / đau bụng, nôn', 'p:unknown']],
  },
  sugar_history: {
    title: 'Tiểu đường / hạ đường huyết',
    desc: 'Nạn nhân có tiểu đường, dùng thuốc hạ đường hoặc dấu hiệu run, đói, vã mồ hôi không?',
    options: [
      ['Đo thấp hoặc có tiểu đường/dùng thuốc hạ đường kèm run, đói, vã mồ hôi', 'sugar_safe'],
      ['Đột ngột khó nói, méo mặt, yếu một bên hoặc không hiểu lời', 'p:stroke'],
      ['Không rõ nguyên nhân', 'p:unknown'],
    ],
  },
  sugar_safe: {
    title: 'T tỉnh hoàn toàn và tự nuốt an toàn không?',
    desc: 'Không cho uống thử để kiểm tra.',
    options: [
      ['Có, là người lớn, tự nuốt an toàn', 'sugar_items'],
      ['Lơ mơ, khó nuốt, co giật hoặc không chắc', 'p:hypo_severe'],
      ['Trẻ em tỉnh và tự nuốt được', 'p:hypo_child'],
      ['Có dấu hiệu thần kinh đột ngột như trên', 'p:stroke'],
    ],
  },
  sugar_items: {
    title: 'Nguồn đường nhanh',
    desc: 'Chỉ dùng một nguồn, cho người lớn tỉnh hoàn toàn và nuốt an toàn.',
    options: [
      ['Viên hoặc gel glucose có nhãn', 'p:hypo_awake'],
      ['Nước trái cây / nước ngọt có đường / đường cát hoặc mật ong', 'sugar_drink7'],
      ['Không có nguồn đường nhanh', 'p:hypo_no_supply'],
    ],
  },
  sugar_drink7: {
    title: 'Bạn tìm được nguồn đường nào?',
    desc: 'Chỉ dùng một nguồn, cho người lớn tỉnh hoàn toàn và nuốt an toàn.',
    options: [
      ['Nước trái cây / nước ngọt có đường', 'p:hypo_awake'],
      ['Đường cát hoặc mật ong', 'p:hypo_awake'],
      ['Không có', 'p:hypo_no_supply'],
    ],
  },
  heat_alert: {
    title: 'Nóng / sốc nhiệt',
    desc: 'Nạn nhân có dấu hiệu bất thường sau khi ở nơi nóng không?',
    options: [
      ['Vẫn có phản ứng nhưng lú lẫn, nói bất thường hoặc rất nóng và bất thường', 'p:heatstroke'],
      ['Tỉnh hoàn toàn, mệt, chóng mặt, ra nhiều mồ hôi', 'p:heat_exhaust'],
      ['Không phản ứng / thở bất thường', 'breath'],
      ['Đang co giật sau tiếp xúc nóng', 'p:heatstroke'],
    ],
  },
  altered_context: {
    title: 'Lú lẫn / buồn ngủ',
    desc: 'Nutan trở nên lú lẫn hoặc rất buồn ngủ trong hoàn cảnh nào?',
    options: [
      ['Sau ở nơi nóng hoặc vận động trong nóng', 'p:heatstroke'],
      ['Có tiểu đường, đường huyết thấp hoặc dùng thuốc hạ đường', 'p:hypo_severe'],
      ['Sau chấn thương đầu', 'p:head'],
      ['Trong phòng kín có bếp than, máy phát, khói', 'p:co_poison'],
      ['Nghi dùng quá liều thuốc', 'toxin_kind'],
      ['Đột ngột khó nói, méo mặt, yếu một bên hoặc không hiểu lời', 'p:stroke'],
      ['Không rõ nguyên nhân', 'p:unknown'],
    ],
    critical: true,
  },
  breath_other_detail7: {
    title: 'Hoàn cảnh khó thở',
    desc: 'Đau ngực, khó thở nặng hoặc không rõ nguyên nhân: cần đánh giá khẩn cấp.',
    options: [
      ['Va đập ngực', 'p:chest_trauma'],
      ['Khói, khí độc hoặc thuốc', 'toxin_kind'],
      ['Đau ngực / không rõ nguyên nhân', 'p:chest'],
    ],
    critical: true,
  },
  nose_check12: {
    title: 'Chảy máu mũi sau chấn thương đầu không?',
    desc: 'Nếu chảy nhiều, choáng hoặc khó thở: nhờ gọi 115 ngay.',
    options: [
      ['Có va đập đầu / dịch trong chảy từ mũi', 'p:head'],
      ['Không, nạn nhân tỉnh và thở bình thường', 'p:nosebleed'],
      ['Không rõ / nạn nhân yếu, lơ mơ', 'p:unknown'],
    ],
  },
  swallow_check12: {
    title: 'Khó nuốt xuất hiện cùng dấu hiệu nào?',
    desc: 'Không thử nuốt bằng nước hoặc thức ăn.',
    options: [
      ['Đột ngột khó nói, méo mặt hoặc yếu một bên', 'p:stroke'],
      ['Sưng lưỡi / họng, khó thở hoặc nghi hóc', 'breath_cause'],
      ['Không rõ / không có dấu hiệu trên', 'p:unknown'],
    ],
  },
  profile_age: {
    title: 'Nạn nhân khoảng bao nhiêu tuổi?',
    desc: 'Ước lượng bằng quan sát hoặc hỏi người đi cùng. Không cần biết tuổi chính xác.',
    options: [
      ['Dưới 18 tuổi', 'profile_young'],
      ['Từ 18 tuổi trở lên', 'profile_adult'],
      ['Không rõ', 'profile:unknown'],
    ],
  },
  profile_young: {
    title: 'Nạn nhân thuộc nhóm tuổi nào?',
    desc: 'Chọn theo tuổi ước lượng.',
    options: [
      ['Trẻ sơ sinh / nhũ nhi (dưới 1 tuổi)', 'profile:infant'],
      ['Trẻ em / nhi đồng (1–12 tuổi)', 'profile:child'],
      ['Thanh thiếu niên (13–17 tuổi)', 'profile:teen'],
    ],
  },
  profile_adult: {
    title: 'Nạn nhân thuộc nhóm tuổi nào?',
    desc: 'Các mốc này dùng để phân loại thông tin, không thay thế ngưỡng kỹ thuật y khoa.',
    options: [
      ['Trưởng thành (18–39 tuổi)', 'profile:adult'],
      ['Trung niên (40–59 tuổi)', 'profile:middle'],
      ['Lớn tuổi (từ 60 tuổi)', 'profile:older'],
    ],
  },
}

const P = {
  bleed: {
    title: 'Cầm máu',
    steps: [
      {
        text: 'Ép mạnh, liên tục lên vết thương bằng gạc hoặc vải sạch.',
        continuous: true,
        warning: 'Có vật cắm: không rút, ép xung quanh vật.',
      },
    ],
  },
  stroke: {
    title: 'Nghi đột quỵ / tai biến mạch máu não',
    steps: [
      {
        text: 'Cho nghỉ an toàn, ghi giờ và nhờ gọi cấp cứu.',
        note: true,
        warning: 'Không chích máu ngón tay/dái tai, không cạo gió, không cho ăn uống.',
      },
      { text: 'Bảo vệ đường thở, theo dõi', continuous: true },
    ],
  },
  chest: {
    title: 'Đau ngực',
    steps: [{ text: 'Cho nghỉ ở tư thế dễ thở', continuous: true }],
  },
  anaphylaxis: {
    title: 'Phản vệ',
    steps: [{ text: 'Hỗ trợ dùng bút adrenaline đã kê ngay', continuous: true }],
  },
  seizure: {
    title: 'Co giật',
    steps: [
      { text: 'Đặt nằm nghiêng, bảo vệ đầu, không cho bất cứ gì vào miệng' },
      { text: 'Theo dõi sau cơn, gọi 115 nếu cơn > 5 phút hoặc lần đầu', continuous: true },
    ],
  },
  heatstroke: {
    title: 'Sốc nhiệt',
    steps: [
      {
        text: 'Đưa ra khỏi nóng, làm mát bằng nước lạnh hoặc khăn lạnh, quạt liên tục.',
        continuous: true,
        warning: 'Không cho uống nếu ý thức bất thường.',
      },
    ],
  },
  hypo_severe: {
    title: 'Hạ đường nặng',
    steps: [{ text: 'Không cho ăn uống; gọi 115 ngay', continuous: true }],
  },
  unknown: {
    title: 'Không rõ nguyên nhân',
    steps: [{ text: 'Giữ nạn nhân an toàn và tìm trợ giúp', continuous: true }],
  },
  cpr: {
    title: 'Hồi sức tim phổi (CPR)',
    steps: [{ text: 'Ép ngực 100–120 lần/phút, gọi 115, lấy AED', continuous: true, metro: true }],
  },
  asthma: {
    title: 'Hen suyễn',
    steps: [{ text: 'Dùng máy hít bronchodilator nếu có, nghỉ ngơi, gọi 115 nếu không đỡ', continuous: true }],
  },
  asphyxia: {
    title: 'Ngạt thở',
    steps: [{ text: 'Đưa ra ngoài không khí trong lành, gọi 115', continuous: true }],
  },
  poison: {
    title: 'Ngộ độc',
    steps: [{ text: 'Không tự provocar nôn, gọi trung tâm chống độc hoặc 115', continuous: true }],
  },
  burn: {
    title: 'Bỏng',
    steps: [{ text: 'Làm mát vết bỏng dưới nước lạnh, không đính băng chặt', continuous: true }],
  },
  fracture: {
    title: 'Gãy xương',
    steps: [{ text: 'Di cố định vết thương, không di chuyển nếu không cần thiết', continuous: true }],
  },
  shock: {
    title: 'Choáng',
    steps: [{ text: 'Đặt nằm nghiêng, giữ ấm, gọi 115', continuous: true }],
  },
  nosebleed: {
    title: 'Chảy máu mũi',
    steps: [{ text: 'Nằm srä, nhấn kéo mũi, chườm lạnh', continuous: true }],
  },
  heat_exhaust: {
    title: 'Kiệt sức do nóng',
    steps: [{ text: 'Di chuyển vào nơi mát, uống nước, làm mát cơ thể', continuous: true }],
  },
  co_poison: {
    title: 'Nồng độ CO',
    steps: [{ text: 'Đưa ra ngoài không khí trong lành ngay, gọi 115', continuous: true }],
  },
  toxin_kind: {
    title: 'Chất độc',
    steps: [{ text: 'Xác định chất độc, gọi trung tâm chống độc', continuous: true }],
  },
  bite_kind: {
    title: 'Côn trùng / động vật cắn',
    steps: [{ text: 'Rửa vết cắn, theo dõi dị ứng, gọi 115 nếu nặng', continuous: true }],
  },
  eye_pierced: {
    title: 'Mắt bị xuyên',
    steps: [{ text: 'Không rút vật, bảo vệ mắt, gọi 115', continuous: true }],
  },
  chemical_eye: {
    title: 'Hóa chất vào mắt',
    steps: [{ text: 'Rửa mắt bằng nước sạch ít nhất 15 phút, gọi 115', continuous: true }],
  },
  head: {
    title: 'Chấn thương đầu',
    steps: [{ text: 'Giữ im lưng, gọi 115, theo dõi ý thức', continuous: true }],
  },
  amputation: { title: 'Đứt lìa chi', steps: [{ text: 'Ép mạnh, gói phần đứt lìa, gọi 115', continuous: true }] },
}

const _A = {}
const _S = { tab: 'home', view: null, node: null, protocol: null, step: 0, session: null, logs: [] }
const _F = { history: [] }

/* ==================== HELPERS ==================== */

function esc(t) {
  return String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

function log(msg) {
  _S.logs.push({ t: Date.now(), m: msg })
}

function capture(_title, _answer, _status) {
  // placeholder for capture analytics
}

/* ==================== STATE ==================== */

function useAppState() {
  const [state, setState] = useState({ ..._S })

  const setS = (updater) => setState((prev) => ({ ...prev, ...updater }))

  return { state, setS }
}

/* ==================== COMPONENTS ==================== */

function Logo() {
  return <span className="logo" aria-hidden="true">✚</span>
}

function Call115() {
  return (
    <a className="call" href="tel:115" aria-label="Gọi cấp cứu 115">
      115
    </a>
  )
}

function HomeTiles() {
  const tiles = [
    { label: 'Đau ngực', target: 'chest' },
    { label: 'Hô hấp khó khăn', target: 'breath_cause' },
    { label: 'Đột quỵ nghi ngờ', target: 'p:stroke' },
    { label: 'Máu chảy ồ ạt', target: 'p:bleed' },
    { label: 'Co giật', target: 'p:seizure' },
    { label: 'Ngộ độc', target: 'toxin_kind' },
    { label: 'Bỏng', target: 'burn' },
    { label: 'Dị ứng', target: 'allergy_obs' },
  ]
  return (
    <div className="flow-home tiles">
      {tiles.map((t, i) => (
        <button
          key={i}
          className="tile primary"
          onClick={() => openProtocol(t.target)}
          aria-label={t.label}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}

function SymptomCarousel({ onRoute }) {
  const [slide12, setSlide12] = useState(0)
  const [selected12, setSelected12] = useState(new Set())

  const chosen12 = useCallback(() => [...selected12].filter((k) => signsIndex12[k]), [selected12])
  const signLabel12 = (k) => {
    const x = signsIndex12[k]
    return x ? `${x.region} · ${x.label}` : k
  }

  const toggleSign12 = (k) => {
    if (!signsIndex12[k]) return
    const s = new Set(selected12)
    if (s.has(k)) s.delete(k)
    else s.add(k)
    setSelected12(s)
  }

  const clearSigns12 = () => setSelected12(new Set())

  const selectSlide12 = (i) => {
    setSlide12(Math.max(0, Math.min(signs12.length - 1, i)))
  }

  const routes12 = useCallback(() => {
    const found = new Map()
    for (const k of chosen12()) {
      const x = signsIndex12[k]
      if (x.target && (!found.has(x.target) || found.get(x.target) < x.level)) found.set(x.target, x.level)
    }
    return [...found].sort((a, b) => b[1] - a[1])
  }, [chosen12])

  const routeSigns12 = (target) => {
    const valid = routes12().find((x) => x[0] === target)
    if (!valid) return
    if (valid[1] === 2) {
      onRoute(target)
    } else {
      onRoute(target)
    }
  }

  const urgent = routes12().filter((x) => x[1] === 2)

  return (
    <section className="sym12" aria-label="Biểu hiện thường gặp">
      <div className="sym12head">
        <h3>Biểu hiện thường gặp</h3>
        <span className="sym12count">{selected12.size} đã chọn</span>
      </div>
      <div className="sym12nav" role="tablist" aria-label="Vùng cơ thể">
        {signs12.map((g, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === slide12}
            onClick={() => selectSlide12(i)}
            className={i === slide12 ? 'primary' : 'outline'}
          >
            {g[0]}
          </button>
        ))}
      </div>
      <div id="symRoutes12" className="sym12route" aria-live="polite">
        {urgent.length > 0 ? (
          <div className="sym12warning" role="alert">
            Có dấu hiệu nguy hiểm · xử trí ngay, không chờ chọn thêm.
          </div>
        ) : null}
        {routes12()
          .slice(0, 2)
          .map(([key, level]) => (
            <button
              key={key}
              className={level === 2 ? 'danger' : 'outline'}
              onClick={() => routeSigns12(key)}
            >
              {labels12[key] || 'Đánh giá thêm'} →
            </button>
          ))}
      </div>
      <div className="sym12track" id="symTrack12">
        {signs12.map((g, gi) => (
          <section key={gi} className="sym12slide" aria-label={g[0]}>
            <h4>{g[0]} · {g[2].length} biểu hiện</h4>
            <div className="sym12grid">
              {g[2].map((x, i) => {
                const signKey = `${gi}-${i}`
                const on = selected12.has(signKey)
                return (
                  <button
                    key={i}
                    type="button"
                    className="sym12chip"
                    data-sign12={signKey}
                    aria-pressed={on}
                    onClick={() => toggleSign12(signKey)}
                  >
                    <span aria-hidden="true" className="mark12">
                      {on ? '✓' : x[2] === 2 ? '!' : '+'}
                    </span>
                    <span>{esc(x[0])}</span>
                  </button>
                )
              })}
            </div>
          </section>
        ))}
      </div>
      <div className="sym12pager">
        <button id="symPrev12" aria-label="Vùng trước" onClick={() => selectSlide12(slide12 - 1)} disabled={slide12 === 0}>
          ‹
        </button>
        <span id="symPage12">{slide12 + 1} / {signs12.length}</span>
        <button id="symNext12" aria-label="Vùng kế tiếp" onClick={() => selectSlide12(slide12 + 1)} disabled={slide12 === signs12.length - 1}>
          ›
        </button>
      </div>
      <div className="sym12selected">
        <small>Chọn nhiều hoặc bỏ qua · ! nguy hiểm</small>
        <button className="sym12clear" onClick={clearSigns12}>
          Bỏ chọn
        </button>
      </div>
      <div className="sym12summary" id="symSelected12">
        {chosen12().map((k) => <span key={k}>{esc(signLabel12(k))}</span>)}
      </div>
    </section>
  )
}

function QuestionCard({ node, onChoose, onRoute, showSymptomCarousel }) {
  const q = Q[node]
  if (!q) return null

  const isCritical = !!q.critical

  return (
    <div className={`panel question9 ${isCritical ? 'critical' : ''}`}>
      {q.title && <h3 className="qtitle">{esc(q.title)}</h3>}
      {q.desc && <p>{esc(q.desc)}</p>}
      <div className="chips10">
        {q.options.map(([label, nextId], i) => {
          const isProtocol = String(nextId).startsWith('p:')
          return (
            <button
              key={i}
              type="button"
              className={isProtocol ? 'primary' : 'outline'}
              onClick={() => {
                if (isProtocol) {
                  onRoute(nextId.slice(2))
                } else {
                  onChoose(nextId)
                }
              }}
              aria-label={esc(label)}
            >
              {esc(label)}
            </button>
          )
        })}
      </div>
      {showSymptomCarousel && <SymptomCarousel onRoute={onRoute} />}
    </div>
  )
}

function ProtocolCard({ protocolId, stepIndex, onNext, onConfirm, showSymptomCarousel }) {
  const p = P[protocolId]
  if (!p) return null
  const step = p.steps[stepIndex]
  if (!step) return null

  return (
    <div className="panel assessment11">
      <span className="tag">{esc(p.title)}</span>
      <h3>{esc(step.text)}</h3>
      {step.note && <p className="confirm11">Lưu ý: nhớ ghi lại thời điểm.</p>}
      {step.warning && <p className="confirm11 warning">{esc(step.warning)}</p>}
      <div className="chips10">
        <button
          type="button"
          className="primary"
          onClick={onNext}
          aria-label="Tiếp tục bước"
        >
          {step.continuous ? 'Tiếp tục khi phù hợp' : '✓ Đã thực hiện bước này'}
        </button>
        <button type="button" className="outline danger" onClick={onConfirm}>
          Tình trạng đổi
        </button>
      </div>
      {showSymptomCarousel && <SymptomCarousel onRoute={() => {}} />}
    </div>
  )
}

/* ==================== MAIN APP ==================== */

export default function App() {
  const { state, setS } = useAppState()
  const [dialog, setDialog] = useState(null)

  /* Navigation */
  const go = useCallback((tab) => {
    setS({ tab, view: null, node: null, protocol: null, step: 0 })
    setDialog(null)
  }, [setS])

  const openProtocol = useCallback((id) => {
    const p = P[id]
    if (!p) return
    setS({ tab: 'home', view: 'protocol', protocol: id, step: 0, node: null })
    capture('Mở phác đồ', p.title, 'Đã chọn')
  }, [setS])

  const question = useCallback((id) => {
    const q = Q[id]
    if (!q) return
    setS({ tab: 'home', view: 'question', node: id, step: 0, protocol: null })
  }, [setS])

  const choose = useCallback((nextId) => {
    const q = Q[state.node]
    const o = q?.options.find(([, n]) => n === nextId)
    if (!o) return
    capture(q.title, o[0], 'Đã trả lời')
    log(`${q.title} → ${o[0]}`)
    if (String(nextId).startsWith('p:')) {
      openProtocol(nextId.slice(2))
    } else {
      question(nextId)
    }
  }, [state.node, question, openProtocol])

  const nextStep = useCallback(() => {
    if (!state.protocol || !P[state.protocol]) return
    const p = P[state.protocol]
    if (state.step < p.steps.length - 1) {
      setS({ step: state.step + 1 })
    }
  }, [state.protocol, state.step, setS])

  const confirmAction = useCallback(() => {
    setDialog({ type: 'confirm', title: 'Xác nhận thao tác' })
  }, [setDialog])

  /* Render view */
  let content = null

  if (state.tab === 'about') {
    content = (
      <section className="panel">
        <span className="tag">Hồ sơ nguồn · v0.7</span>
        <h2>Tài liệu Việt Nam</h2>
        <p>
          <b>HUCE 2024</b> · QĐ 811/ĐHXD HN, 31/05/2024. Đã đọc mục lục và phần sơ cứu liên quan; đối chiếu phạm vi người dân.
        </p>
        <p>
          <b>Sổ tay cấp cứu 115</b> · chưa truy cập được nội dung do trang yêu cầu xác minh.
          <a href="https://file.medinet.gov.vn//data/soytehcm/tytphuonganlac/attachments/2026_3/so_tay_cap_cuu_115_53202615.pdf" target="_blank" rel="noopener">
            Mở nguồn
          </a>
        </p>
        <p>Các bước sơ cứu được diễn đạt lại, đối chiếu hướng dẫn cộng đồng AHA/Red Cross/NHS/CDC. Chưa có bác sĩ thẩm định.</p>
      </section>
    )
  } else if (state.tab === 'library') {
    content = (
      <section className="panel">
        <span className="tag">Tra cứu triệu chứng</span>
        <h2>Biểu hiện thường gặp</h2>
        <SymptomCarousel onRoute={(id) => { go('home'); openProtocol(id) }} />
      </section>
    )
  } else if (state.tab === 'log') {
    content = (
      <section className="panel">
        <span className="tag">Nhật ký</span>
        <h2>Lịch sử thao tác</h2>
        {state.logs.length === 0 ? (
          <p>Chưa có thao tác nào được ghi nhận.</p>
        ) : (
          <ul className="bullets10">
            {state.logs.slice(-20).reverse().map((entry, i) => (
              <li key={i}>{esc(entry.m)}</li>
            ))}
          </ul>
        )}
      </section>
    )
  } else {
    // home tab - question or protocol view
    if (state.view === 'question' && state.node) {
      const showCarousel = ['focused11', 'medical11', 'medical10', 'observed', 'sudden', 'quick_other9', 'context'].includes(state.node)
      content = (
        <div className="flow-node active-node has-border-gradient">
          <div className="node-inner">
            <div className="node-bar">
              <span className="node-num">Q</span>
              <span className="node-state">Câu hỏi</span>
            </div>
            <div className="panel">
              <QuestionCard
                node={state.node}
                onChoose={choose}
                onRoute={(id) => { go('home'); openProtocol(id) }}
                showSymptomCarousel={showCarousel}
              />
            </div>
          </div>
        </div>
      )
    } else if (state.view === 'protocol' && state.protocol) {
      content = (
        <div className="flow-node active-node has-border-gradient critical-pulse">
          <div className="node-inner">
            <div className="node-bar">
              <span className="node-num">P</span>
              <span className="node-state">Phác đồ xử trí</span>
            </div>
            <div className="panel assessment11 has-border-gradient">
              <ProtocolCard
                protocolId={state.protocol}
                stepIndex={state.step}
                onNext={nextStep}
                onConfirm={confirmAction}
                showSymptomCarousel={false}
              />
            </div>
          </div>
        </div>
      )
    } else {
      content = (
        <div className="flow-node">
          <div className="node-inner">
            <div className="node-bar">
              <span className="node-num">H</span>
              <span className="node-state">Trang chủ</span>
            </div>
            <div className="panel">
              <HomeTiles />
              <SymptomCarousel onRoute={(id) => { go('home'); openProtocol(id) }} />
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <>
      <header>
        <Logo />
        <div className="brand">
          SowCuu
          <small>Sơ cứu tại hiện trường • v1.2</small>
        </div>
        <button className="small" aria-label="Bật hoặc tắt giọng đọc" onClick={() => {}}>
          🔇
        </button>
        <Call115 />
      </header>

      <main id="app">
        <nav className="nav" aria-label="Điều hướng">
          <button data-tab="home" className={state.tab === 'home' ? 'primary' : 'outline'} onClick={() => go('home')}>
            <b>⌂</b> Trang chủ
          </button>
          <button data-tab="library" className={state.tab === 'library' ? 'primary' : 'outline'} onClick={() => go('library')}>
            <b>▤</b> Tra cứu
          </button>
          <button data-tab="log" className={state.tab === 'log' ? 'primary' : 'outline'} onClick={() => go('log')}>
            <b>◷</b> Nhật ký
          </button>
          <button data-tab="about" className={state.tab === 'about' ? 'primary' : 'outline'} onClick={() => go('about')}>
            <b>ⓘ</b> Policy
          </button>
        </nav>

        <dialog id="modal" className="modal" open={!!dialog} onClose={() => setDialog(null)}>
          {dialog && (
            <div className="dialog-content">
              <button className="close-btn outline" onClick={() => setDialog(null)} aria-label="Đóng">
                ✕
              </button>
              {dialog.title && <h2>{esc(dialog.title)}</h2>}
              <p>Bạn có chắc muốn xác nhận thao tác này?</p>
              <div className="chips10">
                <button className="primary" onClick={() => setDialog(null)}>
                  Xác nhận
                </button>
                <button className="outline" onClick={() => setDialog(null)}>
                  Hủy
                </button>
              </div>
            </div>
          )}
        </dialog>

        {content}
      </main>

      {/* Image viewer (placeholder) */}
      <div
        id="viewer8"
        className="hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Xem hình ảnh lớn"
      >
        <div className="v8bar">
          <strong>Hình ảnh tham khảo</strong>
          <button className="close-btn" aria-label="Đóng xem ảnh">
            ✕
          </button>
        </div>
        <div id="v8stage">
          <img id="v8img" alt="Hình ảnh hướng dẫn" />
          <div id="v8msg">Không thể tải hình ảnh</div>
        </div>
        <div className="v8caption" id="v8caption">Chùm ảnh hướng dẫn thao tác</div>
        <div className="v8bottom">
          <span id="v8zoom">100%</span>
        </div>
      </div>
    </>
  )
}
