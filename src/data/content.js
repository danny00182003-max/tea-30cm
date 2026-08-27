export const BOOT_LINES = [
  '> INITIALIZING UPLINK ......... OK',
  '> AUTH // TEA-G ............... OK',
  '> SECTOR MAP 01-05 ............ LOADED',
  '> WELCOME TO 30 CM NIGHT OPS',
]

export const NAV_LINKS = [
  { label: '基地', href: '#hero' },
  { label: '成員', href: '#armory' },
  { label: '戰績', href: '#trophy' },
  { label: '贊助', href: '#sec-sponsors' },
  { label: '賽程', href: '#sec-schedule' },
  { label: '關於', href: '#sec-about' },
]

export const STOPS = [
  { id: 'hero', label: '01 外景 // BREACH' },
  { id: 'ops', label: '02 作戰中心 // OPS' },
  { id: 'armory', label: '03 軍械室 // ARMORY' },
  { id: 'trophy', label: '04 榮譽室 // TROPHY' },
  { id: 'comms', label: '05 通訊室 // COMMS' },
]

export const MINI_SCHEDULE = [
  { time: '今晚 21:00', text: '排位衝分 — Twitch' },
  { time: '週六 20:00', text: '社群友誼賽 — YouTube' },
  { time: '週日 19:00', text: '決賽圈回顧 — Twitch' },
]

export const MEMBERS = [
  {
    name: '茶哥',
    title: '戰隊隊長',
    links: [
      { type: 'youtube', url: 'https://www.youtube.com/@tea1st%E8%8C%B6%E5%93%A5%E5%95%8A' },
      { type: 'discord', url: 'https://discord.com/invite/8DN6dtZRMb' },
    ],
  },
  {
    name: '亞當',
    title: '戰隊成員',
    links: [
      { type: 'youtube', url: 'https://www.youtube.com/@%E4%BA%9E%E7%95%B6%E6%8A%8A%E6%8B%94' },
      { type: 'discord', url: 'https://discord.com/invite/Uty86KPUaU' },
    ],
  },
  {
    name: '悅兒',
    title: '親善大使',
    links: [
      { type: 'tiktok', url: 'https://www.tiktok.com/@yueer__?_r=1&_t=ZS-98ylWCnSOhR' },
    ],
  },
]

export const CHIPS = [
  { end: 3, suffix: '', label: '巡迴賽冠軍' },
  { end: 218, suffix: '', label: '總出賽' },
  { end: 63, suffix: '%', label: '團隊勝率' },
  { end: 48201, suffix: '', label: '生涯擊殺' },
]

export const MILESTONES = [
  { time: '2024.03', text: '頻道創立，小隊成軍' },
  { time: '2025.01', text: '首座週末盃冠軍' },
  { time: '2025.11', text: '城市巡迴賽 台北站 冠軍' },
  { time: '2026.07', text: '夏季聯賽 連霸達成' },
]

export const HIGHLIGHTS = [
  { cls: 'hl-1', title: '決賽圈 1v4 剪輯', dur: '02:41' },
  { cls: 'hl-2', title: '冠軍賽全程 POV', dur: '18:07' },
  { cls: 'hl-3', title: '年度精華合輯', dur: '09:58' },
]

export const DISCORD_CHANNELS = [
  { label: '加入茶哥社群', url: 'https://discord.com/invite/8DN6dtZRMb' },
  { label: '加入亞當社群', url: 'https://discord.com/invite/Uty86KPUaU' },
]

export const MATCH_ROWS = [
  { day: 6, date: '08/29 六', time: '19:00', event: '夏季聯賽 W7', vs: 'vs 夜巡者', platform: 'Twitch', tag: 'tag-wait', tagText: '待賽' },
  { day: 6, date: '09/05 六', time: '19:00', event: '夏季聯賽 W8', vs: 'vs 鐵潮', platform: 'Twitch', tag: 'tag-wait', tagText: '待賽' },
  { day: 6, date: '09/12 六', time: '19:00', event: '社群自訂房', vs: '友誼賽', platform: 'Discord', tag: 'tag-open', tagText: '報名中' },
  { day: 6, date: '09/19 六', time: '14:00', event: '秋季盃', vs: '預選', platform: 'TBD', tag: 'tag-wait', tagText: '待賽' },
  { day: 0, date: '09/27 日', time: '20:00', event: '決賽圈回顧特別篇', vs: 'VOD 馬拉松', platform: 'YouTube', tag: 'tag-wait', tagText: '待賽' },
  { day: 6, date: '10/03 六', time: '20:00', event: '週末表演賽', vs: '觀眾組隊挑戰', platform: 'Twitch', tag: 'tag-open', tagText: '報名中' },
]

export const SPONSORS = [
  { cls: 'sp-1', label: 'VOLTGEAR' },
  { cls: 'sp-2', label: '鐵壁 ENERGY' },
  { cls: 'sp-3', label: 'NOMAD OPTICS' },
  { cls: 'sp-4', label: 'HELIX HYDRA' },
  { cls: 'sp-5', label: 'DUSK APPAREL' },
  { cls: 'sp-6', label: 'STATIC FM' },
]

export const STATS_GRID = [
  { end: 3, suffix: '', label: '巡迴賽冠軍' },
  { end: 63, suffix: '%', label: '團隊勝率' },
  { end: 218, suffix: '', label: '總出賽' },
  { end: 48201, suffix: '', label: '生涯擊殺' },
  { end: 14, suffix: '', label: '最高單場淘汰' },
  { end: 9, suffix: '', label: '連勝紀錄' },
  { end: 3600, suffix: 'h', label: '直播時數' },
  { end: 12048, suffix: '', label: '社群成員' },
]

export const FOOT_NAV = [
  { label: '外景', href: '#hero' },
  { label: '直播', href: '#ops' },
  { label: '成員', href: '#armory' },
  { label: '戰績', href: '#trophy' },
  { label: '社群', href: '#comms' },
]

export const FOOT_SOCIAL = ['Twitch', 'YouTube', 'Discord', 'Instagram']
