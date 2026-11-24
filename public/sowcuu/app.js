// Classic script: the reference templates resolve their event handlers in this scope.
'use strict'

const app = document.getElementById('app'),
  modal = document.getElementById('modal')
const S = {
  tab: 'home',
  view: 'home',
  node: '',
  protocol: '',
  step: 0,
  session: null,
  logs: [],
  voice: false,
  started: 0,
  timerStart: 0,
  timerDuration: 0,
  metro: null,
  audio: null,
  query: '',
  cat: '',
  mode: 'base',
  limit: 30,
  returnView: null,
}
const esc = (x) =>
  String(x ?? '').replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ]
  )
const now = () => new Date().toLocaleTimeString('vi-VN', { hour12: false })
const fmt = (n) =>
  String(Math.floor(n / 60)).padStart(2, '0') +
  ':' +
  String(n % 60).padStart(2, '0')
const notice =
  '<div class="notice">BẢN THỬ NGHIỆM • Chưa được bác sĩ thẩm định. Không chẩn đoán bệnh. Ca khẩn cấp: gọi 115 ngay và làm theo tổng đài.</div>'
const callout =
  '<div class="warning">Nguy kịch: nhờ người khác gọi 115 ngay, đồng thời thực hiện sơ cứu.</div>'
const sources = {
  basic: [
    'Red Cross · Đánh giá sơ cứu',
    'https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps',
  ],
  cpr: [
    'Red Cross · CPR người lớn',
    'https://www.redcross.org/take-a-class/cpr/performing-cpr/hands-only-cpr',
  ],
  uncon: [
    'Red Cross · Bất tỉnh còn thở',
    'https://www.redcross.org/take-a-class/resources/learn-first-aid/unresponsive-and-breathing-person',
  ],
  bleed: [
    'Red Cross · Chảy máu nghiêm trọng',
    'https://www.redcross.org/take-a-class/resources/learn-first-aid/bleeding-life-threatening-external',
  ],
  stroke: [
    'NHS · Dấu hiệu đột quỵ',
    'https://www.nhs.uk/conditions/stroke/symptoms/',
  ],
  seizure: [
    'NHS · Co giật',
    'https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/',
  ],
  burn: ['NHS · Bỏng nhiệt', 'https://www.nhs.uk/conditions/burns-and-scalds/'],
  poison: ['NHS · Ngộ độc', 'https://www.nhs.uk/conditions/poisoning/'],
  aha: [
    'AHA / Red Cross · Sơ cứu 2024',
    'https://cpr.heart.org/en/resuscitation-science/2024-first-aid-guidelines/',
  ],
  choke: [
    'Red Cross · Hóc dị vật',
    'https://www.redcross.org/take-a-class/resources/learn-first-aid/adult-child-choking',
  ],
}
const st = (title, text, opts = {}) => ({ title, text, ...opts })
const P = {
  cpr: {
    title: 'Nghi ngừng tuần hoàn · người lớn',
    source: 'cpr',
    critical: true,
    steps: [
      st(
        'Ép tim ngay',
        'Nếu người lớn không đáp ứng và không thở bình thường (kể cả thở ngáp), gọi 115 bằng loa ngoài, nhờ lấy AED. Đặt nằm ngửa trên mặt phẳng cứng. Đặt gót bàn tay giữa ngực, tay kia chồng lên. Ép sâu khoảng 5–6 cm, 100–120 lần/phút, nhả ngực hoàn toàn sau mỗi lần. Không dừng để bấm nút.',
        {
          visual: 'cpr',
          continuous: true,
          metro: true,
          warning:
            'Nếu trẻ em, đuối nước hoặc nghi ngạt, cần hướng dẫn thổi ngạt/CPR phù hợp từ tổng đài; không áp dụng máy móc CPR chỉ ép tim.',
        }
      ),
      st(
        'AED đã đến',
        'Bật AED, làm theo lời máy. Không chạm nạn nhân khi máy phân tích hoặc sốc. Tiếp tục CPR ngay khi máy yêu cầu.',
        { continuous: true }
      ),
    ],
  },
  uncon: {
    title: 'Bất tỉnh nhưng còn thở bình thường',
    source: 'uncon',
    critical: true,
    steps: [
      st(
        'Gọi cấp cứu và bảo vệ đường thở',
        'Gọi 115 ngay. Nếu không nghi chấn thương cột sống, đặt nạn nhân nằm nghiêng an toàn. Nếu nghi chấn thương, hạn chế di chuyển trừ khi cần bảo vệ đường thở hoặc tránh nguy hiểm; làm theo tổng đài.',
        { visual: 'side' }
      ),
      st(
        'Theo dõi liên tục',
        'Ở cạnh nạn nhân, kiểm tra hô hấp liên tục. Không cho ăn uống. Nếu ngừng thở bình thường hoặc chỉ thở ngáp, chuyển sang nhánh ngừng tuần hoàn ngay.',
        { continuous: true }
      ),
    ],
  },
  bleed: {
    title: 'Chảy máu nghiêm trọng',
    source: 'bleed',
    critical: true,
    steps: [
      st(
        'Ép trực tiếp lên vết thương',
        'Gọi 115 hoặc nhờ người khác gọi. Dùng gạc hoặc vải sạch, ép mạnh liên tục lên vết thương. Nếu vật đang cắm trong vết thương, không rút; ép xung quanh vật. Dùng găng nếu có.',
        { visual: 'bleed', continuous: true }
      ),
      st(
        'Giữ áp lực cho tới khi được tiếp nhận',
        'Không nhấc gạc ra để kiểm tra liên tục. Nếu máu vẫn chảy nhiều, làm theo hướng dẫn tổng đài về biện pháp cầm máu bổ sung. Theo dõi ý thức và thở.',
        { continuous: true }
      ),
    ],
  },
  stroke: {
    title: 'Dấu hiệu nghi đột quỵ',
    source: 'stroke',
    critical: true,
    steps: [
      st(
        'Gọi 115 ngay',
        'Méo miệng, yếu một bên tay hoặc nói khó đột ngột là dấu hiệu cảnh báo. Không đợi triệu chứng tự hết.',
        { visual: 'alert' }
      ),
      st(
        'Ghi thời điểm khởi phát',
        'Ghi thời điểm bắt đầu triệu chứng hoặc lần cuối còn bình thường. Không cho ăn, uống hay tự dùng thuốc. Theo dõi hô hấp.',
        { note: true, continuous: true }
      ),
    ],
  },
  seizure: {
    title: 'Co giật',
    source: 'seizure',
    critical: true,
    steps: [
      st(
        'Bảo vệ khỏi chấn thương',
        'Dọn vật nguy hiểm, kê mềm dưới đầu nếu có thể. Không ghì giữ, không nhét vật vào miệng. Ghi thời điểm cơn bắt đầu. Gọi 115 nếu cơn đầu tiên, không rõ tiền sử, kéo dài trên 5 phút, tái diễn, có chấn thương, mang thai hoặc khó thở.',
        {
          timer: 300,
          elapsed: true,
          visual: 'alert',
          continuous: true,
          warning:
            'Không chờ đủ 5 phút nếu có dấu hiệu nguy hiểm khác. Thời gian tính từ khi cơn bắt đầu, không phải khi mở app.',
        }
      ),
      st(
        'Khi cơn đã dừng',
        'Kiểm tra hô hấp. Nếu còn thở bình thường nhưng chưa tỉnh, đặt nằm nghiêng nếu không nghi chấn thương cột sống. Nếu không thở bình thường, chuyển sang đánh giá khẩn cấp.',
        { continuous: true }
      ),
    ],
  },
  burn: {
    title: 'Bỏng nhiệt',
    source: 'burn',
    steps: [
      st(
        'Làm mát vùng bỏng',
        'Đưa khỏi nguồn nhiệt nếu an toàn. Xả nước mát đang chảy lên vùng bỏng trong 20 phút. Tháo trang sức và quần áo gần vùng bỏng nếu không dính vào da. Giữ phần cơ thể còn lại ấm.',
        {
          timer: 1200,
          visual: 'burn',
          warning:
            'Bỏng rộng, sâu, ở mặt, đường thở, điện hoặc hóa chất cần hỗ trợ y tế khẩn cấp; không chờ hết bộ đếm mới gọi.',
        }
      ),
      st(
        'Che phủ và tìm hỗ trợ',
        'Che lỏng bằng vật liệu sạch, không dính. Không dùng đá lạnh, kem, dầu hoặc chọc vỡ bóng nước. Đến cơ sở y tế nếu bỏng nghiêm trọng hoặc không rõ mức độ.'
      ),
    ],
  },
  poison: {
    title: 'Nghi ngộ độc',
    source: 'poison',
    critical: true,
    steps: [
      st(
        'Liên hệ cấp cứu',
        'Gọi 115 nếu nghi ngộ độc nguy hiểm hoặc không rõ chất. Không tự tiếp xúc chất độc, không đi vào khu vực có khí độc. Không gây nôn, không tự cho ăn uống hay dùng thuốc giải.',
        { visual: 'alert' }
      ),
      st(
        'Chuẩn bị thông tin',
        'Nếu an toàn, giữ bao bì hoặc tên chất, lượng ước tính và thời điểm tiếp xúc. Theo dõi ý thức và hô hấp. Làm theo hướng dẫn tổng đài.',
        { note: true, continuous: true }
      ),
    ],
  },
  chest: {
    title: 'Đau ngực hoặc khó thở đột ngột',
    source: 'aha',
    critical: true,
    steps: [
      st(
        'Gọi cấp cứu',
        'Gọi 115 ngay nếu đau ngực đột ngột, khó thở nghiêm trọng hoặc không rõ nguyên nhân. Để nạn nhân nghỉ ở tư thế dễ chịu, hạn chế gắng sức. Không để họ tự lái xe.',
        { visual: 'alert' }
      ),
      st(
        'Ở cạnh và theo dõi',
        'Ghi thời điểm khởi phát, bệnh nền và thuốc đang dùng nếu nạn nhân trả lời được. Nếu mất ý thức hoặc thở bất thường, đánh giá lại ngay.',
        { note: true, continuous: true }
      ),
    ],
  },
  choke: {
    title: 'Nghi hóc dị vật · người còn tỉnh',
    source: 'choke',
    critical: true,
    steps: [
      st(
        'Đánh giá khả năng ho và nói',
        'Nếu vẫn ho mạnh và nói được, khuyến khích tiếp tục ho, theo dõi sát. Nếu không thể nói, ho hiệu quả hoặc thở, gọi 115 ngay và thực hiện kỹ thuật theo hướng dẫn tổng đài phù hợp với độ tuổi, thai kỳ và thể trạng. Không móc họng mù.',
        {
          visual: 'alert',
          continuous: true,
          warning:
            'Trẻ dưới 1 tuổi cần kỹ thuật khác. Nếu bất tỉnh, chuyển đánh giá ngay.',
        }
      ),
    ],
  },
  unknown: {
    title: 'Chưa xác định được tình trạng',
    source: 'basic',
    critical: true,
    steps: [
      st(
        'Tìm hỗ trợ chuyên môn',
        'Nếu tình trạng nghiêm trọng, diễn biến bất thường hoặc không thể đánh giá hô hấp, gọi 115 ngay. Giữ hiện trường an toàn, ở cạnh nạn nhân và làm theo tổng đài. Không tự cho thuốc.',
        { visual: 'alert' }
      ),
      st(
        'Theo dõi và đánh giá lại',
        'Ghi thông tin nếu có thể. Không coi việc thiếu dữ liệu là dấu hiệu an toàn. Nếu nạn nhân mất đáp ứng hoặc thở bất thường, đánh giá lại ngay.',
        { note: true, continuous: true }
      ),
    ],
  },
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
  scene: {
    title: 'Hiện trường có an toàn không?',
    desc: 'Quan sát nhanh: xe cộ, điện, lửa, khí độc, nước sâu hoặc bạo lực. Đừng tự đặt mình vào nguy hiểm.',
    options: [
      ['An toàn, có thể tiếp cận', 'response'],
      ['Không an toàn / không chắc', 'unsafe'],
    ],
  },
  response: {
    title: 'Nạn nhân có đáp ứng không?',
    desc: 'Gọi lớn, chạm nhẹ vào vai nếu an toàn. Quan sát xem họ có mở mắt hoặc trả lời không.',
    options: [
      ['Có, đang đáp ứng', 'breathawake'],
      ['Không / không chắc', 'breath'],
    ],
  },
  breath: {
    title: 'Nạn nhân có thở bình thường không?',
    desc: 'Gọi 115 ngay nếu không đáp ứng. Quan sát nhanh lồng ngực và nhịp thở, tối đa 10 giây. Thở ngáp không phải thở bình thường.',
    timer: 10,
    critical: true,
    options: [
      ['Có, thở bình thường', 'p:uncon'],
      ['Không thở / chỉ thở ngáp / không chắc', 'age'],
    ],
  },
  age: {
    title: 'Nạn nhân là người lớn đột ngột gục xuống?',
    desc: 'Không trì hoãn hồi sức để hoàn thành biểu mẫu. Nếu đúng là người lớn không đáp ứng và không thở bình thường, bắt đầu CPR ngay.',
    critical: true,
    options: [
      ['Đúng, người lớn', 'p:cpr'],
      ['Trẻ em / đuối nước / nghi ngạt / không rõ', 'special'],
    ],
  },
  breathawake: {
    title: 'Có khó thở nghiêm trọng hoặc chảy máu nhiều không?',
    desc: 'Nếu có nhiều dấu hiệu, nhờ người khác hỗ trợ và gọi 115 ngay.',
    options: [
      ['Chảy máu nhiều', 'p:bleed'],
      ['Khó thở nghiêm trọng', 'p:chest'],
      ['Hóc, không nói hoặc ho được', 'p:choke'],
      ['Không thấy / chưa rõ', 'symptom'],
    ],
  },
  symptom: {
    title: 'Điều gì đang xảy ra?',
    desc: 'Chọn triệu chứng dễ quan sát nhất. Không cần biết tên bệnh.',
    options: tiles
      .filter((x) => x[3] !== 'uncon' && x[1] !== 'Không thở / khó thở')
      .map((x) => [x[1], 'p:' + x[3]])
      .concat([['Vừa ngất hoặc không chắc', 'p:unknown']]),
  },
}
function log(text) {
  if (!S.session) return
  S.logs.push({ time: now(), text })
}
function speak(text) {
  if (!S.voice || !('speechSynthesis' in window)) return
  try {
    speechSynthesis.cancel()
    let u = new SpeechSynthesisUtterance(text)
    u.lang = 'vi-VN'
    let v = speechSynthesis
      .getVoices()
      .find((v) => v.lang.toLowerCase().startsWith('vi'))
    if (v) u.voice = v
    u.rate = 0.95
    speechSynthesis.speak(u)
  } catch {}
}
function stopSound() {
  if ('speechSynthesis' in window) speechSynthesis.cancel()
  stopMetro()
}
function stopMetro() {
  if (S.metro) {
    clearInterval(S.metro)
    S.metro = null
  }
  document.querySelector('.ring')?.classList.remove('beat')
}
function startMetro() {
  if (S.metro) {
    stopMetro()
    let b = document.getElementById('metro')
    if (b) b.textContent = 'Bật nhịp 110/phút'
    return
  }
  try {
    S.audio =
      S.audio || new (window.AudioContext || window.webkitAudioContext)()
    S.audio.resume()
    const tick = () => {
      try {
        let o = S.audio.createOscillator(),
          g = S.audio.createGain()
        o.frequency.value = 820
        g.gain.setValueAtTime(0.1, S.audio.currentTime)
        g.gain.exponentialRampToValueAtTime(0.001, S.audio.currentTime + 0.08)
        o.connect(g)
        g.connect(S.audio.destination)
        o.start()
        o.stop(S.audio.currentTime + 0.09)
      } catch {}
    }
    tick()
    S.metro = setInterval(tick, 60000 / 110)
    document.querySelector('.ring')?.classList.add('beat')
    document.getElementById('metro').textContent = 'Tắt nhịp 110/phút'
  } catch {
    alert('Trình duyệt không hỗ trợ âm thanh nhịp.')
  }
}
function setTimer(n) {
  S.timerStart = n ? Date.now() : 0
  S.timerDuration = n || 0
}
function updateTimer() {
  let el = document.getElementById('clock')
  if (!el || !S.timerStart) return
  let elapsed = Math.floor((Date.now() - S.timerStart) / 1000),
    remain = Math.max(0, S.timerDuration - elapsed)
  el.textContent = fmt(el.dataset.elapsed === 'true' ? elapsed : remain)
  let msg = document.getElementById('timerMsg')
  if (msg && remain === 0)
    msg.textContent =
      el.dataset.elapsed === 'true'
        ? 'Đã đạt mốc theo dõi. Nếu cơn còn tiếp diễn, gọi 115.'
        : 'Đã đến mốc đánh giá lại. Không tự xác nhận thao tác.'
}
setInterval(() => updateTimer(), 250)
function start(hint = '') {
  stopSound()
  S.session = { start: new Date().toISOString(), hint }
  S.logs = []
  S.started = Date.now()
  S.tab = 'home'
  log('Bắt đầu đánh giá' + (hint ? ' · ' + hint : ''))
  question('scene')
}
function question(id) {
  stopSound()
  S.tab = 'home'
  S.view = 'question'
  S.node = id
  setTimer(Q[id].timer)
  render()
  speak(Q[id].title + '. ' + Q[id].desc)
}
function choose(i) {
  let q = Q[S.node],
    opt = q.options[i]
  if (!opt) return
  log(q.title + ' → ' + opt[0])
  let target = opt[1]
  if (target.startsWith('p:')) return openProtocol(target.slice(2))
  if (target === 'unsafe' || target === 'special') {
    S.view = target
    render()
    speak(
      target === 'unsafe'
        ? 'Không tiếp cận nếu hiện trường nguy hiểm. Gọi cấp cứu.'
        : 'Gọi 115 ngay và làm theo hướng dẫn hồi sức của tổng đài.'
    )
    return
  }
  question(target)
}
function openProtocol(id) {
  stopSound()
  S.protocol = id
  S.step = 0
  S.view = 'protocol'
  S.tab = 'home'
  log('Luồng tham khảo: ' + P[id].title)
  enterStep()
}
function enterStep() {
  stopSound()
  let p = P[S.protocol],
    s = p.steps[S.step]
  setTimer(s.timer || (s.metro ? 3600 : 0))
  log('Bắt đầu bước ' + (S.step + 1) + ' · ' + s.title)
  render()
  speak(s.title + '. ' + s.text)
}
function next() {
  let p = P[S.protocol],
    s = p.steps[S.step]
  log('Người dùng xác nhận: ' + s.title)
  if (S.step < p.steps.length - 1) {
    S.step++
    enterStep()
  } else {
    S.view = 'monitor'
    stopSound()
    render()
    speak('Tiếp tục theo dõi và làm theo hướng dẫn tổng đài.')
  }
}
function changed() {
  log('Tình trạng thay đổi; đánh giá lại')
  question('response')
}
function unable() {
  log('Không thể thực hiện bước hiện tại')
  showModal(
    'Không thể thực hiện',
    'Không cố thao tác khi không an toàn hoặc không chắc kỹ thuật. Gọi 115, bật loa ngoài và làm theo hướng dẫn. Nếu tình trạng thay đổi, đánh giá lại ngay.',
    '<button class="primary" onclick="modal.close();changed()">Đánh giá lại</button>'
  )
}
function go(tab) {
  stopSound()
  S.tab = tab
  render()
  window.scrollTo(0, 0)
}
function showModal(title, body, extra = '') {
  modal.innerHTML =
    '<h2>' +
    esc(title) +
    '</h2><p>' +
    esc(body) +
    '</p><div class="stack">' +
    extra +
    '<button onclick="modal.close()">Đóng</button></div>'
  modal.showModal()
}
function timerHTML(s) {
  if (!S.timerStart) return ''
  return `<div class="timer"><div class="ring">${s.metro ? '♥' : '◷'}</div><div><div class="clock" id="clock" data-elapsed="${!!(s.elapsed || s.metro)}">${s.elapsed || s.metro ? '00:00' : fmt(S.timerDuration)}</div><div id="timerMsg" class="muted">${s.metro ? 'Thời gian thực hiện · không dừng để bấm' : s.elapsed ? 'Thời gian từ lúc mở bước · mốc tham khảo' : 'Thời gian tham khảo'}</div></div></div>`
}
function visual(kind) {
  if (!kind) return ''
  const bg =
    '<rect x="12" y="12" width="276" height="126" rx="18" fill="#fff0f2"/>'
  let content =
    kind === 'cpr'
      ? '<circle cx="150" cy="35" r="18" fill="#8eacb4"/><rect x="105" y="56" width="90" height="70" rx="28" fill="#567b87"/><circle cx="150" cy="85" r="22" fill="none" stroke="#65e4c4" stroke-width="3" stroke-dasharray="4 4"/><path d="M150 56v22m-8-8 8 8 8-8" stroke="#65e4c4" stroke-width="4" fill="none"/><path d="M121 91h58" stroke="#dce9e9" stroke-width="13" stroke-linecap="round"/>'
      : kind === 'burn'
        ? '<path d="M100 47h90v20h-45v15h-25V67h-20Z" fill="#7296a1"/><path d="M125 86l-5 19m16-19-5 19m16-19-5 19" stroke="#65e4c4" stroke-width="4" stroke-linecap="round"/><path d="M84 118h132" stroke="#bacdd0" stroke-width="15" stroke-linecap="round"/>'
        : kind === 'bleed'
          ? '<rect x="48" y="87" width="204" height="27" rx="13" fill="#789aa3"/><rect x="117" y="84" width="67" height="33" rx="7" fill="#e5edf0"/><path d="M150 35v39m-13-13 13 13 13-13" stroke="#65e4c4" stroke-width="6" fill="none" stroke-linecap="round"/>'
          : kind === 'side'
            ? '<circle cx="79" cy="77" r="22" fill="#8eacb4"/><path d="M103 85l77 12 48-37m-48 37 48 24" fill="none" stroke="#7195a1" stroke-width="24" stroke-linecap="round"/><path d="M115 74l24 31 26-12" stroke="#a9c5cd" stroke-width="10" fill="none" stroke-linecap="round"/>'
            : '<circle cx="150" cy="75" r="45" fill="#20433f" stroke="#65e4c4" stroke-width="2"/><path d="M150 46v35m0 14v4" stroke="#65e4c4" stroke-width="8" stroke-linecap="round"/>'
  return (
    '<div class="visual" aria-label="Biểu tượng minh họa, không thay thế huấn luyện"><svg viewBox="0 0 300 150" aria-hidden="true">' +
    bg +
    content +
    '</svg></div>'
  )
}
function src(id) {
  let a = sources[id]
  return (
    '<div class="source">Nguồn tham khảo: <a target="_blank" rel="noopener noreferrer" href="' +
    a[1] +
    '">' +
    esc(a[0]) +
    ' ↗</a></div>'
  )
}
function render() {
  document
    .querySelectorAll('[data-tab]')
    .forEach((b) => b.classList.toggle('active', b.dataset.tab === S.tab))
  let h = notice
  if (S.tab === 'library') {
    app.innerHTML = h + library()
    return
  }
  if (S.tab === 'log') {
    app.innerHTML = h + logs()
    return
  }
  if (S.tab === 'about') {
    app.innerHTML = h + about()
    return
  }
  if (S.view === 'home') {
    h += `<div class="split"><div><section class="panel hero"><div class="eyebrow">Hỗ trợ từng bước</div><h1>Giữ bình tĩnh.<br>Bắt đầu sơ cứu.</h1><p>Không cần biết tên bệnh. Trả lời câu hỏi theo tình trạng bạn quan sát được.</p><button class="primary" onclick="start()">✚ Bắt đầu đánh giá →</button>${S.session ? '<button class="outline small" onclick="resume()">Quay lại phiên đang xử lý</button>' : ''}</section><div class="panel"><div class="tag">Cấp cứu y tế Việt Nam</div><h2>115</h2><p>Gọi cấp cứu khi nạn nhân bất tỉnh, thở bất thường, chảy máu nghiêm trọng hoặc có dấu hiệu nguy hiểm.</p><a class="call" href="tel:115">☎ Gọi 115</a></div></div><div><div class="labelrow"><h3>Chọn tình huống</h3><span>29 nhóm nhanh</span></div><div class="tiles">${tiles.map((t, i) => `<button class="tile" onclick="start(tiles[${i}][1])"><b>${t[0]}</b>${esc(t[1])}<small>${esc(t[2])}</small></button>`).join('')}</div><div class="labelrow"><h3>Thư viện ngoại tuyến</h3></div><button class="entry" onclick="go('library')">1.200 biến thể kiểm thử <small>120 tình huống gốc · 19 nhóm · chưa thẩm định</small></button></div></div>`
  } else if (S.view === 'question') {
    let q = Q[S.node]
    h += `<div class="split"><section class="panel"><div class="tag ${q.critical ? 'critical' : ''}">${q.critical ? 'Đánh giá khẩn cấp' : 'Đánh giá tình trạng'}</div><h1>${esc(q.title)}</h1><p>${esc(q.desc)}</p>${q.critical ? callout : ''}${timerHTML(q)}<div class="stack">${q.options.map((o, i) => `<button class="${i === 0 ? '' : 'outline'}" onclick="choose(${i})">${esc(o[0])} →</button>`).join('')}</div></section><aside><div class="panel"><div class="tag">Trong phiên</div><h3>${esc(S.session?.hint || 'Đánh giá tổng quát')}</h3><p>Chọn theo những gì bạn thật sự quan sát được. Không suy đoán bệnh.</p><button class="outline small" onclick="go('log')">Xem nhật ký</button></div></aside></div>`
  } else if (S.view === 'protocol') {
    let p = P[S.protocol],
      s = p.steps[S.step]
    h += `<div class="split"><section class="panel"><div class="tag ${p.critical ? 'critical' : ''}">${p.critical ? 'Cần hỗ trợ khẩn cấp' : 'Hướng dẫn tham khảo'}</div><p class="muted">${esc(p.title)} · Bước ${S.step + 1}/${p.steps.length}</p><div class="progress"><i style="width:${((S.step + 1) / p.steps.length) * 100}%"></i></div><h2>${esc(s.title)}</h2>${p.critical && S.step === 0 ? callout : ''}<div class="steptext">${esc(s.text)}</div>${s.warning ? '<div class="warning">' + esc(s.warning) + '</div>' : ''}${visual(s.visual)}${timerHTML(s)}${s.metro ? '<button id="metro" class="entry" onclick="startMetro()">Bật nhịp 110/phút</button>' : ''}${s.note ? '<label class="muted" for="note">Thông tin ghi nhận (không bắt buộc)</label><textarea class="search" id="note" rows="2" placeholder="Thời điểm, bệnh nền, thuốc..."></textarea><button class="small" onclick="saveNote()">Lưu thông tin</button>' : ''}</section><section class="panel"><div class="tag">Thao tác tiếp theo</div><div class="stack">${S.protocol === 'cpr' && S.step === 0 ? '<button class="primary" onclick="next()">AED đã đến (nếu có người hỗ trợ)</button>' : s.continuous && S.step === p.steps.length - 1 ? '<p>Tiếp tục thao tác hoặc theo dõi theo hướng dẫn. Không dừng chỉ để xác nhận.</p>' : `<button class="primary" onclick="next()">${s.continuous ? (S.protocol === 'seizure' ? 'Cơn đã dừng' : 'Chuyển bước khi thích hợp') : '✓ Đã thực hiện bước này'}</button>`}<button class="danger" onclick="changed()">⚠ Tình trạng thay đổi</button><button onclick="unable()">Không thể thực hiện</button><button class="outline" onclick="handover()">Bàn giao cho nhân viên y tế</button><button class="outline small" onclick="speakCurrent()">Đọc lại hướng dẫn</button></div>${src(p.source)}</section></div>`
  } else if (S.view === 'unsafe' || S.view === 'special') {
    h += `<section class="panel"><div class="tag critical">Khẩn cấp</div><h1>${S.view === 'unsafe' ? 'Không tiếp cận khi nguy hiểm' : 'Cần hồi sức phù hợp tình huống'}</h1><div class="steptext">${S.view === 'unsafe' ? 'Giữ khoảng cách an toàn. Gọi 115 và 112 nếu cần cứu nạn. Không tự vào vùng có điện, lửa, khí độc hoặc nước sâu.' : 'Gọi 115 ngay, bật loa ngoài. Làm theo chỉ dẫn hồi sức của tổng đài, đặc biệt nếu là trẻ em hoặc đuối nước. Không chờ thêm câu hỏi.'}</div><a class="call" href="tel:115">☎ Gọi 115</a><div class="stack"><button onclick="question('scene')">Đánh giá lại hiện trường</button><button onclick="handover()">Bàn giao</button></div></section>`
  } else if (S.view === 'monitor') {
    h += `<section class="panel"><div class="tag">Theo dõi liên tục</div><h1>Ở cạnh nạn nhân</h1><p>Hoàn thành bước không đồng nghĩa nạn nhân đã an toàn. Tiếp tục theo dõi ý thức, hô hấp và làm theo hướng dẫn nhân viên y tế.</p><div class="stack"><button class="danger" onclick="changed()">Tình trạng thay đổi / đánh giá lại</button><button onclick="handover()">Đã bàn giao cho nhân viên y tế</button></div></section>`
  }
  app.innerHTML = h
  updateTimer()
}
function speakCurrent() {
  if (!S.voice) {
    S.voice = true
    document.getElementById('voice').textContent = '🔊'
  }
  if (S.view === 'protocol') {
    let s = P[S.protocol].steps[S.step]
    speak(s.title + '. ' + s.text)
  } else if (S.view === 'question') {
    let q = Q[S.node]
    speak(q.title + '. ' + q.desc)
  }
}
document.getElementById('voice').onclick = () => {
  if (!('speechSynthesis' in window)) {
    alert('Trình duyệt không hỗ trợ giọng đọc.')
    return
  }
  S.voice = !S.voice
  document.getElementById('voice').textContent = S.voice ? '🔊' : '🔇'
  if (S.voice) speakCurrent()
  else speechSynthesis.cancel()
}
function saveNote() {
  let n = document.getElementById('note')
  if (n?.value.trim()) {
    log('Ghi chú: ' + n.value.trim())
    n.value = ''
    showModal(
      'Đã ghi nhận',
      'Thông tin được lưu trong nhật ký phiên hiện tại, trên thiết bị.'
    )
  }
}
function handover() {
  showModal(
    'Bàn giao / kết thúc',
    'Chỉ xác nhận bàn giao khi nhân viên y tế đã tiếp nhận hoặc tổng đài hướng dẫn kết thúc. Không coi việc kết thúc app là kết thúc sơ cứu.',
    "<button class=\"primary\" onclick=\"modal.close();log('Người dùng xác nhận đã bàn giao');stopSound();S.view='home';go('log')\">Xác nhận đã bàn giao</button>"
  )
}
function resume() {
  if (S.node) question('response')
  else question('scene')
}
const baseMap = Object.fromEntries(data.base_scenarios.map((x) => [x.id, x]))
const categories = [...new Set(data.base_scenarios.map((x) => x.category))]
const norm = (s) =>
  String(s)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
