import { useEffect, useMemo, useState } from 'react';

type Role = 'abf' | 'acf' | 'con';

type Dashboard = {
  color: 'terre' | 'vert' | 'violet';
  dash: [string, string, string, string][];
  profile: {
    av: string;
    nm: string;
    rl: string;
    badge: string;
    badgeCls: string;
    stats: [string, string][];
  };
  composer: string;
  tabs: string[];
  menu: [string, string, string][];
  modules: [string, string, string, string, string][];
  tip: [string, string, string];
  feed: FeedItem[];
};

type FeedItem = {
  av: 'abf' | 'acf' | 'con' | 'sys';
  who: string[];
  meta: string;
  txt: string;
  proj?: {
    pic: string;
    ti: string;
    su: string;
    score?: string;
    kv: [string, string][];
    fund: number;
    fp: string;
  };
  acts: [string, string][];
};

type Sheet = {
  ic: string;
  ti: string;
  btn: string;
  btnTxt: string;
  body: string;
};

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8787';

const roleLabels: Record<Role, string> = {
  abf: 'Demandeur',
  acf: 'Financeur',
  con: 'Consultant'
};

function App() {
  const [role, setRole] = useState<Role>('abf');
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [sheet, setSheet] = useState<Sheet | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/dashboard/${role}`)
      .then((res) => res.json())
      .then((data: Dashboard) => {
        setDashboard(data);
        setSelectedTab(0);
      })
      .finally(() => setLoading(false));
  }, [role]);

  const accentClass = useMemo(() => {
    if (!dashboard) return '';
    return dashboard.color === 'vert' ? 'accent-green' : dashboard.color === 'violet' ? 'accent-violet' : 'accent-terra';
  }, [dashboard]);

  const openSheet = async (id: string) => {
    const res = await fetch(`${API_URL}/sheets/${id}`);
    const data = await res.json();
    setSheet(data);
  };

  if (!dashboard) {
    return <div className="app-shell centered">Chargement…</div>;
  }

  return (
    <div className={`app-shell ${accentClass}`}>
      <header className="topbar glass">
        <div className="brand">
          <div className="brand-mark">Y</div>
          <div>
            <div className="brand-name">Yédo</div>
            <div className="brand-sub">Réseau du financement inclusif</div>
          </div>
        </div>
        <div className="header-actions">
          <span className="search-pill">🔍 Rechercher un projet, une personne…</span>
          <button className="ghost-btn">🔔</button>
          <button className="ghost-btn">💬</button>
        </div>
      </header>

      <main className="layout-grid">
        <aside className="sidebar-col">
          <section className={`profile-card ${dashboard.profile.badgeCls}`}>
            <div className="cover" />
            <div className="avatar xl">{dashboard.profile.av}</div>
            <div className="profile-body">
              <h2>{dashboard.profile.nm}</h2>
              <p>{dashboard.profile.rl}</p>
              <span className={`pill ${dashboard.profile.badgeCls}`}>{dashboard.profile.badge}</span>
              <div className="stats-row">
                {dashboard.profile.stats.map(([value, label]) => (
                  <div className="stat-box" key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="menu-card glass">
            {dashboard.menu.map(([icon, label, badge], index) => (
              <button key={label} className={`menu-item ${index === 0 ? 'active' : ''}`}>
                <span>{icon}</span>
                <span>{label}</span>
                {badge ? <small>{badge}</small> : null}
              </button>
            ))}
          </section>
        </aside>

        <section className="center-col">
          <section className="role-strip glass">
            <span className="role-label">Vue active</span>
            <div className="role-group">
              {(['abf', 'acf', 'con'] as Role[]).map((item) => (
                <button key={item} className={`role-chip ${role === item ? 'active' : ''}`} onClick={() => setRole(item)}>
                  {item === 'abf' ? '🐟' : item === 'acf' ? '🌍' : '🎓'} {roleLabels[item]}
                </button>
              ))}
            </div>
            <button className="ghost-link">Connexion démo</button>
          </section>

          <section className="dash-strip">
            {dashboard.dash.map(([icon, value, title, detail]) => (
              <article className="metric-card glass" key={title}>
                <span className="metric-icon">{icon}</span>
                <strong>{value}</strong>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </section>

          <section className="composer-card glass">
            <div className="avatar">{dashboard.profile.av}</div>
            <button className="composer-input">{dashboard.composer}</button>
          </section>

          <section className="tabs glass">
            {dashboard.tabs.map((tab, index) => (
              <button key={tab} className={`tab-btn ${selectedTab === index ? 'active' : ''}`} onClick={() => setSelectedTab(index)}>
                {tab}
              </button>
            ))}
          </section>

          {loading ? <div className="glass loading">Mise à jour…</div> : null}

          <section className="feed-list">
            {dashboard.feed.map((post, index) => (
              <article className="post-card glass" key={`${post.meta}-${index}`}>
                <div className="post-head">
                  <div className={`avatar ${post.av}`}>{avatar(post.av)}</div>
                  <div>
                    <div className="who-line">
                      {post.who.map((item, i) =>
                        i === 0 ? (
                          <span key={item} className="name">{item}</span>
                        ) : (
                          <span key={item} className={`tag ${item.split('|')[0]}`}>{item.split('|')[1]}</span>
                        )
                      )}
                    </div>
                    <small>{post.meta}</small>
                  </div>
                </div>

                <div className="post-text" dangerouslySetInnerHTML={{ __html: post.txt }} />

                {post.proj ? (
                  <div className="project-box">
                    <div className="project-banner">
                      <div className="avatar square">{post.proj.pic}</div>
                      <div>
                        <h4>{post.proj.ti}</h4>
                        <p>{post.proj.su}</p>
                      </div>
                      {post.proj.score ? <div className="score-box">{post.proj.score}</div> : null}
                    </div>
                    <div className="project-meta">
                      {post.proj.kv.map(([label, value]) => (
                        <div className="kv-row" key={label}>
                          <span>{label}</span>
                          <strong>{value}</strong>
                        </div>
                      ))}
                      {post.proj.fund > 0 ? (
                        <>
                          <div className="progress-track">
                            <div className="progress-fill" style={{ width: `${post.proj.fund}%` }} />
                          </div>
                          <small>{post.proj.fp}</small>
                        </>
                      ) : (
                        <small>{post.proj.fp}</small>
                      )}
                    </div>
                  </div>
                ) : null}

                <div className="post-actions">
                  {post.acts.map(([left, right]) => {
                    const hasPipe = left.includes('|');
                    const btnClass = hasPipe ? left.split('|')[0].replace(' ', '-') : '';
                    const leftLabel = hasPipe ? left.split('|')[1] : left;
                    return (
                      <button className={`action-btn ${btnClass}`} key={`${left}-${right}`}>
                        {leftLabel} {right}
                      </button>
                    );
                  })}
                </div>
              </article>
            ))}
          </section>
        </section>

        <aside className="right-col">
          <section className="module-card glass">
            <div className="section-title">🧩 Modules métier</div>
            <div className="module-list">
              {dashboard.modules.map(([icon, style, title, detail, sheetId]) => (
                <button key={sheetId} className="module-item" onClick={() => openSheet(sheetId)}>
                  <div className={`module-icon ${style}`}>{icon}</div>
                  <div>
                    <strong>{title}</strong>
                    <p>{detail}</p>
                  </div>
                  <span>›</span>
                </button>
              ))}
            </div>
          </section>

          <section className="tip-card glass">
            <div className="section-title">{dashboard.tip[0]} {dashboard.tip[1]}</div>
            <p>{dashboard.tip[2]}</p>
          </section>

          <section className="stack-card glass">
            <div className="section-title">🛠️ Transformation réalisée</div>
            <ul>
              <li>API REST Fastify pour les rôles, modules, fiches et flux</li>
              <li>Client React responsive prêt pour packaging mobile</li>
              <li>Architecture full-stack simple à faire évoluer</li>
            </ul>
          </section>
        </aside>
      </main>

      {sheet ? (
        <div className="modal-backdrop" onClick={() => setSheet(null)}>
          <div className="sheet-card" onClick={(event) => event.stopPropagation()}>
            <div className="sheet-header">
              <div className="sheet-title">{sheet.ic} {sheet.ti}</div>
              <button className="ghost-btn" onClick={() => setSheet(null)}>✕</button>
            </div>
            <div className="sheet-content" dangerouslySetInnerHTML={{ __html: sheet.body }} />
            <button className={`primary-btn ${sheet.btn || 'terra'}`}>{sheet.btnTxt}</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function avatar(type: FeedItem['av']) {
  return { abf: '🐟', acf: '🌍', con: '🎓', sys: 'Y' }[type] || '•';
}

export default App;
