import { TEAM } from '../../data/content.js'

export default function Team() {
  return (
    <section id="sec-team" className="panel">
      <header className="panel-head reveal">
        <p className="kicker">// TEAM</p>
        <h2>後勤支援</h2>
      </header>
      <ul className="team-grid reveal">
        {TEAM.map(group => (
          <li key={group.role} className="team-role">
            <p className="team-role-name">{group.role}</p>
            <ul className="team-members">
              {group.members.map(m => (
                <li key={m.name} className="team-member">
                  <b>{m.name}</b>
                  {m.email && (
                    <a className="team-mail" href={`mailto:${m.email}`}>{m.email}</a>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
