import { useState, useEffect } from 'react'

/* ---------- helpers ---------- */
const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const now = () => new Date().toLocaleTimeString('vi-VN', { hour12: false })
const fmt = n => String(Math.floor(n / 60)).padStart(2, '0') + ':' + String(n % 60).padStart(2, '0')
const notice = '<div class="notice">BẢN THỬ NGHIỆM • Chưa được bác sĩ thẩm định. Không chẩn đoán bệnh. Ca khẩn cấp: gọi 115 ngay và làm theo tổng đài.</div>'
const callout = '<div class="warning">Nguy kịch: nhờ người khác gọi 115 ngay, đồng thời thực hiện sơ cứu.</div>'

/* ---------- data ---------- */
const sources = {
  basic: ['Red Cross · Đánh giá sơ cứu', 'https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps'],
  cpr: ['Red Cross · CPR người lớn', 'https://www.redcross.org/take-a-class/cpr/performing-cpr/hands-only-cpr'],
  uncon: ['Red Cross · Bất tỉnh còn thở', 'https://www.redcross.org/take-a-class/resources/learn-first-aid/unresponsive-and-breathing-person'],
  bleed: ['Red Cross · Chảy máu nghiêm trọng', 'https://www.redcross.org/take-a-class/resources/learn-first-aid/bleeding-life-threatening-external'],
  stroke: ['NHS · Dấu hiệu đột quỵ', 'https://www.nhs.uk/conditions/stroke/symptoms/'],
  seizure: ['NHS · Co giật', 'https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/'],
  burn: ['NHS · Bỏng nhiệt', 'https://www.nhs.uk/conditions/burns-and-scalds/'],
  poison: ['NHS · Ngộ độc', 'https://www.nhs.uk/conditions/poisoning/'],
  aha: ['AHA / Red Cross · Sơ cứu 2024', 'https://cpr.heart.org/en/resuscitation-science/2024-first-aid-guidelines/'],
  choke: ['Red Cross · Hóc dị vật', 'https://www.redcross.org/take-a-class/resources/learn-first-aid/adult-child-choking'],
  bls25: ['AHA 2025 · Hồi sức và hóc dị vật người lớn', 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support/'],
  ped25: ['AHA/AAP 2025 · Hồi sức và hóc dị vật trẻ em', 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-basic-life-support/'],
  strokevn: ['Bệnh viện Bạch Mai · Sơ cứu đột quỵ', 'https://bachmai.gov.vn/bai-viet/so-cuu-dot-quy-tai-nha-nhung-thao-tac-%E2%80%9Csong-con%E2%80%9D-ban-can-biet?id=66dbd998-49e4-4350-b1c7-042985aa42e0'],
  glucose: ['CDC · Xử trí hạ đường huyết', 'https://www.cdc.gov/diabetes/treatment/treatment-low-blood-sugar-hypoglycemia.html'],
  heat: ['CDC · Bệnh do nhiệt', 'https://www.cdc.gov/niosh/heat-stress/about/illnesses.html'],
  rcguide: ['Red Cross · Hướng dẫn sơ cứu', 'https://www.redcross.org/take-a-class/resources/guidelines'],
  allergy: ['Red Cross · Phản vệ', 'https://www.redcross.org/take-a-class/resources/learn-first-aid/allergic-reaction-anaphylaxis'],
  nose: ['Red Cross · Chảy máu mũi', 'https://www.redcross.org/take-a-class/resources/learn-first-aid/nosebleeds'],
  special25: ['AHA 2025 · Tình huống hồi sức đặc biệt', 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation/'],
}
const st = (title, text, opts = {}) => ({ title, text, ...opts })
const P = {
  cpr: { title: 'Nghi ngừng tuần hoàn · người lớn', source: 'cpr', critical: true, steps: [
    st('Ép tim ngay', 'Nếu người lớn không đáp ứng và không thở bình thường (kể cả thở ngáp), gọi 115 bằng loa ngoài, nhờ lấy AED. Đặt nằm ngửa trên mặt phẳng cứng. Đặt gót bàn tay giữa ngực, tay kia chồng lên. Ép sâu khoảng 5–6 cm, 100–120 lần/phút, nhả ngực hoàn toàn sau mỗi lần. Không dừng để bấm nút.', { visual: 'cpr', continuous: true, metro: true, warning: 'Nếu trẻ em, đuối nước hoặc nghi ngạt, cần hướng dẫn thổi ngạt/CPR phù hợp từ tổng đài; không áp dụng máy móc CPR chỉ ép tim.' }),
    st('AED đã đến', 'Bật AED, làm theo lời máy. Không chạm nạn nhân khi máy phân tích hoặc sốc. Tiếp tục CPR ngay khi máy yêu cầu.', { continuous: true }),
  ]},
  uncon: { title: 'Bất tỉnh nhưng còn thở bình thường', source: 'uncon', critical: true, steps: [
    st('Gọi cấp cứu và bảo vệ đường thở', 'Gọi 115 ngay. Nếu không nghi chấn thương cột sống, đặt nạn nhân nằm nghiêng an toàn. Nếu nghi chấn thương, hạn chế di chuyển trừ khi cần bảo vệ đường thở hoặc tránh nguy hiểm; làm theo tổng đài.', { visual: 'side' }),
    st('Theo dõi liên tục', 'Ở cạnh nạn nhân, kiểm tra hosts absorbed liên tục. Không cho ăn uống. Nếu ngừng thở bình thường hoặc chỉ thở ngáp, chuyển sang nhánh ngừng tuần hoàn ngay.', { continuous: true }),
  ]},
  bleed: { title: 'Chảy máu nghiêm trọng', source: 'bleed', critical: true, steps: [
    st('Ép trực tiếp lên vết thương', 'Gọi 115 hoặc nhờ người khác gọi. Dùng gạc hoặc vải sạch, ép mạnh liên tục lên vết thương. Nếu vật đang cắm trong vết thương, không rút; ép xung quanh vật. Dùng găng nếu có.', { visual: 'bleed', continuous: true }),
    st('Giữ áp lực cho tới khi được tiếp nhận', 'Không nhấc gạc ra để kiểm tra liên tục. Nếu máu vẫn chảy nhiều, làm theo hướng dẫn tổng đài về biện pháp cầm máu bổ sung. Theo dõi ý thức và thở.', { continuous: true }),
  ]},
  stroke: { title: 'Dấu hiệu nghi đột quỵ', source: 'stroke', critical: true, steps: [
    st('Gọi 115 ngay', 'Méo miệng, yếu một bên tay hoặc nói khó đột ngột là dấu hiệu cảnh báo. Không đợi triệu chứng tự hết.', { visual: 'alert' }),
    st('Ghi thời điểm khởi phát', 'Ghi thời điểm bắt đầu triệu chứng hoặc lần cuối còn bình thường. Không cho ăn, uống hay tự dùng thuốc. Theo dõi hosts absorbed.', { note: true, continuous: true }),
  ]},
  seizure: { title: 'Co giật', source: 'seizure', critical: true, steps: [
    st('Bảo vệ khỏi chấn thương', 'Dọn vật nguy hiểm, kê mềm dưới đầu nếu có thể. Không ghì giữ, không nhét vật vào miệng. Ghi thời điểm cơn bắt đầu. Gọi 115 nếu cơn đầu tiên, không rõ tiền sử, kéo dài trên 5 phút, tái diễn, có chấn thương, mang thai hoặc khó thở.', { timer: 300, elapsed: true, visual: 'alert', continuous: true, warning: 'Không chờ đủ 5 phút nếu có dấu hiệu nguy hiểm khác. Thời gian tính từ khi cơn bắt đầu, không phải khi mở app.' }),
    st('Khi cơn đã dừng', 'Kiểm tra hosts absorbed. Nếu còn thở bình thường nhưng chưa tỉnh, đặt nằm nghiêng nếu không nghi chấn thương cột sống. Nếu không thở bình thường, chuyển sang đánh giá khẩn cấp.', { continuous: true }),
  ]},
  burn: { title: 'Bỏng nhiệt', source: 'burn', steps: [
    st('Làm mát vùng bỏng', 'Đưa khỏi nguồn nhiệt nếu an toàn. Xả nước mát đang chảy lên vùng bỏng trong 20 phút. Tháo trang sức và quần áo gần vùng bỏng nếu không dính vào da. Giữ phần cơ thể còn lại ấm.', { timer: 1200, visual: 'burn', warning: 'Bỏng rộng, sâu, ở mặt, đường thở, điện hoặc hóa chất cần hỗ trợ y tế khẩn cấp; không chờ hết bộ đếm mới gọi.' }),
    st('Che phủ và tìm hỗ trợ', 'Che lỏng bằng vật liệu sạch, không dính. Không dùng đá lạnh, kem, dầu hoặc chọc vỡ bóng nước. Đến cơ sở y tế nếu bỏng nghiêm trọng hoặc không rõ mức độ.') ] },
  poison: { title: 'Nghi ngộ độc', source: 'poison', critical: true, steps: [
    st('Liên hệ cấp cứu', 'Gọi 115 nếu nghi ngộ độc nguy hiểm hoặc không rõ chất. Không tự tiếp xúc chất độc, không đi vào khu vực có khí độc. Không gây nôn, không tự cho ăn uống hay dùng thuốc giải.', { visual: 'alert' }),
    st('Chuẩn bị thông tin', 'Nếu an toàn, giữ bao bì hoặc tên chất, lượng ước tính và thời điểm tiếp xúc. Theo dõi ý thức và hosts absorbed. Làm theo hướng dẫn tổng đài.', { note: true, continuous: true }) ] },
  chest: { title: 'Đau ngực hoặc khó thở đột ngột', source: 'aha', critical: true, steps: [
    st('Gọi cấp cứu', 'Gọi 115 ngay nếu đau ngực đột ngột, khó thở nghiêm trọng hoặc không rõ nguyên nhân. Để nạn nhân nghỉ ở tư thế dễ chịu, hạn chế gắng sức. Không để họ tự lái xe.', { visual: 'alert' }),
    st('Ở cạnh và theo dõi', 'Ghi thời điểm khởi phát, bệnh nền và thuốc đang dùng nếu nạn nhân trả lời được. Nếu mất ý thức hoặc thở bất thường, đánh giá lại ngay.', { note: true, continuous: true }) ] },
  choke: { title: 'Nghi hóc dị vật · người còn tỉnh', source: 'choke', critical: true, steps: [
    st('Đánh giá khả năng ho và nói', 'Nếu vẫn ho mạnh và nói được, khuyến khích tiếp tục ho, theo dõi sát. Nếu không thể nói, ho hiệu quả hoặc thở, gọi 115 ngay và thực hiện kỹ thuật theo hướng dẫn tổng đài phù hợp với độ tuổi, thai kỳ và thể trạng. Không móc họng mù.', { visual: 'alert', continuous: true, warning: 'Trẻ dưới 1 tuổi cần kỹ thuật khác. Nếu bất tỉnh, chuyển đánh giá ngay.' }) ] },
  unknown: { title: 'Chưa xác định được tình trạng', source: 'basic', critical: true, steps: [
    st('Tìm hỗ trợ chuyên môn', 'Nếu tình trạng nghiêm trọng, diễn biến bất thường hoặc không thể đánh giá hosts absorbed, gọi 115 ngay. Giữ hiện trường an toàn, ở cạnh nạn nhân và làm theo tổng đài. Không tự cho thuốc.', { visual: 'alert' }),
    st('Theo dõi và đánh giá lại', 'Ghi thông tin nếu có thể. Không coi việc thiếu dữ liệu là dấu hiệu an toàn. Nếu nạn nhân mất đáp ứng hoặc thở bất thường, đánh giá lại ngay.', { note: true, continuous: true }) ] },
}
const tiles = [
  ['◎', 'Ngất / bất tỉnh', 'Mất đáp ứng', 'uncon'],
  ['≈', 'Không thở / khó thở', 'Hô hấp', 'chest'],
  ['◉', 'Chảy máu nhiều', 'Vết thương', 'bleed'],
  ['♡', 'Đau ngực', 'Tim mạch', 'chest'],
  ['ϟ', 'Co giật', 'Thần kinh', 'seizure'],
  ['◐', 'Méo miệng / yếu tay', 'Nghi đột quỵ', 'stroke'],
  ['◈', 'Hóc dị vật', 'Đường thở', 'choke'],
  ['♨', 'Bỏng nhiệt', 'Da và mô', 'burn'],
  ['⚗', 'Nghi ngộ độc', 'Thuốc / hóa chất', 'poison'],
  ['?', 'Không rõ', 'Tình huống khác', 'unknown'],
]
const Q = {
  scene: { title: 'Hiện trường có an toàn không?', desc: 'Quan sát nhanh: xe cộ, điện, lửa, khí độc, nước sâu hoặc bạo lực. Đừng tự đặt mình vào nguy hiểm.', options: [['An toàn, có thể tiếp cận', 'response'], ['Không an toàn / không chắc', 'unsafe']] },
  response: { title: 'Nạn nhân có đáp ứng không?', desc: 'Gọi lớn, chạm nhẹ vào vai nếu an toàn. Quan sát xem họ có mở mắt hoặc trả lời không.', options: [['Có, đang đáp ứng', 'breathawake'], ['Không / không chắc', 'breath']] },
  breath: { title: 'Nạn nhân có thở bình thường không?', desc: 'Gọi 115 ngay nếu không đáp ứng. Quan sát nhanh lồng ngực và nhịp thở, tối đa 10 giây. Thở ngáp không phải thở bình thường.', timer: 10, critical: true, options: [['Có, thở bình thường', 'p:uncon'], ['Không thở / chỉ thở ngáp / không chắc', 'age']] },
  age: { title: 'Nạn nhân là người lớn đột ngột gục xuống?', desc: 'Không trì hoãn hồi sức để hoàn thành biểu mẫu. Nếu đúng là người lớn không đáp ứng và không thở bình thường, bắt đầu CPR ngay.', critical: true, options: [['Đúng, người lớn', 'p:cpr'], ['Trẻ em / đuối nước / nghi ngạt / không rõ', 'special']] },
  breathawake: { title: 'Có khó thở nghiêm trọng hoặc chảy máu nhiều không?', desc: 'Nếu có nhiều dấu hiệu, nhờ người khác hỗ trợ và gọi 115 ngay.', options: [['Chảy máu nhiều', 'p:bleed'], ['Khó thở nghiêm trọng', 'p:chest'], ['Hóc, không nói hoặc ho được', 'p:choke'], ['Không thấy / chưa rõ', 'symptom']] },
  symptom: { title: 'Điều gì đang xảy ra?', desc: 'Chọn triệu chứng dễ quan sát nhất. Không cần biết tên bệnh.', options: tiles.filter(x => x[3] !== 'uncon' && x[1] !== 'Không thở / khó thở').map(x => [x[1], 'p:' + x[3]]).concat([['Vừa ngất hoặc không chắc', 'p:unknown']]) },
}

/* ---------- state ---------- */
const app = document.getElementById('app')
const S = { tab: 'home', view: 'home', node: '', protocol: '', step: 0, session: null, logs: [], voice: false, started: 0, timerStart: 0, timerDuration: 0, metro: null, audio: null, query: '', cat: '', mode: 'base', limit: 30, returnView: null }
const F = { history: [], zoom: 1, focus: true, lastKey: '', lastTop: 0, lastLeft: 0 }

/* ---------- js helpers ---------- */
function log(text) { if (!S.session) return; S.logs.push({ time: now(), text }) }
function speak(text) { if (!S.voice || !('speechSynthesis' in window)) return; try { speechSynthesis.cancel(); let u = new SpeechSynthesisUtterance(text); u.lang = 'vi-VN'; let v = speechSynthesis.getVoices().find(v => v.lang.toLowerCase().startsWith('vi')); if (v) u.voice = v; u.rate = .95; speechSynthesis.speak(u) } catch (e) { } }
function stopSound() { if ('speechSynthesis' in window) speechSynthesis.cancel(); stopMetro() }
function stopMetro() { if (S.metro) { clearInterval(S.metro); S.metro = null } document.querySelector('.ring')?.classList.remove('beat') }
function startMetro() { if (S.metro) { stopMetro(); let b = document.getElementById('metro'); if (b) b.textContent = 'Bật nhịp 110/phút'; return } try { S.audio = S.audio || new (window.AudioContext || window.webkitAudioContext)(); S.audio.resume(); const tick = () => { try { let o = S.audio.createOscillator(), g = S.audio.createGain(); o.frequency.value = 820; g.gain.setValueAtTime(.1, S.audio.currentTime); g.gain.exponentialRampToValueAtTime(.001, S.audio.currentTime + .08); o.connect(g); g.connect(S.audio.destination); o.start(); o.stop(S.audio.currentTime + .09) } catch (e) { } }; tick(); S.metro = setInterval(tick, 60000 / 110); document.querySelector('.ring')?.classList.add('beat'); document.getElementById('metro').textContent = 'Tắt nhịp 110/phút' } catch (e) { alert('Trình duyệt không hỗ trợ âm thanh nhịp.') } }
function setTimer(n) { S.timerStart = n ? Date.now() : 0; S.timerDuration = n || 0 }
function updateTimer() { let el = document.getElementById('clock'); if (!el || !S.timerStart) return; let elapsed = Math.floor((Date.now() - S.timerStart) / 1000), remain = Math.max(0, S.timerDuration - elapsed); el.textContent = fmt(el.dataset.elapsed === 'true' ? elapsed : remain); let msg = document.getElementById('timerMsg'); if (msg && remain === 0) msg.textContent = el.dataset.elapsed === 'true' ? 'Đã đạt mốc theo dõi. Nếu cơn còn tiếp diễn, gọi 115.' : 'Đã đến mốc đánh giá lại. Không tự xác nhận thao tác.' }
setInterval(() => updateTimer(), 250)

/* ---------- navigation ---------- */
function start(hint = '') { stopSound(); S.session = { start: new Date().toISOString(), hint }; S.logs = []; S.started = Date.now(); S.tab = 'home'; log('Bắt đầu đánh giá' + (hint ? ' · ' + hint : '')); question('scene') }
function question(id) { stopSound(); S.tab = 'home'; S.view = 'question'; S.node = id; setTimer(Q[id]?.timer); render(); speak(Q[id]?.title + '. ' + Q[id]?.desc) }
function choose(i) { let q = Q[S.node], opt = q?.options[i]; if (!opt) return; log(q.title + ' → ' + opt[0]); let target = opt[1]; if (target.startsWith('p:')) return openProtocol(target.slice(2)); if (target === 'unsafe' || target === 'special') { S.view = target; render(); speak(target === 'unsafe' ? 'Không tiếp cận nếu hiện trường nguy hiểm. Gọi cấp cứu.' : 'Gọi 115 ngay và làm theo hướng dẫn hồi sức của tổng đài.'); return } question(target) }
function openProtocol(id) { stopSound(); S.protocol = id; S.step = 0; S.view = 'protocol'; S.tab = 'home'; log('Luồng tham khảo: ' + P[id]?.title); enterStep() }
function enterStep() { stopSound(); let p = P[S.protocol], s = p.steps[S.step]; setTimer(s.timer || (s.metro ? 3600 : 0)); log('Bắt đầu bước ' + (S.step + 1) + ' · ' + s.title); render(); speak(s.title + '. ' + s.text) }
function next() { let p = P[S.protocol], s = p.steps[S.step]; log('Người dùng xác nhận: ' + s.title); if (S.step < p.steps.length - 1) { S.step++; enterStep() } else { S.view = 'monitor'; stopSound(); render(); speak('Tiếp tục theo dõi và làm theo hướng dẫn tổng đài.') } }
function changed() { log('Tình trạng thay đổi; đánh giá lại'); question('response') }
function unable() { log('Không thể thực hiện bước hiện tại'); showModal('Không thể thực hiện', 'Không cố thao tác khi không an toàn hoặc không chắc kỹ thuật. Gọi 115, bật loa ngoài và làm theo hướng dẫn. Nếu tình trạng thay đổi, đánh giá lại ngay.', '<button class="primary" onclick="modal.close();changed()">Đánh giá lại</button>') }
function go(tab) { stopSound(); S.tab = tab; render(); window.scrollTo(0, 0) }
function home() { S.view = 'home'; S.tab = 'home'; render() }
function showModal(title, body, extra = '') { document.getElementById('modal').innerHTML = '<h2>' + esc(title) + '</h2><p>' + esc(body) + '</p><div class="stack">' + extra + '<button onclick="modal.close()">Đóng</button></div>'; document.getElementById('modal').showModal() }

/* ---------- render ---------- */
function timerHTML(s) { if (!s) return ''; return `<div class="timer"><div class="ring">${s.metro ? '♥' : '◷'}</div><div><div class="clock">${s.elapsed || s.metro ? '00:00' : fmt(s.timerDuration || 0)}</div><div class="muted">${s.metro ? 'Thời gian thực hiện · không dừng để bấm' : s.elapsed ? 'Thời gian từ lúc mở bước · mốc tham khảo' : 'Thời gian tham khảo'}</div></div></div>` }
function visual(kind) { if (!kind) return ''; const bg = '<rect x="12" y="12" width="276" height="126" rx="18" fill="#fff0f2"/>'; let content = kind === 'cpr' ? '<circle cx="150" cy="35" r="18" fill="#8eacb4"/><rect x="105" y="56" width="90" height="70" rx="28" fill="#567b87"/><circle cx="150" cy="85" r="22" fill="none" stroke="#65e4c4" stroke-width="3" stroke-dasharray="4 4"/><path d="M150 56v22m-8-8 8 8 8-8" stroke="#65e4c4" stroke-width="4" fill="none"/><path d="M121 91h58" stroke="#dce9e9" stroke-width="13" stroke-linecap="round"/>' : kind === 'burn' ? '<path d="M100 47h90v20h-45v15h-25V67h-20Z" fill="#7296a1"/><path d="M125 86l-5 19m16-19-5 19m16-19-5 19" stroke="#65e4c4" stroke-width="4" stroke-linecap="round"/><path d="M84 118h132" stroke="#bacdd0" stroke-width="15" stroke-linecap="round"/>' : kind === 'bleed' ? '<rect x="48" y="87" width="204" height="27" rx="13" fill="#789aa3"/><rect x="117" y="84" width="67" height="33" rx="7" fill="#e5edf0"/><path d="M150 35v39m-13-13 13 13 13-13" stroke="#65e4c4" stroke-width="6" fill="none" stroke-linecap="round"/>' : kind === 'side' ? '<circle cx="79" cy="77" r="22" fill="#8eacb4"/><path d="M103 85l77 12 48-37m-48 37 48 24" fill="none" stroke="#7195a1" stroke-width="24" stroke-linecap="round"/><path d="M115 74l24 31 26-12" stroke="#a9c5cd" stroke-width="10" fill="none" stroke-linecap="round"/>' : '<circle cx="150" cy="75" r="45" fill="#20433f" stroke="#65e4c4" stroke-width="2"/><path d="M150 46v35m0 14v4" stroke="#65e4c4" stroke-width="8" stroke-linecap="round"/>'; return '<div class="visual" aria-label="Biểu tượng minh họa, không thay thế huấn luyện"><svg viewBox="0 0 300 150" aria-hidden="true">' + bg + content + '</svg></div>' }
function src(id) { let a = sources[id]; if (!a) return ''; return '<div class="source">Nguồn tham khảo: <a target="_blank" rel="noopener noreferrer" href="' + a[1] + '">' + esc(a[0]) + ' ↗</a></div>' }
function arrow(pending) { return `<div class="flow-edge ${pending ? 'pending' : ''}" aria-hidden="true"><svg viewBox="0 0 30 45" fill="none"><path d="M15 1V37M8 30L15 38L22 30" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" ${pending ? 'stroke-dasharray="4 4"' : ''}/></svg></div>` }
function node({ num, state, title = '', answer = '', time = '', content = '', kind = '', critical = false, id = '' }) { return `<article ${id ? 'id="' + id + '"' : ''} class="flow-node ${kind} ${critical ? 'is-critical' : ''}" ${kind === 'active-node' ? 'aria-current="step"' : ''}><div class="node-bar"><span class="node-num">${String(num).padStart(2, '0')}</span><span class="node-state">${esc(state)}</span>${time ? '<time class="node-time">' + esc(time) + '</time>' : ''}</div><div class="node-inner">${title ? '<h3>' + esc(title) + '</h3>' : ''}${answer ? '<div class="' + (kind === 'done-node' ? 'node-answer' : 'muted') + '">' + esc(answer) + '</div>' : ''}${content}</div></article>` }
function futureCard(num, title, desc) { return node({ num, state: 'Bước dự kiến', title, content: '<p>' + esc(desc) + '</p>', kind: 'future-node' }) }
function flowHome() { const tilesHtml = tiles.map((t, i) => `<button class="tile" onclick="start(tiles[${i}][1])"><b>${t[0]}</b>${esc(t[1])}</button>`).join(''); return node({ num: 1, state: 'Bắt đầu · Mô phỏng', kind: 'active-node', id: 'active-node', content: `<div class="flow-home"><div class="tag">SowCuu • Flow</div><h2>Bắt đầu đánh giá</h2><p>Chọn tình trạng quan sát được hoặc bắt đầu đánh giá tổng quát.</p><button class="primary" onclick="start()">✚ Bắt đầu đánh giá →</button><div class="tiles">${tilesHtml}</div></div>` }) + arrow(true) + futureCard(2, 'Kiểm tra an toàn hiện trường', 'Câu hỏi đầu tiên của quy trình.') + arrow(true) + futureCard(3, 'Đánh giá tình trạng', 'Các bước tiếp theo phụ thuộc câu trả lời.') }
function flowActive(oldContent) { const num = 1; const critical = false; const state = 'Câu hỏi hiện tại'; const history = ''; const pending = arrow(true) + futureCard(2, 'Bước tiếp theo', 'Được xác định sau khi bạn chọn câu trả lời.'); return history + node({ num, state, kind: 'active-node', critical, id: 'active-node', content: oldContent }) + pending }
function library() { return `<section class="panel"><div class="eyebrow">Knowledge base · offline</div><h1>Tra cứu tình huống</h1><p>120 tình huống gốc và 1.200 biến thể QA. Đây là danh mục kỹ thuật, không phải 1.200 phác đồ điều trị.</p><div class="row"><button class="small ${S.mode === 'base' ? 'primary' : ''}" onclick="setMode('base')">120 tình huống</button><button class="small ${S.mode === 'qa' ? 'primary' : ''}" onclick="setMode('qa')">1.200 QA</button></div><label for="query" class="muted">Tìm triệu chứng hoặc mã</label><input id="query" class="search" value="${esc(S.query)}" placeholder="Ví dụ: ngất, đau ngực, CARD-01" oninput="S.query=this.value;S.limit=30;listEntries()"><select id="cat" class="search" aria-label="Nhóm tình huống" onchange="S.cat=this.value;S.limit=30;listEntries()"><option value="">Tất cả 19 nhóm</option></select><div id="results"></div></section>` }
function setMode(m) { S.mode = m; S.limit = 30; go('library') }
function listEntries() { let el = document.getElementById('results'); if (!el) return; let q = S.query.toLowerCase(); let items = tiles.filter(x => x[1].toLowerCase().includes(q) || x[3].toLowerCase().includes(q)); el.innerHTML = `<p class="muted">${items.length} kết quả · hiện ${Math.min(S.limit, items.length)}</p>` + items.slice(0, S.limit).map(x => `<button class="entry" onclick="detail('${esc(x.id)}')">${esc(x[1])}<small>${esc(x[0])} · ${esc(x[3])}</small></button>`).join('') }
function detail(id) { showModal('Chi tiết', 'Mã: ' + esc(id), '<button class="primary" onclick="modal.close()">Đóng</button>') }
function logs() { return `<section class="panel"><div class="eyebrow">Incident timeline</div><h1>Nhật ký phiên</h1><p>Thông tin chỉ tồn tại trong phiên mở HTML; không gửi đến máy chủ.</p>${S.logs.length ? S.logs.map(l => `<div class="log"><time>${esc(l.time)}</time><p>${esc(l.text)}</p></div>`).join('') : '<p>Chưa có dữ liệu. Bắt đầu đánh giá để tạo nhật ký.</p>'}<div class="stack"><button class="primary" onclick="exportLog()" ${S.logs.length ? '' : 'disabled'}>Xuất báo cáo TXT</button><button onclick="clearLog()" ${S.logs.length ? '' : 'disabled'}>Xóa nhật ký</button></div></section>` }
function exportLog() { let text = 'SOWCUU – Nhật ký người dùng tự xác nhận\nKhông phải hồ sơ chẩn đoán.\n' + S.logs.map(l => l.time + ' ' + l.text).join('\n'); let url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' })); let a = document.createElement('a'); a.href = url; a.download = 'sowcuu-nhat-ky.txt'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 2000) }
function clearLog() { if (confirm('Xóa nhật ký và kết thúc phiên hiện tại?')) { S.logs = []; S.session = null; S.view = 'home'; render() } }
function about() { return `<section class="panel"><div class="eyebrow">SowCuu v1.2 · Flow Canvas</div><h1>Thông tin & nguồn</h1><p>Ứng dụng minh họa luồng sơ cứu, không phải thiết bị y tế được cấp phép. Các hướng dẫn mẫu chưa được chuyên gia địa phương thẩm định. Luôn ưu tiên tổng đài cấp cứu và huấn luyện trực tiếp.</p><p>Hoạt động ngoại tuyến với dữ liệu nhúng. Giọng đọc tiếng Việt tùy hệ điều hành, không bảo đảm có giọng offline. Sơ đồ chỉ là biểu tượng minh họa. Không dùng AI để chẩn đoán hay tự chỉ định thuốc.</p>${Object.keys(sources).map(src).join('')}<div class="source"><a href="https://www.gov.uk/foreign-travel-advice/vietnam/getting-help" target="_blank" rel="noopener">Số cấp cứu tại Việt Nam ↗</a></div></section>` }

function render() {
  document.querySelectorAll('[data-tab]').forEach(b => b.classList.toggle('active', b.dataset.tab === S.tab))
  let h = notice
  if (S.tab === 'library') { document.getElementById('app').innerHTML = h + library(); return }
  if (S.tab === 'log') { document.getElementById('app').innerHTML = h + logs(); return }
  if (S.tab === 'about') { document.getElementById('app').innerHTML = h + about(); return }
  if (S.view === 'home') {
    h += `<div class="split"><div><section class="panel hero"><div class="eyebrow">Hỗ trợ từng bước</div><h1>Giữ bình tĩnh.<br>Bắt đầu sơ cứu.</h1><p>Không cần biết tên bệnh. Trả lời câu hỏi theo tình trạng bạn quan sát được.</p><button class="primary" onclick="start()">✚ Bắt đầu đánh giá →</button>${S.session ? '<button class="outline small" onclick="resume()">Quay lại phiên đang xử lý</button>' : ''}</section><div class="panel"><div class="tag">Cấp cứu y tế Việt Nam</div><h2>115</h2><p>Gọi cấp cứu khi nạn nhân bất tỉnh, thở bất thường, chảy máu nghiêm trọng hoặc có dấu hiệu nguy hiểm.</p><a class="call" href="tel:115">☎ Gọi 115</a></div></div><div><div class="labelrow"><h3>Chọn tình huống</h3><span>29 nhóm nhanh</span></div><div class="tiles">${tiles.map((t, i) => `<button class="tile" onclick="start(tiles[${i}][1])"><b>${t[0]}</b>${esc(t[1])}<small>${esc(t[2])}</small></button>`).join('')}</div><div class="labelrow"><h3>Thư viện ngoại tuyến</h3></div><button class="entry" onclick="go('library')">1.200 biến thể kiểm thử <small>120 tình huống gốc · 19 nhóm · chưa thẩm định</small></button></div></div>`
  } else if (S.view === 'question') {
    let q = Q[S.node]
    h += `<div class="split"><section class="panel"><div class="tag ${q.critical ? 'critical' : ''}">${q.critical ? 'Đánh giá khẩn cấp' : 'Đánh giá tình trạng'}</div><h1>${esc(q.title)}</h1><p>${esc(q.desc)}</p>${q.critical ? callout : ''}${timerHTML(q)}<div class="stack">${q.options.map((o, i) => `<button class="${i === 0 ? '' : 'outline'}" onclick="choose(${i})">${esc(o[0])} →</button>`).join('')}</div></section><aside><div class="panel"><div class="tag">Trong phiên</div><h3>${esc(S.session?.hint || 'Đánh giá tổng quát')}</h3><p>Chọn theo những gì bạn thật sự quan sát được. Không suy đoán bệnh.</p><button class="outline small" onclick="go('log')">Xem nhật ký</button></div></aside></div>`
  } else if (S.view === 'protocol') {
    let p = P[S.protocol], s = p.steps[S.step]
    h += `<div class="split"><section class="panel"><div class="tag ${p.critical ? 'critical' : ''}">${p.critical ? 'Cần hỗ trợ khẩn cấp' : 'Hướng dẫn tham khảo'}</div><p class="muted">${esc(p.title)} · Bước ${S.step + 1}/${p.steps.length}</p><div class="progress"><i style="width:${(S.step + 1) / p.steps.length * 100}%"></i></div><h2>${esc(s.title)}</h2>${p.critical && S.step === 0 ? callout : ''}<div class="steptext">${esc(s.text)}</div>${s.warning ? '<div class="warning">' + esc(s.warning) + '</div>' : ''}${visual(s.visual)}${timerHTML(s)}${s.metro ? '<button id="metro" class="entry" onclick="startMetro()">Bật nhịp 110/phút</button>' : ''}${s.note ? '<label class="muted" for="note">Thông tin ghi nhận (không bắt buộc)</label><textarea class="search" id="note" rows="2" placeholder="Thời điểm, bệnh nền, thuốc..."></textarea><button class="small" onclick="saveNote()">Lưu thông tin</button>' : ''}</section><section class="panel"><div class="tag">Thao tác tiếp theo</div><div class="stack">${S.protocol === 'cpr' && S.step === 0 ? '<button class="primary" onclick="next()">AED đã đến (nếu có người hỗ trợ)</button>' : s.continuous && S.step === p.steps.length - 1 ? '<p>Tiếp tục thao tác hoặc theo dõi theo hướng dẫn. Không dừng chỉ để xác nhận.</p>' : `<button class="primary" onclick="next()">${s.continuous ? (S.protocol === 'seizure' ? 'Cơn đã dừng' : 'Chuyển bước khi thích hợp') : '✓ Đã thực hiện bước này'}</button>`}<button class="danger" onclick="changed()">⚠ Tình trạng thay đổi</button><button onclick="unable()">Không thể thực hiện</button><button class="outline" onclick="handover()">Bàn giao cho nhân viên y tế</button><button class="outline small" onclick="speakCurrent()">Đọc lại hướng dẫn</button></div>${src(p.source)}</section></div>`
  } else if (S.view === 'unsafe' || S.view === 'special') {
    h += `<section class="panel"><div class="tag critical">Khẩn cấp</div><h1>${S.view === 'unsafe' ? 'Không tiếp cận khi nguy hiểm' : 'Cần hồi sức phù hợp tình huống'}</h1><div class="steptext">${S.view === 'unsafe' ? 'Giữ khoảng cách an toàn. Gọi 115 và 112 nếu cần cứu nạn. Không tự vào vùng có điện, lửa, khí độc hoặc nước sâu.' : 'Gọi 115 ngay, bật loa ngoài. Làm theo chỉ dẫn hồi sức của tổng đài, đặc biệt nếu là trẻ em hoặc đuối nước. Không chờ thêm câu hỏi.'}</div><a class="call" href="tel:115">☎ Gọi 115</a><div class="stack"><button onclick="question('scene')">Đánh giá lại hiện trường</button><button onclick="handover()">Bàn giao</button></div></section>`
  } else if (S.view === 'monitor') {
    h += `<section class="panel"><div class="tag">Theo dõi liên tục</div><h1>Ở cạnh nạn nhân</h1><p>Hoàn thành bước không đồng nghĩa nạn nhân đã an toàn. Tiếp tục theo dõi ý thức, hosts absorbed và làm theo hướng dẫn nhân viên y tế.</p><div class="stack"><button class="danger" onclick="changed()">Tình trạng thay đổi / đánh giá lại</button><button onclick="handover()">Đã bàn giao cho nhân viên y tế</button></div></section>`
  }
  document.getElementById('app').innerHTML = h; updateTimer()
}
function resume() { if (S.node) question('response'); else question('scene') }
function speakCurrent() { if (!S.voice) { S.voice = true; document.getElementById('voice').textContent = '🔊' } if (S.view === 'protocol') { let s = P[S.protocol].steps[S.step]; speak(s.title + '. ' + s.text) } else if (S.view === 'question') { let q = Q[S.node]; speak(q.title + '. ' + q.desc) } }
function saveNote() { let n = document.getElementById('note'); if (n?.value.trim()) { log('Ghi chú: ' + n.value.trim()); n.value = ''; showModal('Đã ghi nhận', 'Thông tin được lưu trong nhật ký phiên hiện tại, trên thiết bị.') } }
function handover() { showModal('Bàn giao / kết thúc', 'Chỉ xác nhận bàn giao khi nhân viên y tế đã tiếp nhận hoặc tổng đài hướng dẫn kết thúc. Không coi việc kết thúc app là kết thúc sơ cứu.', '<button class="primary" onclick="modal.close();log(\'Người dùng xác nhận đã bàn giao\');stopSound();S.view=\'home\';go(\'log\')">Xác nhận đã bàn giao</button>') }

/* ---------- flow ---------- */
const renderWithLibrary = render
render = function () {
  let prev = document.getElementById('flowViewport')
  let saved = prev ? { top: prev.scrollTop, left: prev.scrollLeft } : null
  renderWithLibrary()
  let isFlow = S.tab === 'home'
  document.body.classList.toggle('flow-mode', isFlow)
  if (!isFlow) return
  let key = S.view === 'question' ? 'q:' + S.node : S.view === 'protocol' ? 'p:' + S.protocol + ':' + S.step : S.view
  let old = document.getElementById('app').querySelector('.notice')
  if (old) old.remove()
  document.getElementById('app').querySelectorAll('aside').forEach(a => a.remove())
  let content = app.innerHTML
  let nodes = S.view === 'home' ? flowHome() : flowActive(content)
  document.getElementById('app').innerHTML = `<div class="notice flow-alert">BẢN MÔ PHỎNG · Chưa thẩm định y khoa · Ca thật: gọi 115 ngay</div><div class="flow-toolbar"><div class="flow-heading"><span class="flow-status-dot"></span>Quy trình sơ cứu<small>${esc(S.session?.hint || 'Canvas tương tác · dọc / ngang')}</small></div><button class="flow-tool" aria-label="Thu nhỏ" onclick="setFlowZoom(F.zoom-.1)">−</button><span id="zoomValue" class="flow-zoom">${Math.round(F.zoom * 100)}%</span><button class="flow-tool" aria-label="Phóng to" onclick="setFlowZoom(F.zoom+.1)">+</button><button class="flow-tool" aria-label="Về card đang thực hiện" title="Về bước hiện tại" onclick="flowCenter()">◎</button><button class="flow-tool" aria-label="Khôi phục kích thước" onclick="fitFlow()">↺</button></div><div class="flow-viewport" id="flowViewport" aria-label="Canvas quy trình có thể cuộn"><div class="flow-world" id="flowWorld" style="zoom:${F.zoom}">${nodes}</div></div>`
  updateTimer()
  if (F.focus || F.lastKey !== key || !saved) { F.focus = false; requestAnimationFrame(() => focusFlow()) } else { let v = document.getElementById('flowViewport'); v.scrollTop = saved.top; v.scrollLeft = saved.left }
  F.lastKey = key
}
function focusFlow(behavior = 'auto') { const v = document.getElementById('flowViewport'), n = document.getElementById('active-node'); if (!v || !n) return; let vr = v.getBoundingClientRect(), nr = n.getBoundingClientRect(); let landscape = matchMedia('(orientation:landscape) and (min-width:600px)').matches; v.scrollTo({ left: landscape ? Math.max(0, v.scrollLeft + nr.left - vr.left - 20) : Math.max(0, v.scrollLeft + nr.left - vr.left - (vr.width - nr.width) / 2), top: landscape ? 0 : Math.max(0, v.scrollTop + nr.top - vr.top - 16), behavior }) }
function setFlowZoom(z) { F.zoom = Math.round(Math.max(.65, Math.min(1.35, z)) * 100) / 100; let w = document.getElementById('flowWorld'); if (w) { w.style.zoom = F.zoom; document.getElementById('zoomValue').textContent = Math.round(F.zoom * 100) + '%'; focusFlow() } }
function flowCenter() { focusFlow('smooth') }
function fitFlow() { setFlowZoom(1) }
window.addEventListener('orientationchange', () => setTimeout(() => focusFlow(), 200))

/* ---------- React component ---------- */
export default function App() {
  useEffect(() => {
    render()
    const voiceBtn = document.getElementById('voice')
    if (voiceBtn) voiceBtn.onclick = () => {
      if (!('speechSynthesis' in window)) { alert('Trình duyệt không hỗ trợ giọng đọc.'); return }
      S.voice = !S.voice
      voiceBtn.textContent = S.voice ? '🔊' : '🔇'
      if (S.voice) speakCurrent(); else speechSynthesis.cancel()
    }
  }, [])
  return (
    <>
      <header>
        <span className="logo" aria-hidden="true">✚</span>
        <div className="brand">SowCuu</div>
        <button className="small" id="voice" aria-label="Bật hoặc tắt giọng đọc">🔇</button>
        <a className="call" href="tel:115">115</a>
      </header>
      <main id="app"></main>
      <nav className="nav" aria-label="Điều hướng">
        <button data-tab="home" onclick="go('home')">⌂ Trang chủ</button>
        <button data-tab="library" onclick="go('library')">▤ Tra cứu</button>
        <button data-tab="log" onclick="go('log')">◷ Nhật ký</button>
        <button data-tab="about" onclick="go('about')">ⓘ Policy</button>
      </nav>
      <dialog id="modal" className="modal"></dialog>
    </>
  )
}
