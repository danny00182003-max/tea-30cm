import { CONTACTS } from '../../data/content.js'

export default function AboutContact() {
  return (
    <section id="sec-about" className="panel">
      <header className="panel-head reveal">
        <p className="kicker">// ABOUT 30 CM</p>
        <h2>關於我們</h2>
      </header>
      <div className="about-cols reveal">
        <div className="about-text">
          <p>
            <b>30 CM</b> 是由「茶哥、亞當」領軍的歡樂型PUBG戰隊。以夜間滲透為視覺母題——耳機與皇冠，代表開麥前的沉默與上線後的統治
          </p>
          <p>
            我們只知道：<b>戴上耳機，開麥吃雞</b>每天吃把雞，每一場決賽圈都當最後一戰打
          </p>
          <p className="fine">本站為社群自行維護之粉絲前線基地。</p>
        </div>
        <aside className="contact-card">
          <h3>商務合作</h3>
          <p>贊助、活動、跨界企劃——歡迎來信。</p>
          <ul className="contact-list">
            {CONTACTS.map(c => (
              <li key={c.href}>
                <span className="contact-label">{c.label}</span>
                <a
                  className="contact-value"
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
