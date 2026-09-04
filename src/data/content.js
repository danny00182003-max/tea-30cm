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
  { label: '社群', href: '#comms' },
  { label: '團隊', href: '#sec-team' },
  { label: '關於', href: '#sec-about' },
]

export const STOPS = [
  { id: 'hero', label: '01 外景 // BREACH' },
  { id: 'ops', label: '02 作戰中心 // OPS' },
  { id: 'armory', label: '03 軍械室 // ARMORY' },
  { id: 'trophy', label: '04 榮譽室 // TROPHY' },
  { id: 'comms', label: '05 通訊室 // COMMS' },
]

export const PLATFORMS = [
  { id: 'twitch-tea', label: 'Twitch', variant: 'twitch', url: 'https://www.twitch.tv/tea1st' },
  { id: 'yt-tea', label: '茶哥 YouTube', variant: 'youtube', url: 'https://www.youtube.com/@tea1st%E8%8C%B6%E5%93%A5%E5%95%8A' },
  { id: 'yt-adam', label: '亞當 YouTube', variant: 'youtube', url: 'https://www.youtube.com/@%E4%BA%9E%E7%95%B6%E6%8A%8A%E6%8B%94' },
]

export const MEMBERS = [
  {
    name: '茶哥',
    title: '戰隊隊長',
    highlight: { label: '精華', url: 'https://www.youtube.com/watch?v=3IqlxsXmXWI' },
    links: [
      { type: 'youtube', url: 'https://www.youtube.com/@tea1st%E8%8C%B6%E5%93%A5%E5%95%8A' },
      { type: 'discord', url: 'https://discord.com/invite/8DN6dtZRMb' },
    ],
  },
  {
    name: '亞當',
    title: '戰隊成員',
    highlight: { label: '精華', url: 'https://www.youtube.com/shorts/3nhQGWBhlSw' },
    links: [
      { type: 'youtube', url: 'https://www.youtube.com/@%E4%BA%9E%E7%95%B6%E6%8A%8A%E6%8B%94' },
      { type: 'discord', url: 'https://discord.com/invite/Uty86KPUaU' },
    ],
  },
  {
    name: '悅兒',
    title: '吉祥物',
    links: [
      { type: 'tiktok', url: 'https://www.tiktok.com/@yueer__?_r=1&_t=ZS-98ylWCnSOhR' },
    ],
  },
]

export const TROPHIES = [
  { id: 'south-lan', tier: 'champion', badge: '冠軍', name: '南區網咖線下賽', detail: '分組冠軍' },
  { id: 'asia-cup', tier: 'entry', badge: '參賽', name: '亞洲盃實況主賽', detail: '' },
]

export const DISCORD_CHANNELS = [
  { label: '加入茶哥社群', url: 'https://discord.com/invite/8DN6dtZRMb' },
  { label: '加入亞當社群', url: 'https://discord.com/invite/Uty86KPUaU' },
]

export const TEAM = [
  {
    role: '網頁設計師',
    members: [{ name: '靖', email: 'danny00182003@gmail.com' }],
  },
  {
    role: '剪片團隊',
    members: [{ name: '亞當' }, { name: '茶哥' }],
  },
]

export const CONTACTS = [
  { label: '茶哥信箱', value: 'love6098787@yahoo.com.tw', href: 'mailto:love6098787@yahoo.com.tw' },
  { label: '亞當信箱', value: 'adambusiness543@gmail.com', href: 'mailto:adambusiness543@gmail.com' },
  { label: '亞當粉專', value: 'facebook.com/gaming/adamgameworld', href: 'https://facebook.com/gaming/adamgameworld', external: true },
]

export const FOOT_NAV = [
  { label: '外景', href: '#hero' },
  { label: '直播', href: '#ops' },
  { label: '成員', href: '#armory' },
  { label: '戰績', href: '#trophy' },
  { label: '社群', href: '#comms' },
  { label: '團隊', href: '#sec-team' },
]

export const FOOT_SOCIAL = [
  { label: 'Twitch', url: 'https://www.twitch.tv/tea1st' },
  { label: 'YouTube', url: 'https://www.youtube.com/@tea1st%E8%8C%B6%E5%93%A5%E5%95%8A' },
  { label: 'Discord', url: 'https://discord.com/invite/8DN6dtZRMb' },
]