function library() {
  return `<section class="panel"><div class="eyebrow">Knowledge base · offline</div><h1>Tra cứu tình huống</h1><p>120 tình huống gốc và 1.200 biến thể QA. Đây là danh mục kỹ thuật, không phải 1.200 phác đồ điều trị.</p><div class="row"><button class="small ${S.mode === 'base' ? 'primary' : ''}" onclick="setMode('base')">120 tình huống</button><button class="small ${S.mode === 'qa' ? 'primary' : ''}" onclick="setMode('qa')">1.200 QA</button></div><label for="query" class="muted">Tìm triệu chứng hoặc mã</label><input id="query" class="search" value="${esc(S.query)}" placeholder="Ví dụ: ngất, đau ngực, CARD-01" oninput="S.query=this.value;S.limit=30;listEntries()"><select id="cat" class="search" aria-label="Nhóm tình huống" onchange="S.cat=this.value;S.limit=30;listEntries()"><option value="">Tất cả 19 nhóm</option>${categories.map((c) => `<option ${S.cat === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select><div id="results"></div></section>`
}
function setMode(m) {
  S.mode = m
  S.limit = 30
  go('library')
}
function listEntries() {
  let el = document.getElementById('results')
  if (!el) return
  let q = norm(S.query),
    items = (S.mode === 'base' ? data.base_scenarios : data.qa_variants).filter(
      (x) => {
        let b = S.mode === 'base' ? x : baseMap[x.base_id]
        return (
          (!S.cat || b.category === S.cat) &&
          norm(
            [x.id, b.presentation_vi, b.category, x.context_vi || ''].join(' ')
          ).includes(q)
        )
      }
    )
  el.innerHTML =
    `<p class="muted">${items.length} kết quả · hiện ${Math.min(S.limit, items.length)}</p>` +
    items
      .slice(0, S.limit)
      .map((x) => {
        let b = S.mode === 'base' ? x : baseMap[x.base_id]
        return `<button class="entry" onclick="detail('${esc(x.id)}')">${esc(b.presentation_vi)}<small>${esc(x.id)} · ${esc(x.context_vi || b.category)}</small></button>`
      })
      .join('') +
    (items.length > S.limit
      ? '<button class="entry outline" onclick="S.limit+=30;listEntries()">Hiện thêm 30</button>'
      : '')
}
function detail(id) {
  let v = data.qa_variants.find((x) => x.id === id),
    b = baseMap[id] || baseMap[v?.base_id]
  if (!b) return
  showModal(
    b.presentation_vi,
    b.category +
      ' · ' +
      id +
      ' · Chưa thẩm định. ' +
      (v
        ? v.context_vi + '. ' + v.expected_system_behavior_vi
        : 'Không có phác đồ riêng được phê duyệt.'),
    '<button class="primary" onclick="modal.close();start(' +
      JSON.stringify(b.presentation_vi).replace(/"/g, '&quot;') +
      ')">Bắt đầu đánh giá tổng quát</button>'
  )
}
function logs() {
  return `<section class="panel"><div class="eyebrow">Incident timeline</div><h1>Nhật ký phiên</h1><p>Thông tin chỉ tồn tại trong phiên mở HTML; không gửi đến máy chủ. Không tự ghi tên hay thông tin định danh.</p>${S.logs.length ? S.logs.map((l) => `<div class="log"><time>${esc(l.time)}</time><p>${esc(l.text)}</p></div>`).join('') : '<p>Chưa có dữ liệu. Bắt đầu đánh giá để tạo nhật ký.</p>'}<div class="stack"><button class="primary" onclick="exportLog()" ${S.logs.length ? '' : 'disabled'}>Xuất báo cáo TXT</button><button onclick="clearLog()" ${S.logs.length ? '' : 'disabled'}>Xóa nhật ký</button></div></section>`
}
function exportLog() {
  let text =
      'SOWCUU – Nhật ký người dùng tự xác nhận\nKhông phải hồ sơ chẩn đoán.\n' +
      S.logs.map((l) => l.time + ' ' + l.text).join('\n'),
    url = URL.createObjectURL(
      new Blob([text], { type: 'text/plain;charset=utf-8' })
    ),
    a = document.createElement('a')
  a.href = url
  a.download = 'sowcuu-nhat-ky.txt'
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 2000)
}
function clearLog() {
  if (confirm('Xóa nhật ký và kết thúc phiên hiện tại?')) {
    S.logs = []
    S.session = null
    S.view = 'home'
    render()
  }
}
function about() {
  return `<section class="panel"><div class="eyebrow">SowCuu v1.2 · Flow Canvas</div><h1>Thông tin & nguồn</h1><p>Ứng dụng minh họa luồng sơ cứu, không phải thiết bị y tế được cấp phép. Các hướng dẫn mẫu chưa được chuyên gia địa phương thẩm định. Luôn ưu tiên tổng đài cấp cứu và huấn luyện trực tiếp.</p><p>Hoạt động ngoại tuyến với dữ liệu nhúng. Giọng đọc tiếng Việt tùy hệ điều hành, không bảo đảm có giọng offline. Sơ đồ chỉ là biểu tượng minh họa. Không dùng AI để chẩn đoán hay tự chỉ định thuốc.</p>${Object.keys(sources).map(src).join('')}<div class="source"><a href="https://www.gov.uk/foreign-travel-advice/vietnam/getting-help" target="_blank" rel="noopener">Số cấp cứu tại Việt Nam ↗</a></div></section>`
}
const originalRender = render
render = function () {
  originalRender()
  if (S.tab === 'library') listEntries()
}

// Flow state is separate from the medical decision engine. Only visited nodes are marked done.
const F = {
  history: [],
  zoom: 1,
  focus: true,
  lastKey: '',
  lastTop: 0,
  lastLeft: 0,
}
const startOrig = start,
  chooseOrig = choose,
  nextOrig = next,
  changedOrig = changed,
  questionOrig = question,
  clearOrig = clearLog
function capture(title, answer, type = 'Đã ghi nhận') {
  F.history.push({ title, answer, type, time: now() })
  F.focus = true
}
start = function (hint = '') {
  F.history = []
  F.zoom = 1
  F.focus = true
  F.lastKey = ''
  capture('Bắt đầu đánh giá', hint || 'Đánh giá tổng quát', 'Bắt đầu')
  startOrig(hint)
}
choose = function (i) {
  let q = Q[S.node],
    o = q?.options[i]
  if (!o) return
  capture(q.title, o[0], 'Đã trả lời')
  chooseOrig(i)
}
next = function () {
  let s = P[S.protocol]?.steps[S.step]
  if (!s) return
  capture(
    s.title,
    S.protocol === 'cpr' && S.step === 0
      ? 'AED đã đến (người dùng ghi nhận)'
      : s.continuous
        ? 'Chuyển bước theo diễn biến'
        : 'Người dùng xác nhận đã thực hiện',
    'Đã ghi nhận'
  )
  nextOrig()
}
changed = function () {
  capture('Đánh giá lại', 'Người dùng báo tình trạng thay đổi', 'Thay đổi')
  changedOrig()
}
question = function (id) {
  F.focus = true
  questionOrig(id)
}
clearLog = function () {
  clearOrig()
  if (!S.session) {
    F.history = []
    F.zoom = 1
    F.focus = true
  }
}
const arrow = (pending = false) =>
  `<div class="flow-edge ${pending ? 'pending' : ''}" aria-hidden="true"><svg viewBox="0 0 30 45" fill="none"><path d="M15 1V37M8 30L15 38L22 30" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" ${pending ? 'stroke-dasharray="4 4"' : ''}/></svg></div>`
function node({
  num,
  state,
  title = '',
  answer = '',
  time = '',
  content = '',
  kind = '',
  critical = false,
  id = '',
}) {
  return `<article ${id ? 'id="' + id + '"' : ''} class="flow-node ${kind} ${critical ? 'is-critical' : ''}" ${kind === 'active-node' ? 'aria-current="step"' : ''}><div class="node-bar"><span class="node-num">${String(num).padStart(2, '0')}</span><span class="node-state">${esc(state)}</span>${time ? `<time class="node-time">${esc(time)}</time>` : ''}</div><div class="node-inner">${title ? `<h3>${esc(title)}</h3>` : ''}${answer ? `<div class="${kind === 'done-node' ? 'node-answer' : 'muted'}">${esc(answer)}</div>` : ''}${content}</div></article>`
}
function futureCard(num, title, desc) {
  return node({
    num,
    state: 'Bước dự kiến',
    title,
    content: `<p>${esc(desc)}</p>`,
    kind: 'future-node',
  })
}
function currentKey() {
  return S.view === 'question'
    ? 'q:' + S.node
    : S.view === 'protocol'
      ? 'p:' + S.protocol + ':' + S.step
      : S.view
}
function flowHome() {
  return (
    node({
      num: 1,
      state: 'Bắt đầu · Mô phỏng',
      kind: 'active-node',
      id: 'active-node',
      content: `<div class="flow-home"><div class="tag">SowCuu • Flow</div><h2>Bắt đầu đánh giá</h2><p>Chọn tình trạng quan sát được hoặc bắt đầu đánh giá tổng quát.</p><button class="primary" onclick="start()">✚ Bắt đầu đánh giá →</button><div class="tiles">${tiles.map((t, i) => `<button class="tile" onclick="start(tiles[${i}][1])"><b>${t[0]}</b>${esc(t[1])}</button>`).join('')}</div>${S.session ? '<button class="entry outline" onclick="resume()">Quay lại phiên đang xử lý</button>' : ''}</div>`,
    }) +
    arrow(true) +
    futureCard(
      2,
      'Kiểm tra an toàn hiện trường',
      'Câu hỏi đầu tiên của quy trình.'
    ) +
    arrow(true) +
    futureCard(
      3,
      'Đánh giá tình trạng',
      'Các bước tiếp theo phụ thuộc câu trả lời.'
    )
  )
}
function flowActive(oldContent) {
  let num = F.history.length + 1
  let critical =
    S.view === 'protocol'
      ? P[S.protocol]?.critical
      : S.view === 'question'
        ? Q[S.node]?.critical
        : ['unsafe', 'special'].includes(S.view)
  let state =
    S.view === 'question'
      ? 'Câu hỏi hiện tại'
      : S.view === 'protocol'
        ? 'Bước sơ cứu · ' + (S.step + 1) + '/' + P[S.protocol].steps.length
        : S.view === 'monitor'
          ? 'Theo dõi'
          : 'Cần hỗ trợ'
  let history = F.history
    .map(
      (h, i) =>
        node({
          num: i + 1,
          state: h.type,
          title: h.title,
          answer: h.answer,
          time: h.time,
          kind: 'done-node',
        }) + arrow()
    )
    .join('')
  let pending = ''
  if (S.view === 'protocol' && S.step + 1 < P[S.protocol].steps.length)
    pending =
      arrow(true) +
      futureCard(
        num + 1,
        P[S.protocol].steps[S.step + 1].title,
        'Chỉ chuyển khi phù hợp với diễn biến.'
      )
  else if (S.view === 'question')
    pending =
      arrow(true) +
      futureCard(
        num + 1,
        'Bước tiếp theo',
        'Được xác định sau khi bạn chọn câu trả lời.'
      )
  return (
    history +
    node({
      num,
      state,
      kind: 'active-node',
      critical,
      id: 'active-node',
      content: oldContent,
    }) +
    pending
  )
}
function focusFlow(behavior = 'auto') {
  const v = document.getElementById('flowViewport'),
    n = document.getElementById('active-node')
  if (!v || !n) return
  let vr = v.getBoundingClientRect(),
    nr = n.getBoundingClientRect()
  let landscape = matchMedia(
    '(orientation:landscape) and (min-width:600px)'
  ).matches
  v.scrollTo({
    left: landscape
      ? Math.max(0, v.scrollLeft + nr.left - vr.left - 20)
      : Math.max(
          0,
          v.scrollLeft + nr.left - vr.left - (vr.width - nr.width) / 2
        ),
    top: landscape ? 0 : Math.max(0, v.scrollTop + nr.top - vr.top - 16),
    behavior,
  })
}
function setFlowZoom(z) {
  F.zoom = Math.round(Math.max(0.65, Math.min(1.35, z)) * 100) / 100
  let w = document.getElementById('flowWorld')
  if (w) {
    w.style.zoom = F.zoom
    document.getElementById('zoomValue').textContent =
      Math.round(F.zoom * 100) + '%'
    focusFlow()
  }
}
function flowCenter() {
  focusFlow('smooth')
}
function fitFlow() {
  setFlowZoom(1)
}
const renderWithLibrary = render
render = function () {
  let prev = document.getElementById('flowViewport')
  let saved = prev ? { top: prev.scrollTop, left: prev.scrollLeft } : null
  renderWithLibrary()
  let isFlow = S.tab === 'home'
  document.body.classList.toggle('flow-mode', isFlow)
  if (!isFlow) return
  let key = currentKey(),
    old = app.querySelector('.notice')
  if (old) old.remove()
  app.querySelectorAll('aside').forEach((a) => a.remove())
  let content = app.innerHTML
  let nodes = S.view === 'home' ? flowHome() : flowActive(content)
  app.innerHTML = `<div class="notice flow-alert">BẢN MÔ PHỎNG · Chưa thẩm định y khoa · Ca thật: gọi 115 ngay</div><div class="flow-toolbar"><div class="flow-heading"><span class="flow-status-dot"></span>Quy trình sơ cứu<small>${esc(S.session?.hint || 'Canvas tương tác · dọc / ngang')}</small></div><button class="flow-tool" aria-label="Thu nhỏ" onclick="setFlowZoom(F.zoom-.1)">−</button><span id="zoomValue" class="flow-zoom">${Math.round(F.zoom * 100)}%</span><button class="flow-tool" aria-label="Phóng to" onclick="setFlowZoom(F.zoom+.1)">+</button><button class="flow-tool" aria-label="Về card đang thực hiện" title="Về bước hiện tại" onclick="flowCenter()">◎</button><button class="flow-tool" aria-label="Khôi phục kích thước" onclick="fitFlow()">↺</button></div><div class="flow-viewport" id="flowViewport" aria-label="Canvas quy trình có thể cuộn"><div class="flow-world" id="flowWorld" style="zoom:${F.zoom}">${nodes}</div></div>`
  updateTimer()
  if (F.focus || F.lastKey !== key || !saved) {
    F.focus = false
    requestAnimationFrame(() => focusFlow())
  } else {
    let v = document.getElementById('flowViewport')
    v.scrollTop = saved.top
    v.scrollLeft = saved.left
  }
  F.lastKey = key
}
window.addEventListener('orientationchange', () =>
  setTimeout(() => focusFlow(), 200)
)

// v0.3: source-linked educational branches; not clinically approved.
Object.assign(sources, {
  bls25: [
    'AHA 2025 · Hồi sức và hóc dị vật người lớn',
    'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support/',
  ],
  ped25: [
    'AHA/AAP 2025 · Hồi sức và hóc dị vật trẻ em',
    'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-basic-life-support/',
  ],
  strokevn: [
    'Bệnh viện Bạch Mai · Sơ cứu đột quỵ',
    'https://bachmai.gov.vn/bai-viet/so-cuu-dot-quy-tai-nha-nhung-thao-tac-%E2%80%9Csong-con%E2%80%9D-ban-can-biet?id=66dbd998-49e4-4350-b1c7-042985aa42e0',
  ],
  glucose: [
    'CDC · Xử trí hạ đường huyết',
    'https://www.cdc.gov/diabetes/treatment/treatment-low-blood-sugar-hypoglycemia.html',
  ],
  heat: [
    'CDC · Bệnh do nhiệt',
    'https://www.cdc.gov/niosh/heat-stress/about/illnesses.html',
  ],
  rcguide: [
    'Red Cross · Hướng dẫn sơ cứu',
    'https://www.redcross.org/take-a-class/resources/guidelines',
  ],
  allergy: [
    'Red Cross · Phản vệ',
    'https://www.redcross.org/take-a-class/resources/learn-first-aid/allergic-reaction-anaphylaxis',
  ],
  nose: [
    'Red Cross · Chảy máu mũi',
    'https://www.redcross.org/take-a-class/resources/learn-first-aid/nosebleeds',
  ],
  special25: [
    'AHA 2025 · Tình huống hồi sức đặc biệt',
    'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation/',
  ],
})
const addP = (id, title, source, critical, steps) =>
  (P[id] = { title, source, critical, steps })
const watch = () =>
  st(
    'Theo dõi và bàn giao',
    'Ở cạnh nạn nhân, theo dõi ý thức và hô hấp. Nếu xấu đi, chọn Tình trạng thay đổi ngay. Làm theo tổng đài hoặc nhân viên y tế.',
    { continuous: true }
  )
addP('stroke', 'Nghi đột quỵ / tai biến', 'strokevn', true, [
  st(
    'Gọi 115 ngay',
    'Chỉ cần một dấu hiệu đột ngột như lệch mặt, yếu tay hoặc nói khó đã đủ để nghi ngờ. Không chờ đủ dấu hiệu hoặc đợi tự khỏi.',
    {
      warning:
        'Không chích máu đầu ngón tay, dái tai, cạo gió, bấm huyệt hoặc cho uống thuốc. Không tự dùng aspirin.',
    }
  ),
  st(
    'Ghi thời điểm',
    'Ghi giờ bắt đầu triệu chứng hoặc lần cuối người bệnh còn bình thường. Kể cả triệu chứng đã hết vẫn cần đánh giá cấp cứu.',
    { note: true }
  ),
  st(
    'Bảo vệ đường thở',
    'Để người bệnh nghỉ ở tư thế an toàn, không cho ăn uống. Nếu giảm ý thức hoặc thở bất thường, đánh giá lại ngay.',
    { continuous: true }
  ),
])
addP('choke_mild', 'Hóc dị vật · còn ho hiệu quả', 'bls25', false, [
  st(
    'Khuyến khích tiếp tục ho',
    'Để nạn nhân tự ho, theo dõi sát. Không vỗ lưng hay ép bụng khi vẫn ho hiệu quả. Nếu không nói, không ho hiệu quả hoặc không thở được, gọi 115 và chuyển sang nhánh tắc nghẽn nặng.',
    { continuous: true }
  ),
])
addP(
  'choke_adult',
  'Tắc đường thở nặng · người lớn / trẻ từ 1 tuổi',
  'bls25',
  true,
  [
    st(
      'Gọi 115 và xử trí ngay',
      'Cho nạn nhân cúi ra trước, dùng gót bàn tay vỗ mạnh tối đa 5 lần giữa hai bả vai. Nếu dị vật chưa ra, đứng phía sau, đặt nắm tay trên rốn và dưới xương ức, tay kia ôm nắm tay, kéo mạnh vào trong và lên trên tối đa 5 lần. Với trẻ nhỏ, điều chỉnh lực và tư thế theo kích thước.',
      {
        continuous: true,
        warning:
          'Lặp lại chu kỳ 5 vỗ lưng / 5 ép bụng nếu cần. Dừng khi dị vật ra hoặc nạn nhân bất tỉnh. Không móc họng mù. Không dùng ép bụng cho trẻ dưới 1 tuổi hoặc người mang thai giai đoạn muộn.',
      }
    ),
  ]
)
addP(
  'choke_preg',
  'Tắc đường thở nặng · thai kỳ muộn / không ôm được bụng',
  'bls25',
  true,
  [
    st(
      'Gọi 115, vỗ lưng và ép ngực',
      'Vỗ tối đa 5 lần giữa hai bả vai khi nạn nhân cúi ra trước. Nếu chưa hết tắc, dùng tối đa 5 lần ép ngực thay cho ép bụng; làm theo tổng đài về vị trí tay. Lặp lại khi cần, dừng nếu dị vật ra hoặc nạn nhân bất tỉnh.',
      {
        continuous: true,
        warning: 'Không ép bụng. Nếu mất đáp ứng, chuyển đánh giá ngay.',
      }
    ),
  ]
)
addP('choke_infant', 'Tắc đường thở nặng · trẻ dưới 1 tuổi', 'ped25', true, [
  st(
    'Gọi 115 và vỗ lưng / ấn ngực',
    'Đỡ đầu và cổ trẻ, đặt trẻ sấp trên cẳng tay hoặc đùi, đầu thấp hơn ngực. Vỗ tối đa 5 lần giữa hai bả vai. Nếu chưa thông, lật trẻ ngửa, giữ đầu thấp, thực hiện tối đa 5 lần ấn ngực ở nửa dưới xương ức bằng kỹ thuật theo hướng dẫn tổng đài. Lặp lại cho đến khi dị vật ra hoặc trẻ bất tỉnh.',
    {
      continuous: true,
      warning:
        'Không ép bụng, không lắc hoặc dốc ngược trẻ bằng chân, không móc họng mù. Nếu trẻ bất tỉnh, chuyển đánh giá ngay.',
    }
  ),
])
addP('choke_clear', 'Dị vật đã ra', 'bls25', false, [
  st(
    'Kiểm tra lại',
    'Nếu vẫn khó thở, đau ngực, khó nuốt hoặc tình trạng xấu đi, gọi 115. Sau tắc nghẽn nặng hoặc đã ép bụng/ngực, cần được nhân viên y tế đánh giá.',
    { continuous: true }
  ),
])
addP(
  'hypo_awake',
  'Nghi hạ đường huyết · người lớn tỉnh, nuốt an toàn',
  'glucose',
  false,
  [
    st(
      'Bổ sung đường nhanh',
      'Nếu người lớn tỉnh táo hoàn toàn, nuốt an toàn và có hạ đường huyết đã đo hoặc nghi rõ do tiểu đường, dùng khoảng 15 g carbohydrate hấp thu nhanh (ví dụ viên glucose theo nhãn hoặc khoảng 120 ml nước trái cây). Nếu có máy đo và biết dùng, đo đường huyết nhưng không trì hoãn xử trí.',
      {
        warning:
          'Không cho ăn uống nếu lơ mơ, co giật, khó nuốt hoặc nghi đột quỵ. Trẻ nhỏ cần liều theo kế hoạch điều trị cá nhân.',
      }
    ),
    st(
      'Đánh giá sau 15 phút',
      'Đo lại nếu có thể. Nếu đường huyết vẫn dưới 70 mg/dL (3,9 mmol/L) và vẫn tỉnh, nuốt an toàn, có thể lặp lại 15 g đường nhanh. Nếu không cải thiện hoặc xấu đi, gọi 115.',
      { timer: 900, warning: 'Không chờ hết 15 phút nếu tình trạng xấu đi.' }
    ),
    st(
      'Sau khi cải thiện',
      'Khi đường huyết trở lại an toàn và người bệnh tỉnh, dùng bữa hoặc đồ ăn nhẹ phù hợp; theo dõi tái phát và liên hệ nhân viên y tế.',
      { continuous: true }
    ),
  ]
)
addP(
  'hypo_severe',
  'Nghi hạ đường huyết nặng / không nuốt an toàn',
  'glucose',
  true,
  [
    st(
      'Gọi 115 ngay',
      'Không cho bất cứ thứ gì vào miệng. Nếu có glucagon được kê riêng cho nạn nhân và người hỗ trợ biết sử dụng, dùng theo hướng dẫn thiết bị hoặc tổng đài. Theo dõi hô hấp.',
      {
        warning:
          'Không bôi đường, mật ong vào miệng người bất tỉnh. Không tự tiêm insulin.',
        continuous: true,
      }
    ),
  ]
)
addP('heatstroke', 'Nghi sốc nhiệt / say nóng nặng', 'heat', true, [
  st(
    'Gọi 115 và làm mát ngay',
    'Đưa khỏi môi trường nóng nếu an toàn. Bỏ bớt quần áo, làm ướt da bằng nước mát/lạnh và quạt liên tục; chườm lạnh vùng cổ, nách, bẹn. Không trì hoãn làm mát để đợi xe cấp cứu.',
    {
      warning:
        'Nếu lơ mơ hoặc nuốt không an toàn, không cho uống. Không dùng thuốc hạ sốt để điều trị sốc nhiệt.',
      continuous: true,
    }
  ),
])
addP('heat_exhaust', 'Kiệt sức do nóng · còn tỉnh táo', 'heat', false, [
  st(
    'Nghỉ và làm mát',
    'Đưa vào nơi mát, nới quần áo, làm mát da, cho uống từng ngụm nước mát nếu tỉnh và nuốt an toàn. Không tiếp tục gắng sức.'
  ),
  st(
    'Đánh giá lại',
    'Nếu lú lẫn, ngất, co giật, khó thở, nôn nhiều hoặc không cải thiện nhanh, gọi 115. Kiệt sức do nóng cần được đánh giá y tế.',
    { continuous: true }
  ),
])
addP('faint', 'Vừa ngất, đã tỉnh hoàn toàn', 'aha', false, [
  st(
    'Cho nghỉ và quan sát',
    'Cho nằm hoặc ngồi an toàn, tránh đứng dậy đột ngột. Nếu không hồi phục nhanh, ngất khi gắng sức, đau ngực, khó thở, chấn thương, mang thai hoặc ngất tái diễn, gọi 115.'
  ),
  watch(),
])
addP('anaphylaxis', 'Nghi phản vệ', 'allergy', true, [
  st(
    'Gọi 115 và hỗ trợ adrenaline đã kê',
    'Nếu khó thở, sưng lưỡi/họng hoặc choáng sau tiếp xúc dị nguyên, gọi 115. Hỗ trợ dùng bút tiêm adrenaline của chính người bệnh theo nhãn nếu có và làm theo tổng đài. Không để người bệnh đứng hoặc đi lại.',
    {
      warning:
        'Không trì hoãn adrenaline để chờ thuốc dị ứng uống. Nếu mất đáp ứng hoặc thở bất thường, đánh giá lại.',
    }
  ),
  watch(),
])
addP('asthma', 'Cơn hen / khò khè ở người có bệnh hen', 'rcguide', false, [
  st(
    'Hỗ trợ thuốc xịt đã kê',
    'Cho ngồi ở tư thế dễ thở. Hỗ trợ dùng thuốc cắt cơn của chính họ theo kế hoạch điều trị, có buồng đệm nếu sẵn. Nếu không nói được thành câu, tím tái, kiệt sức, không có thuốc hoặc không đỡ nhanh, gọi 115.'
  ),
  watch(),
])
addP('nosebleed', 'Chảy máu mũi', 'nose', false, [
  st(
    'Bóp phần mềm của mũi',
    'Cho ngồi, hơi cúi đầu ra trước, bóp liên tục phần mềm hai cánh mũi trong 10–15 phút, thở bằng miệng. Không ngửa đầu.',
    { timer: 900 }
  ),
  st(
    'Đánh giá lại',
    'Nếu vẫn chảy nhiều, có choáng, khó thở hoặc chấn thương nghiêm trọng, tìm cấp cứu. Không nhét vật sâu vào mũi.'
  ),
])
addP('fracture', 'Nghi gãy xương / trật khớp', 'aha', false, [
  st(
    'Giữ nguyên vị trí',
    'Không cố nắn hoặc kéo thẳng. Đỡ vùng bị thương ở tư thế hiện tại, hạn chế di chuyển. Nếu chảy máu nặng, xương lộ, chi tái lạnh/tê, hoặc nghi chấn thương cột sống, gọi 115.'
  ),
  watch(),
])
addP('head', 'Chấn thương đầu / cổ / cột sống', 'aha', true, [
  st(
    'Hạn chế di chuyển',
    'Gọi 115 nếu chấn thương nghiêm trọng, mất ý thức, lú lẫn, nôn lặp lại, co giật, yếu liệt hoặc đau cổ. Giữ đầu và cổ ổn định, không tháo mũ bảo hiểm trừ khi cần bảo vệ đường thở hoặc hồi sức theo tổng đài.'
  ),
  watch(),
])
addP('electric', 'Điện giật', 'special25', true, [
  st(
    'Ngắt nguồn điện trước khi tiếp cận',
    'Không chạm nạn nhân khi nguồn điện còn hoạt động. Với điện cao thế, giữ khoảng cách và gọi cứu hộ. Gọi 115. Chỉ tiếp cận khi đã an toàn.'
  ),
  st(
    'Kiểm tra lại ý thức và hô hấp',
    'Nếu nạn nhân không đáp ứng hoặc thở bất thường, chuyển đánh giá ngay. Bỏng điện có thể gây tổn thương sâu dù da ít dấu hiệu.',
    { continuous: true }
  ),
])
addP('drowning', 'Đuối nước / vừa được đưa lên bờ', 'special25', true, [
  st(
    'Gọi cấp cứu, bảo đảm an toàn',
    'Không tự xuống nước nếu không được huấn luyện. Khi nạn nhân đã ở nơi an toàn, kiểm tra đáp ứng và thở. Nếu không thở bình thường, thực hiện CPR có thổi ngạt nếu biết kỹ thuật và theo hướng dẫn tổng đài.',
    {
      warning:
        'Không dốc ngược, không ép bụng để tống nước. Cần đánh giá y tế nếu có triệu chứng hô hấp.',
    }
  ),
  watch(),
])
addP('chemical_eye', 'Hóa chất bắn vào mắt', 'aha', false, [
  st(
    'Rửa mắt ngay',
    'Xả nhẹ liên tục bằng nước sạch, giữ mi mắt mở nếu có thể, tránh nước chảy sang mắt còn lại. Tháo kính áp tròng nếu dễ. Tiếp tục rửa ít nhất 15–20 phút và tìm hỗ trợ y tế khẩn.',
    {
      timer: 1200,
      warning:
        'Không trung hòa bằng hóa chất khác, không dụi mắt. Nếu hóa chất nguy hiểm, gọi 115 đồng thời.',
    }
  ),
  watch(),
])
addP('chemical_skin', 'Hóa chất dính da', 'aha', false, [
  st(
    'Tránh tiếp xúc và loại bỏ hóa chất',
    'Bảo vệ bản thân. Cởi quần áo nhiễm hóa chất nếu an toàn; phủi nhẹ hóa chất dạng bột khô trước khi rửa. Rửa bằng nhiều nước sạch nếu chất đó phù hợp với nước; làm theo nhãn và tổng đài. Không trộn chất trung hòa.',
    {
      warning:
        'Nếu hóa chất nguy hiểm, bỏng rộng, khó thở hoặc không biết chất, gọi 115.',
    }
  ),
  watch(),
])
addP('snake', 'Nghi rắn độc cắn', 'rcguide', true, [
  st(
    'Gọi 115 và hạn chế vận động',
    'Đưa khỏi tầm nguy hiểm của rắn, giữ nạn nhân yên, cố định chi bị cắn nhẹ nhàng, tháo nhẫn/vật bó chặt. Không cố bắt rắn.',
    { warning: 'Không rạch, hút nọc, chích kim, garô chặt hoặc chườm đá.' }
  ),
  watch(),
])
addP('shock', 'Dấu hiệu choáng / sốc', 'aha', true, [
  st(
    'Gọi 115 và tìm nguyên nhân nguy hiểm',
    'Da tái lạnh, vã mồ hôi, yếu hoặc lú lẫn có thể là dấu hiệu sốc. Nếu chảy máu nhiều, ép trực tiếp ngay. Cho nằm nếu chịu được và không khó thở; giữ ấm, không cho ăn uống.'
  ),
  watch(),
])
addP('cold', 'Nghi hạ thân nhiệt', 'aha', true, [
  st(
    'Đưa đến nơi ấm và khô',
    'Tháo quần áo ướt nếu có thể, bọc chăn khô, làm ấm thân mình từ từ. Di chuyển nhẹ nhàng; không chà xát hoặc dùng nhiệt quá nóng. Gọi 115 nếu lú lẫn, buồn ngủ, run giảm hoặc thở bất thường.'
  ),
  watch(),
])
addP('preg_bleed', 'Thai kỳ · đau bụng / chảy máu / choáng', 'basic', true, [
  st(
    'Gọi 115',
    'Cho người bệnh nghỉ ở tư thế dễ chịu, ưu tiên nằm nghiêng nếu thai lớn và chịu được. Không tự khám, không đưa vật vào âm đạo, không tự dùng thuốc. Ghi tuổi thai và triệu chứng nếu biết.',
    { note: true }
  ),
  watch(),
])
addP('minor_wound', 'Vết thương nhỏ / trầy xước', 'aha', false, [
  st(
    'Rửa và che phủ',
    'Rửa tay, ép nhẹ nếu còn chảy máu. Rửa vết thương bằng nước sạch, che bằng gạc sạch. Tìm chăm sóc nếu vết sâu, bẩn, do động vật cắn hoặc có nguy cơ uốn ván.'
  ),
  watch(),
])
addP('animal_bite', 'Chó mèo hoặc động vật có vú cắn', 'basic', false, [
  st(
    'Rửa vết thương và đi khám ngay',
    'Rửa kỹ bằng xà phòng và nước chảy khoảng 15 phút. Nếu chảy máu nặng, ưu tiên cầm máu và gọi 115. Đi cơ sở y tế ngay để đánh giá dự phòng dại, uốn ván và nhiễm trùng.',
    {
      timer: 900,
      warning:
        'Không đắp lá, không chờ động vật có biểu hiện bệnh mới đi khám.',
    }
  ),
])
addP('hypergly', 'Nghi tăng đường huyết có biến chứng', 'basic', true, [
  st(
    'Gọi 115 khi có dấu hiệu nguy hiểm',
    'Nếu người tiểu đường nôn, đau bụng, thở sâu nhanh, lú lẫn hoặc mất nước nặng, cần cấp cứu. Không tự điều chỉnh hoặc tiêm insulin cho người khác. Chuẩn bị kết quả đo và thuốc đang dùng nếu có.',
    { note: true }
  ),
  watch(),
])
const extraTiles = [
  ['◉', 'Tụt đường huyết', 'Run, vã mồ hôi', 'hypo'],
  ['☀', 'Say nắng / sốc nhiệt', 'Nóng, choáng', 'heat'],
  ['✚', 'Phản vệ / dị ứng nặng', 'Sưng họng, khó thở', 'anaphylaxis'],
  ['≈', 'Hen suyễn', 'Khò khè', 'asthma'],
  ['◎', 'Vừa ngất đã tỉnh', 'Choáng', 'faint'],
  ['◉', 'Chảy máu mũi', 'Máu mũi', 'nosebleed'],
  ['◇', 'Gãy xương / trật khớp', 'Chấn thương', 'fracture'],
  ['◇', 'Chấn thương đầu / cổ', 'Tai nạn', 'head'],
  ['ϟ', 'Điện giật', 'Nguồn điện', 'electric'],
  ['≈', 'Đuối nước', 'Ngạt nước', 'drowning'],
  ['◈', 'Hóa chất vào mắt', 'Mắt', 'chemical_eye'],
  ['⚗', 'Hóa chất dính da', 'Da', 'chemical_skin'],
  ['◇', 'Rắn cắn', 'Nọc độc', 'snake'],
  ['◎', 'Choáng / sốc', 'Da lạnh, tái', 'shock'],
  ['❄', 'Hạ thân nhiệt', 'Lạnh', 'cold'],
  ['♡', 'Thai kỳ có dấu hiệu nguy hiểm', 'Đau, chảy máu', 'preg_bleed'],
  ['+', 'Vết thương nhỏ', 'Trầy xước', 'minor_wound'],
  ['◇', 'Chó mèo cắn', 'Dại, uốn ván', 'animal_bite'],
  ['◉', 'Tăng đường huyết nặng', 'Tiểu đường', 'hypergly'],
]
tiles.push(...extraTiles)
const route = (id) =>
  ({
    choke: 'choke_severity',
    hypo: 'hypo_alert',
    heat: 'heat_alert',
    stroke: 'stroke_fast',
  })[id] || 'p:' + id
Object.assign(Q, {
  stroke_fast: {
    title: 'Có dấu hiệu đột quỵ đột ngột không?',
    desc: 'Mặt lệch khi cười, một tay yếu khi giơ lên, nói khó; hoặc đột ngột mất thăng bằng/thị lực. Nếu có hoặc nghi ngờ, gọi 115 ngay; không cần làm đủ bài kiểm tra.',
    critical: true,
    options: [
      ['Có / nghi ngờ / triệu chứng vừa hết', 'p:stroke'],
      ['Không rõ nhưng có bất thường đột ngột', 'p:stroke'],
      ['Không có, muốn chọn tình trạng khác', 'symptom'],
    ],
  },
  choke_severity: {
    title: 'Nạn nhân có ho mạnh và nói / khóc được không?',
    desc: 'Nếu không thể nói, ho hiệu quả hoặc thở, gọi 115 ngay. Chỉ dùng các kỹ thuật đẩy dị vật khi tắc nghẽn nặng.',
    critical: true,
    options: [
      ['Vẫn ho mạnh, nói hoặc khóc được', 'p:choke_mild'],
      ['Không thể nói / khóc / ho hiệu quả', 'choke_age'],
      ['Đã bất tỉnh / thở bất thường', 'breath'],
      ['Dị vật đã ra', 'p:choke_clear'],
      ['Không chắc', 'p:unknown'],
    ],
  },
  choke_age: {
    title: 'Nạn nhân thuộc nhóm nào?',
    desc: 'Gọi 115 ngay, nhờ người khác gọi nếu có thể. Chọn đúng nhóm để không dùng nhầm kỹ thuật.',
    critical: true,
    options: [
      ['Người lớn hoặc trẻ từ 1 tuổi', 'p:choke_adult'],
      ['Trẻ dưới 1 tuổi', 'p:choke_infant'],
      ['Thai kỳ muộn hoặc không ôm được bụng', 'p:choke_preg'],
      ['Không xác định được', 'p:unknown'],
    ],
  },
  hypo_alert: {
    title: 'Nạn nhân tỉnh hoàn toàn và nuốt an toàn không?',
    desc: 'Run, vã mồ hôi, đói, tiểu đường hoặc dùng thuốc hạ đường huyết có thể gợi ý tụt đường. Không thử cho uống để kiểm tra khả năng nuốt.',
    options: [
      ['Không / lơ mơ / co giật / khó nuốt', 'p:hypo_severe'],
      ['Có, tỉnh và nuốt an toàn', 'hypo_age'],
      ['Không chắc', 'p:hypo_severe'],
    ],
  },
  hypo_age: {
    title:
      'Đây là người lớn có hạ đường huyết đo được hoặc nghi rõ do tiểu đường?',
    desc: 'Nếu có méo mặt, yếu một bên hoặc nói khó đột ngột, ưu tiên nhánh nghi đột quỵ. Trẻ nhỏ cần liều theo kế hoạch cá nhân.',
    options: [
      ['Có, người lớn', 'p:hypo_awake'],
      ['Có dấu hiệu nghi đột quỵ', 'p:stroke'],
      ['Trẻ em / không chắc nguyên nhân', 'p:unknown'],
    ],
  },
  heat_alert: {
    title: 'Sau tiếp xúc nóng, có lú lẫn, ngất hoặc co giật không?',
    desc: 'Da nóng có thể khô hoặc vẫn đổ mồ hôi. Không cần đo nhiệt độ mới xử trí sốc nhiệt.',
    critical: true,
    options: [
      ['Có / không chắc / rất nóng và bất thường', 'p:heatstroke'],
      ['Tỉnh hoàn toàn, mệt, vã mồ hôi, chóng mặt', 'p:heat_exhaust'],
      ['Không đáp ứng hoặc thở bất thường', 'breath'],
    ],
  },
})
Q.breathawake.options = [
  ['Hóc, không nói hoặc ho hiệu quả', 'choke_severity'],
  ['Chảy máu nhiều', 'p:bleed'],
  ['Khó thở nghiêm trọng', 'breath_cause'],
  ['Không thấy các dấu hiệu trên', 'select_hint'],
]
Q.breath_cause = {
  title: 'Khó thở có liên quan đến tình huống nào?',
  desc: 'Gọi 115 ngay nếu khó thở nghiêm trọng. Không trì hoãn để chọn nguyên nhân.',
  critical: true,
  options: [
    ['Đang ăn / nghi dị vật', 'choke_severity'],
    ['Sau dị ứng, sưng lưỡi / họng', 'p:anaphylaxis'],
    ['Có bệnh hen / khò khè', 'p:asthma'],
    ['Đau ngực / không rõ', 'p:chest'],
  ],
}
Q.select_hint = {
  title: 'Chọn triệu chứng chính',
  desc: 'Chọn theo quan sát thực tế. Không cần biết bệnh.',
  options: [],
}
Q.symptom.options = tiles
  .filter((x) => x[3] !== 'uncon' && x[1] !== 'Không thở / khó thở')
  .map((x) => [x[1], route(x[3])])
Q.symptom.options.push(['Vừa ngất / không chắc', 'p:unknown'])
const oldQuestion3 = question
question = function (id) {
  if (id === 'select_hint') {
    let t = tiles.find((t) => t[1] === S.session?.hint)
    if (t && t[3] !== 'uncon') {
      let r = route(t[3])
      if (r.startsWith('p:')) return openProtocol(r.slice(2))
      return oldQuestion3(r)
    }
    id = 'symptom'
  }
  return oldQuestion3(id)
}
// Explicit outcome buttons are available on continuous protocols without forcing confirmation.
const oldRender3 = render
render = function () {
  oldRender3()
  if (S.tab === 'home' && S.view === 'protocol') {
    let n = document.querySelector('#active-node .stack')
    if (
      n &&
      ['choke_mild', 'choke_adult', 'choke_preg', 'choke_infant'].includes(
        S.protocol
      )
    ) {
      n.insertAdjacentHTML(
        'afterbegin',
        '<button class="primary" onclick="capture(\'Tình trạng đường thở\',\'Dị vật đã ra\');openProtocol(\'choke_clear\')">Dị vật đã ra</button><button class="danger" onclick="changed()">Nạn nhân bất tỉnh / thở bất thường</button>'
      )
      if (S.protocol === 'choke_mild')
        n.insertAdjacentHTML(
          'afterbegin',
          '<button class="danger" onclick="question(\'choke_age\')">Không còn ho hiệu quả / không nói được</button>'
        )
    }
  }
}
// Library of unsafe myths, clearly separated from treatment instructions.
const myths = [
  [
    'Chích kim đầu ngón tay / dái tai khi đột quỵ',
    'Không làm. Không có lợi ích điều trị được chứng minh; làm chậm cấp cứu. Gọi 115 ngay.',
    'strokevn',
  ],
  [
    'Chích máu để đo đường huyết',
    'Khác hoàn toàn với chích máu chữa đột quỵ. Chỉ dùng thiết bị đo phù hợp khi biết sử dụng; không trì hoãn cấp cứu.',
    'aha',
  ],
  [
    'Nhét thìa hoặc ngón tay vào miệng người co giật',
    'Không làm. Bảo vệ đầu, dọn vật nguy hiểm, theo dõi thời gian và hô hấp.',
    'seizure',
  ],
  [
    'Móc họng khi hóc dị vật',
    'Không móc mù; có thể đẩy dị vật sâu hơn.',
    'bls25',
  ],
  [
    'Đổ nước đường vào miệng người bất tỉnh',
    'Không làm vì nguy cơ sặc. Gọi 115.',
    'glucose',
  ],
  [
    'Dùng thuốc hạ sốt chữa sốc nhiệt',
    'Không thay thế làm mát khẩn cấp và gọi 115.',
    'heat',
  ],
  ['Dốc ngược người đuối nước', 'Không làm; làm chậm hồi sức.', 'special25'],
  [
    'Chườm đá trực tiếp / bôi kem đánh răng lên bỏng',
    'Không làm. Làm mát bằng nước mát chảy.',
    'burn',
  ],
  [
    'Rạch hoặc hút nọc rắn',
    'Không làm. Hạn chế vận động và chuyển cấp cứu.',
    'rcguide',
  ],
  ['Gây nôn khi ngộ độc', 'Không tự gây nôn; làm theo tổng đài.', 'poison'],
  [
    'Ngửa đầu khi chảy máu mũi',
    'Không làm. Cúi nhẹ về trước, bóp phần mềm mũi.',
    'nose',
  ],
]
const oldAbout3 = about
about = function () {
  return (
    oldAbout3() +
    `<section class="panel"><h2>Những cách sơ cứu sai cần tránh</h2>${myths.map((m) => `<div class="panel"><h3>${esc(m[0])}</h3><p>${esc(m[1])}</p>${src(m[2])}</div>`).join('')}</section>`
  )
}
const oldHome3 = flowHome
flowHome = function () {
  return oldHome3().replace(
    '<div class="tiles">',
    '<button class="entry outline" onclick="go(\'about\')">11 cách sơ cứu sai cần tránh →</button><div class="tiles">'
  )
}

// Preserve context when a patient becomes unresponsive; do not lose the cause-specific safety advice.
addP('heat_uncon', 'Nghi sốc nhiệt · bất tỉnh còn thở', 'heat', true, [
  st(
    'Gọi 115, bảo vệ đường thở và làm mát',
    'Nếu không nghi chấn thương cột sống, đặt nằm nghiêng an toàn. Nếu nghi chấn thương, làm theo tổng đài để bảo vệ đường thở. Đưa khỏi nóng nếu an toàn, bỏ bớt quần áo, làm ướt da và quạt liên tục. Không cho uống.',
    { continuous: true }
  ),
])
addP('choke_uncon', 'Tắc đường thở · đã bất tỉnh', 'bls25', true, [
  st(
    'Bắt đầu hồi sức và gọi 115',
    'Đặt nạn nhân nằm trên mặt phẳng chắc, gọi 115 bằng loa ngoài, nhờ lấy AED. Bắt đầu CPR bằng ép ngực; tổng đài hướng dẫn kỹ thuật theo tuổi, đặc biệt với trẻ nhỏ. Nếu đã được huấn luyện, khi mở đường thở để thổi ngạt, chỉ lấy dị vật nhìn thấy rõ. Không móc họng mù.',
    {
      continuous: true,
      warning:
        'Không tiếp tục vỗ lưng hoặc ép bụng khi đã bất tỉnh. Không dừng hồi sức để xác nhận từng thao tác.',
    }
  ),
])
Q.breath.desc =
  'Gọi 115 ngay nếu không đáp ứng. Nếu không nghi chấn thương cổ, ngửa đầu nhẹ và nâng cằm để mở đường thở. Nếu nghi chấn thương, làm theo tổng đài. Quan sát nhịp thở tối đa 10 giây; thở ngáp không phải thở bình thường.'
const oldChoose3 = choose
choose = function (i) {
  if (S.node === 'breath') {
    let knownChoke =
      /hóc|tắc đường thở/i.test(S.session?.hint || '') ||
      S.protocol.startsWith('choke_') ||
      F.history.some((x) => x.title === Q.choke_severity.title)
    let knownHeat =
      /say nắng|sốc nhiệt/i.test(S.session?.hint || '') ||
      ['heatstroke', 'heat_exhaust', 'heat_uncon'].includes(S.protocol) ||
      F.history.some((x) => x.title === Q.heat_alert.title)
    if ((i === 1 && knownChoke) || (i === 0 && knownHeat)) {
      let q = Q.breath
      capture(q.title, q.options[i][0], 'Đã trả lời')
      log(q.title + ' → ' + q.options[i][0])
      return openProtocol(i === 1 ? 'choke_uncon' : 'heat_uncon')
    }
  }
  return oldChoose3(i)
}
const oldStart3 = start
start = function (hint = '') {
  S.protocol = ''
  S.step = 0
  return oldStart3(hint)
}

// v0.7: observed signs → suspected condition → available resources → action → reassessment.
const A = { context: '', observations: [], supplies: '', result: '', prior: '' }
const ctx = (title, desc, options) => ({ title, desc, options })
Object.assign(Q, {
  scene: ctx(
    'Bạn có thể tiếp cận nạn nhân an toàn không?',
    'Nhìn nhanh: xe đang chạy, điện, lửa, nước sâu, khí độc hoặc bạo lực.',
    [
      ['Có, an toàn', 'response'],
      ['Không / không chắc', 'unsafe'],
    ]
  ),
  response: ctx(
    'Nạn nhân có tỉnh và trả lời được không?',
    'Gọi lớn, chạm nhẹ vai nếu an toàn. Nếu thấy máu chảy ồ ạt, nhờ người khác ép trực tiếp ngay.',
    [
      ['Có, trả lời được', 'breathawake'],
      ['Không đáp ứng / không chắc', 'breath'],
      ['Máu đang chảy ồ ạt', 'p:bleed'],
    ]
  ),
  breathawake: ctx(
    'Dấu hiệu nguy hiểm nào đang thấy?',
    'Chọn ngay dấu hiệu rõ nhất. Nếu có nhiều dấu hiệu, nhờ người khác hỗ trợ đồng thời.',
    [
      ['Không nói/ho được, nghi mắc thức ăn', 'choke_severity'],
      ['Máu chảy ồ ạt', 'p:bleed'],
      ['Khó thở nặng / tím tái', 'breath_cause'],
      ['Méo mặt, yếu một bên, nói khó đột ngột', 'p:stroke'],
      ['Đau ngực mới xuất hiện / dữ dội', 'p:chest'],
      ['Đang co giật', 'p:seizure'],
      ['Không thấy các dấu hiệu trên', 'context'],
    ]
  ),
  context: ctx(
    'Chuyện gì xảy ra ngay trước đó?',
    'Hỏi nạn nhân hoặc người chứng kiến. Nếu không biết, chọn mục cuối.',
    [
      ['Đột ngột mệt, choáng hoặc gục xuống', 'sudden'],
      ['Vừa ăn, uống hoặc nuốt vật gì', 'food'],
      ['Ở ngoài nắng, nơi nóng, vừa vận động', 'heat_alert'],
      ['Tai nạn xe, té ngã, va đập', 'injury'],
      ['Tiếp xúc điện, nước, lửa, hóa chất', 'exposure'],
      ['Vừa dùng thuốc, bị côn trùng đốt hoặc dị ứng', 'allergy_obs'],
      ['Đang có bệnh nền / vừa dùng thuốc', 'medical'],
      ['Không rõ / tình huống khác', 'observed'],
    ]
  ),
  sudden: ctx(
    'Nạn nhân có biểu hiện nào rõ nhất?',
    'Quan sát mặt, lời nói, da, khả năng đứng và mức tỉnh táo.',
    [
      ['Run tay, đói, vã mồ hôi lạnh, yếu', 'sugar_history'],
      ['Méo miệng, yếu tay, nói khó, mất thăng bằng đột ngột', 'p:stroke'],
      ['Đau ngực, khó thở, hồi hộp dữ dội', 'p:chest'],
      ['Vừa ngất, hiện đã tỉnh hoàn toàn', 'faint_flags'],
      ['Lú lẫn, buồn ngủ bất thường hoặc chưa hồi phục', 'p:unknown'],
      ['Không rõ / khác', 'observed'],
    ]
  ),
  food: ctx(
    'Sau khi ăn hoặc uống, có dấu hiệu gì?',
    'Nếu đang khó thở nặng, không mất thời gian hỏi thêm.',
    [
      ['Ho sặc, không nói được hoặc cảm giác mắc ở họng', 'choke_severity'],
      ['Sưng môi/lưỡi, nổi mề đay kèm khó thở hoặc choáng', 'p:anaphylaxis'],
      ['Nghi nuốt thuốc, hóa chất hoặc chất độc', 'p:poison'],
      ['Đói, run, vã mồ hôi; có thể bỏ bữa', 'sugar_history'],
      ['Khác / không rõ', 'observed'],
    ]
  ),
  medical: ctx(
    'Nạn nhân hoặc người đi cùng biết bệnh nền nào?',
    'Hỏi trực tiếp nếu tỉnh. Có thể xem thẻ/vòng cảnh báo y tế hoặc thuốc được nạn nhân cho phép; không tự đoán thuốc.',
    [
      ['Tiểu đường / dùng insulin hoặc thuốc hạ đường', 'diabetes_signs'],
      ['Hen suyễn, có thuốc xịt cắt cơn, đang khò khè', 'p:asthma'],
      ['Dị ứng nặng trước đây, hiện sưng họng/khó thở/choáng', 'p:anaphylaxis'],
      ['Có tiền sử co giật, vừa lên cơn', 'p:seizure'],
      ['Không rõ / bệnh khác', 'observed'],
    ]
  ),
  diabetes_signs: ctx(
    'Dấu hiệu nào phù hợp nhất?',
    'Không tự cho insulin hoặc đường nếu chưa đánh giá ý thức, khả năng nuốt và triệu chứng.',
    [
      ['Run, đói, vã mồ hôi hoặc đo thấy đường thấp', 'sugar_history'],
      ['Nôn, đau bụng, thở sâu nhanh, rất khát hoặc lú lẫn', 'p:hypergly'],
      ['Méo miệng, yếu một bên, nói khó đột ngột', 'p:stroke'],
      ['Không rõ', 'p:unknown'],
    ]
  ),
  sugar_history: ctx(
    'Có dấu hiệu gợi ý đường huyết thấp không?',
    'Hỏi có tiểu đường, dùng insulin/thuốc hạ đường, bỏ bữa hoặc vừa vận động. Nếu có sẵn máy đo và biết dùng, đo ngay nhưng không trì hoãn xử trí.',
    [
      ['Đo dưới 70 mg/dL (3,9 mmol/L)', 'sugar_safe'],
      [
        'Có tiểu đường/dùng thuốc hạ đường và run, đói, vã mồ hôi',
        'sugar_safe',
      ],
      ['Méo mặt, yếu một bên hoặc nói khó đột ngột', 'p:stroke'],
      ['Không rõ nguyên nhân / không có dấu hiệu rõ', 'p:unknown'],
    ]
  ),
  sugar_safe: ctx(
    'Nạn nhân là người lớn, tỉnh hoàn toàn và nuốt an toàn?',
    'Không thử khả năng nuốt bằng cách đổ nước vào miệng.',
    [
      ['Đúng, người lớn và nuốt an toàn', 'sugar_items'],
      ['Lơ mơ, khó nuốt, co giật hoặc không chắc', 'p:hypo_severe'],
      ['Trẻ em, tỉnh và nuốt được', 'p:hypo_child'],
    ]
  ),
  sugar_items: ctx(
    'Bạn có thể tìm được gì ngay bên cạnh?',
    'Hỏi nạn nhân có mang viên đường, gel glucose, máy đo hoặc thẻ bệnh lý không. Nếu được đồng ý, nhờ người khác lấy đồ trong túi. Không bỏ nạn nhân một mình để đi tìm.',
    [
      ['Viên hoặc gel glucose có nhãn', 'p:hypo_awake'],
      ['Nước trái cây / nước ngọt có đường', 'p:hypo_awake'],
      ['Đường cát hoặc mật ong', 'p:hypo_awake'],
      ['Không có nguồn đường nhanh', 'p:hypo_no_supply'],
    ]
  ),
  faint_flags: ctx(
    'Có dấu hiệu nguy hiểm sau khi ngất không?',
    'Hỏi về đau ngực, khó thở, gắng sức, mang thai, chấn thương đầu hoặc triệu chứng thần kinh.',
    [
      ['Có / không chắc / chưa hồi phục hoàn toàn', 'p:unknown'],
      ['Không thấy, đã tỉnh táo hoàn toàn', 'p:faint'],
      ['Có tiểu đường và run, đói, vã mồ hôi', 'sugar_history'],
    ]
  ),
  injury: ctx(
    'Bạn thấy chấn thương ở đâu?',
    'Không bắt nạn nhân đứng dậy hoặc thử đi lại.',
    [
      ['Máu chảy nhiều / vết thương sâu', 'p:bleed'],
      ['Đập đầu, đau cổ/lưng, lú lẫn', 'p:head'],
      ['Tay/chân biến dạng, sưng đau, khó cử động', 'p:fracture'],
      ['Trầy xước / vết thương nhỏ', 'p:minor_wound'],
      ['Da tái lạnh, choáng, yếu nhiều', 'p:shock'],
      ['Không rõ mức độ', 'p:unknown'],
    ]
  ),
  exposure: ctx(
    'Nạn nhân đã tiếp xúc với gì?',
    'Chỉ tiếp cận khi đã loại bỏ nguy hiểm.',
    [
      ['Điện', 'p:electric'],
      ['Nước, vừa được đưa lên bờ', 'p:drowning'],
      ['Lửa, nước nóng hoặc vật nóng', 'p:burn'],
      ['Hóa chất vào mắt', 'p:chemical_eye'],
      ['Hóa chất trên da', 'p:chemical_skin'],
      ['Khói, khí độc, thuốc hoặc chất lạ', 'p:poison'],
      ['Rắn cắn', 'p:snake'],
      ['Chó mèo cắn', 'p:animal_bite'],
      ['Lạnh kéo dài', 'p:cold'],
      ['Không rõ', 'p:unknown'],
    ]
  ),
  allergy_obs: ctx(
    'Có biểu hiện gì sau khi tiếp xúc?',
    'Sưng họng, khó thở, choáng sau tiếp xúc có thể là phản vệ, kể cả không nổi ban.',
    [
      ['Sưng lưỡi/họng, khó thở, choáng', 'p:anaphylaxis'],
      ['Uống nhầm thuốc / nghi quá liều', 'p:poison'],
      ['Rắn cắn', 'p:snake'],
      ['Chó mèo cắn', 'p:animal_bite'],
      ['Chỉ ngứa hoặc nổi ban nhẹ, vẫn thở bình thường', 'p:allergy_mild'],
      ['Không rõ', 'p:unknown'],
    ]
  ),
  observed: ctx(
    'Dấu hiệu nào đang xuất hiện?',
    'Chọn biểu hiện quan sát được, không cần gọi tên bệnh.',
    [
      ['Run, đói, vã mồ hôi lạnh', 'sugar_history'],
      ['Méo mặt, yếu một bên, nói khó', 'p:stroke'],
      ['Nóng, chóng mặt, mệt sau ở ngoài nắng', 'heat_alert'],
      ['Ho sặc, nghẹn', 'choke_severity'],
      ['Khò khè hoặc khó thở', 'breath_cause'],
      ['Đau ngực', 'p:chest'],
      ['Co giật', 'p:seizure'],
      ['Vừa ngất đã tỉnh', 'faint_flags'],
      ['Chảy máu mũi', 'p:nosebleed'],
      ['Mang thai, đau bụng hoặc chảy máu', 'p:preg_bleed'],
      ['Vết thương / tai nạn', 'injury'],
      ['Không rõ / khác', 'p:unknown'],
    ]
  ),
})
Q.symptom = Q.observed
Q.select_hint = Q.context
addP('hypo_child', 'Nghi hạ đường huyết ở trẻ', 'glucose', false, [
  st(
    'Tìm kế hoạch điều trị của trẻ',
    'Hỏi người chăm sóc và hỗ trợ nguồn glucose theo kế hoạch đã được kê cho trẻ. Không tự áp dụng liều người lớn. Nếu không có kế hoạch hoặc không chắc, liên hệ nhân viên y tế ngay. Nếu trẻ lơ mơ, khó nuốt hoặc co giật, không cho ăn uống và cấp cứu.',
    { continuous: true }
  ),
])
addP(
  'hypo_no_supply',
  'Nghi hạ đường huyết · chưa có đường nhanh',
  'glucose',
  true,
  [
    st(
      'Nhờ người khác tìm nguồn đường nhanh',
      'Cho người bệnh ngồi hoặc nằm an toàn. Nhờ người khác tìm viên glucose, nước trái cây hoặc đồ uống có đường. Không để nạn nhân một mình. Nếu không tìm được ngay, không cải thiện hoặc xấu đi, gọi 115. Không cho uống nếu không nuốt an toàn.',
      { continuous: true }
    ),
  ]
)
addP('allergy_mild', 'Dấu hiệu dị ứng nhẹ · cần theo dõi', 'allergy', false, [
  st(
    'Tránh tác nhân và theo dõi',
    'Ngừng tiếp xúc nếu an toàn. Hỏi tiền sử dị ứng và kế hoạch điều trị cá nhân. Nếu xuất hiện khó thở, sưng họng, choáng hoặc diễn biến nhanh, chuyển sang nhánh phản vệ ngay.',
    { continuous: true }
  ),
])
P.hypo_awake.steps = [
  st(
    'Dùng nguồn đường nhanh đã tìm được',
    'Người lớn tỉnh hoàn toàn và nuốt an toàn: dùng khoảng 15 g đường hấp thu nhanh. Chọn một nguồn phù hợp; không cộng tất cả các lựa chọn.',
    {
      warning:
        'Không dùng đường qua miệng nếu lơ mơ, khó nuốt, co giật hoặc nghi đột quỵ. Không dùng insulin để xử trí tụt đường.',
    }
  ),
  st(
    'Theo dõi và đo lại sau 15 phút',
    'Bắt đầu tính từ khi đã dùng đường. Ở cạnh nạn nhân. Nếu có máy đo và biết sử dụng, đo lại sau 15 phút; nếu còn dưới 70 mg/dL và vẫn tỉnh, nuốt an toàn, có thể lặp lại 15 g. Nếu không cải thiện hoặc xấu đi, cần cấp cứu ngay.',
    { timer: 900, warning: 'Không chờ hết 15 phút khi nạn nhân xấu đi.' }
  ),
  st(
    'Sau khi đường huyết và triệu chứng cải thiện',
    'Nếu tỉnh táo, nuốt an toàn, dùng bữa hoặc món ăn nhẹ phù hợp. Theo dõi tái phát và liên hệ nhân viên y tế để tìm nguyên nhân.',
    { continuous: true }
  ),
]
P.stroke.steps = [
  st(
    'Giữ nạn nhân an toàn và ghi thời điểm',
    'Nghi đột quỵ khi xuất hiện bất thường thần kinh đột ngột. Nhờ người khác gọi 115 ngay. Cho nghỉ ở tư thế dễ chịu, không cho tự lái xe. Ghi giờ khởi phát hoặc lần cuối còn bình thường.',
    {
      note: true,
      warning:
        'Không chích máu đầu ngón tay, cạo gió, cho ăn uống hoặc tự dùng aspirin.',
    }
  ),
  st(
    'Theo dõi ý thức và hô hấp',
    'Nếu có sẵn máy đo đường huyết và biết dùng, có thể đo và báo nhân viên y tế, không làm chậm chuyển viện. Nếu nạn nhân mất đáp ứng hoặc thở bất thường, đánh giá lại ngay.',
    { continuous: true }
  ),
]
const resources = {
  hypo_awake: [
    'Viên/gel glucose theo nhãn đủ khoảng 15 g',
    'Khoảng 120 ml nước trái cây hoặc nước ngọt có đường (không phải loại zero); đối chiếu nhãn',
    '1 thìa canh đường hoặc mật ong nếu tỉnh và nuốt an toàn',
    'Máy đo đường huyết nếu có sẵn và biết dùng',
  ],
  hypo_severe: [
    'Thẻ/vòng cảnh báo tiểu đường',
    'Glucagon của chính nạn nhân nếu được kê và có người biết dùng hoặc được tổng đài hướng dẫn',
  ],
  stroke: [
    'Điện thoại hoặc đồng hồ để ghi giờ khởi phát',
    'Danh sách thuốc hoặc thẻ bệnh lý nếu có sẵn',
  ],
  heatstroke: [
    'Nước mát/lạnh, quạt, khăn ướt',
    'Bồn nước lạnh nếu có thể làm mát an toàn và bảo vệ đường thở; không trì hoãn làm mát',
  ],
  heat_exhaust: [
    'Nơi râm mát, quạt, khăn ướt',
    'Nước mát nếu tỉnh và nuốt an toàn',
  ],
  asthma: ['Thuốc xịt cắt cơn của chính người bệnh', 'Buồng đệm nếu có'],
  anaphylaxis: [
    'Bút adrenaline được kê riêng cho nạn nhân',
    'Thẻ dị ứng / kế hoạch cấp cứu cá nhân',
  ],
  bleed: [
    'Gạc hoặc vải sạch; găng nếu có',
    'Băng cầm máu nếu đã được hướng dẫn',
  ],
  burn: ['Nước mát đang chảy', 'Gạc sạch không dính'],
  cpr: ['AED nếu có người khác đi lấy', 'Mặt phẳng chắc'],
  poison: [
    'Bao bì thuốc/chất độc nếu an toàn',
    'Tên chất, lượng và thời điểm tiếp xúc',
  ],
  fracture: ['Khăn hoặc vật mềm để đỡ chi ở tư thế hiện tại'],
  chemical_eye: ['Nước sạch đang chảy'],
  animal_bite: ['Nước sạch và xà phòng'],
  nosebleed: ['Khăn sạch'],
  choke_adult: ['Không cần dụng cụ; xử trí ngay'],
  choke_infant: ['Không cần dụng cụ; xử trí ngay'],
  choke_preg: ['Không cần dụng cụ; xử trí ngay'],
}
const priorStart4 = start
start = function () {
  Object.assign(A, {
    context: '',
    observations: [],
    supplies: '',
    result: '',
    prior: '',
  })
  return priorStart4('')
}
const priorChoose4 = choose
choose = function (i) {
  let q = Q[S.node],
    o = q?.options[i]
  if (!o) return
  A.observations.push(o[0])
  if (S.node === 'context') A.context = o[0]
  if (S.node === 'sugar_items') A.supplies = o[0]
  return priorChoose4(i)
}
const priorOpen4 = openProtocol
openProtocol = function (id) {
  if (!P[id]) id = 'unknown'
  if (S.protocol !== id || S.view !== 'protocol') {
    capture(
      'Nhận định sơ cứu',
      P[id].title + ' · không phải chẩn đoán xác định',
      'Tình trạng nghi ngờ'
    )
    A.result = id
  }
  return priorOpen4(id)
}
const priorChanged4 = changed
changed = function () {
  A.supplies = ''
  return priorChanged4()
}
flowHome = function () {
  return (
    node({
      num: 1,
      state: 'Bắt đầu đánh giá',
      kind: 'active-node',
      id: 'active-node',
      content: `<div class="flow-home"><div class="tag">SowCuu · v1.2</div><h2>Chuyện gì đang xảy ra?</h2><p>Quan sát hiện trường và nạn nhân. Không cần biết tên bệnh.</p><button class="primary" onclick="start()">Bắt đầu đánh giá nhanh →</button>${S.session ? '<button class="entry outline" onclick="resume()">Đánh giá lại phiên đang xử lý</button>' : ''}</div>`,
    }) +
    arrow(true) +
    futureCard(
      2,
      'Hiện trường và dấu hiệu sống',
      'An toàn · đáp ứng · hô hấp · chảy máu'
    ) +
    arrow(true) +
    futureCard(
      3,
      'Hoàn cảnh và triệu chứng',
      'Hỏi nạn nhân hoặc người chứng kiến'
    ) +
    arrow(true) +
    futureCard(4, 'Tình trạng nghi ngờ', 'Vật dụng cần tìm và thao tác ngay')
  )
}
function hypoOutcome(kind) {
  capture(
    'Đánh giá sau khi bổ sung đường',
    kind === 'repeat'
      ? 'Vẫn thấp, còn tỉnh và nuốt an toàn'
      : kind === 'better'
        ? 'Đã cải thiện'
        : 'Không cải thiện / không chắc',
    'Đánh giá lại'
  )
  log('Đánh giá hạ đường: ' + kind)
  if (kind === 'repeat') {
    S.step = 0
    enterStep()
  } else if (kind === 'better') {
    S.step = 2
    enterStep()
  } else {
    openProtocol('hypo_severe')
  }
}
function sugarFound() {
  capture('Vật dụng', 'Đã tìm được nguồn đường nhanh', 'Đã ghi nhận')
  question('sugar_safe')
}
const priorRender4 = render
render = function () {
  priorRender4()
  if (S.tab !== 'home') return
  let banner = document.querySelector('.flow-alert')
  if (banner) banner.textContent = 'BẢN THỬ NGHIỆM · Chưa thẩm định y khoa'
  let active = document.getElementById('active-node')
  if (!active) return
  if (S.view === 'protocol') {
    let panel = active.querySelector('.panel'),
      stack = active.querySelector('.stack')
    if (panel && S.step === 0 && resources[S.protocol]) {
      let r = resources[S.protocol]
      if (S.protocol === 'hypo_awake' && A.supplies) {
        let idx = A.supplies.includes('Viên')
          ? 0
          : A.supplies.includes('Nước')
            ? 1
            : 2
        r = [r[idx], r[3]]
      }
      panel.insertAdjacentHTML(
        'beforeend',
        `<div class="supply"><div class="tag">Vật dụng cần tìm · nếu có sẵn</div>${r.map((x) => `<div class="supply-row">• ${esc(x)}</div>`).join('')}<small>Không trì hoãn thao tác cứu mạng để đi tìm đồ.</small></div>`
      )
    }
    if (stack && S.protocol === 'hypo_awake' && S.step === 1) {
      let first = stack.querySelector('button.primary')
      if (first) first.remove()
      stack.insertAdjacentHTML(
        'afterbegin',
        `<button class="primary" onclick="hypoOutcome('better')">Đã cải thiện và đường huyết trở lại an toàn</button><button onclick="hypoOutcome('repeat')">Sau 15 phút vẫn đo thấp, còn tỉnh và nuốt an toàn</button><button class="danger" onclick="hypoOutcome('worse')">Không cải thiện / xấu đi / không chắc</button>`
      )
    }
    if (stack && S.protocol === 'hypo_no_supply')
      stack.insertAdjacentHTML(
        'afterbegin',
        '<button class="primary" onclick="sugarFound()">Đã tìm được đường nhanh</button>'
      )
  }
}

// v0.7 — source-indexed community first aid, not a clinical diagnostic system.
Object.assign(sources, {
  gi: [
    'NHS · Nôn và tiêu chảy',
    'https://www.nhs.uk/symptoms/diarrhoea-and-vomiting/',
  ],
  gib: ['NHS · Nôn ra máu', 'https://www.nhs.uk/symptoms/vomiting-blood/'],
  co: [
    'CDC · Ngộ độc CO tại nơi làm việc',
    'https://www.cdc.gov/niosh/carbon-monoxide/about/',
  ],
  insects: [
    'NHS · Côn trùng cắn, đốt',
    'https://www.nhs.uk/conditions/insect-bites-and-stings/',
  ],
  paederus: [
    'Bệnh viện Da liễu Trung ương qua VTV · Kiến ba khoang',
    'https://suckhoe.vtv.vn/suc-khoe/sai-lam-trong-dieu-tri-ton-thuong-do-kien-ba-khoang-20221017230027908.htm',
  ],
  eye: ['NHS · Chấn thương mắt', 'https://www.nhs.uk/conditions/eye-injuries/'],
  opioid: [
    'American Red Cross · Quá liều opioid',
    'https://www.redcross.org/take-a-class/resources/learn-first-aid/opioid-overdose',
  ],
  chestinj: [
    'American Red Cross · Chấn thương ngực',
    'https://www.redcross.org/take-a-class/resources/learn-first-aid/chest-injury',
  ],
  bites: [
    'NHS · Vết cắn người và động vật',
    'https://www.nhs.uk/conditions/animal-and-human-bites/',
  ],
  vnclinical: [
    'Sổ tay điều trị cấp cứu nội khoa · nguồn nhận diện, không dùng để tự điều trị',
    'https://tailieuykhoamienphi.com/wp-content/uploads/2021/08/SO-TAY-DIEU-TRI-CAP-CUU-NOI-KHOA.pdf',
  ],
  vnschool: [
    'Bộ GDĐT · Tài liệu sơ cấp cứu trường học (nguồn đối chiếu)',
    'https://moet.gov.vn/content/tintuc/Lists/News/Attachments/8562/17052023-tai-lieu-huong-dan-1.pdf',
  ],
})
const vnRefs = {
  co_poison: 'Sổ tay nội khoa, tr. 45–47: ngộ độc CO',
  opioid_suspect: 'Sổ tay nội khoa, tr. 35–39: ngộ độc opioid',
  gi_mild: 'Sổ tay nội khoa, tr. 87–92: nôn, tiêu chảy',
  gi_bleed: 'Sổ tay nội khoa, tr. 99–103: chảy máu tiêu hóa',
  abdominal_acute: 'Sổ tay nội khoa, tr. 196–201: đau bụng cấp',
  sting_local: 'HUCE 2024, tr. 24–25: côn trùng đốt',
  paederus: 'HUCE 2024, tr. 26–27: kiến ba khoang',
  chest_trauma:
    'Sổ tay nội khoa, tr. 158–162: tràn khí màng phổi (nhận diện, không tự chẩn đoán)',
  hypo_awake: 'Sổ tay nội khoa, tr. 172–174: hạ đường huyết',
  anaphylaxis: 'Sổ tay nội khoa, tr. 25–28: phản vệ',
  asthma: 'Sổ tay nội khoa, tr. 134–139: hen phế quản',
  hypergly: 'Sổ tay nội khoa, tr. 74–84: biến chứng tăng đường huyết',
  snake: 'HUCE 2024, tr. 25–26: rắn cắn; Sổ tay nội khoa, tr. 55–63',
  burn: 'HUCE 2024, tr. 24: bỏng',
  fracture: 'HUCE 2024, tr. 10–11: gãy xương',
  bleed: 'HUCE 2024, tr. 12–19: cầm máu',
  drowning: 'HUCE 2024, tr. 27–29: đuối nước',
  heatstroke: 'HUCE 2024, tr. 30 trở đi: say nắng, say nóng',
}
addP('co_poison', 'Nghi ngộ độc khí CO / khí độc', 'co', true, [
  st(
    'Ra nơi có không khí sạch',
    'Không vào phòng kín hoặc khu vực có khí độc để cứu người. Nếu nạn nhân tự đi được, hướng dẫn ra ngoài ngay. Nhờ cứu hộ và 115 từ nơi an toàn.',
    {
      warning:
        'CO không có mùi. Không quay lại khu vực nguy hiểm, kể cả khi triệu chứng đã giảm.',
    }
  ),
  watch(),
])
addP(
  'opioid_suspect',
  'Nghi quá liều opioid hoặc thuốc gây ức chế hô hấp',
  'opioid',
  true,
  [
    st(
      'Bảo vệ hô hấp ngay',
      'Nếu còn đáp ứng nhưng rất buồn ngủ hoặc thở chậm, gọi 115. Nếu mất đáp ứng, kiểm tra thở tối đa 10 giây; nếu không thở bình thường, bắt đầu CPR theo tổng đài. Nếu có naloxone và biết dùng, dùng theo nhãn hoặc chỉ dẫn tổng đài, không trì hoãn CPR.',
      {
        warning:
          'Không để nạn nhân ngủ một mình, không cho uống cà phê hoặc gây nôn.',
        continuous: true,
      }
    ),
  ]
)
addP('gi_mild', 'Nôn / tiêu chảy · nguy cơ mất nước', 'gi', false, [
  st(
    'Bù nước nếu tỉnh và nuốt an toàn',
    'Cho uống từng ngụm nhỏ thường xuyên. Nếu có gói oresol, pha đúng lượng nước ghi trên chính gói; không tự thêm đường, muối. Nếu chưa có, dùng nước sạch trong lúc tìm oresol.',
    {
      warning:
        'Không áp dụng nếu nghi nuốt hóa chất/thuốc độc, nôn máu, đau bụng dữ dội hoặc lơ mơ.',
    }
  ),
  st(
    'Đánh giá khả năng giữ nước',
    'Nếu nôn liên tục không giữ được nước, tiểu rất ít, chóng mặt dai dẳng, trẻ nhỏ hoặc người già yếu, cần đánh giá y tế sớm. Nếu lú lẫn, ngất hoặc thở bất thường, xử trí cấp cứu ngay.',
    { continuous: true }
  ),
])
addP('gi_bleed', 'Nghi xuất huyết tiêu hóa', 'gib', true, [
  st(
    'Giữ an toàn, không cho ăn uống',
    'Nôn ra máu, chất như bã cà phê hoặc phân đen kèm choáng có thể là chảy máu bên trong. Gọi 115 nếu đang chảy máu, có choáng, đau bụng hoặc tình trạng nặng. Không tự dùng aspirin hay thuốc giảm đau chống viêm.',
    { warning: 'Không cố cho uống nước hoặc oresol khi đang nôn máu.' }
  ),
  watch(),
])
addP(
  'abdominal_acute',
  'Đau bụng cấp · cần loại trừ nguyên nhân nguy hiểm',
  'aha',
  true,
  [
    st(
      'Cho nghỉ ở tư thế dễ chịu',
      'Đau bụng đột ngột dữ dội, bụng cứng, choáng, hoặc có thai kèm đau/chảy máu cần đánh giá cấp cứu ngay. Không ấn mạnh bụng để thử bệnh, không tự dùng thuốc nhuận tràng hay cho ăn uống trong lúc chờ chỉ dẫn.'
    ),
    watch(),
  ]
)
addP('sting_local', 'Côn trùng đốt · phản ứng tại chỗ', 'insects', false, [
  st(
    'Làm sạch vùng da',
    'Nếu thấy ngòi ong, lấy ra nhanh và cẩn thận. Rửa bằng nước và xà phòng. Dùng túi lạnh bọc vải lên vùng sưng khoảng 20 phút.',
    {
      timer: 1200,
      warning:
        'Nếu sưng lưỡi/họng, khó thở, choáng hoặc nổi ban toàn thân kèm triệu chứng khác, chuyển ngay sang phản vệ.',
    }
  ),
  watch(),
])
addP('paederus', 'Nghi viêm da do kiến ba khoang', 'paederus', false, [
  st(
    'Rửa sạch dịch tiết trên da',
    'Nếu còn côn trùng, gạt nhẹ bằng giấy; không đập hoặc miết trên da. Rửa vùng tiếp xúc nhẹ nhàng bằng nước sạch và xà phòng; rửa tay sau đó.',
    {
      warning:
        'Không chà xát, chọc vỡ bóng nước hoặc tự bôi thuốc kháng sinh/corticoid.',
    }
  ),
  st(
    'Theo dõi tổn thương',
    'Nếu dính vào mắt, rửa mắt ngay và đi khám khẩn. Nếu bóng nước lan rộng, đau nhiều hoặc tổn thương mặt, đi khám da liễu.',
    { continuous: true }
  ),
])
addP('eye_pierced', 'Nghi tổn thương xuyên mắt', 'eye', true, [
  st(
    'Không chạm hoặc lấy vật cắm trong mắt',
    'Không dụi, không ép lên mắt, không tự lấy dị vật xuyên mắt. Giữ đầu yên, bảo vệ mắt không tạo áp lực và tìm cấp cứu ngay.',
    {
      warning:
        'Không nhỏ thuốc hoặc rửa mắt khi nghi vật xuyên thủng nhãn cầu; hóa chất đơn thuần là nhánh xử trí khác.',
    }
  ),
  watch(),
])
addP('eye_dust', 'Bụi / dị vật nông trong mắt', 'eye', false, [
  st(
    'Rửa nhẹ bằng nước sạch',
    'Không dụi mắt. Nếu chỉ là bụi nhỏ và không nghi vật xuyên mắt, rửa bằng nước sạch. Nếu đau, nhìn mờ, không lấy được bằng rửa nhẹ, hoặc vật bắn vào ở tốc độ cao, đi khám khẩn.',
    { continuous: true }
  ),
])
addP(
  'chest_trauma',
  'Chấn thương ngực · nguy cơ tổn thương bên trong',
  'chestinj',
  true,
  [
    st(
      'Hạn chế di chuyển, hỗ trợ thở',
      'Để nạn nhân ở tư thế dễ thở nếu tỉnh; không ép họ nằm hoặc đi lại. Gọi 115. Nếu có vật cắm vào ngực, không rút. Không tự bịt kín vết thương ngực bằng nhựa hoặc băng kín khí.',
      {
        warning:
          'Không tự chọc kim vào ngực. Nếu khó thở tăng, mất đáp ứng hoặc thở bất thường, đánh giá lại ngay.',
        continuous: true,
      }
    ),
  ]
)
addP('amputation', 'Đứt lìa ngón / chi', 'bites', true, [
  st(
    'Cầm máu ngay',
    'Dùng gạc/vải sạch ép mạnh vào vị trí chảy máu. Nhờ người khác gọi 115; không dừng ép để đi tìm phần đứt lìa.',
    { continuous: true }
  ),
  st(
    'Nhờ người khác bảo quản phần đứt lìa',
    'Nếu tìm được, bọc sạch, cho vào túi kín, đặt túi trong thùng có nước đá. Không đặt mô trực tiếp lên đá hoặc ngâm mô trong nước. Mang theo khi bàn giao.',
    { warning: 'Cầm máu và bảo vệ nạn nhân luôn ưu tiên hơn tìm phần đứt lìa.' }
  ),
  watch(),
])
addP('unknown_drug', 'Nghi ngộ độc thuốc / hóa chất chưa rõ', 'poison', true, [
  st(
    'Ngừng tiếp xúc và giữ bao bì',
    'Không gây nôn, không tự cho uống sữa, nước muối, than hoạt hoặc chất trung hòa. Nhờ người khác tìm tên thuốc, thời điểm, lượng đã dùng và giữ bao bì nếu an toàn. Liên hệ cấp cứu hoặc chống độc ngay.',
    {
      warning:
        'Không tự đi vào vùng khí độc. Nếu lơ mơ, co giật hoặc thở bất thường, đánh giá hô hấp ngay.',
      continuous: true,
    }
  ),
])
Object.assign(resources, {
  co_poison: [
    'Không khí sạch, vị trí ngoài vùng nguy hiểm',
    'Thông tin nguồn đốt: bếp than, máy phát, xe trong phòng kín',
  ],
  opioid_suspect: [
    'Bao bì thuốc nếu nhìn thấy, không chạm kim tiêm',
    'Naloxone nếu sẵn và có người biết dùng',
    'AED nếu có người khác lấy',
  ],
  gi_mild: [
    'Gói oresol, nước sạch, cốc có vạch đo',
    'Không tự ước lượng lượng nước pha gói',
  ],
  gi_bleed: ['Thông tin thuốc chống đông, giờ bắt đầu, số lần nôn máu'],
  abdominal_acute: ['Thông tin vị trí đau, lúc bắt đầu, thai kỳ nếu có'],
  sting_local: ['Nước, xà phòng, túi lạnh bọc vải'],
  paederus: ['Giấy để gạt côn trùng, nước sạch, xà phòng'],
  eye_dust: ['Nước sạch'],
  eye_pierced: ['Vật bảo vệ mắt không đè lên nhãn cầu nếu có'],
  chest_trauma: ['Không cần dụng cụ đặc biệt; không bịt kín khí vết thương'],
  amputation: [
    'Gạc/vải sạch để ép máu',
    'Túi kín, nước đá — nhờ người khác chuẩn bị',
  ],
  unknown_drug: ['Vỏ thuốc, chai lọ, ảnh nhãn nếu an toàn'],
})
Object.assign(Q, {
  gi_observe: ctx(
    'Nạn nhân đang bị nôn, tiêu chảy hay đau bụng?',
    'Hỏi thời điểm, số lần, có ai ăn cùng cũng bị không. Nếu nghi uống hóa chất/thuốc độc, chọn nhánh ngộ độc.',
    [
      [
        'Nôn ra máu, chất đen như bã cà phê hoặc phân đen kèm choáng',
        'p:gi_bleed',
      ],
      ['Đau bụng đột ngột dữ dội, bụng cứng hoặc ngất', 'p:abdominal_acute'],
      ['Nôn / tiêu chảy, vẫn tỉnh và uống được', 'gi_drink'],
      ['Lơ mơ, ngất, không giữ được nước hoặc rất yếu', 'p:unknown'],
      ['Nghi uống thuốc, hóa chất, chất độc', 'toxin_kind'],
    ]
  ),
  gi_drink: ctx(
    'Có thể uống an toàn và giữ được từng ngụm nước không?',
    'Không thử cho uống nếu lơ mơ hoặc khó nuốt.',
    [
      ['Có, tỉnh hoàn toàn, không đau bụng dữ dội hoặc nôn máu', 'p:gi_mild'],
      ['Không / không chắc', 'p:unknown'],
    ]
  ),
  toxin_kind: ctx(
    'Có dấu vết tiếp xúc với chất gì?',
    'Hỏi người chứng kiến, quan sát từ nơi an toàn. Không ngửi, nếm, chạm hóa chất hoặc kim tiêm.',
    [
      [
        'Bếp than, máy phát, xe nổ máy trong phòng kín; đau đầu/choáng hoặc nhiều người cùng bị',
        'p:co_poison',
      ],
      [
        'Nghi opioid / thuốc giảm đau mạnh; rất buồn ngủ hoặc thở chậm',
        'p:opioid_suspect',
      ],
      ['Thuốc, rượu không rõ, hóa chất, thuốc trừ sâu', 'p:unknown_drug'],
      ['Hóa chất vào mắt', 'p:chemical_eye'],
      ['Hóa chất trên da', 'p:chemical_skin'],
      ['Không xác định được', 'p:unknown_drug'],
    ]
  ),
  bite_kind: ctx(
    'Có biểu hiện gì sau khi bị cắn hoặc đốt?',
    'Không cần bắt con vật. Quan sát vùng da và tình trạng toàn thân.',
    [
      ['Khó thở, sưng họng, choáng', 'p:anaphylaxis'],
      ['Rắn cắn hoặc không rõ loài rắn', 'p:snake'],
      ['Chó/mèo cắn, xước da', 'p:animal_bite'],
      ['Ong hoặc côn trùng đốt, chỉ sưng đau tại chỗ', 'p:sting_local'],
      ['Kiến ba khoang / vệt đỏ bỏng rát sau khi tiếp xúc', 'p:paederus'],
      ['Không rõ / triệu chứng toàn thân', 'p:unknown'],
    ]
  ),
  eye_kind: ctx(
    'Mắt bị tổn thương như thế nào?',
    'Không dụi mắt; nếu nghi xuyên mắt, không cố rửa hoặc lấy vật.',
    [
      ['Hóa chất bắn vào mắt, không có vật xuyên mắt', 'p:chemical_eye'],
      [
        'Vật nhọn cắm vào mắt / va đập mạnh / vật bay tốc độ cao / nhìn mờ',
        'p:eye_pierced',
      ],
      ['Chỉ bụi nhỏ, không đau nhiều, nhìn bình thường', 'p:eye_dust'],
      ['Không rõ', 'p:unknown'],
    ]
  ),
})
function addOption(q, label, target) {
  let opts = Q[q].options
  opts.splice(Math.max(0, opts.length - 1), 0, [label, target])
}
addOption('context', 'Nôn, tiêu chảy, đau bụng', 'gi_observe')
addOption('context', 'Bị côn trùng / động vật cắn hoặc đốt', 'bite_kind')
addOption(
  'context',
  'Phòng kín, bếp than, khói khí, nghi uống nhầm thuốc',
  'toxin_kind'
)
addOption('context', 'Mắt bị đau, dị vật, hóa chất', 'eye_kind')
addOption('observed', 'Nôn, tiêu chảy hoặc đau bụng', 'gi_observe')
addOption(
  'observed',
  'Đau đầu/choáng sau ở phòng kín hoặc nhiều người cùng bị',
  'toxin_kind'
)
addOption('observed', 'Mắt đau hoặc dị vật', 'eye_kind')
addOption('observed', 'Bị cắn, đốt, tổn thương da', 'bite_kind')
addOption(
  'injury',
  'Đập ngực, khó thở hoặc có vết thương ngực',
  'p:chest_trauma'
)
addOption('injury', 'Ngón hoặc chi đứt lìa', 'p:amputation')
addOption('injury', 'Chấn thương mắt', 'eye_kind')
addOption('food', 'Nôn, tiêu chảy, đau bụng sau ăn', 'gi_observe')
Q.food.options = Q.food.options.map((o) =>
  o[1] === 'p:poison' ? [o[0], 'toxin_kind'] : o
)
Q.exposure.options = Q.exposure.options.map((o) =>
  o[1] === 'p:poison' ? [o[0], 'toxin_kind'] : o
)
addOption('exposure', 'Côn trùng đốt / kiến ba khoang', 'bite_kind')
Q.allergy_obs.options = Q.allergy_obs.options.map((o) =>
  o[1] === 'p:poison' ? [o[0], 'toxin_kind'] : o
)
addOption('allergy_obs', 'Côn trùng đốt, chỉ sưng đau tại chỗ', 'bite_kind')
addOption(
  'sudden',
  'Đau đầu, choáng, buồn nôn trong phòng kín hoặc nhiều người cùng bị',
  'toxin_kind'
)
// Major symptoms have priority over context collection.
Q.breathawake.options.splice(Q.breathawake.options.length - 1, 0, [
  'Lú lẫn mới xuất hiện / rất buồn ngủ / khó đánh thức',
  'p:unknown',
])
// On a worsening patient preserve the ability to enter the immediate assessment at any time.
const about5 = about
about = function () {
  return (
    `<section class="panel"><div class="tag">Hồ sơ nguồn · v0.7</div><h2>Tài liệu Việt Nam</h2><p><b>HUCE 2024</b> · QĐ 811/ĐHXD HN, 31/05/2024. Đã đọc mục lục và phần sơ cứu liên quan; đối chiếu phạm vi người dân.</p><p><b>Sổ tay điều trị cấp cứu nội khoa</b> · 246 trang. Đã đọc mục lục và dùng để lập chỉ mục bệnh lý; không chuyển y lệnh, liều tiêm hoặc thủ thuật bệnh viện thành hướng dẫn cộng đồng.</p><p><b>Sổ tay cấp cứu 115</b> · chưa truy cập được nội dung do trang yêu cầu xác minh. <a href="https://file.medinet.gov.vn//data/soytehcm/tytphuonganlac/attachments/2026_3/so_tay_cap_cuu_115_53202615.pdf" target="_blank" rel="noopener">Mở nguồn</a>.</p><p>Các bước sơ cứu được diễn đạt lại, đối chiếu hướng dẫn cộng đồng AHA/Red Cross/NHS/CDC. Chưa có bác sĩ thẩm định.</p><details><summary>Chỉ mục tài liệu theo tình huống (${Object.keys(vnRefs).length})</summary>${Object.entries(
      vnRefs
    )
      .map(
        ([id, r]) =>
          '<p><b>' + esc(P[id]?.title || id) + '</b><br>' + esc(r) + '</p>'
      )
      .join('')}</details></section>` + about5()
  )
}
const render5 = render
render = function () {
  render5()
  if (
    S.tab === 'home' &&
    S.view === 'protocol' &&
    S.step === 0 &&
    vnRefs[S.protocol]
  ) {
    let panel = document.querySelector('#active-node .panel')
    if (panel)
      panel.insertAdjacentHTML(
        'beforeend',
        `<details class="source"><summary>Đối chiếu tài liệu Việt Nam</summary><p>${esc(vnRefs[S.protocol])}</p><p>Chỉ mục tham khảo; không áp dụng phác đồ nội viện.</p></details>`
      )
  }
}

// v0.7: separate responsiveness, ventilation, speech and context; never infer consciousness from speech.
Object.assign(sources, {
  stroke: [
    'CDC · Dấu hiệu đột quỵ',
    'https://www.cdc.gov/stroke/signs-symptoms/',
  ],
  stroke_care: [
    'Red Cross · Sơ cứu đột quỵ',
    'https://www.redcross.org/take-a-class/resources/learn-first-aid/stroke',
  ],
})
Object.assign(Q, {
  scene: ctx(
    'Bạn có thể đến gần nạn nhân an toàn không?',
    'Nhìn xung quanh: xe đang chạy, dây điện, lửa, khói, khí độc, nước sâu. Không tự đặt mình vào nguy hiểm.',
    [
      ['Có, tôi có thể đến gần', 'response'],
      ['Không / tôi không chắc', 'unsafe'],
    ]
  ),
  response: ctx(
    'Nạn nhân có phản ứng khi bạn gọi hoặc chạm nhẹ không?',
    'Gọi to và chạm nhẹ vai. Quan sát xem họ có mở mắt, nhìn về phía bạn, gật đầu, cử động có chủ đích hay không. Không cần nói được mới tính là có phản ứng. Nếu máu chảy ồ ạt, nhờ người khác ép vết thương ngay.',
    [
      ['Có phản ứng, kể cả không nói được', 'awake_breath'],
      ['Không phản ứng / không chắc', 'breath'],
      ['Máu đang chảy ồ ạt', 'p:bleed'],
    ]
  ),
  awake_breath: ctx(
    'Nạn nhân đang thở như thế nào?',
    'Nhìn ngực, nghe tiếng thở và xem họ có phải gắng sức để thở không. Không dựa riêng vào việc nói được hay không.',
    [
      ['Thở đều, không thấy gắng sức', 'breathawake'],
      ['Vẫn tỉnh nhưng thở rất khó, thở rít hoặc tím môi', 'breath_cause'],
      ['Vừa sặc/nghẹn, ho yếu hoặc không có luồng khí', 'choke_severity'],
      ['Không còn phản ứng / chỉ thở ngáp / không chắc', 'breath'],
    ]
  ),
  breathawake: ctx(
    'Bạn thấy dấu hiệu nào sau đây?',
    'Chọn dấu hiệu nguy hiểm đang có. Đột ngột không nói được dù vẫn mở mắt và thở được cũng là dấu hiệu nghi đột quỵ.',
    [
      ['Đột ngột không nói được, nói đớ hoặc không hiểu lời', 'p:stroke'],
      [
        'Méo mặt, yếu/tê một bên, đột ngột mất thăng bằng hoặc nhìn bất thường',
        'p:stroke',
      ],
      ['Máu chảy ồ ạt', 'p:bleed'],
      ['Đau ngực mới xuất hiện hoặc dữ dội', 'p:chest'],
      ['Đang co giật', 'p:seizure'],
      ['Lú lẫn mới xuất hiện, khó giữ tỉnh táo', 'altered_context'],
      ['Vừa sặc thức ăn hoặc có dấu hiệu nghẹn', 'choke_severity'],
      ['Khó thở rõ rệt', 'breath_cause'],
      ['Không thấy các dấu hiệu này', 'context'],
    ]
  ),
  altered_context: ctx(
    'Nạn nhân trở nên lú lẫn hoặc rất buồn ngủ trong hoàn cảnh nào?',
    'Đây là dấu hiệu nguy hiểm. Nhờ người khác gọi 115 ngay. Không cho ăn uống. Nếu mất phản ứng, đánh giá hô hấp ngay.',
    [
      ['Sau ở nơi nóng hoặc vận động trong nóng', 'p:heatstroke'],
      [
        'Có tiểu đường, đường huyết thấp hoặc dùng thuốc hạ đường',
        'p:hypo_severe',
      ],
      ['Sau chấn thương đầu', 'p:head'],
      ['Trong phòng kín có bếp than, máy phát, khói', 'p:co_poison'],
      ['Nghi dùng quá liều thuốc', 'toxin_kind'],
      [
        'Đột ngột khó nói, méo mặt, yếu một bên hoặc không hiểu lời',
        'p:stroke',
      ],
      ['Không rõ nguyên nhân', 'p:unknown'],
    ]
  ),
  breath_cause: ctx(
    'Khó thở bắt đầu trong hoàn cảnh nào?',
    'Nếu thở rất khó, tím môi hoặc kiệt sức, nhờ người khác gọi 115 ngay. Không ép bụng chỉ vì nạn nhân không nói được.',
    [
      ['Vừa ăn hoặc có vật mắc, ho yếu/không ho được', 'choke_severity'],
      [
        'Sưng môi/lưỡi, họng hoặc choáng sau tiếp xúc dị nguyên',
        'p:anaphylaxis',
      ],
      ['Có hen, đang khò khè giống cơn hen trước', 'p:asthma'],
      ['Đau ngực, nặng ngực hoặc không rõ nguyên nhân', 'p:chest'],
      [
        'Đột ngột không nói/không hiểu lời, méo mặt hoặc yếu một bên',
        'p:stroke',
      ],
      ['Sau tai nạn hoặc va đập ngực', 'p:chest_trauma'],
      ['Sau khói, khí độc, thuốc', 'toxin_kind'],
      ['Không còn phản ứng', 'breath'],
    ]
  ),
  choke_severity: ctx(
    'Có dấu hiệu vật mắc làm cản luồng khí không?',
    'Hóc dị vật thường xảy ra khi ăn hoặc đưa vật vào miệng, kèm ho sặc, ho yếu, thở rít hoặc không đưa được không khí vào. Không nói được đơn độc không đủ để kết luận hóc.',
    [
      ['Có dấu hiệu hóc nhưng vẫn ho mạnh, vẫn lấy được hơi', 'p:choke_mild'],
      [
        'Có dấu hiệu hóc và ho rất yếu/không ho được, không lấy được hơi hoặc tím tái',
        'choke_age',
      ],
      ['Vẫn thở đều nhưng đột ngột không nói được / nói đớ', 'p:stroke'],
      ['Đã mất phản ứng', 'breath'],
      ['Dị vật đã ra, thở bình thường', 'p:choke_clear'],
      ['Không chắc có hóc, đang khó thở', 'p:chest'],
    ]
  ),
  sugar_safe: ctx(
    'Nạn nhân có tỉnh hoàn toàn và có thể tự nuốt an toàn không?',
    'Không cho uống thử để kiểm tra. Nếu đột ngột khó nói, khó hiểu lời, méo mặt hoặc yếu một bên, chọn nghi đột quỵ trước; nếu có máy đo đường huyết, báo kết quả cho cấp cứu.',
    [
      ['Có, là người lớn, tự nuốt an toàn', 'sugar_items'],
      ['Lơ mơ, khó nuốt, co giật hoặc không chắc', 'p:hypo_severe'],
      ['Trẻ em tỉnh và tự nuốt được', 'p:hypo_child'],
      ['Có dấu hiệu thần kinh đột ngột như trên', 'p:stroke'],
    ]
  ),
  heat_alert: ctx(
    'Nạn nhân có dấu hiệu bất thường sau khi ở nơi nóng không?',
    'Sốc nhiệt có thể xảy ra dù vẫn đổ mồ hôi. Không cần đợi đo nhiệt độ.',
    [
      [
        'Vẫn có phản ứng nhưng lú lẫn, nói bất thường hoặc rất nóng và bất thường',
        'p:heatstroke',
      ],
      ['Tỉnh hoàn toàn, mệt, chóng mặt, ra nhiều mồ hôi', 'p:heat_exhaust'],
      ['Không phản ứng / thở bất thường', 'breath'],
      ['Đang co giật sau tiếp xúc nóng', 'p:heatstroke'],
    ]
  ),
})
for (const id of ['breath_cause', 'altered_context', 'choke_severity'])
  Q[id].critical = true
Q.breath.title = 'Nạn nhân không phản ứng: có thở bình thường không?'
Q.breath.desc =
  'Nhờ người khác gọi 115 ngay hoặc bật loa ngoài. Mở đường thở nếu biết cách; nếu nghi chấn thương cổ, làm theo tổng đài. Quan sát ngực và nhịp thở không quá 10 giây. Thở ngáp từng cơn không phải thở bình thường. Không dò mạch.'
Q.age.title = 'Bắt đầu hồi sức ngay: nạn nhân thuộc nhóm nào?'
Q.age.desc =
  'Không chờ chọn xong mới bắt đầu CPR. Nhờ người lấy AED, bật loa ngoài và làm theo tổng đài.'
Q.age.options = [
  ['Người lớn / thanh thiếu niên', 'p:cpr'],
  ['Trẻ em hoặc trẻ dưới 1 tuổi', 'p:cpr_child'],
  ['Đuối nước / nghi ngạt / không rõ tuổi', 'p:cpr_special'],
]
addP('cpr_child', 'Nghi ngừng tuần hoàn ở trẻ', 'ped25', true, [
  st(
    'Bắt đầu hồi sức ngay',
    'Đặt trẻ nằm ngửa trên mặt phẳng chắc. Gọi 115 bằng loa ngoài và nhờ lấy AED. Bắt đầu ép ngực 100–120 lần/phút, sâu khoảng một phần ba bề dày lồng ngực (khoảng 4 cm ở trẻ dưới 1 tuổi, 5 cm ở trẻ lớn hơn). Nếu biết kỹ thuật, phối hợp thổi ngạt theo hướng dẫn tổng đài; nếu chưa biết, ép ngực ngay trong khi nhận hướng dẫn.',
    {
      continuous: true,
      metro: true,
      warning:
        'Không dừng để xác nhận bước. Trẻ em cần thổi ngạt nếu người cứu có khả năng.',
    }
  ),
])
addP(
  'cpr_special',
  'Nghi ngừng tuần hoàn · đuối nước / ngạt / chưa rõ tuổi',
  'special25',
  true,
  [
    st(
      'Bắt đầu hồi sức phù hợp ngay',
      'Khi đã ở nơi an toàn, gọi 115 bằng loa ngoài, nhờ lấy AED. Bắt đầu CPR nếu không phản ứng và không thở bình thường. Nếu biết kỹ thuật, phối hợp thổi ngạt, đặc biệt trong đuối nước hoặc ngạt. Nếu không thể thổi ngạt, bắt đầu ép ngực ngay và làm theo tổng đài về kỹ thuật theo độ tuổi.',
      {
        continuous: true,
        metro: true,
        warning:
          'Không dốc ngược để tống nước, không chờ hoàn tất bảng câu hỏi.',
      }
    ),
  ]
)
Q.food.options[0] = [
  'Ho sặc khi ăn, ho yếu hoặc có cảm giác vật mắc ở họng',
  'choke_severity',
]
Q.sudden.options[1] = [
  'Đột ngột không nói được, nói đớ, không hiểu lời, méo mặt, yếu một bên hoặc mất thăng bằng',
  'p:stroke',
]
Q.observed.options[1] = [
  'Đột ngột không nói được/nói đớ, không hiểu lời, méo mặt hoặc yếu một bên',
  'p:stroke',
]
Q.sugar_history.options[2] = [
  'Đột ngột không nói được, nói đớ, không hiểu lời, méo mặt hoặc yếu một bên',
  'p:stroke',
]
Q.diabetes_signs.options[2] = [
  'Đột ngột không nói được, nói đớ, không hiểu lời, méo mặt hoặc yếu một bên',
  'p:stroke',
]
Q.sugar_history.options[1] = [
  'Có tiểu đường/dùng thuốc hạ đường kèm run, đói, vã mồ hôi',
  'sugar_safe',
]
P.stroke.source = 'stroke_care'
P.stroke.title = 'Nghi đột quỵ / tai biến mạch máu não'
P.stroke.steps = [
  st(
    'Cho nghỉ an toàn, ghi giờ và nhờ gọi cấp cứu',
    'Chỉ một dấu hiệu thần kinh xuất hiện đột ngột cũng đủ để nghi đột quỵ: không nói được, nói đớ, không hiểu lời, méo mặt, yếu một bên, mất thăng bằng hoặc nhìn bất thường. Không chờ đủ các dấu hiệu. Nhờ người khác gọi 115 ngay. Ghi giờ bắt đầu hoặc lần cuối còn bình thường, kể cả khi triệu chứng đã hết.',
    {
      note: true,
      warning:
        'Không chích máu ngón tay/dái tai, không cạo gió, không cho ăn uống hoặc tự dùng aspirin.',
    }
  ),
  st(
    'Bảo vệ đường thở, theo dõi',
    'Cho nghỉ ở tư thế dễ chịu. Nếu giảm tỉnh táo hoặc chảy dãi/khó nuốt mà vẫn thở bình thường, đặt nằm nghiêng nếu không nghi chấn thương. Nếu có máy đo đường huyết và biết dùng, đo và báo kết quả nhưng không trì hoãn cấp cứu. Nếu mất phản ứng hoặc thở bất thường, đánh giá lại ngay.',
    { continuous: true }
  ),
]
P.choke_mild.steps[0].text =
  'Nếu còn ho mạnh, khuyến khích tự ho. Không vỗ lưng hoặc ép bụng khi ho còn hiệu quả. Nếu ho yếu dần, không lấy được hơi hoặc tím tái trong tình huống hóc, chuyển xử trí tắc nghẽn nặng.'
P.seizure.steps[1].text =
  'Nếu cơn đã dừng, kiểm tra phản ứng và thở ngay. Nếu không phản ứng và không thở bình thường, bắt đầu CPR. Nếu còn thở nhưng chưa tỉnh, nằm nghiêng khi không nghi chấn thương. Không cho ăn uống khi chưa tỉnh hoàn toàn.'
P.amputation.steps[0].text =
  'Ép mạnh liên tục bằng gạc/vải sạch lên chỗ chảy máu. Nhờ người khác gọi 115. Chỉ chuyển bước khi người khác tiếp tục cầm máu hoặc đã kiểm soát chảy máu; không bỏ ép máu để tìm phần đứt lìa.'
P.heatstroke.steps[0].text =
  'Đưa ra khỏi nóng nếu an toàn. Bỏ bớt quần áo. Làm mát ngay bằng nước lạnh nếu có thể thực hiện an toàn và bảo vệ đường thở; nếu không, làm ướt da, quạt liên tục và dùng khăn lạnh. Nhờ người khác gọi 115, không đợi xe mới làm mát. Không cho uống nếu ý thức bất thường.'
P.hypo_severe.steps[0].title = 'Không cho ăn uống; tìm glucagon cá nhân nếu có'
P.unknown.steps[0].title = 'Giữ nạn nhân an toàn và tìm trợ giúp'
P.chest.steps[0].title = 'Cho nghỉ ở tư thế dễ thở'
P.anaphylaxis.steps[0].title = 'Hỗ trợ dùng bút adrenaline đã kê ngay'
P.bleed.steps[0].title = 'Ép mạnh liên tục vào chỗ chảy máu'
resources.cpr_child = ['AED nếu có người hỗ trợ', 'Mặt phẳng chắc']
resources.cpr_special = resources.cpr_child
// Preserve known cause on collapse, including the first heat-context answer.
const choose6 = choose
choose = function (i) {
  const o = Q[S.node]?.options[i]
  if (!o) return
  if (S.node === 'choke_severity' && i === 3) A.knownChoke = true
  if (S.node === 'heat_alert') A.knownHeat = true
  if (S.node === 'breath' && i === 1 && A.knownChoke) {
    capture(Q.breath.title, o[0], 'Đã trả lời')
    log(Q.breath.title + ' → ' + o[0])
    return openProtocol('choke_uncon')
  }
  if (S.node === 'breath' && i === 0 && A.knownHeat) {
    capture(Q.breath.title, o[0], 'Đã trả lời')
    log(Q.breath.title + ' → ' + o[0])
    return openProtocol('heat_uncon')
  }
  return choose6(i)
}
const start6 = start
start = function (hint = '') {
  A.knownChoke = false
  A.knownHeat = false
  return start6(hint)
}
const next6 = next
next = function () {
  if (S.protocol === 'seizure' && S.step === 0) {
    capture('Cơn co giật', 'Cơn đã dừng', 'Đánh giá lại')
    return question('response')
  }
  return next6()
}
const render6 = render
render = function () {
  render6()
  if (S.tab !== 'home') return
  const active = document.getElementById('active-node')
  if (!active) return
  if (S.view === 'protocol') {
    const stack = active.querySelector('.stack')
    if (stack && S.protocol === 'choke_mild') {
      const b = stack.querySelector('button[onclick="question(\'choke_age\')"]')
      if (b) b.textContent = 'Ho yếu dần / không lấy được hơi do hóc'
    }
    if (stack && S.protocol === 'hypo_awake' && S.step === 1) {
      const b = stack.querySelector('button[onclick="hypoOutcome(\'repeat\')"]')
      if (b) {
        b.disabled = Date.now() - S.timerStart < 900000
        b.id = 'sugar-repeat'
      }
      const better = stack.querySelector(
        'button[onclick="hypoOutcome(\'better\')"]'
      )
      if (better) {
        better.disabled = Date.now() - S.timerStart < 900000
        better.id = 'sugar-better'
      }
    }
  }
}
const update6 = updateTimer
updateTimer = function () {
  update6()
  if (
    S.protocol === 'hypo_awake' &&
    S.step === 1 &&
    Date.now() - S.timerStart >= 900000
  )
    for (const id of ['sugar-repeat', 'sugar-better']) {
      const b = document.getElementById(id)
      if (b) b.disabled = false
    }
}

// v0.7: progressive disclosure, six demographic groups, separate clinical age rules.
const groups7 = {
  infant: 'Trẻ sơ sinh / nhũ nhi (dưới 1 tuổi)',
  child: 'Trẻ em / nhi đồng (1–12 tuổi)',
  teen: 'Thanh thiếu niên (13–17 tuổi)',
  adult: 'Trưởng thành (18–39 tuổi)',
  middle: 'Trung niên (40–59 tuổi)',
  older: 'Lớn tuổi (từ 60 tuổi)',
  unknown: 'Không rõ độ tuổi',
}
function q7(id, title, desc, opts, critical = false) {
  Q[id] = { title, desc, options: opts, critical }
}
function regroup7(id, groups) {
  const q = Q[id],
    orig = q.options.slice()
  q.options = groups.map((g, i) => {
    if (typeof g === 'number') return orig[g]
    const [label, indices] = g
    const sub = id + '_part' + i
    q7(
      sub,
      label + ' — dấu hiệu cụ thể',
      q.desc,
      indices.map((j) => orig[j]),
      !!q.critical
    )
    return [label, sub]
  })
}
q7(
  'profile_age',
  'Nạn nhân khoảng bao nhiêu tuổi?',
  'Ước lượng bằng quan sát hoặc hỏi người đi cùng. Không cần biết tuổi chính xác.',
  [
    ['Dưới 18 tuổi', 'profile_young'],
    ['Từ 18 tuổi trở lên', 'profile_adult'],
    ['Không rõ', 'profile:unknown'],
  ]
)
q7(
  'profile_young',
  'Nạn nhân thuộc nhóm tuổi nào?',
  'Chọn theo tuổi ước lượng.',
  [
    [groups7.infant, 'profile:infant'],
    [groups7.child, 'profile:child'],
    [groups7.teen, 'profile:teen'],
  ]
)
q7(
  'profile_adult',
  'Nạn nhân thuộc nhóm tuổi nào?',
  'Các mốc này dùng để phân loại thông tin, không thay thế ngưỡng kỹ thuật y khoa.',
  [
    [groups7.adult, 'profile:adult'],
    [groups7.middle, 'profile:middle'],
    [groups7.older, 'profile:older'],
  ]
)
q7(
  'profile_infant',
  'Bé bao nhiêu ngày hoặc tháng tuổi?',
  'Trẻ vừa chào đời cần quy trình hồi sức riêng.',
  [
    ['Vừa chào đời (đang trong cuộc sinh)', 'infant:birth'],
    ['Dưới 28 ngày tuổi, đã qua cuộc sinh', 'infant:newborn'],
    ['Từ 28 ngày đến dưới 1 tuổi / không rõ', 'infant:other'],
  ]
)
Q.response.desc =
  'Gọi to, chạm nhẹ vai; với bé dưới 1 tuổi, chạm nhẹ lòng bàn chân. Quan sát mở mắt, nhìn, khóc hoặc cử động có chủ đích. Không cần nói được. Nếu máu chảy ồ ạt, ép vết thương ngay hoặc nhờ người khác ép.'
Q.awake_breath.options = [
  ['Thở đều, không gắng sức', 'breathawake'],
  ['Khó thở, thở rít, tím môi hoặc nghẹn', 'breath_cause'],
  ['Không còn phản ứng / thở ngáp / không chắc', 'breath'],
]
Q.breathawake.title = 'Có dấu hiệu nguy hiểm nào dễ nhận thấy?'
Q.breathawake.desc =
  'Nếu có bất kỳ dấu hiệu nào dưới đây, chọn nhóm phù hợp ngay. Không cần biết tên bệnh. Máu chảy ồ ạt: ép trực tiếp ngay.'
Q.breathawake.options = [
  [
    'Đột ngột khó nói, méo mặt, yếu một bên, mất thăng bằng; hoặc co giật/lú lẫn',
    'neuro7',
  ],
  ['Máu chảy ồ ạt, đau ngực, khó thở hoặc nghẹn', 'danger7'],
  ['Không thấy các dấu hiệu trên', 'context'],
]
q7(
  'neuro7',
  'Dấu hiệu nào xuất hiện?',
  'Chỉ một dấu hiệu thần kinh đột ngột cũng có thể là đột quỵ. Không nói được không đồng nghĩa với bất tỉnh.',
  [
    [
      'Đột ngột không nói/hiểu lời, méo mặt, yếu một bên hoặc mất thăng bằng/nhìn bất thường',
      'p:stroke',
    ],
    ['Đang co giật', 'p:seizure'],
    ['Mới lú lẫn, rất buồn ngủ, khó giữ tỉnh táo', 'altered_context'],
  ],
  true
)
q7(
  'danger7',
  'Dấu hiệu nguy hiểm nào đang có?',
  'Nếu có nhiều dấu hiệu, nhờ người khác hỗ trợ đồng thời.',
  [
    ['Máu chảy ồ ạt', 'p:bleed'],
    ['Đau ngực mới xuất hiện hoặc dữ dội', 'p:chest'],
    ['Khó thở, nghẹn, ho yếu hoặc tím môi', 'breath_cause'],
  ],
  true
)
Q.breath_cause.options = [
  ['Vừa sặc/nghẹn, ho yếu hoặc không lấy được hơi', 'choke_severity'],
  ['Sưng môi, lưỡi, họng hoặc choáng sau dị ứng', 'p:anaphylaxis'],
  ['Khó thở không rõ do hóc hoặc dị ứng', 'breath_other7'],
]
q7(
  'breath_other7',
  'Nạn nhân còn phản ứng và khó thở do đâu?',
  'Nếu mất phản ứng, đánh giá thở ngay. Khó thở nặng cần hỗ trợ khẩn cấp.',
  [
    ['Không còn phản ứng', 'breath'],
    ['Khò khè, giống cơn hen trước', 'p:asthma'],
    ['Đau ngực, tai nạn, khí độc hoặc không rõ', 'breath_other_detail7'],
  ],
  true
)
q7(
  'breath_other_detail7',
  'Có hoàn cảnh nào sau đây?',
  'Đau ngực, khó thở nặng hoặc không rõ nguyên nhân: cần đánh giá khẩn cấp.',
  [
    ['Va đập ngực', 'p:chest_trauma'],
    ['Khói, khí độc hoặc thuốc', 'toxin_kind'],
    ['Đau ngực / không rõ nguyên nhân', 'p:chest'],
  ],
  true
)
Q.choke_severity.options = [
  ['Vừa hóc, vẫn ho mạnh và lấy được hơi', 'p:choke_mild'],
  ['Vừa hóc, không ho hiệu quả hoặc không lấy được hơi', 'choke_age'],
  [
    'Không giống hai trường hợp trên / đã bất tỉnh / dị vật đã ra',
    'choke_other7',
  ],
]
q7(
  'choke_other7',
  'Nạn nhân hiện có phản ứng và thở thế nào?',
  'Nếu không phản ứng, đánh giá thở ngay; không tiếp tục ép bụng.',
  [
    ['Đã mất phản ứng', 'breath'],
    ['Dị vật đã ra, thở bình thường', 'p:choke_clear'],
    ['Vẫn thở nhưng khó nói hoặc khó thở không rõ', 'choke_unclear7'],
  ],
  true
)
q7(
  'choke_unclear7',
  'Nạn nhân vẫn thở nhưng gặp dấu hiệu nào?',
  'Không ép bụng chỉ vì không nói được.',
  [
    ['Đột ngột không nói/hiểu lời, nói đớ hoặc yếu một bên', 'p:stroke'],
    ['Khó thở không rõ nguyên nhân', 'p:chest'],
    ['Không chắc tình trạng', 'p:unknown'],
  ],
  true
)
Q.choke_age.options = [
  ['Bé dưới 1 tuổi', 'p:choke_infant'],
  ['Từ 1 tuổi trở lên', 'choke_body7'],
  ['Không rõ độ tuổi', 'p:choke_unknown7'],
]
q7(
  'choke_body7',
  'Có thể vòng tay quanh bụng nạn nhân không?',
  'Chỉ dành cho người từ 1 tuổi trở lên đang bị hóc nặng.',
  [
    ['Có, không mang thai giai đoạn muộn', 'p:choke_adult'],
    [
      'Mang thai giai đoạn muộn / không thể vòng tay quanh bụng',
      'p:choke_preg',
    ],
    ['Không chắc kỹ thuật hoặc thai kỳ', 'p:choke_unknown7'],
  ],
  true
)
addP(
  'choke_unknown7',
  'Nghi hóc nặng · chưa rõ kỹ thuật phù hợp',
  'ped25',
  true,
  [
    st(
      'Nhờ trợ giúp và xử trí không trì hoãn',
      'Nếu còn phản ứng và đang tắc nghẽn nặng, nhờ người khác gọi 115 và làm theo hướng dẫn. Vỗ lưng khi có thể giữ tư thế an toàn phù hợp kích thước nạn nhân. Không ép bụng trẻ dưới 1 tuổi hoặc người mang thai giai đoạn muộn. Nếu mất phản ứng, bắt đầu CPR theo hướng dẫn.',
      { continuous: true }
    ),
  ]
)
Q.age.options = [
  ['Bé dưới 1 tuổi', 'p:cpr_infant7'],
  ['Trẻ từ 1 tuổi, chưa dậy thì', 'p:cpr_child'],
  ['Đã dậy thì / người lớn / không rõ', 'cpr_adult_check7'],
]
Q.age.desc =
  'Bắt đầu hồi sức ngay, không chờ trả lời. Nhờ người khác gọi 115 và lấy AED. Nếu đuối nước hoặc ngạt, thổi ngạt rất quan trọng nếu biết kỹ thuật.'
q7(
  'cpr_adult_check7',
  'Tiếp tục CPR: có biết hoàn cảnh ngừng thở không?',
  'Không dừng ép ngực để chọn.',
  [
    ['Đã dậy thì / người lớn, đột ngột gục xuống', 'p:cpr'],
    ['Đuối nước hoặc nghi ngạt', 'p:cpr_special'],
    ['Không rõ tuổi hoặc nguyên nhân', 'p:cpr_special'],
  ],
  true
)
addP('cpr_infant7', 'Nghi ngừng tuần hoàn · bé dưới 1 tuổi', 'ped25', true, [
  st(
    'Hồi sức bé ngay',
    'Đặt bé nằm ngửa trên mặt phẳng chắc. Gọi 115 bằng loa ngoài, nhờ lấy AED. Ép ngực ở nửa dưới xương ức, dùng gót một bàn tay hoặc hai ngón cái với hai tay ôm ngực nếu biết kỹ thuật. Ép khoảng một phần ba bề dày ngực (khoảng 4 cm), 100–120 lần/phút. Phối hợp thổi ngạt nếu có khả năng, làm theo tổng đài.',
    {
      continuous: true,
      metro: true,
      warning:
        'Không dùng kỹ thuật ép ngực hai ngón tay theo khuyến cáo AHA 2025. Trẻ vừa chào đời cần quy trình hồi sức sơ sinh riêng.',
    }
  ),
])
P.cpr_child.title = 'Nghi ngừng tuần hoàn · trẻ từ 1 tuổi đến trước dậy thì'
P.cpr_child.steps[0].text =
  'Đặt trẻ nằm ngửa trên mặt phẳng chắc. Gọi 115 bằng loa ngoài, nhờ lấy AED. Dùng một hoặc hai bàn tay ở nửa dưới xương ức tùy kích thước trẻ, ép khoảng một phần ba bề dày ngực (khoảng 5 cm), 100–120 lần/phút. Phối hợp thổi ngạt nếu có khả năng; nếu không, bắt đầu ép ngực ngay trong khi nhận hướng dẫn.'
addP(
  'birth7',
  'Trẻ vừa chào đời · cần hỗ trợ sơ sinh khẩn cấp',
  'ped25',
  true,
  [
    st(
      'Giữ ấm và nhận hướng dẫn trực tiếp',
      'Lau khô, giữ ấm và nhờ hỗ trợ sản khoa/cấp cứu ngay. Nếu bé không thở hoặc chỉ thở ngáp, báo tổng đài ngay và làm theo hướng dẫn hồi sức sơ sinh; không tự áp dụng máy móc kỹ thuật hồi sức người lớn.',
      { continuous: true }
    ),
  ]
)
Q.heat_alert.options = [
  [
    'Lú lẫn, nói bất thường, co giật hoặc rất nóng kèm hành vi bất thường',
    'p:heatstroke',
  ],
  ['Tỉnh hoàn toàn, mệt, chóng mặt, ra mồ hôi', 'p:heat_exhaust'],
  ['Không phản ứng hoặc thở bất thường', 'breath'],
]
Q.sugar_history.options = [
  [
    'Đo thấp hoặc có tiểu đường/dùng thuốc hạ đường kèm run, đói, vã mồ hôi',
    'sugar_safe',
  ],
  ['Đột ngột khó nói, méo mặt, yếu một bên hoặc không hiểu lời', 'p:stroke'],
  ['Không rõ nguyên nhân', 'p:unknown'],
]
Q.sugar_safe.options = [
  ['Tỉnh hoàn toàn, có thể tự nuốt an toàn', 'sugar_age7'],
  ['Lơ mơ, khó nuốt, co giật hoặc không chắc', 'p:hypo_severe'],
  ['Có dấu hiệu thần kinh đột ngột', 'p:stroke'],
]
q7(
  'sugar_age7',
  'Nạn nhân thuộc nhóm tuổi nào?',
  'Lượng đường của trẻ có thể khác người lớn. Không cho trẻ dưới 1 tuổi mật ong.',
  [
    ['Người lớn từ 18 tuổi', 'sugar_items'],
    ['Trẻ từ 1 đến 17 tuổi', 'p:hypo_child'],
    ['Bé dưới 1 tuổi / không rõ tuổi', 'p:hypo_uncertain7'],
  ]
)
addP(
  'hypo_uncertain7',
  'Nghi hạ đường huyết · bé nhỏ / chưa rõ tuổi',
  'glucose',
  true,
  [
    st(
      'Tìm hỗ trợ y tế và kế hoạch điều trị cá nhân',
      'Không tự áp dụng liều đường người lớn cho bé nhỏ hoặc người chưa rõ tuổi. Không cho bé dưới 1 tuổi mật ong. Hỏi người chăm sóc, nếu có máy đo và biết sử dụng thì kiểm tra và báo kết quả. Nếu lơ mơ, khó nuốt hoặc co giật, tuyệt đối không cho ăn uống; đánh giá phản ứng và thở.',
      { continuous: true }
    ),
  ]
)
Q.sugar_items.options = [
  ['Viên hoặc gel glucose có nhãn', 'p:hypo_awake'],
  [
    'Nước trái cây / nước ngọt có đường / đường cát hoặc mật ong',
    'sugar_drink7',
  ],
  ['Không có nguồn đường nhanh', 'p:hypo_no_supply'],
]
q7(
  'sugar_drink7',
  'Bạn tìm được nguồn đường nào?',
  'Chỉ dùng một nguồn, cho người lớn tỉnh hoàn toàn và nuốt an toàn.',
  [
    ['Nước trái cây / nước ngọt có đường', 'p:hypo_awake'],
    ['Đường cát hoặc mật ong', 'p:hypo_awake'],
    ['Không có', 'p:hypo_no_supply'],
  ]
)
// Curated subgroups: all original targets preserved except deliberately consolidated clinical gates above.
regroup7('context', [
  ['Đột ngột mệt, đang ăn hoặc ở nơi nóng', [0, 1, 2]],
  ['Tai nạn, tiếp xúc môi trường hoặc chất lạ', [3, 4, 9]],
  ['Bệnh nền, triệu chứng khác hoặc chưa rõ', [5, 6, 7, 8, 10, 11]],
])
// Split remaining six-choice subgroup into named two-way families.
regroup7('context_part2', [
  ['Bệnh nền / thuốc / dị ứng', [0, 1]],
  ['Nôn, đau bụng / bị cắn đốt / mắt', [2, 3, 4]],
  5,
])
regroup7('sudden', [
  ['Dấu hiệu thần kinh hoặc thay đổi tỉnh táo', [1, 4]],
  ['Run, vã mồ hôi, đau ngực hoặc ngất', [0, 2, 3]],
  ['Đau đầu trong phòng kín / không rõ', [5, 6]],
])
regroup7('food', [
  ['Hóc, dị ứng hoặc nuốt chất lạ', [0, 1, 2]],
  ['Run đói / đau bụng, nôn', [3, 4]],
  5,
])
regroup7('medical', [0, ['Hen, dị ứng hoặc co giật', [1, 2, 3]], 4])
regroup7('diabetes_signs', [2, 0, ['Nôn, rất khát hoặc không rõ', [1, 3]]])
regroup7('injury', [
  ['Máu chảy nhiều, đứt lìa chi, choáng', [0, 4, 6]],
  ['Đầu, ngực hoặc mắt bị thương', [1, 5, 7]],
  ['Tay chân, trầy xước hoặc chưa rõ', [2, 3, 8]],
])
regroup7('exposure', [
  ['Điện, nước, nóng hoặc lạnh', [0, 1, 2, 8]],
  ['Hóa chất, thuốc, khói khí', [3, 4, 5]],
  ['Động vật, côn trùng hoặc không rõ', [6, 7, 9, 10]],
])
regroup7('exposure_part0', [0, 1, ['Nóng hoặc lạnh', [2, 3]]])
regroup7('exposure_part2', [0, 1, ['Côn trùng hoặc không rõ', [2, 3]]])
regroup7('allergy_obs', [
  0,
  ['Thuốc, rắn hoặc chó mèo', [1, 2, 3]],
  ['Ban ngứa nhẹ, côn trùng hoặc không rõ', [4, 5, 6]],
])
regroup7('gi_observe', [
  ['Nôn máu hoặc đau bụng dữ dội', [0, 1]],
  ['Nôn, tiêu chảy hoặc rất yếu', [2, 3]],
  4,
])
regroup7('toxin_kind', [
  0,
  1,
  ['Thuốc/chất lạ hoặc hóa chất dính ngoài', [2, 3, 4, 5]],
])
regroup7('toxin_kind_part2', [['Thuốc hoặc chất không rõ', [0, 3]], 1, 2])
regroup7('bite_kind', [
  0,
  ['Rắn hoặc chó mèo', [1, 2]],
  ['Côn trùng, kiến ba khoang hoặc không rõ', [3, 4, 5]],
])
regroup7('eye_kind', [0, 1, ['Bụi nhỏ hoặc không rõ', [2, 3]]])
regroup7('altered_context', [
  5,
  ['Nóng, tiểu đường hoặc chấn thương đầu', [0, 1, 2]],
  ['Phòng kín, thuốc hoặc không rõ', [3, 4, 6]],
])
for (const id of ['observed']) {
  regroup7(id, [
    ['Thần kinh, ngất, đường huyết hoặc nóng', [0, 1, 2, 6, 7, 12]],
    ['Hô hấp, đau ngực, chảy máu hoặc chấn thương', [3, 4, 5, 8, 10]],
    ['Bụng, thai kỳ, mắt, da hoặc chưa rõ', [9, 11, 13, 14, 15]],
  ])
  regroup7(id + '_part0', [
    1,
    ['Run, nóng hoặc phòng kín', [0, 2, 5]],
    ['Co giật hoặc vừa ngất', [3, 4]],
  ])
  regroup7(id + '_part1', [
    ['Nghẹn hoặc khò khè', [0, 1]],
    2,
    ['Chảy máu mũi / tai nạn', [3, 4]],
  ])
  regroup7(id + '_part2', [
    ['Thai kỳ hoặc bụng', [0, 1]],
    ['Mắt hoặc da', [2, 3]],
    4,
  ])
}
Q.symptom = { ...Q.observed, options: Q.observed.options.map((x) => [...x]) }
Q.select_hint = { ...Q.context, options: Q.context.options.map((x) => [...x]) }
// Preserve known cause and age across the assessment; do not gate emergency protocols on demographics.
const start7 = start
start = function (hint = '') {
  A.profile = ''
  A.infantDetail = ''
  A.ageReturn = 'context'
  return start7(hint)
}
const question7 = question
question = function (id) {
  if (
    ['context', 'select_hint', 'observed', 'symptom'].includes(id) &&
    !A.profile
  ) {
    A.ageReturn = id
    return question7('profile_age')
  }
  if (id === 'sugar_age7' && A.profile) {
    if (['adult', 'middle', 'older'].includes(A.profile))
      return question7('sugar_items')
    if (['child', 'teen'].includes(A.profile)) return openProtocol('hypo_child')
    if (A.profile === 'infant') return openProtocol('hypo_uncertain7')
  }
  if (id === 'choke_age' && A.profile === 'infant')
    return openProtocol('choke_infant')
  if (
    id === 'choke_age' &&
    ['child', 'teen', 'adult', 'middle', 'older'].includes(A.profile)
  )
    return question7('choke_body7')
  return question7(id)
}
choose = function (i) {
  const q = Q[S.node],
    o = q?.options[i]
  if (!o) return
  const id = S.node,
    t = o[1]
  capture(q.title, o[0], 'Đã trả lời')
  log(q.title + ' → ' + o[0])
  A.observations.push(o[0])
  if (id === 'context' || id.startsWith('context_part')) A.context = o[0]
  if (id === 'sugar_items' || id === 'sugar_drink7') A.supplies = o[0]
  if (
    id.startsWith('choke') &&
    ['choke_age', 'p:choke_mild', 'breath'].includes(t)
  )
    A.knownChoke = true
  if (id === 'heat_alert') A.knownHeat = true
  if (t.startsWith('profile:')) {
    A.profile = t.slice(8)
    S.session.ageGroup = groups7[A.profile]
    log('Nhóm tuổi: ' + S.session.ageGroup)
    return A.profile === 'infant'
      ? question('profile_infant')
      : question(A.ageReturn)
  }
  if (t.startsWith('infant:')) {
    A.infantDetail = t.slice(7)
    S.session.infantDetail = A.infantDetail
    return A.infantDetail === 'birth'
      ? openProtocol('birth7')
      : question(A.ageReturn)
  }
  if (id === 'breath' && t === 'age') {
    if (A.knownChoke || S.protocol.startsWith('choke_'))
      return openProtocol('choke_uncon')
    if (A.infantDetail === 'birth') return openProtocol('birth7')
    if (A.profile === 'infant') return openProtocol('cpr_infant7')
    if (['adult', 'middle', 'older'].includes(A.profile))
      return question('cpr_adult_check7')
    return question('age')
  }
  if (
    id === 'breath' &&
    t === 'p:uncon' &&
    (A.knownHeat ||
      ['heatstroke', 'heat_exhaust', 'heat_uncon'].includes(S.protocol))
  )
    return openProtocol('heat_uncon')
  if (t.startsWith('p:')) return openProtocol(t.slice(2))
  if (t === 'unsafe' || t === 'special') {
    S.view = t
    render()
    speak(
      t === 'unsafe'
        ? 'Không tiếp cận nếu hiện trường nguy hiểm.'
        : 'Làm theo hướng dẫn hồi sức của tổng đài.'
    )
    return
  }
  return question(t)
}
// Do not allow adult oral dosing for known minors or infants, including direct library entry.
const open7 = openProtocol
openProtocol = function (id) {
  if (id === 'hypo_awake' || id === 'hypo_no_supply') {
    if (['child', 'teen'].includes(A.profile)) id = 'hypo_child'
    if (A.profile === 'infant') id = 'hypo_uncertain7'
  }
  if (id === 'cpr' && A.profile === 'infant')
    id = A.infantDetail === 'birth' ? 'birth7' : 'cpr_infant7'
  return open7(id)
}
resources.cpr_infant7 = resources.cpr_child
resources.hypo_uncertain7 = [
  'Máy đo đường huyết nếu có và biết dùng',
  'Kế hoạch điều trị của trẻ',
  'Người chăm sóc',
]
const render7 = render
render = function () {
  render7()
  if (S.tab !== 'home' || !S.session || S.view === 'home' || !A.profile) return
  const toolbar = document.querySelector('.flow-heading')
  if (toolbar && !toolbar.querySelector('.age7')) {
    const span = document.createElement('span')
    span.className = 'age7'
    span.textContent = groups7[A.profile]
    toolbar.appendChild(span)
  }
}

// v0.8: remote, attributed images; clinical flow remains unchanged.
const paths8 = {
  next: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  check: '<path d="m4 12 5 5L20 6"/>',
  warn: '<path d="M12 3 2 20h20L12 3Z"/><path d="M12 9v4m0 3v.1"/>',
  hand: '<path d="M7 12V5a2 2 0 0 1 4 0v6-7a2 2 0 0 1 4 0v7-5a2 2 0 0 1 4 0v9c0 5-3 7-7 7-3 0-5-2-7-5l-2-3a2 2 0 0 1 3-2l1 1"/>',
  med: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 5V2h8v3m-4 4v8m-4-4h8"/>',
  audio:
    '<path d="M3 9v6h4l5 4V5L7 9H3Zm13-1c3 2 3 6 0 8m3-11c5 4 5 10 0 14"/>',
  expand: '<path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6"/>',
  left: '<path d="m15 5-7 7 7 7"/>',
  right: '<path d="m9 5 7 7-7 7"/>',
  close: '<path d="m5 5 14 14M19 5 5 19"/>',
  plus: '<path d="M12 4v16M4 12h16"/>',
  minus: '<path d="M4 12h16"/>',
  reset: '<path d="M3 10a9 9 0 1 1 2 8M3 4v6h6"/>',
  bandage:
    '<rect x="2" y="7" width="20" height="10" rx="4" transform="rotate(-35 12 12)"/><path d="m10 10 4 4m-4 0 4-4"/>',
  water: '<path d="M12 2C9 7 5 11 5 15a7 7 0 0 0 14 0c0-4-4-8-7-13Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  bag: '<rect x="3" y="6" width="18" height="15" rx="3"/><path d="M8 6V3h8v3"/>',
  bolt: '<path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z"/>',
  pill: '<rect x="4" y="7" width="16" height="10" rx="5" transform="rotate(-45 12 12)"/><path d="m8 8 8 8"/>',
}
function ico8(name) {
  return (
    '<svg class="i8" viewBox="0 0 24 24" aria-hidden="true">' +
    (paths8[name] || paths8.bag) +
    '</svg>'
  )
}
const wiki8 = 'https://commons.wikimedia.org/wiki/File:',
  up8 = 'https://upload.wikimedia.org/wikipedia/commons/',
  cc8 = 'https://creativecommons.org/licenses/by-sa/4.0/'
const images8 = {
  pressure: [
    {
      url: up8 + '6/6a/Direct-pressure-and-elevation.jpg',
      page: wiki8 + 'Direct-pressure-and-elevation.jpg',
      credit: 'Mike6271 · CC BY-SA 4.0',
      license: cc8,
      caption: 'Ép trực tiếp lên vết thương; không cần nâng chi để cầm máu.',
    },
    {
      url:
        up8 +
        '6/64/Emergency_Responders_Train_at_Camp_Atterbury_DVIDS265983.jpg',
      page:
        wiki8 + 'Emergency_Responders_Train_at_Camp_Atterbury_DVIDS265983.jpg',
      credit: 'Timothy Sproles / U.S. Army · Public domain',
      caption: 'Ảnh huấn luyện: duy trì lực ép tại vùng chảy máu.',
    },
    {
      url: up8 + '3/3c/Application_of_Pressure_Dressing.svg',
      page: wiki8 + 'Application_of_Pressure_Dressing.svg',
      credit: 'Bizhan Khodabandeh · CC BY-SA 4.0',
      license: cc8,
      caption:
        'Băng cố định gạc sau khi máu đã ngừng chảy; không ngừng ép khi máu vẫn chảy.',
    },
  ],
  adultcpr: [
    {
      url: up8 + '9/9a/CPR_Adult_Chest_Compression.png',
      page: wiki8 + 'CPR_Adult_Chest_Compression.png',
      credit: 'BruceBlaus · CC BY-SA 4.0',
      license: cc8,
      caption: 'Người lớn: đặt hai tay chồng lên nhau ở giữa ngực.',
    },
    {
      url: up8 + '5/5d/First_aid_Chest_compressions_Herzdruckmassage_01.JPG',
      page: wiki8 + 'First_aid_Chest_compressions_Herzdruckmassage_01.JPG',
      credit: 'Nxr-at · CC BY-SA 4.0',
      license: cc8,
      caption: 'Thực hành trên mô hình: tay thẳng, vai ngay phía trên tay.',
    },
  ],
}
function credit8(a) {
  return `<a href="${a.page}" target="_blank" rel="noopener noreferrer">${esc(a.credit)} ↗</a>${a.license ? ` · <a href="${a.license}" target="_blank" rel="noopener noreferrer">Giấy phép</a>` : ''}`
}
function gallery8(key) {
  let a = images8[key]
  return `<section class="guide8" data-gallery8="${key}" aria-label="Ảnh hướng dẫn"><div class="g8head"><strong>Ảnh hướng dẫn</strong><button class="g8btn" title="Xem toàn màn hình" aria-label="Xem toàn màn hình" onclick="openViewer8('${key}',galleryIndex8(this))">${ico8('expand')}</button></div><div class="g8track" onscroll="updateGallery8(this)">${a.map((im, i) => `<figure class="g8slide"><button class="g8image" aria-label="Phóng to ảnh ${i + 1}" onclick="openViewer8('${key}',${i})"><img src="${im.url}" alt="${esc(im.caption)}" referrerpolicy="no-referrer" decoding="async" ${i ? 'loading="lazy"' : ''} onerror="this.parentElement.classList.add('failed')"><span class="g8fallback">Không tải được ảnh. Tiếp tục theo hướng dẫn chữ.</span></button><figcaption>${esc(im.caption)}</figcaption><div class="g8credit">${credit8(im)}</div></figure>`).join('')}</div><div class="g8foot"><button class="g8btn" aria-label="Ảnh trước" onclick="moveGallery8(this,-1)">${ico8('left')}</button><div class="g8index"><span class="g8num">1/${a.length}</span>${a.map((_, i) => `<button class="g8dot ${i === 0 ? 'on' : ''}" aria-label="Ảnh ${i + 1}" onclick="jumpGallery8(this,${i})"></button>`).join('')}</div><button class="g8btn" aria-label="Ảnh sau" onclick="moveGallery8(this,1)">${ico8('right')}</button></div></section>`
}
function galleryIndex8(el) {
  let t = el.closest('.guide8').querySelector('.g8track')
  return Math.max(
    0,
    Math.min(
      t.children.length - 1,
      Math.round(t.scrollLeft / (t.clientWidth || 1))
    )
  )
}
function updateGallery8(t) {
  let g = t.closest('.guide8'),
    i = galleryIndex8(t)
  g.querySelector('.g8num').textContent = `${i + 1}/${t.children.length}`
  g.querySelectorAll('.g8dot').forEach((d, n) =>
    d.classList.toggle('on', n === i)
  )
}
function jumpGallery8(el, i) {
  let t = el.closest('.guide8').querySelector('.g8track')
  i = Math.max(0, Math.min(t.children.length - 1, i))
  t.scrollTo({ left: i * t.clientWidth, behavior: 'smooth' })
}
function moveGallery8(el, d) {
  jumpGallery8(el, galleryIndex8(el) + d)
}
let V8 = {
  key: '',
  i: 0,
  z: 1,
  x: 0,
  y: 0,
  pointers: new Map(),
  last: null,
  focus: null,
}
const view8 = document.createElement('div')
view8.id = 'viewer8'
view8.setAttribute('role', 'dialog')
view8.setAttribute('aria-modal', 'true')
view8.setAttribute('aria-label', 'Xem ảnh toàn màn hình')
view8.innerHTML = `<div class="v8bar"><strong>Ảnh hướng dẫn · <span id="v8num"></span></strong><button aria-label="Toàn màn hình thiết bị" title="Toàn màn hình thiết bị" onclick="nativeFull8()">${ico8('expand')}</button><button id="v8close" aria-label="Đóng ảnh" onclick="closeViewer8()">${ico8('close')}</button></div><div id="v8stage"><img id="v8img" alt="" referrerpolicy="no-referrer"><div id="v8msg">Không tải được ảnh. Đóng để tiếp tục sơ cứu.</div></div><div class="v8caption"><div id="v8cap"></div><div id="v8credit"></div></div><div class="v8bar v8bottom"><button aria-label="Ảnh trước" onclick="viewMove8(-1)">${ico8('left')}</button><button aria-label="Thu nhỏ ảnh" onclick="zoom8(V8.z/1.3)">${ico8('minus')}</button><span id="v8zoom">100%</span><button aria-label="Phóng to ảnh" onclick="zoom8(V8.z*1.3)">${ico8('plus')}</button><button aria-label="Đặt lại zoom" onclick="zoom8(1)">${ico8('reset')}</button><button aria-label="Ảnh sau" onclick="viewMove8(1)">${ico8('right')}</button></div>`
document.body.append(view8)
const vStage8 = document.getElementById('v8stage'),
  vImg8 = document.getElementById('v8img')
function syncZoom8() {
  let maxX = Math.max(0, (vImg8.clientWidth * V8.z - vStage8.clientWidth) / 2),
    maxY = Math.max(0, (vImg8.clientHeight * V8.z - vStage8.clientHeight) / 2)
  V8.x = Math.max(-maxX, Math.min(maxX, V8.x))
  V8.y = Math.max(-maxY, Math.min(maxY, V8.y))
  vImg8.style.transform = `translate(${V8.x}px,${V8.y}px) scale(${V8.z})`
  document.getElementById('v8zoom').textContent = Math.round(V8.z * 100) + '%'
}
function zoom8(z) {
  V8.z = Math.max(1, Math.min(5, z))
  if (V8.z === 1) V8.x = V8.y = 0
  syncZoom8()
}
function showImage8() {
  const a = images8[V8.key][V8.i]
  zoom8(1)
  vImg8.style.display = 'block'
  document.getElementById('v8msg').style.display = 'none'
  vImg8.alt = a.caption
  vImg8.src = a.url
  document.getElementById('v8num').textContent =
    `${V8.i + 1}/${images8[V8.key].length}`
  document.getElementById('v8cap').textContent = a.caption
  document.getElementById('v8credit').innerHTML = credit8(a)
}
vImg8.onerror = () => {
  vImg8.style.display = 'none'
  document.getElementById('v8msg').style.display = 'block'
}
vImg8.onload = () => {
  vImg8.style.display = 'block'
  document.getElementById('v8msg').style.display = 'none'
  syncZoom8()
}
function openViewer8(key, i) {
  V8.focus = document.activeElement
  V8.key = key
  V8.i = i
  V8.pointers.clear()
  V8.last = null
  view8.classList.add('open')
  showImage8()
  document.getElementById('v8close').focus()
}
function closeViewer8() {
  view8.classList.remove('open')
  if (document.fullscreenElement === view8)
    document.exitFullscreen?.().catch(() => {})
  V8.pointers.clear()
  V8.focus?.focus()
}
function nativeFull8() {
  if (document.fullscreenElement === view8) {
    document.exitFullscreen?.().catch(() => {})
    return
  }
  try {
    view8.requestFullscreen?.().catch(() => {})
  } catch {}
}
function viewMove8(d) {
  V8.i = (V8.i + d + images8[V8.key].length) % images8[V8.key].length
  showImage8()
}
function point8(e) {
  return { x: e.clientX, y: e.clientY }
}
function mid8() {
  const a = [...V8.pointers.values()]
  return a.length >= 2
    ? {
        x: (a[0].x + a[1].x) / 2,
        y: (a[0].y + a[1].y) / 2,
        d: Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y),
      }
    : { ...a[0], d: 0 }
}
vStage8.addEventListener('pointerdown', (e) => {
  vStage8.setPointerCapture(e.pointerId)
  V8.pointers.set(e.pointerId, point8(e))
  V8.last = mid8()
  if (V8.pointers.size === 1) V8.start = point8(e)
  else V8.start = null
})
vStage8.addEventListener('pointermove', (e) => {
  if (!V8.pointers.has(e.pointerId)) return
  V8.pointers.set(e.pointerId, point8(e))
  let m = mid8(),
    p = V8.last
  if (p) {
    if (m.d && p.d) zoom8((V8.z * m.d) / p.d)
    if (V8.z > 1) {
      V8.x += m.x - p.x
      V8.y += m.y - p.y
      syncZoom8()
    }
  }
  V8.last = m
})
function release8(e) {
  if (!V8.pointers.has(e.pointerId)) return
  V8.pointers.delete(e.pointerId)
  if (
    e.type === 'pointerup' &&
    V8.z === 1 &&
    V8.start &&
    !V8.pointers.size &&
    Math.abs(e.clientX - V8.start.x) > 55 &&
    Math.abs(e.clientY - V8.start.y) < 80
  )
    viewMove8(e.clientX < V8.start.x ? 1 : -1)
  V8.last = V8.pointers.size ? mid8() : null
}
vStage8.addEventListener('pointerup', release8)
vStage8.addEventListener('pointercancel', release8)
vStage8.addEventListener('dblclick', () => zoom8(V8.z > 1 ? 1 : 2.5))
vStage8.addEventListener(
  'wheel',
  (e) => {
    e.preventDefault()
    zoom8(V8.z * (e.deltaY < 0 ? 1.12 : 1 / 1.12))
  },
  { passive: false }
)
window.addEventListener('resize', () => {
  if (view8.classList.contains('open')) syncZoom8()
})
document.addEventListener('keydown', (e) => {
  if (!view8.classList.contains('open')) return
  if (e.key === 'Escape') closeViewer8()
  if (e.key === 'ArrowLeft') viewMove8(-1)
  if (e.key === 'ArrowRight') viewMove8(1)
})
function suppliesIcon8(t) {
  return /gạc|băng|vải sạch/i.test(t)
    ? 'bandage'
    : /nước|quạt|khăn ướt/i.test(t)
      ? 'water'
      : /đồng hồ|điện thoại/i.test(t)
        ? 'clock'
        : /AED/i.test(t)
          ? 'bolt'
          : /thuốc|glucose|adrenaline|glucagon/i.test(t)
            ? 'pill'
            : 'bag'
}
const prior8 = render
render = function () {
  prior8()
  if (S.tab !== 'home' || S.view !== 'protocol') return
  const n = document.getElementById('active-node')
  if (!n) return
  const p = P[S.protocol],
    step = p.steps[S.step],
    panel = n.querySelector('.panel')
  let key =
    S.protocol === 'bleed' && S.step === 0
      ? 'pressure'
      : S.protocol === 'cpr' && S.step === 0
        ? 'adultcpr'
        : null
  if (key && panel) {
    const old = panel.querySelector('.visual')
    if (old) old.outerHTML = gallery8(key)
    else
      panel
        .querySelector('.steptext')
        ?.insertAdjacentHTML('afterend', gallery8(key))
  }
  const st = n.querySelector('.stack')
  if (st) {
    st.classList.add('g8tools')
    st.querySelectorAll('button').forEach((b) => {
      let fn = b.getAttribute('onclick'),
        label = b.textContent.trim(),
        icon = 'next'
      if (fn === 'changed()') {
        icon = 'warn'
        label = 'Tình trạng đổi'
        b.dataset.major8 = '1'
      } else if (fn === 'unable()') {
        icon = 'hand'
        label = 'Không làm được'
      } else if (fn === 'handover()') {
        icon = 'med'
        label = 'Bàn giao y tế'
      } else if (fn === 'speakCurrent()') {
        icon = 'audio'
        label = 'Đọc lại'
      } else {
        b.dataset.major8 = '1'
        if (fn === 'next()') {
          icon = step.continuous ? 'next' : 'check'
          if (label === 'Chuyển bước khi thích hợp')
            label = 'Tiếp tục khi phù hợp'
          if (label === '✓ Đã thực hiện bước này') label = 'Đã thực hiện'
        }
      }
      b.setAttribute('aria-label', b.textContent.trim())
      b.innerHTML = ico8(icon) + '<span>' + esc(label) + '</span>'
    })
  }
  n.querySelectorAll('.supply-row').forEach((r) => {
    const t = r.textContent.replace(/^•\s*/, '')
    r.classList.add('g8supply')
    r.innerHTML = ico8(suppliesIcon8(t)) + '<span>' + esc(t) + '</span>'
  })
  // Specific concise bleeding card: preserve full instructions and critical caveats.
  if (S.protocol === 'bleed' && S.step === 0) {
    const t = panel.querySelector('.steptext')
    if (t) {
      const full = t.textContent
      t.innerHTML =
        '<div class="g8brief">Ép mạnh, liên tục lên vết thương bằng gạc hoặc vải sạch.</div><div class="g8detail">' +
        ico8('warn') +
        ' Có vật cắm: không rút, ép xung quanh vật.</div><div class="g8detail">Dùng găng nếu có. Không trì hoãn cầm máu để tìm đồ.</div><details class="g8detail"><summary>Hướng dẫn đầy đủ</summary><p>' +
        esc(full) +
        '</p></details>'
    }
  }
}

// v1.2 — edit history, compact canvas and shortest safe paths.
const E9 = { historyOpen: false, edits: [], lastKey: '' }
paths8.edit = '<path d="M12 20h9M16 4l4 4M4 16l-1 5 5-1L20 8l-4-4Z"/>'
paths8.person =
  '<circle cx="12" cy="6" r="3"/><path d="M5 21v-4a7 7 0 0 1 14 0v4"/>'
const clone9 = (x) => JSON.parse(JSON.stringify(x))
const start9 = start
start = function (hint = '') {
  E9.historyOpen = false
  E9.edits = []
  start9(hint)
}
// Age is optional for general assessment; ask when a specific intervention depends on it.
const question9 = question
question = function (id) {
  if (
    ['context', 'select_hint', 'observed', 'symptom'].includes(id) &&
    !A.profile
  ) {
    A.profile = 'unknown'
  }
  return question9(id)
}
Q.scene.title = 'Đến gần nạn nhân có an toàn không?'
Q.scene.desc = 'Quan sát xe cộ, điện, lửa, nước sâu, khí độc.'
Q.scene.options = [
  ['An toàn', 'response'],
  ['Nguy hiểm / không chắc', 'unsafe'],
]
Q.response.title = 'Nạn nhân có phản ứng không?'
Q.response.desc =
  'Gọi to, chạm nhẹ vai (bé dưới 1 tuổi: lòng bàn chân). Mở mắt, nhìn hoặc cử động có chủ đích là có phản ứng, dù không nói được. Máu chảy ồ ạt: ép ngay.'
Q.response.options = [
  ['Có phản ứng', 'awake_breath'],
  ['Không phản ứng / không rõ', 'breath'],
  ['Máu chảy ồ ạt', 'p:bleed'],
]
Q.awake_breath.title = 'Nạn nhân thở thế nào?'
Q.awake_breath.desc =
  'Quan sát ngực và nhịp thở. Không nói được chưa chắc là nghẹt thở.'
Q.awake_breath.options = [
  ['Thở bình thường', 'breathawake'],
  ['Khó thở / nghẹn / tím môi', 'breath_cause'],
  ['Mất phản ứng / thở ngáp / không chắc', 'breath'],
]
Q.breathawake.title = 'Dấu hiệu nào nổi bật nhất?'
Q.breathawake.desc = 'Chọn dấu hiệu đang thấy. Nếu máu chảy ồ ạt, ép ngay.'
Q.breathawake.options = [
  [
    'Đột ngột khó nói, méo mặt, yếu một bên hoặc mất thăng bằng / nhìn bất thường',
    'p:stroke',
  ],
  ['Co giật, đau ngực, chảy máu hoặc lú lẫn', 'urgent9'],
  ['Dấu hiệu khác', 'context'],
]
q7(
  'urgent9',
  'Dấu hiệu nào đang có?',
  'Nếu máu chảy ồ ạt, ép ngay.',
  [
    ['Máu chảy ồ ạt', 'p:bleed'],
    ['Đau ngực mới xuất hiện / dữ dội', 'p:chest'],
    ['Co giật hoặc lú lẫn', 'neuro_short9'],
  ],
  true
)
q7(
  'neuro_short9',
  'Nạn nhân đang thế nào?',
  'Nếu lú lẫn mới xuất hiện, cần trợ giúp khẩn cấp.',
  [
    ['Đang co giật', 'p:seizure'],
    ['Lú lẫn / rất buồn ngủ', 'altered_context'],
    ['Đã ngất và tỉnh lại', 'faint_flags'],
  ],
  true
)
Q.breath_cause.title = 'Khó thở bắt đầu khi nào?'
Q.breath_cause.desc =
  'Nếu thở rất khó hoặc tím môi: nhờ gọi 115 ngay. Không ép bụng chỉ vì không nói được.'
Q.breath_cause.options = [
  ['Vừa hóc, sặc hoặc có vật mắc', 'choke_severity'],
  ['Sưng môi / lưỡi / họng hoặc choáng sau dị ứng', 'p:anaphylaxis'],
  ['Không do hóc hoặc dị ứng / chưa rõ', 'breath_other7'],
]
Q.breath_other7.title = 'Có dấu hiệu nào kèm theo?'
Q.breath_other7.desc =
  'Khó thở nặng cần cấp cứu. Nếu mất phản ứng, chọn Tình trạng đổi.'
Q.breath_other7.options = [
  ['Khò khè, giống cơn hen trước', 'p:asthma'],
  ['Va đập ngực, khói / khí độc hoặc thuốc', 'breath_other_detail7'],
  ['Đau ngực hoặc không rõ', 'p:chest'],
]
Q.choke_severity.title = 'Nạn nhân còn ho mạnh được không?'
Q.choke_severity.desc =
  'Chỉ áp dụng khi có dấu hiệu hóc. Nếu mất phản ứng, chuyển đánh giá hô hấp.'
Q.choke_severity.options = [
  ['Còn ho mạnh và lấy được hơi', 'p:choke_mild'],
  ['Ho yếu / không lấy được hơi', 'choke_age'],
  ['Đã bất tỉnh / dị vật đã ra / không chắc', 'choke_other7'],
]
Q.context.title = 'Chuyện gì xảy ra trước đó?'
Q.context.desc = 'Hỏi nạn nhân hoặc người chứng kiến.'
Q.context.options = [
  ['Đột ngột mệt, run, choáng hoặc ở nơi nóng', 'quick_context9'],
  ['Tai nạn, điện, nước, hóa chất hoặc khí độc', 'context_part1'],
  ['Ăn uống, bệnh nền hoặc dấu hiệu khác', 'quick_other9'],
]
q7('quick_context9', 'Dấu hiệu hoặc hoàn cảnh nào phù hợp?', '', [
  ['Run, đói, vã mồ hôi lạnh', 'sugar_history'],
  ['Ở nơi nóng / vừa vận động dưới nắng', 'heat_alert'],
  ['Ngất, yếu người hoặc dấu hiệu khác', 'sudden'],
])
q7('quick_other9', 'Chuyện gì đã xảy ra?', '', [
  ['Vừa ăn, uống hoặc nuốt vật gì', 'food'],
  ['Có bệnh nền, dùng thuốc hoặc dị ứng', 'context_part2_part0'],
  ['Nôn, đau bụng, cắn đốt, mắt hoặc chưa rõ', 'context_part2'],
])
Q.sugar_history.title = 'Có dấu hiệu hạ đường huyết không?'
Q.sugar_history.desc =
  'Nếu có máy đo và biết dùng, đo ngay. Hỏi về tiểu đường, thuốc hạ đường, bỏ bữa.'
Q.sugar_safe.title = 'Nạn nhân có tỉnh và nuốt an toàn không?'
Q.sugar_safe.desc =
  'Không cho uống thử. Nếu mới khó nói, méo mặt hoặc yếu một bên, chọn dấu hiệu đột quỵ.'
Q.sugar_safe.options = [
  ['Người lớn, tỉnh hoàn toàn và tự nuốt an toàn', 'sugar_items'],
  ['Trẻ em, tỉnh và tự nuốt an toàn / chưa rõ tuổi', 'sugar_age9'],
  [
    'Lơ mơ, khó nuốt, co giật / không chắc hoặc dấu hiệu đột quỵ',
    'sugar_danger9',
  ],
]
q7(
  'sugar_age9',
  'Nạn nhân thuộc nhóm nào?',
  'Không tự dùng lượng đường của người lớn cho trẻ.',
  [
    ['Trẻ 1–17 tuổi', 'p:hypo_child'],
    ['Dưới 1 tuổi / không rõ tuổi', 'p:hypo_uncertain7'],
    ['Người lớn, tỉnh và nuốt an toàn', 'sugar_items'],
  ]
)
q7(
  'sugar_danger9',
  'Dấu hiệu nào đang có?',
  'Không cho ăn uống.',
  [
    ['Đột ngột khó nói, méo mặt, yếu một bên', 'p:stroke'],
    ['Lơ mơ, khó nuốt, co giật / không chắc', 'p:hypo_severe'],
    ['Không còn phản ứng', 'breath'],
  ],
  true
)
// Don't require another resource question after selecting a valid source. Preserve alternatives in the step.
Q.sugar_items.title = 'Có nguồn đường nhanh nào?'
Q.sugar_items.desc =
  'Hỏi nạn nhân hoặc người đi cùng. Không bỏ nạn nhân một mình.'
Q.sugar_items.options = [
  ['Viên / gel glucose', 'p:hypo_awake'],
  ['Nước trái cây, nước ngọt có đường, đường cát hoặc mật ong', 'p:hypo_awake'],
  ['Không có', 'p:hypo_no_supply'],
]
// Keep the correct resource choices if the combined option was picked.
const oldSup9 = resources.hypo_awake.slice()
// Shorter titles for subgroups, without removing safety text.
for (const [id, q] of Object.entries(Q)) {
  if (id.includes('_part')) q.title = q.title.replace(/ — dấu hiệu cụ thể$/, '')
}
// Snapshot only the decision state; never erase the incident log or undo physical care.
const choose9 = choose
choose = function (i) {
  const q = Q[S.node],
    o = q?.options[i]
  if (!o) return
  const n = F.history.length
  const snap = {
    node: S.node,
    profile: clone9(A),
    session: clone9(S.session),
    protocol: S.protocol,
    step: S.step,
    history: clone9(F.history),
    logLength: S.logs.length,
  }
  E9.edits.push({ index: n, snap })
  return choose9(i)
}
function edit9(index) {
  const entry = E9.edits.find((x) => x.index === index)
  if (!entry) return
  const x = entry.snap
  const care =
    F.history
      .slice(index)
      .some((h) => h.type === 'Đã ghi nhận' || h.type === 'Đánh giá lại') ||
    S.view === 'protocol' ||
    S.view === 'monitor'
  if (
    care &&
    !confirm(
      'Sửa câu trả lời và tính lại hướng dẫn? Không dừng thao tác cứu mạng. Những việc đã thực hiện vẫn được lưu trong nhật ký.'
    )
  )
    return
  stopSound()
  log(
    'Sửa câu trả lời: ' +
      Q[x.node].title +
      ' · nhánh sau bị thay thế; thao tác đã làm không bị xóa.'
  )
  Object.keys(A).forEach((k) => delete A[k])
  Object.assign(A, clone9(x.profile))
  S.session = clone9(x.session)
  S.protocol = x.protocol
  S.step = x.step
  F.history = clone9(x.history)
  E9.edits = E9.edits.filter((e) => e.index < index)
  E9.historyOpen = false
  F.focus = true
  question9(x.node)
}
function undo9() {
  const e = E9.edits.at(-1)
  if (e) edit9(e.index)
}
function toggleHistory9() {
  E9.historyOpen = !E9.historyOpen
  F.focus = true
  render()
}
function ageMenu9(level = 'main') {
  const labels =
    level === 'main'
      ? [
          ['Dưới 18 tuổi', 'young'],
          ['Từ 18 tuổi', 'adult'],
          ['Không rõ', 'unknown'],
        ]
      : level === 'young'
        ? [
            ['Dưới 1 tuổi', 'infant'],
            ['1–12 tuổi', 'child'],
            ['13–17 tuổi', 'teen'],
          ]
        : [
            ['18–39 tuổi', 'adult'],
            ['40–59 tuổi', 'middle'],
            ['Từ 60 tuổi', 'older'],
          ]
  modal.innerHTML =
    '<h2>Tuổi nạn nhân</h2><div class="stack">' +
    labels
      .map(
        ([l, v]) =>
          `<button onclick="${level === 'main' && v !== 'unknown' ? `ageMenu9('${v}')` : `saveAge9('${v}')`}">${esc(l)}</button>`
      )
      .join('') +
    '<button class="outline" onclick="modal.close()">Đóng</button></div>'
  if (!modal.open) modal.showModal()
}
function saveAge9(v) {
  A.profile = v
  A.infantDetail = ''
  S.session.ageGroup = groups7[v]
  delete S.session.infantDetail
  log('Cập nhật tuổi: ' + groups7[v])
  modal.close()
  if (S.view === 'question') render()
}
flowHome = function () {
  return node({
    num: 1,
    state: '',
    kind: 'active-node',
    id: 'active-node',
    content: `<div class="home9"><h2>Bắt đầu sơ cứu</h2><button class="primary" onclick="start()">${ico8('next')} Bắt đầu</button>${S.session ? '<button class="entry outline" onclick="resume()">Đánh giá lại</button>' : ''}<small>Chưa thẩm định y khoa · <a href="#policy" onclick="go('about');return false">Policy</a></small></div>`,
  })
}
function compactHistory9(h, i) {
  const can = E9.edits.some((e) => e.index === i)
  return `<article class="flow-node done-node"><div class="node-inner">${can ? `<button class="history9" onclick="edit9(${i})" aria-label="Sửa: ${esc(h.title)}">` : '<div class="history9 static">'}${ico8('check')}<span><small>${esc(h.title)}</small><b>${esc(h.answer.replace(' · không phải chẩn đoán xác định', ''))}</b></span>${can ? ico8('edit') : ''}${can ? '</button>' : '</div>'}</div></article>`
}
flowActive = function (content) {
  const entries = F.history
    .map((h, i) => ({ h, i }))
    .filter(({ h }) => h.type !== 'Bắt đầu' && h.type !== 'Tình trạng nghi ngờ')
  const visible = E9.historyOpen ? entries : entries.slice(-1)
  const count = entries.length
  let history =
    count > 1
      ? `<button class="history-toggle9" onclick="toggleHistory9()">${E9.historyOpen ? 'Thu gọn' : `Xem ${count - 1} câu / bước trước`}</button>${arrow()}`
      : ''
  history += visible.map(({ h, i }) => compactHistory9(h, i) + arrow()).join('')
  const p = P[S.protocol]
  const num = entries.length + 1
  return (
    history +
    node({
      num,
      state:
        S.view === 'protocol' ? `Bước ${S.step + 1}/${p.steps.length}` : '',
      kind: 'active-node',
      critical: S.view === 'protocol' ? p?.critical : Q[S.node]?.critical,
      id: 'active-node',
      content,
    })
  )
}
const about9 = about
about = function () {
  return `<section class="panel policy9"><h1>Policy</h1><p><b>SowCuu v1.2 · Bản thử nghiệm</b></p><p>Chưa được chuyên gia y tế thẩm định. Không phải công cụ chẩn đoán, không thay thế cấp cứu hoặc huấn luyện trực tiếp. Khi có dấu hiệu nguy kịch, gọi 115 và làm theo tổng đài.</p><details><summary>Quyền riêng tư</summary><p>Nhật ký nằm trong phiên mở HTML, không gửi đến máy chủ. Xuất báo cáo theo yêu cầu. Ảnh từ Wikimedia được tải qua mạng; giọng đọc phụ thuộc thiết bị.</p></details><details><summary>Nguồn y khoa và giấy phép hình ảnh</summary>${about9()}${Object.values(
    images8
  )
    .flat()
    .map((a) => '<p>' + credit8(a) + '</p>')
    .join('')}</details></section>`
}
const prior9 = render
render = function () {
  prior9()
  if (S.tab !== 'home') {
    app.querySelectorAll('.notice').forEach((x) => x.remove())
    if (S.tab === 'log') app.querySelector('.eyebrow')?.remove()
    return
  }
  const n = document.getElementById('active-node')
  if (!n) return
  document.querySelector('.flow-alert')?.remove()
  const bar = document.querySelector('.flow-toolbar')
  if (bar) {
    bar.querySelector('.flow-heading').innerHTML = 'Sơ cứu'
    bar.querySelector('button[onclick="fitFlow()"]')?.remove()
    if (E9.edits.length) {
      const b = document.createElement('button')
      b.className = 'flow-tool'
      b.setAttribute('aria-label', 'Quay lại câu trước')
      b.title = 'Quay lại câu trước'
      b.innerHTML = ico8('reset')
      b.onclick = undo9
      bar.appendChild(b)
    }
  }
  if (S.view === 'home') return
  if (S.view === 'question') {
    n.classList.add('question9')
    n.querySelectorAll('.stack button').forEach((b) => {
      b.textContent = b.textContent.replace(/\s*→\s*$/, '')
      b.insertAdjacentHTML('beforeend', ico8('right'))
    })
    if (!Q[S.node].desc) n.querySelector('.panel p')?.remove()
    if (!Q[S.node].critical && S.node !== 'scene' && S.session) {
      const p = n.querySelector('.panel')
      p?.insertAdjacentHTML(
        'afterbegin',
        `<div class="quick-meta9"><button onclick="ageMenu9()">${ico8('person')} ${A.profile && A.profile !== 'unknown' ? esc(groups7[A.profile]) : 'Tuổi (nếu biết)'}</button></div>`
      )
    }
  }
  if (S.view === 'protocol') {
    const p = P[S.protocol],
      panel = n.querySelector('.panel')
    const muted = panel?.querySelector('p.muted')
    if (muted) muted.textContent = p.title
    const stack = n.querySelector('.stack')
    if (stack) {
      stack.querySelectorAll('button').forEach((b) => {
        const fn = b.getAttribute('onclick')
        if (fn === 'next()' && b.textContent.includes('Tiếp tục khi phù hợp')) {
          b.innerHTML = ico8('next') + '<span>Tiếp tục khi phù hợp</span>'
        }
        if (fn === 'speakCurrent()')
          b.innerHTML = ico8('audio') + '<span>Đọc lại</span>'
      })
    }
    if (
      S.protocol === 'hypo_awake' &&
      S.step === 0 &&
      A.supplies?.includes('Nước trái cây')
    ) {
      const rows = panel.querySelector('.supply')
      if (rows)
        rows.innerHTML =
          '<div class="tag">Chọn một nguồn đường nhanh</div>' +
          [oldSup9[1], oldSup9[2], oldSup9[3]]
            .map(
              (t) =>
                '<div class="supply-row g8supply">' +
                ico8(suppliesIcon8(t)) +
                '<span>' +
                esc(t) +
                '</span></div>'
            )
            .join('') +
          '<small>Không cộng các nguồn đường.</small>'
    }
    n.querySelectorAll('.source').forEach((x) => x.remove())
  }
}
// Fix the inherited node wrapper: active kind can contain additional classes.
const node9 = node
node = function (o) {
  return node9(o)
}

// Final UI refinements: short direct routes, compact search and orientation handling.
q7('context_other9', 'Chuyện gì đã xảy ra?', 'Hỏi người chứng kiến nếu cần.', [
  ['Tai nạn, điện, nước, hóa chất hoặc khí độc', 'context_part1'],
  ['Ăn uống, bệnh nền hoặc dấu hiệu khác', 'quick_other9'],
  ['Mệt, ngất, run hoặc không rõ', 'quick_context9'],
])
Q.context.options = [
  ['Đường huyết đo thấp / có tiểu đường và run, đói, vã mồ hôi', 'sugar_safe'],
  ['Ở nơi nóng hoặc vừa vận động dưới nắng', 'heat_alert'],
  ['Tình huống khác / chưa rõ', 'context_other9'],
]
// Avoid unnecessary questions in known choking or age-sensitive routes; no change to the medical steps.
Q.age.options[2] = ['Đã dậy thì / người lớn / không rõ', 'cpr_adult_check7']
// Six demographic groups remain available on demand; newborn distinctions stay explicit.
const saveAgeFinal9 = saveAge9
saveAge9 = function (v) {
  if (v === 'infant') {
    modal.innerHTML =
      '<h2>Bé bao nhiêu tuổi?</h2><div class="stack"><button onclick="finishInfant9(\'birth\')">Vừa chào đời</button><button onclick="finishInfant9(\'newborn\')">Dưới 28 ngày</button><button onclick="finishInfant9(\'other\')">28 ngày – dưới 1 tuổi / không rõ</button><button onclick="modal.close()">Đóng</button></div>'
    return
  }
  saveAgeFinal9(v)
}
function finishInfant9(v) {
  A.profile = 'infant'
  A.infantDetail = v
  S.session.ageGroup = groups7.infant
  S.session.infantDetail = v
  log('Cập nhật tuổi: ' + groups7.infant + ' · ' + v)
  modal.close()
  render()
}
// Search exposes only the real situation index, never generated QA records.
library = function () {
  S.mode = 'base'
  return `<section class="panel"><h1>Tra cứu</h1><input id="query" class="search" aria-label="Tìm triệu chứng" value="${esc(S.query)}" placeholder="Tìm triệu chứng, ví dụ: ngất, đau ngực" oninput="S.query=this.value;S.limit=30;listEntries()"><div id="results"></div></section>`
}
listEntries = function () {
  const el = document.getElementById('results')
  if (!el) return
  const q = norm(S.query),
    items = data.base_scenarios.filter((x) =>
      norm(x.presentation_vi + ' ' + x.category).includes(q)
    )
  el.innerHTML =
    items
      .slice(0, S.limit)
      .map(
        (x) =>
          `<button class="entry" onclick="detail('${esc(x.id)}')">${esc(x.presentation_vi)}</button>`
      )
      .join('') +
    (items.length > S.limit
      ? '<button class="entry outline" onclick="S.limit+=30;listEntries()">Xem thêm</button>'
      : '') +
    (!items.length ? '<p>Không tìm thấy.</p>' : '')
}
detail = function (id) {
  const b = baseMap[id]
  if (!b) return
  showModal(
    b.presentation_vi,
    'Bắt đầu đánh giá để chọn cách sơ cứu phù hợp.',
    '<button class="primary" onclick="modal.close();start()">Bắt đầu</button>'
  )
}
const toggleFinal9 = toggleHistory9
toggleHistory9 = function () {
  toggleFinal9()
  if (E9.historyOpen)
    requestAnimationFrame(() => {
      const v = document.getElementById('flowViewport')
      v?.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })
}
const renderFinal9 = render
render = function () {
  renderFinal9()
  if (S.tab !== 'home' || S.view === 'home') return
  const bar = document.querySelector('.flow-toolbar')
  if (!bar) return
  const count = F.history.filter(
    (h) => h.type !== 'Bắt đầu' && h.type !== 'Tình trạng nghi ngờ'
  ).length
  if (count > 1) {
    const b = document.createElement('button')
    b.className = 'flow-tool'
    b.setAttribute('aria-label', 'Xem các câu trước')
    b.title = 'Xem các câu trước'
    b.innerHTML = ico8('clock')
    b.onclick = toggleHistory9
    bar.appendChild(b)
  }
  if (S.view === 'question') {
    const old = document.querySelector('.quick-meta9')
    if (old) {
      const b = old.querySelector('button')
      if (b) {
        b.className = 'flow-tool'
        b.innerHTML = ico8('person')
        b.title =
          A.profile && A.profile !== 'unknown'
            ? groups7[A.profile]
            : 'Tuổi nạn nhân (nếu biết)'
        b.setAttribute('aria-label', b.title)
        bar.appendChild(b)
      }
      old.remove()
    }
  }
}
let resize9
window.addEventListener('resize', () => {
  clearTimeout(resize9)
  resize9 = setTimeout(() => {
    if (S.tab === 'home' && !E9.historyOpen) focusFlow()
  }, 120)
})
// v1.2: observable context, focused checks and scannable instructions.
const q10 = (id, title, desc, options, critical = false) =>
  q7(id, title, desc, options, critical)
Q.response.desc =
  'Gọi to, chạm nhẹ vai (bé dưới 1 tuổi: lòng bàn chân).\nCó phản ứng: mở mắt, nhìn hoặc cử động có chủ đích.\nMáu chảy ồ ạt: cầm máu ngay.'
Q.awake_breath.options = [
  ['Thở bình thường', 'breathawake'],
  ['Khó thở / nghẹn / tím môi', 'breath_cause'],
  ['Không còn phản ứng / chỉ thở ngáp / không chắc', 'breath'],
]
Q.breathawake.options = [
  [
    'Đột ngột khó nói, méo mặt, yếu một bên, nhìn mờ hoặc mất thăng bằng',
    'p:stroke',
  ],
  ['Co giật, đau ngực, chảy máu hoặc lú lẫn', 'urgent9'],
  ['Dấu hiệu khác / chưa rõ', 'context'],
]
Q.context.options = [
  ['Nóng, dưới nắng / vừa ở dưới nước / khói, cháy, nổ', 'env10'],
  ['Tai nạn, té ngã, vật đè, vết thương', 'trauma10'],
  ['Không có tai nạn rõ / bệnh nền / ăn uống', 'medical10'],
]
Q.context.desc =
  'Hỏi người chứng kiến. Chọn hoàn cảnh thực sự xảy ra, không chỉ nơi đang đứng.'
q10('env10', 'Nạn nhân vừa ở môi trường nào?', '', [
  ['Nơi rất nóng, kể cả trong phòng kín nóng', 'heat_alert'],
  ['Vừa chìm/ngạt trong nước, đã lên bờ', 'water10'],
  ['Khói, cháy, tiếng nổ hoặc khí độc', 'smoke10'],
])
q10(
  'water10',
  'Sau khi lên bờ, nạn nhân thế nào?',
  'Không xuống nước nếu không được huấn luyện.',
  [
    ['Còn tỉnh, thở bình thường / ho', 'p:drowning'],
    ['Còn tỉnh nhưng khó thở', 'p:drowning'],
    ['Mất phản ứng / không rõ', 'breath'],
  ],
  true
)
q10(
  'smoke10',
  'Chuyện gì vừa xảy ra?',
  'Chỉ tiếp cận khi đã an toàn.',
  [
    ['Hít khói, cháy hoặc bỏng mặt', 'p:smoke10'],
    ['Vụ nổ, vật đè, va đập mạnh vào ngực', 'blast10'],
    ['Phòng kín có bếp than, máy phát, khí độc', 'p:co_poison'],
  ],
  true
)
q10(
  'blast10',
  'Sau vụ nổ hoặc vật đè, dấu hiệu nào nổi bật?',
  'Khó thở, chảy máu nhiều hoặc mất phản ứng cần xử trí ngay.',
  [
    ['Khó thở, đau ngực, ho ra máu', 'p:chest_trauma'],
    ['Bỏng da, chảy máu', 'blast_wound10'],
    ['Không rõ tổn thương / đau đầu, ù tai, choáng', 'p:blast10'],
  ],
  true
)
q10(
  'blast_wound10',
  'Tổn thương chính là gì?',
  '',
  [
    ['Máu chảy ồ ạt', 'p:bleed'],
    ['Bỏng da', 'p:burn'],
    ['Chấn thương khác / chưa rõ', 'p:blast10'],
  ],
  true
)
q10(
  'trauma10',
  'Tai nạn tác động vào vùng nào?',
  'Không lật hoặc kéo nạn nhân để kiểm tra.',
  [
    ['Đầu, thái dương, gáy, cổ, lưng', 'head10'],
    ['Ngực, bụng hoặc bị vật đè', 'blast10'],
    ['Tay, chân hoặc vùng khác', 'injury'],
  ],
  true
)
q10(
  'head10',
  'Quan sát vùng đầu hoặc cổ',
  'Không bắt đứng, xoay cổ hoặc tháo mũ bảo hiểm.',
  [
    ['Máu chảy nhiều / vết thương hở', 'p:bleed_head10'],
    ['Đau đầu, nôn, lú lẫn, từng ngất / đau cổ', 'p:head'],
    ['Không rõ mức độ / bị va đập mạnh', 'p:head'],
  ],
  true
)
q10('medical10', 'Dấu hiệu nổi bật là gì?', '', [
  ['Run, đói, vã mồ hôi / tiểu đường', 'sugar_history'],
  ['Bất thường về nói, nhìn, mặt, tay chân / mới xuất hiện', 'stroke_check10'],
  ['Ăn uống, thuốc, ngất hoặc tình huống khác', 'quick_other9'],
])
q10(
  'stroke_check10',
  'Có dấu hiệu đột ngột nào sau đây?',
  'Nếu tỉnh và làm được: yêu cầu cười, giơ hai tay khi đang ngồi hoặc nằm, nói một câu ngắn.\nKhông yêu cầu đứng hoặc đi thử.',
  [
    [
      'Có ít nhất một dấu hiệu: lệch mặt, rơi tay, khó nói, nhìn hoặc thăng bằng bất thường',
      'p:stroke',
    ],
    ['Không thấy các dấu hiệu trên', 'sudden'],
    ['Không làm được / không chắc do triệu chứng mới', 'p:stroke'],
  ],
  true
)
Q.breath_other_detail7.options = [
  ['Vụ nổ, vật đè, va đập ngực', 'p:chest_trauma'],
  ['Hít khói / khí độc / dùng thuốc', 'resp_env10'],
  ['Đau ngực / không rõ', 'p:chest'],
]
q10(
  'resp_env10',
  'Có tiếp xúc gì trước khi khó thở?',
  '',
  [
    ['Cháy, hít khói, bỏng mặt', 'p:smoke10'],
    ['Bếp than, máy phát / khí độc trong phòng kín', 'p:co_poison'],
    ['Thuốc / chất chưa rõ', 'toxin_kind'],
  ],
  true
)
Q.heat_alert.desc =
  'Có thể xảy ra cả trong nhà nóng; không cần có nắng trực tiếp.'
// Context is remembered only as evidence, not a diagnosis.
const choose10prev = choose
choose = function (i) {
  const id = S.node,
    o = Q[id]?.options[i]
  if (!o) return
  if (id === 'water10') A.water10 = true
  const r = choose10prev(i)
  if (
    [
      'env10',
      'smoke10',
      'blast10',
      'trauma10',
      'resp_env10',
      'water10',
    ].includes(id)
  ) {
    A.environment10 = o[0]
    S.session.environment = A.environment10
  }
  return r
}
const start10prev = start
start = function (hint = '') {
  delete A.environment10
  delete A.water10
  delete A.position10
  delete A.wound10
  return start10prev(hint)
}
// Short, explicit steps (source-based; not a clinical validation).
sources.head10 = [
  'Mayo Clinic · Sơ cứu chấn thương đầu',
  'https://www.mayoclinic.org/first-aid/first-aid-head-trauma/basics/art-20056626',
]
sources.cpr10 = [
  'Red Cross · CPR có thổi ngạt',
  'https://www.redcross.org/take-a-class/cpr/performing-cpr/cpr-steps',
]
sources.heat10 = [
  'CDC · Bệnh do nóng',
  'https://www.cdc.gov/niosh/heat-stress/about/illnesses.html',
]
P.stroke.steps[0].title = 'Nghi đột quỵ: cho nghỉ ngay'
P.stroke.steps[0].text =
  'Nhờ người khác gọi 115 ngay.\nGhi giờ bắt đầu hoặc lần cuối còn bình thường.\nMột dấu hiệu mới xuất hiện là đủ để nghi ngờ.\nTriệu chứng đã hết vẫn cần cấp cứu.'
P.stroke.steps[0].warning =
  'Không bắt đứng hoặc đi thử.\nKhông chích máu ngón tay/dái tai.\nKhông cho ăn uống, aspirin hoặc thuốc tự chọn.'
P.stroke.steps[1].text =
  'Cho nghỉ ở tư thế dễ chịu, không bắt đứng dậy.\nNếu giảm tỉnh táo nhưng còn thở bình thường: nằm nghiêng nếu không nghi chấn thương.\nNếu có máy đo đường huyết và biết dùng: đo và báo kết quả, không trì hoãn cấp cứu.\nNếu mất phản ứng hoặc thở bất thường: đánh giá lại ngay.'
P.stroke.steps[0].chips10 = [
  'Méo mặt',
  'Yếu một bên',
  'Khó nói / hiểu lời',
  'Mất thăng bằng',
  'Nhìn bất thường',
]
P.bleed.steps[0].text =
  'Nhờ người khác gọi 115.\nÉp mạnh, liên tục bằng gạc hoặc vải sạch.\nCó vật cắm: ép xung quanh, không rút.\nNghi vỡ sọ, tổn thương mắt hoặc vết hở ngực: không ép trực tiếp lên vùng tổn thương; chọn vị trí bên dưới.\nDùng găng nếu có; không trì hoãn để tìm đồ.'
addP('bleed_head10', 'Chảy máu đầu / da đầu', 'head10', true, [
  st(
    'Cầm máu, bảo vệ đầu và cổ',
    'Nếu là vết rách da đầu không nghi vỡ sọ: ép bằng gạc sạch.\nNếu nghi vỡ sọ, chỗ lõm, xương lộ hoặc vật cắm: không ép trực tiếp lên vùng đó; che nhẹ bằng gạc sạch và làm theo tổng đài.\nGiữ đầu cổ ổn định.\nTheo dõi ý thức và thở.',
    {
      continuous: true,
      warning:
        'Không ấn vào mắt. Không nút tai hoặc mũi khi có máu/dịch sau chấn thương.',
    }
  ),
])
addP('bleed_neck10', 'Chảy máu vùng cổ / gáy', 'bleed', true, [
  st(
    'Cầm máu tại chỗ',
    'Dùng gạc sạch ép đúng vị trí chảy máu, tránh đè đường thở.\nKhông quấn băng vòng quanh cổ hoặc ép cả hai bên cổ.\nNếu có vật cắm: không rút; ép xung quanh.\nGiữ đầu cổ ổn định nếu nghi chấn thương.',
    { continuous: true }
  ),
])
addP('bleed_trunk10', 'Chảy máu ngực / bụng / thân mình', 'aha', true, [
  st(
    'Bảo vệ vết thương',
    'Vết rách ngoài da: ép trực tiếp bằng gạc sạch.\nVết hở xuyên ngực: không bịt kín khí, không tự nhét gạc sâu.\nVết thương bụng có tạng lộ: che nhẹ, không đẩy vào và không ép lên tạng.\nKhông rút vật cắm.\nTheo dõi hô hấp và làm theo tổng đài.',
    { continuous: true }
  ),
])
addP('smoke10', 'Nghi tổn thương do hít khói', 'aha', true, [
  st(
    'Ra không khí sạch nếu an toàn',
    'Không vào vùng cháy hoặc khói để cứu người.\nKhi đã an toàn, để nạn nhân tỉnh ở tư thế dễ thở.\nKhàn giọng, ho, khó thở, bỏng mặt có thể là dấu hiệu tổn thương đường thở.\nNhờ gọi 115 ngay.\nNếu mất phản ứng: đánh giá thở và hồi sức phù hợp.',
    { continuous: true }
  ),
])
addP('blast10', 'Chấn thương do nổ / vật đè', 'aha', true, [
  st(
    'Giữ an toàn và theo dõi',
    'Không tiếp cận khi còn nguy cơ nổ, sập hoặc cháy.\nHạn chế di chuyển nạn nhân nếu nghi chấn thương.\nTheo dõi khó thở, đau ngực, ho ra máu, lú lẫn và chảy máu.\nKhông tự chọc kim vào ngực.\nCần đánh giá cấp cứu, kể cả khi ngoài da ít tổn thương.',
    { continuous: true }
  ),
])
q10(
  'wound_region10',
  'Máu đang chảy ở đâu?',
  'Tiếp tục cầm máu nếu đang ép; nhờ người khác chọn.',
  [
    ['Đầu, thái dương, gáy, cổ', 'wound_head10'],
    ['Ngực, bụng, lưng', 'p:bleed_trunk10'],
    ['Tay, chân hoặc chưa rõ', 'wound_limb10'],
  ],
  true
)
q10(
  'wound_head10',
  'Vị trí cụ thể?',
  '',
  [
    ['Da đầu / trán / thái dương', 'p:bleed_head10'],
    ['Gáy / cổ', 'p:bleed_neck10'],
    ['Mắt / không rõ', 'wound_eye10'],
  ],
  true
)
q10(
  'wound_eye10',
  'Có tổn thương mắt không?',
  '',
  [
    ['Có vật xuyên hoặc nghi tổn thương mắt', 'p:eye_pierced'],
    ['Không, chảy máu da đầu', 'p:bleed_head10'],
    ['Không chắc', 'p:bleed_head10'],
  ],
  true
)
q10(
  'wound_limb10',
  'Vết thương ở tay chân thế nào?',
  'Giữ lực ép liên tục.',
  [
    ['Đứt lìa ngón / chi', 'p:amputation'],
    ['Vết rách tay hoặc chân', 'p:bleed'],
    ['Không rõ', 'p:bleed'],
  ],
  true
)
P.cpr.steps[0].text =
  'Đặt nằm ngửa trên mặt phẳng cứng.\nNhờ gọi 115 và lấy AED.\nĐặt hai tay chồng nhau ở giữa ngực.\nÉp sâu 5–6 cm, 100–120 lần/phút.\nNhả ngực hoàn toàn sau mỗi lần ép.\nNếu đã được huấn luyện và có thể: 30 lần ép + 2 lần thổi ngạt.\nNếu không thể thổi ngạt: tiếp tục ép tim, không dừng để bấm nút.'
P.cpr.steps[0].warning =
  'Trẻ em, đuối nước hoặc ngạt: thổi ngạt đặc biệt quan trọng; làm theo hướng dẫn phù hợp với tuổi.'
// Optional bedside observations: never a mandatory pre-CPR form.
function position10() {
  modal.innerHTML =
    '<h2>Tư thế hiện tại</h2><div class="stack">' +
    ['Đang nằm', 'Đang ngồi', 'Đang đứng / chưa rõ']
      .map((a, i) => `<button onclick="savePos10(${i})">${esc(a)}</button>`)
      .join('') +
    '<button class="outline" onclick="modal.close()">Đóng</button></div>'
  if (!modal.open) modal.showModal()
}
function savePos10(i) {
  A.position10 = ['Đang nằm', 'Đang ngồi', 'Đang đứng / chưa rõ'][i]
  S.session.position = A.position10
  log('Tư thế: ' + A.position10)
  modal.close()
  render()
}
function list10(text) {
  return String(text || '')
    .split(/\n+|(?<=[.!?])\s+(?=[A-ZÀ-ỸĐ])/u)
    .map((x) => x.trim())
    .filter(Boolean)
}
function bullet10(el, text) {
  const parts = list10(text)
  if (!parts.length) {
    el.remove()
    return
  }
  el.innerHTML =
    '<ul class="bullets10">' +
    parts.map((x) => '<li>' + esc(x) + '</li>').join('') +
    '</ul>'
}
function rescue10() {
  modal.innerHTML =
    '<h2>Thổi ngạt · người lớn</h2><ul class="bullets10"><li>Chỉ phối hợp nếu đã được huấn luyện và có thể thực hiện.</li><li>Sau 30 lần ép: ngửa đầu, nâng cằm (nếu nghi chấn thương cổ, làm theo tổng đài).</li><li>Bịt mũi, áp kín miệng, thổi khoảng 1 giây đến khi ngực nhô lên.</li><li>Thực hiện 2 lần thổi rồi ép tim ngay.</li><li>Nếu không thổi được: tiếp tục ép tim; không trì hoãn.</li></ul><button class="primary" onclick="modal.close()">Quay lại ép tim</button>'
  if (!modal.open) modal.showModal()
}
const unable10prev = unable
unable = function () {
  const id = S.protocol
  const tips = {
    cpr: [
      'Không thổi ngạt được: ép tim liên tục.',
      'Nhờ người khác đổi người ép nếu mệt.',
      'Bật loa ngoài và làm theo tổng đài.',
    ],
    bleed: [
      'Không có gạc: dùng vải sạch có sẵn.',
      'Nhờ người khác giữ ép nếu bạn phải rời tay.',
      'Không nhấc gạc liên tục để kiểm tra.',
    ],
    stroke: [
      'Không nói được: không ép trả lời.',
      'Không đứng được: giữ nguyên tư thế an toàn.',
      'Không đo được đường huyết: bỏ qua, không trì hoãn cấp cứu.',
    ],
    heatstroke: [
      'Không có đá: làm ướt da và quạt liên tục.',
      'Không có bồn nước: dùng nước mát sẵn có.',
      'Không cho uống khi lơ mơ.',
    ],
  }
  if (!tips[id]) return unable10prev()
  log('Không thể thực hiện: ' + id)
  modal.innerHTML =
    '<h2>Phương án thay thế</h2><ul class="bullets10">' +
    tips[id].map((t) => '<li>' + esc(t) + '</li>').join('') +
    '</ul><button class="primary" onclick="modal.close()">Quay lại hướng dẫn</button>'
  if (!modal.open) modal.showModal()
}
const render10prev = render
render = function () {
  render10prev()
  if (S.tab !== 'home') return
  const n = document.getElementById('active-node')
  if (!n) return
  const panel = n.querySelector('.panel')
  if (!panel) return
  if (S.view === 'question') {
    const q = Q[S.node]
    const p = panel.querySelector('p')
    if (p && q.desc) bullet10(p, q.desc)
    if (
      !q.critical &&
      [
        'context',
        'medical10',
        'sudden',
        'faint_flags',
        'stroke_check10',
        'trauma10',
        'head10',
      ].includes(S.node)
    ) {
      const bar = document.querySelector('.flow-toolbar')
      if (bar) {
        const b = document.createElement('button')
        b.className = 'flow-tool'
        b.innerHTML = ico8('person')
        b.title = A.position10 || 'Tư thế'
        b.setAttribute('aria-label', 'Ghi nhận tư thế')
        b.onclick = position10
        bar.appendChild(b)
      }
    }
  }
  if (S.view === 'protocol') {
    const p = P[S.protocol],
      s = p.steps[S.step],
      t = panel.querySelector('.steptext')
    if (t) bullet10(t, s.text)
    const warns = panel.querySelectorAll('.warning')
    warns.forEach((w) => bullet10(w, w.textContent))
    if (s.chips10 && t)
      t.insertAdjacentHTML(
        'beforebegin',
        '<div class="chips10">' +
          s.chips10.map((c) => '<span>' + esc(c) + '</span>').join('') +
          '</div>'
      )
    if (S.protocol === 'bleed' && S.step === 0 && t)
      t.insertAdjacentHTML(
        'afterend',
        `<button class="loc10" onclick="question('wound_region10')">${ico8('person')} Vị trí vết thương →</button>`
      )
    if (S.protocol === 'cpr' && S.step === 0 && t)
      t.insertAdjacentHTML(
        'afterend',
        `<button class="loc10" onclick="rescue10()">${ico8('audio')} Cách thổi ngạt (đã được huấn luyện)</button>`
      )
    if (S.protocol === 'stroke' && S.step === 0 && t)
      t.insertAdjacentHTML(
        'afterend',
        `<button class="loc10" onclick="position10()">${ico8('person')} ${esc(A.position10 || 'Ghi nhận tư thế (nếu cần)')}</button>`
      )
    panel.querySelectorAll('.supply small').forEach((x) => {
      if (x.textContent.length > 60) bullet10(x, x.textContent)
    })
  }
}

Q.env10.options[2] = ['Khói, cháy, nổ, khí độc, điện hoặc hóa chất', 'smoke10']
Q.context.options[0][0] = 'Nóng, nước, khói, cháy, nổ, điện hoặc hóa chất'
Q.smoke10.options[2] = [
  'Khí độc, điện, hóa chất hoặc tiếp xúc khác',
  'env_other10',
]
q10('env_other10', 'Tiếp xúc với gì?', 'Không vào khu vực còn nguy hiểm.', [
  ['Bếp than, máy phát, khí độc trong phòng kín', 'p:co_poison'],
  ['Điện giật hoặc hóa chất', 'exposure'],
  ['Lạnh, động vật hoặc chưa rõ', 'exposure'],
])
Q.sudden.desc =
  'Quan sát mặt, lời nói, da, cử động và mức tỉnh táo. Không bắt đứng hoặc đi thử.'
Q.breath_other7.options[1][0] = 'Va đập ngực, vụ nổ, khói / khí độc hoặc thuốc'
// Do not treat proximity to water as actual drowning. Preserve observed exposure for later deterioration.
const open10prev = openProtocol
openProtocol = function (id) {
  if (A.water10 && ['cpr', 'cpr_special'].includes(id)) id = 'cpr_special'
  return open10prev(id)
}
const pos10render = render
render = function () {
  pos10render()
  if (S.tab !== 'home') return
  const n = document.getElementById('active-node'),
    panel = n?.querySelector('.panel')
  if (!panel) return
  if (
    S.view === 'protocol' &&
    S.step === 0 &&
    A.position10 &&
    ['stroke', 'asthma', 'chest', 'chest_trauma', 'smoke10', 'faint'].includes(
      S.protocol
    )
  ) {
    const t = panel.querySelector('.steptext')
    let advice =
      S.protocol === 'stroke'
        ? 'Giữ tư thế dễ chịu và an toàn. Không thử đứng hoặc đi lại.'
        : S.protocol === 'faint'
          ? 'Nghỉ ở tư thế an toàn; không đứng dậy đột ngột.'
          : 'Nếu tỉnh, để ở tư thế dễ thở; không ép thay đổi tư thế.'
    if (S.protocol === 'stroke' && A.position10 === 'Đang đứng / chưa rõ')
      advice =
        'Nếu đang đứng, hỗ trợ ngồi hoặc nằm an toàn để tránh ngã; không thử đi lại.'
    if (t)
      t.insertAdjacentHTML(
        'afterend',
        '<div class="posnote10"><b>' +
          esc(A.position10) +
          '</b><ul class="bullets10"><li>' +
          esc(advice) +
          '</li></ul></div>'
      )
  }
  if (S.view === 'question')
    panel.querySelectorAll('.warning').forEach((w) => {
      if (!w.querySelector('li')) bullet10(w, w.textContent)
    })
  if (S.view === 'protocol' || S.view === 'monitor') {
    panel.querySelectorAll('p').forEach((p) => {
      if (
        !p.closest('.steptext,.source,.supply,.guide8') &&
        !p.querySelector('li') &&
        p.textContent.trim().length > 75
      )
        bullet10(p, p.textContent)
    })
  }
}
const modal10prev = showModal
showModal = function (title, body, extra = '') {
  modal10prev(title, body, extra)
  const p = modal.querySelector('p')
  if (p) bullet10(p, body)
}
sources.smoke10 = [
  'NSW Health · Hít khói',
  'https://aci.health.nsw.gov.au/networks/eci/clinical/ed-factsheets/smoke-inhalation',
]
sources.blast10 = [
  'ACEP · Chấn thương phổi do nổ',
  'https://www.acep.org/imports/clinical-and-practice-management/resources/ems-and-disaster-preparedness/disaster-preparedness-grant-projects/cdc---blast-injury/cdc-blast-injury-fact-sheets/blast-lung-injury-an-overview-for-prehospital-care-providers',
]
P.smoke10.source = 'smoke10'
P.blast10.source = 'blast10'
// Prioritize direct action but make exceptions visible before pressure instructions.
P.bleed.steps[0].text =
  'Nhờ người khác gọi 115.\nNếu nghi vỡ sọ, tổn thương mắt, vết xuyên ngực hoặc tạng lộ: không ép trực tiếp lên vùng tổn thương.\nVết chảy máu ngoài da khác: ép mạnh liên tục bằng gạc hoặc vải sạch.\nCó vật cắm: không rút; ép quanh vật nếu phù hợp vị trí.\nDùng găng nếu có; không trì hoãn để tìm đồ.'
// Keep the prototype status on the home entry, and the full policy in Policy.

// v1.2 — structured scene / primary survey / focused assessment / onset / care / reassessment.
const stages11 = [
  'Hiện trường',
  'Nạn nhân',
  'Triệu chứng',
  'Thời điểm',
  'Đánh giá & biện pháp',
  'Xác nhận',
]
const sceneNodes11 = new Set(['scene'])
const personNodes11 = new Set([
  'response',
  'awake_breath',
  'breath',
  'age',
  'profile_age',
  'profile_young',
  'profile_adult',
  'profile_infant',
])
const timeNodes11 = new Set(['onset11'])
function stage11() {
  if (S.view === 'home') return -1
  if (S.view === 'unsafe') return 0
  if (S.view === 'monitor') return 5
  if (S.view === 'protocol' || S.view === 'special') return 4
  if (S.view === 'question') {
    if (sceneNodes11.has(S.node)) return 0
    if (personNodes11.has(S.node)) return 1
    if (timeNodes11.has(S.node)) return 3
    return 2
  }
  return 4
}
Q.scene = {
  title: 'Hiện trường đang thế nào?',
  desc: 'Quan sát lửa, điện, xe cộ, nước sâu, khói và nguy cơ sập. Chỉ đến gần khi an toàn.',
  options: [
    ['An toàn · Có tai nạn hoặc tiếp xúc môi trường', 'response'],
    ['An toàn · Nạn nhân tự nhiên bị bệnh / chưa rõ', 'response'],
    ['Còn nguy hiểm / không chắc', 'unsafe'],
  ],
}
Q.response.title = 'Nạn nhân có phản ứng không?'
Q.response.desc =
  'Gọi to, chạm nhẹ vai (bé dưới 1 tuổi: lòng bàn chân).\nCó phản ứng dù không nói được.\nMáu phun hoặc chảy ồ ạt: cầm máu ngay.'
Q.awake_breath.title = 'Nạn nhân đang thở thế nào?'
Q.awake_breath.options = [
  ['Thở bình thường', 'breathawake'],
  ['Khó thở / nghẹn / tím môi', 'breath_cause'],
  ['Không còn phản ứng / chỉ thở ngáp / không chắc', 'recheck11'],
]
q7(
  'recheck11',
  'Nạn nhân còn phản ứng không?',
  'Nếu không phản ứng và không thở bình thường, bắt đầu CPR ngay.',
  [
    ['Còn phản ứng, đang rất khó thở', 'breath_cause'],
    ['Không phản ứng / không chắc', 'breath'],
    ['Máu chảy ồ ạt', 'p:bleed'],
  ],
  true
)
personNodes11.add('recheck11')
Q.breath.title = 'Nạn nhân không phản ứng: có thở bình thường không?'
Q.breath.desc =
  'Kiểm tra tối đa 10 giây.\nThở ngáp không phải thở bình thường.\nKhông kiểm tra mạch nếu chưa được huấn luyện.'
Q.breathawake.title = 'Dấu hiệu nguy hiểm nào đang có?'
Q.breathawake.options = [
  ['Đột ngột méo mặt, yếu một bên, khó nói / nhìn / thăng bằng', 'p:stroke'],
  ['Co giật, đau ngực, chảy máu nhiều hoặc lú lẫn', 'urgent9'],
  ['Không thấy các dấu hiệu trên / chưa rõ', 'focused11'],
]
Q.breathawake.desc = 'Quan sát dấu hiệu thực tế, không cần biết tên bệnh.'
q7(
  'focused11',
  'Dấu hiệu hoặc sự việc chính là gì?',
  'Chọn tình huống thực sự xảy ra.',
  [
    ['Tai nạn, vết thương, té ngã', 'trauma10'],
    ['Nóng, nước, khói, hóa chất hoặc tiếp xúc khác', 'env10'],
    ['Mệt, run, ngất, ăn uống hoặc bệnh nền', 'medical10'],
  ]
)
// The main scene choice is evidence, never a diagnosis. Shorten the secondary survey if the scene is known.
const question11base = question
question = function (id) {
  if (id === 'focused11') {
    if (A.scene11 === 'event') return question11base('focused11')
    if (A.scene11 === 'medical') return question11base('medical11')
  }
  return question11base(id)
}
q7(
  'medical11',
  'Nạn nhân có biểu hiện gì?',
  'Hỏi nạn nhân hoặc người chứng kiến nếu có.',
  [
    ['Run, đói, vã mồ hôi hoặc tiểu đường', 'sugar_history'],
    ['Ngất, đau, nôn, co giật hoặc bất thường khác', 'observed'],
    ['Vừa ăn, dùng thuốc hoặc có tiếp xúc môi trường', 'quick_other9'],
  ]
)
// Known scene does not exclude stroke or other coexisting emergencies.
Q.head10.options[0] = ['Máu chảy nhiều / vết thương hở', 'wound_head10']
Q.age.desc =
  'Nhờ gọi 115 và lấy AED ngay.\nBắt đầu CPR khi không phản ứng và không thở bình thường.\nKhông dừng hồi sức để chọn tuổi; nhờ người hỗ trợ chọn nếu có.'
Q.cpr_adult_check7.desc =
  'Không dừng ép ngực để trả lời. Nếu nghi ngạt hoặc đuối nước, thổi ngạt đặc biệt quan trọng.'
Q.breath_cause.title = 'Khó thở xuất hiện sau chuyện gì?'
Q.choke_severity.desc =
  'Chỉ áp dụng khi nghi hóc dị vật.\nNếu ho không hiệu quả hoặc không lấy được hơi, cần xử trí ngay.'
// Explicit time stage for stable situations only. Critical or time-sensitive care opens immediately.
q7(
  'onset11',
  'Triệu chứng bắt đầu khi nào?',
  'Không cần đoán nếu không biết.',
  [
    ['Vừa xảy ra / trong vài phút qua', 'onset11'],
    ['Đã xảy ra trước đó', 'onset11'],
    ['Không rõ / bỏ qua', 'onset11'],
  ]
)
const stableTime11 = new Set([
  'faint',
  'allergy_mild',
  'minor_wound',
  'sting_local',
  'eye_dust',
  'paederus',
])
const start11base = start
start = function (hint = '') {
  delete A.scene11
  delete A.onset11
  delete A.onsetExact11
  delete A.onsetKind11
  delete A.pending11
  delete A.outcome11
  return start11base(hint)
}
const choose11base = choose
choose = function (i) {
  const id = S.node,
    o = Q[id]?.options[i]
  if (!o) return
  if (id === 'onset11') {
    const target = A.pending11
    if (!P[target]) return
    const n = F.history.length
    E9.edits.push({
      index: n,
      snap: {
        node: id,
        profile: clone9(A),
        session: clone9(S.session),
        protocol: S.protocol,
        step: S.step,
        history: clone9(F.history),
        logLength: S.logs.length,
      },
    })
    A.onset11 = o[0]
    S.session.onset = A.onset11
    capture(Q[id].title, o[0], 'Đã trả lời')
    log('Thời điểm: ' + o[0])
    delete A.pending11
    return open11base(target)
  }
  // Snapshot from inherited choose must contain the original scene when correcting the answer.
  if (id === 'scene') {
    const old = A.scene11
    A.scene11 = i === 0 ? 'event' : i === 1 ? 'medical' : 'unsafe'
    const result = choose11base(i)
    const edit = E9.edits.at(-1)
    if (edit?.snap.node === 'scene') {
      if (old === undefined) delete edit.snap.profile.scene11
      else edit.snap.profile.scene11 = old
    }
    return result
  }
  return choose11base(i)
}
const open11base = openProtocol
openProtocol = function (id) {
  if (!P[id]) id = 'unknown'
  if (
    S.view === 'question' &&
    S.node !== 'onset11' &&
    stableTime11.has(id) &&
    !A.onset11 &&
    !A.onsetExact11
  ) {
    A.pending11 = id
    return question('onset11')
  }
  return open11base(id)
}
const changed11base = changed
changed = function () {
  delete A.outcome11
  delete A.pending11
  return changed11base()
}
function onset11() {
  const stroke = S.protocol === 'stroke'
  const seizure = S.protocol === 'seizure'
  modal.innerHTML = `<h2>${stroke ? 'Thời điểm đột quỵ nghi ngờ' : seizure ? 'Thời điểm bắt đầu co giật' : 'Thời điểm khởi phát'}</h2><div class="stack"><label for="onsetkind11">Mốc thời gian</label><select class="search" id="onsetkind11"><option value="Khởi phát">Bắt đầu triệu chứng</option>${stroke ? '<option value="Lần cuối còn bình thường">Lần cuối còn bình thường</option>' : ''}<option value="Chưa rõ">Chưa rõ</option></select><label for="onsetdate11">Ngày và giờ (nếu biết)</label><input type="datetime-local" class="search" id="onsetdate11" value="${esc(A.onsetExact11 || '')}"><button class="primary" onclick="saveOnset11()">Lưu thời điểm</button><button onclick="modal.close()">Bỏ qua</button></div>`
  document.getElementById('onsetkind11').value = A.onsetKind11 || 'Khởi phát'
  if (!modal.open) modal.showModal()
}
function saveOnset11() {
  const kind = document.getElementById('onsetkind11').value,
    v = document.getElementById('onsetdate11').value
  if (kind !== 'Chưa rõ' && !v) {
    document.getElementById('onsetdate11').reportValidity()
    document.getElementById('onsetdate11').focus()
    return
  }
  A.onsetKind11 = kind
  A.onsetExact11 = kind === 'Chưa rõ' ? '' : v
  A.onset11 =
    kind === 'Chưa rõ' ? 'Không rõ' : kind + ' · ' + v.replace('T', ' ')
  S.session.onset = A.onset11
  log('Thời điểm ghi nhận: ' + A.onset11)
  modal.close()
  render()
}
function result11(v) {
  if (v === 'worse' || v === 'same') {
    log(
      'Xác nhận diễn biến: ' +
        (v === 'same' ? 'Chưa cải thiện' : 'Xấu hơn / không chắc')
    )
    return changed()
  }
  A.outcome11 = v
  log(
    'Xác nhận diễn biến: ' +
      (v === 'better' ? 'Có cải thiện' : 'Chưa cải thiện')
  )
  render()
}
function stageHTML11(i) {
  return `<div class="stage11" aria-label="${esc(stages11[i])}"><span class="stageindex11">${i + 1}/6</span><span>${esc(stages11[i])}</span></div>`
}
// More explicit action confirmation; ongoing lifesaving care is never gated by a button.
const render11base = render
render = function () {
  render11base()
  if (S.tab !== 'home') return
  const phase = stage11(),
    active = document.getElementById('active-node')
  if (!active || phase < 0) return
  const bar = active.querySelector('.node-bar')
  if (bar) {
    bar.innerHTML = stageHTML11(phase)
  }
  const panel = active.querySelector('.panel')
  if (!panel) return
  if (S.view === 'question' && S.node === 'onset11') {
    panel.querySelector('h1')?.setAttribute('aria-label', 'Thời điểm khởi phát')
  }
  if (S.view === 'protocol') {
    const p = P[S.protocol],
      step = p.steps[S.step]
    if (S.step === 0) {
      const head = panel.querySelector('h2')
      if (head) {
        const summary = document.createElement('div')
        summary.className = 'assessment11'
        const last = F.history
          .filter((h) => h.type === 'Đã trả lời' && h.title !== Q.onset11.title)
          .at(-1)
        summary.innerHTML = `<div class="tag">${p.critical ? 'Ưu tiên xử trí ngay' : 'Nhận định sơ cứu'}</div><h3>${esc(p.title)}</h3>${last ? `<div class="chips10"><span>${esc(last.answer)}</span></div>` : ''}`
        panel.insertBefore(summary, head)
        const muted = panel.querySelector('p.muted')
        if (muted) muted.remove()
      }
      const t = panel.querySelector('.steptext')
      if (t) {
        const b = document.createElement('button')
        b.className = 'loc10 time11'
        b.innerHTML =
          ico8('clock') + ' ' + esc(A.onset11 || 'Ghi thời điểm nếu biết')
        b.onclick = onset11
        const stack = active.querySelector('.stack')
        if (stack) stack.insertAdjacentElement('beforebegin', b)
        else panel.appendChild(b)
      }
    }
    const stack = active.querySelector('.stack')
    if (stack) {
      const label = document.createElement('div')
      label.className = 'confirm11'
      label.textContent = '6 · Xác nhận / đánh giá lại'
      stack.prepend(label)
      const nextButton = stack.querySelector('button[onclick="next()"]')
      if (nextButton && !step.continuous && !step.metro) {
        nextButton.innerHTML = ico8('check') + '<span>Đã thực hiện</span>'
      }
    }
  }
  if (S.view === 'monitor') {
    const stack = panel.querySelector('.stack')
    if (stack) {
      stack.innerHTML = `<button class="primary" onclick="result11('better')">${ico8('check')} Có cải thiện</button><button onclick="result11('same')">Chưa cải thiện</button><button class="danger" onclick="result11('worse')">Xấu hơn / không chắc</button><button class="outline" onclick="handover()">Bàn giao y tế</button>`
      if (A.outcome11) {
        const el = document.createElement('div')
        el.className = 'warning'
        el.innerHTML =
          '<ul class="bullets10"><li>' +
          esc(
            A.outcome11 === 'better'
              ? 'Đã ghi nhận cải thiện.'
              : 'Đã ghi nhận chưa cải thiện; cần hỗ trợ y tế phù hợp.'
          ) +
          '</li><li>Tiếp tục theo dõi ý thức và hô hấp.</li><li>Không coi đây là xác nhận đã an toàn.</li></ul>'
        stack.prepend(el)
      }
    }
  }
}
// Keep the initial warning succinct; the full policy is in the Policy tab.
const home11base = flowHome
flowHome = function () {
  return home11base().replace(
    '<small>Chưa thẩm định y khoa',
    '<small>Bản thử nghiệm · Chưa thẩm định y khoa'
  )
}
sources.bec11 = [
  'WHO / ICRC · Basic Emergency Care (dành cho nhân viên y tế)',
  'https://www.who.int/publications/i/item/basic-emergency-care-approach-to-the-acutely-ill-and-injured',
]

// v1.2 — optional focused body-region symptom carousel; observations are not a diagnosis.
const signs12 = [
  [
    'Da',
    'layers',
    [
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
    ],
  ],
  [
    'Mắt',
    'eye',
    [
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
    ],
  ],
  [
    'Mũi',
    'wind',
    [
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
    ],
  ],
  [
    'Miệng',
    'mouth',
    [
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
    ],
  ],
  [
    'Chân',
    'leg',
    [
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
    ],
  ],
  [
    'Tay',
    'hand',
    [
      ['Run tay', 'sugar_history', 1],
      ['Đột ngột yếu / tê một bên tay', 'p:stroke', 2],
      ['Một tay rơi xuống khi giơ (mới xuất hiện)', 'p:stroke', 2],
      ['Đau tay', 'injury', 1],
      ['Sưng tay', 'injury', 1],
      ['Bầm tím tay', 'injury', 1],
      ['Tay biến dạng sau va đập', 'p:fracture', 1],
      ['Bàn tay đột ngột lạnh, tái, đau', 'p:unknown', 2],
      ['Máu chảy ồ ạt ở tay', 'p:bleed', 2],
      ['Đứt lìa ngón / bàn tay', 'p:amputation', 2],
    ],
  ],
]
const signsIndex12 = Object.fromEntries(
  signs12.flatMap((g, gi) =>
    g[2].map((x, i) => [
      `${gi}-${i}`,
      { region: g[0], label: x[0], target: x[1], level: x[2] },
    ])
  )
)
const signNodes12 = new Set([
  'focused11',
  'medical11',
  'medical10',
  'observed',
  'sudden',
  'quick_other9',
  'context',
])
let slide12 = 0
function chosen12() {
  return (A.signs12 || []).filter((k) => signsIndex12[k])
}
function signLabel12(k) {
  const x = signsIndex12[k]
  return x.region + ' · ' + x.label
}
function commitSigns12() {
  const keys = chosen12(),
    signature = keys.slice().sort().join(',')
  if (A.signSignature12 !== signature) {
    A.signSignature12 = signature
    if (keys.length || S.session?.signs12?.length)
      log(
        'Biểu hiện ghi nhận: ' +
          (keys.map(signLabel12).join('; ') || 'Đã bỏ chọn tất cả')
      )
    if (S.session) S.session.signs12 = keys.map(signLabel12)
  }
}
const start12base = start
start = function (hint = '') {
  delete A.signs12
  delete A.signSignature12
  slide12 = 0
  return start12base(hint)
}
const changed12base = changed
changed = function () {
  delete A.signs12
  delete A.signSignature12
  if (S.session) delete S.session.signs12
  slide12 = 0
  return changed12base()
}
const choose12base = choose
choose = function (i) {
  if (Q[S.node]?.options[i]) commitSigns12()
  return choose12base(i)
}
q7(
  'nose_check12',
  'Máu mũi xuất hiện sau chấn thương đầu không?',
  'Nếu chảy nhiều, choáng hoặc khó thở: nhờ gọi 115 ngay.',
  [
    ['Có va đập đầu / dịch trong chảy từ mũi', 'p:head'],
    ['Không, nạn nhân tỉnh và thở bình thường', 'p:nosebleed'],
    ['Không rõ / nạn nhân yếu, lơ mơ', 'p:unknown'],
  ],
  true
)
q7(
  'swallow_check12',
  'Khó nuốt xuất hiện cùng dấu hiệu nào?',
  'Không thử nuốt bằng nước hoặc thức ăn.',
  [
    ['Đột ngột khó nói, méo mặt hoặc yếu một bên', 'p:stroke'],
    ['Sưng lưỡi / họng, khó thở hoặc nghi hóc', 'breath_cause'],
    ['Không rõ / không có dấu hiệu trên', 'p:unknown'],
  ],
  true
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
const rank12 = [
  'p:bleed',
  'awake_breath',
  'choke_severity',
  'p:anaphylaxis',
  'p:stroke',
  'p:smoke10',
  'p:chemical_eye',
  'p:eye_pierced',
  'p:head',
  'p:amputation',
  'nose_check12',
  'p:unknown',
]
function routes12() {
  const found = new Map()
  for (const k of chosen12()) {
    const x = signsIndex12[k]
    if (x.target && (!found.has(x.target) || found.get(x.target) < x.level))
      found.set(x.target, x.level)
  }
  return [...found].sort(
    (a, b) =>
      b[1] - a[1] ||
      (rank12.includes(a[0]) ? rank12.indexOf(a[0]) : 100) -
        (rank12.includes(b[0]) ? rank12.indexOf(b[0]) : 100)
  )
}
// Non-specific signs remain evidence. Only targeted follow-up questions are suggested, not treatment for isolated skin changes.
const directLow12 = {
  'p:shock': 'sudden',
  'p:burn': 'exposure',
  'p:fracture': 'injury',
  'p:head': 'injury',
}
function routeSigns12(target) {
  const valid = routes12().find((x) => x[0] === target)
  if (!valid) return
  commitSigns12()
  const mapped = valid[1] === 1 ? directLow12[target] || target : target
  const n = F.history.length
  E9.edits.push({
    index: n,
    snap: {
      node: S.node,
      profile: clone9(A),
      session: clone9(S.session),
      protocol: S.protocol,
      step: S.step,
      history: clone9(F.history),
      logLength: S.logs.length,
    },
  })
  capture(
    'Biểu hiện thường gặp',
    chosen12().map(signLabel12).join(' · '),
    'Đã trả lời'
  )
  log('Lối đánh giá nhanh: ' + labels12[target])
  if (mapped.startsWith('p:')) return openProtocol(mapped.slice(2))
  return question(mapped)
}
function selectSlide12(i) {
  slide12 = Math.max(0, Math.min(signs12.length - 1, i))
  const t = document.getElementById('symTrack12')
  if (!t) return
  const e = t.children[slide12]
  t.scrollTo({
    left: e.offsetLeft - t.children[0].offsetLeft,
    behavior: 'smooth',
  })
  updateNav12()
}
function updateNav12() {
  document
    .querySelectorAll('.sym12nav button')
    .forEach((b, i) => b.setAttribute('aria-selected', String(i === slide12)))
  const n = document.getElementById('symPage12')
  if (n) n.textContent = `${slide12 + 1} / ${signs12.length}`
  const a = document.getElementById('symPrev12'),
    b = document.getElementById('symNext12')
  if (a) a.disabled = slide12 === 0
  if (b) b.disabled = slide12 === signs12.length - 1
}
function scrollSigns12() {
  const t = document.getElementById('symTrack12')
  if (!t) return
  const base = t.children[0].offsetLeft
  let closest = 0,
    dist = Infinity
  ;[...t.children].forEach((e, i) => {
    const d = Math.abs(e.offsetLeft - base - t.scrollLeft)
    if (d < dist) {
      dist = d
      closest = i
    }
  })
  slide12 = closest
  updateNav12()
}
function toggleSign12(k) {
  if (!signsIndex12[k]) return
  const s = new Set(chosen12())
  if (s.has(k)) s.delete(k)
  else s.add(k)
  A.signs12 = [...s]
  refreshSigns12()
}
function clearSigns12() {
  A.signs12 = []
  refreshSigns12()
}
function refreshSigns12() {
  const selected = chosen12()
  document.querySelectorAll('.sym12chip').forEach((b) => {
    const on = selected.includes(b.dataset.sign12)
    b.setAttribute('aria-pressed', String(on))
    b.querySelector('.mark12').textContent = on
      ? '✓'
      : signsIndex12[b.dataset.sign12].level === 2
        ? '!'
        : '+'
  })
  const c = document.getElementById('symCount12')
  if (c) c.textContent = selected.length + ' đã chọn'
  const s = document.getElementById('symSelected12')
  if (s)
    s.innerHTML = selected
      .map((k) => '<span>' + esc(signLabel12(k)) + '</span>')
      .join('')
  const r = document.getElementById('symRoutes12')
  if (!r) return
  const routes = routes12()
  const urgent = routes.filter((x) => x[1] === 2)
  const shown = (urgent.length ? urgent : routes).slice(0, 2)
  r.innerHTML =
    (urgent.length
      ? '<div class="sym12warning" role="alert">Có dấu hiệu nguy hiểm · xử trí ngay, không chờ chọn thêm. Nếu có nhiều dấu hiệu, nhờ hỗ trợ đồng thời.</div>'
      : '') +
    shown
      .map(
        ([key, level]) =>
          `<button class="${level === 2 ? 'danger' : 'outline'}" onclick="routeSigns12('${key}')">${esc(labels12[key] || 'Đánh giá thêm')} →</button>`
      )
      .join('') +
    (urgent.length > 2
      ? '<button class="outline" onclick="routeSigns12(\'' +
        urgent[2][0] +
        '\')">' +
        esc(labels12[urgent[2][0]]) +
        ' →</button>'
      : '')
}
function symptomHTML12() {
  return `<section class="sym12" aria-label="Biểu hiện thường gặp"><div class="sym12head"><h3>Biểu hiện thường gặp</h3><span class="sym12count" id="symCount12">0 đã chọn</span></div><div class="sym12nav" role="tablist" aria-label="Vùng cơ thể">${signs12.map((g, i) => `<button role="tab" aria-selected="${i === slide12}" onclick="selectSlide12(${i})">${esc(g[0])}</button>`).join('')}</div><div id="symRoutes12" class="sym12route" aria-live="polite"></div><div class="sym12track" id="symTrack12" onscroll="scrollSigns12()">${signs12.map((g, gi) => `<section class="sym12slide" aria-label="${esc(g[0])}"><h4>${esc(g[0])} · 10 biểu hiện</h4><div class="sym12grid">${g[2].map((x, i) => `<button type="button" class="sym12chip" data-sign12="${gi}-${i}" aria-pressed="false" onclick="toggleSign12('${gi}-${i}')"><span aria-hidden="true" class="mark12">${x[2] === 2 ? '!' : '+'}</span><span>${esc(x[0])}</span></button>`).join('')}</div></section>`).join('')}</div><div class="sym12pager"><button id="symPrev12" aria-label="Vùng trước" onclick="selectSlide12(slide12-1)">‹</button><span id="symPage12">1 / 6</span><button id="symNext12" aria-label="Vùng kế tiếp" onclick="selectSlide12(slide12+1)">›</button></div><div class="sym12selected"><small>Chọn nhiều hoặc bỏ qua · ! nguy hiểm</small><button class="sym12clear" onclick="clearSigns12()">Bỏ chọn</button></div><div class="sym12summary" id="symSelected12"></div></section>`
}
const render12base = render
render = function () {
  render12base()
  if (S.tab !== 'home') return
  const panel = document.querySelector('#active-node .panel')
  if (!panel) return
  if (S.view === 'question' && signNodes12.has(S.node) && !Q[S.node].critical) {
    const stack =
      panel.querySelector('.stack') || panel.querySelector('.options')
    const section = document.createElement('div')
    section.innerHTML = symptomHTML12()
    if (stack) stack.before(section.firstElementChild)
    else panel.appendChild(section.firstElementChild)
    refreshSigns12()
    const track = document.getElementById('symTrack12')
    if (track) {
      const k = slide12
      track.scrollLeft =
        track.children[k].offsetLeft - track.children[0].offsetLeft
      updateNav12()
    }
  }
  if (S.view === 'protocol' && S.step === 0 && chosen12().length) {
    const a = panel.querySelector('.assessment11')
    if (a) {
      const el = document.createElement('details')
      el.className = 'sym12'
      el.innerHTML =
        '<summary>Biểu hiện đã chọn (' +
        chosen12().length +
        ')</summary><div class="sym12summary">' +
        chosen12()
          .map((k) => '<span>' + esc(signLabel12(k)) + '</span>')
          .join('') +
        '</div>'
      a.after(el)
    }
  }
}
sources.stroke12 = [
  'CDC · Dấu hiệu đột quỵ',
  'https://www.cdc.gov/stroke/signs-symptoms/',
]
sources.signs12 = [
  'Red Cross · Phản vệ',
  'https://www.redcross.org/take-a-class/resources/learn-first-aid/allergic-reaction-anaphylaxis',
]
sources.eyes12 = [
  'NHS · Tổn thương mắt',
  'https://www.nhs.uk/conditions/eye-injuries/',
]
sources.nose12 = [
  'NHS · Chảy máu mũi',
  'https://www.nhs.uk/conditions/nosebleed/',
]
sources.shock12 = [
  'Red Cross · Sốc',
  'https://www.redcross.org/take-a-class/resources/learn-first-aid/shock',
]
sources.heat12 = [
  'CDC · Bệnh do nóng',
  'https://www.cdc.gov/niosh/heat-stress/about/illnesses.html',
]

render()
