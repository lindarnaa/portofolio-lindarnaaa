import styles from './Projects.module.css'

const projects = [
  {
    title: 'Edukom',
    desc: 'Edukom is a dynamic digital learning platform that focuses on strengthening practical skills in areas such as cybersecurity and artificial intelligence, offering relevant and continuously updated content to keep users aligned with current industry trends.',
    image: '/edukom1.png',
    tags: ['PHP', 'CodeIgniter', 'Bootstrap', 'MySQL'],
    repo: 'https://github.com/mazrohaaniss/eduKom.git',
    featured: true,
  },
  {
    title: 'Labenerg',
    desc: 'A web-based real-time furnace monitoring and control system with WiFi integration and a PID controller for precise and automated temperature regulation.',
    image: '/labenerg1.png',
    tags: ['React', 'Node.js', 'MySQL', 'HiveMQ'],
    demo: 'https://www.labenergifst.com/',
    repo: 'https://github.com/syadass/furnace-1.git',
    featured: true,
  },
  {
    title: 'Space-Explorer',
    desc: 'Space Explore is a platform that delivers the latest news from NASA along with captivating space imagery, including astronomy pictures and photos from space missions.',
    image: '/space1.jpeg',
    tags: ['React', 'Expo Go'],
    repo: 'https://github.com/lindarnaa/Space-Explorer.git',
    featured: false,
  },
    {
    title: 'TicketWave',
    desc: 'TicketWave is a modern concert ticket booking platform designed to make discovering concerts and reserving tickets easier.',
    image: '/ticketwave.jpeg',
    tags: ['React', 'JavaScript', 'CSS'],
    repo: 'https://github.com/lindarnaa/ticketwave.git',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <span className={styles.label}>Portfolio</span>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          A selection of projects that showcase my technical skills and development approach.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <article key={p.title} className={`${styles.card} ${p.featured ? styles.featured : ''}`}>
            
            {/* ✅ IMAGE PER PROJECT */}
            <div className={styles.thumb}>
              <img src={p.image} alt={p.title} />
            </div>

            <div className={styles.body}>
              {p.featured && <div className={styles.featuredBadge}>★ Featured</div>}
              <h3 className={styles.projTitle}>{p.title}</h3>
              <p className={styles.projDesc}>{p.desc}</p>

              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>

              <div className={styles.links}>
                <a href={p.demo} className={styles.link}>Live Demo ↗</a>
                <a href={p.repo} className={styles.linkGhost}>GitHub →</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}