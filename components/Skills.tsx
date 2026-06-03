import styles from './Skills.module.css'

const skills = [
  {
    name: 'Data Analytics',
    desc: 'Data cleaning, analysis, visualization, and business intelligence reporting.',
    color: 'rgba(255,214,0,0.12)',
    accent: 'var(--c2)',
    tags: [
      'Power BI',
      'Excel',
      'Google Sheets',
      'SQL',
      'Python',
    ],
  },

  {
    name: 'Frontend Development',
    desc: 'Building responsive and interactive user interfaces.',
    color: 'rgba(0,194,255,0.12)',
    accent: 'var(--c3)',
    tags: [
      'React.js',
      'Next.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },

  {
    name: 'Backend Development',
    desc: 'Developing APIs, databases, and server-side applications.',
    color: 'rgba(123,47,255,0.12)',
    accent: 'var(--c4)',
    tags: [
      'PHP',
      'Laravel',
      'CodeIgniter',
      'Node.js',
      'MySQL',
      'REST API',
    ],
  },

  {
    name: 'Tools & Workflow',
    desc: 'Collaboration, version control, and productivity tools.',
    color: 'rgba(255,77,0,0.12)',
    accent: 'var(--c1)',
    tags: [
      'Git/GitHub',
      'Figma',
      'Postman',
      'VS Code',
      'Agile & Scrum',
    ],
  },
]

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.header}>
        <span className={styles.label}>Tech Stack</span>
        <h2 className={styles.title}>Skills & Tools</h2>
        <p className={styles.subtitle}>
          Combining data analytics and software development skills to build
          data-driven solutions and digital products.
        </p>
      </div>

      <div className={styles.grid}>
        {skills.map((s) => (
          <div key={s.name} className={styles.card}>
            <div
              className={styles.category}
              style={{ background: s.color }}
            >
              {s.name}
            </div>

            <p className={styles.cardDesc}>{s.desc}</p>

            <div className={styles.tags}>
              {s.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div
              className={styles.accentLine}
              style={{ background: s.accent }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}