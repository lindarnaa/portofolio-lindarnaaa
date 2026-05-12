import styles from './Skills.module.css'

const skills = [
  {
    icon: '⚛',
    name: 'Frontend',
    desc: 'Modern, responsive, and user-friendly interfaces.',
    color: 'rgba(0,194,255,0.12)',
    accent: 'var(--c3)',
    tags: [
      'React.js',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },

  {
    icon: '⚙',
    name: 'Backend',
    desc: 'Scalable server, database, and API development.',
    color: 'rgba(123,47,255,0.12)',
    accent: 'var(--c4)',
    tags: [
      'PHP',
      'Node.js',
      'CodeIgniter',
      'Laravel',
      'MySQL',
      'REST API',
    ],
  },

  {
    icon: '☁',
    name: 'DevOps & Cloud',
    desc: 'Version control, deployment, dan workflow development.',
    color: 'rgba(255,214,0,0.12)',
    accent: 'var(--c2)',
    tags: [
      'Git/Github',
      'Docker',
      'Vercel',
      'Firebase',
    ],
  },

  {
    icon: '◈',
    name: 'Tools & Workflow',
    desc: 'Collaboration and design tools for optimal productivity.',
    color: 'rgba(255,77,0,0.12)',
    accent: 'var(--c1)',
    tags: [
      'Figma',
      'Postman',
      'VS Code',
      'Agile/Scrum/Waterfall',
    ],
  },
]

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.header}>
        <span className={styles.label}>Tech Stack</span>
        <h2 className={styles.title}>Skills &amp; Tools</h2>
        <p className={styles.subtitle}>
          Technologies I use daily to build fast, reliable, and modern digital products.
        </p>
      </div>

      <div className={styles.grid}>
        {skills.map((s) => (
          <div key={s.name} className={styles.card}>
            <div className={styles.iconWrap} style={{ background: s.color }}>
              <span>{s.icon}</span>
            </div>
            <div className={styles.cardName}>{s.name}</div>
            <p className={styles.cardDesc}>{s.desc}</p>
            <div className={styles.tags}>
              {s.tags.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <div className={styles.accentLine} style={{ background: s.accent }} />
          </div>
        ))}
      </div>
    </section>
  )
}
