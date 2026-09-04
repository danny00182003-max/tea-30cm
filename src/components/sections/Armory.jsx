import Emblem from '../svg/Emblem.jsx'
import { YouTubeIcon, DiscordIcon, TikTokIcon, PlayIcon } from '../svg/SocialIcons.jsx'
import { MEMBERS } from '../../data/content.js'

const LINK_ICONS = {
  youtube: YouTubeIcon,
  discord: DiscordIcon,
  tiktok: TikTokIcon,
}

const LINK_LABELS = {
  youtube: 'YouTube',
  discord: 'Discord',
  tiktok: 'TikTok',
}

function MemberCard({ member }) {
  return (
    <li className="member-card">
      <span className="cone"></span>
      <Emblem className="member-mark" />
      <b className="member-name">{member.name}</b>
      <small className="member-title">{member.title}</small>
      <div className="member-links">
        {member.highlight && (
          <a
            className="mlink mlink--hl"
            href={member.highlight.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlayIcon className="mlink-ic" />
            <span>{member.highlight.label}</span>
          </a>
        )}
        {member.links.map(link => {
          const Icon = LINK_ICONS[link.type]
          const label = LINK_LABELS[link.type]
          if (!Icon || !label) return null
          return (
            <a
              key={link.url}
              className="mlink"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="mlink-ic" />
              <span>{label}</span>
            </a>
          )
        })}
      </div>
    </li>
  )
}

export default function Armory() {
  return (
    <section className="scene scene--armory" id="armory">
      <div className="art">
        <div className="neon">ARMORY</div>
      </div>
      <div className="content align-center wide">
        <p className="kicker">SECTOR 03 // 軍械室</p>
        <h2>一槍，一人。</h2>
        <p>小隊現役名單——點擊直達各成員的頻道與社群。</p>
        <ul className="member-grid">
          {MEMBERS.map(m => <MemberCard key={m.name} member={m} />)}
        </ul>
      </div>
    </section>
  )
}
