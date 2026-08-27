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
            <b>30 CM</b> 是由實況主「茶哥」領軍的作戰型實況小隊。以夜間滲透為視覺母題——兜帽、耳機與皇冠，代表開麥前的沉默與上線後的統治。
          </p>
          <p>
            我們相信一件事：<b>戴上耳機，開麥即作戰。</b>每晚上線，每週出賽，每一場決賽圈都當最後一戰打。
          </p>
          <p className="fine">本站為社群自行維護之粉絲前線基地。</p>
        </div>
        <aside className="contact-card">
          <h3>商務合作</h3>
          <p>贊助、活動、跨界企劃——歡迎來信。</p>
          <a className="btn btn--primary" href="mailto:hello@30cm.gg">hello@30cm.gg</a>
        </aside>
      </div>
    </section>
  )
}
