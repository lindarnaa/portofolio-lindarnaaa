import styles from './Projects.module.css'

const dataProjects = [
  {
    title: 'Pizza Sales Performance',
    desc: ' Pizza sales analytics project exploring revenue performance, customer ordering behavior, product popularity, and sales trends using pizza transaction data.',
    image: '/pizza-dashboard.png',
    tags: ['Excel'],
    repo: 'https://drive.google.com/drive/folders/1VHY5EwRjqYbqW9W0Oi022YLNSz67oG0f?usp=drive_link',
    ppt: '/pizza_sales.pdf',
  },
  {
    title: 'Supermarket Sales Dashboard',
    desc: 'Supermarket sales analytics project examining revenue, profitability, customer payment preferences, product performance, and business growth through supermarket transaction data.',
    image: '/supermarket-dashboard.png',
    tags: ['Power BI'],
    repo: 'https://drive.google.com/drive/folders/1rEnpBcA5kEF-QL8XN2kLf89RK7f_KbuG?usp=drive_link',
    ppt: '/supermarket_sales.pdf',
  },
  {
    title: 'HR Analytics Dashboard',
    desc: 'Workforce analytics project investigating employee demographics, organizational distribution, tenure, and absenteeism metrics to generate actionable HR insights.',
    image: '/HR-dashboard.png',
    tags: ['Power BI'],
    repo: 'https://drive.google.com/drive/folders/1UAnSvOxBvntpRW1EQ4FrTyXqI4WXzAo3?usp=drive_link',
    ppt: '/hr_analytics.pdf',
  },
  {
    title: 'Indonesia Stunting Prevalence',
    desc: 'Public health analytics project exploring stunting prevalence across Indonesian provinces from 2021–2024.',
    image: '/stunting-dashboard.png',
    tags: ['Python', 'Power BI'],
    repo: 'https://drive.google.com/drive/folders/1VOaA_swDwQBMBx1EDvLHOpL4e8HwOuKt?usp=drive_link',
    ppt: '/stuntingg.pdf',
  },
  {
    title: 'Bicycle Shop',
    desc: 'Public health analytics project exploring stunting prevalence across Indonesian provinces from 2021–2024.',
    image: '/bike.png',
    tags: ['SQL Server', 'Power BI'],
    repo: 'https://drive.google.com/drive/folders/1bPb8ZYqF6lJ9fEAPeB4q8kIrVPsIQq9I?usp=drive_linkk',
    ppt: '/bike.pdf',
  },
  {
    title: 'Uber Trip',
    desc: 'Public health analytics project exploring stunting prevalence across Indonesian provinces from 2021–2024.',
    image: '/uber.png',
    tags: ['Python', 'Power BI'],
    repo: 'https://drive.google.com/drive/folders/1kszwLQHOQOhsuSpLt5NGJc82YMAw7Mio?usp=drive_link',
    ppt: '/uber.pdf',
  },
]

const softwareProjects = [
  {
    title: 'Edukom',
    desc: 'Edukom is a dynamic digital learning platform that focuses on strengthening practical skills in areas such as cybersecurity and artificial intelligence, offering relevant and continuously updated content to keep users aligned with current industry trends.',
    image: '/edukom1.png',
    tags: ['PHP', 'CodeIgniter', 'Bootstrap', 'MySQL'],
    repo: 'https://github.com/mazrohaaniss/eduKom.git',
  },
  {
    title: 'Labenerg',
    desc: 'A web-based real-time furnace monitoring and control system with WiFi integration and a PID controller for precise and automated temperature regulation.',
    image: '/labenerg1.png',
    tags: ['React', 'Node.js', 'MySQL', 'HiveMQ'],
    demo: 'https://www.labenergifst.com/',
    repo: 'https://github.com/syadass/furnace-1.git',
  },
  {
    title: 'Space-Explorer',
    desc: 'Space Explore is a platform that delivers the latest news from NASA along with captivating space imagery, including astronomy pictures and photos from space missions.',
    image: '/space1.jpeg',
    tags: ['React', 'Expo Go'],
    repo: 'https://github.com/lindarnaa/Space-Explorer.git',
  },
  {
    title: 'TicketWave',
    desc: 'TicketWave is a modern concert ticket booking platform designed to make discovering concerts and reserving tickets easier.',
    image: '/ticketwave.jpeg',
    tags: ['React', 'JavaScript', 'CSS'],
    repo: 'https://github.com/lindarnaa/ticketwave.git',
  },
]

const ProjectGrid = ({ projects }: { projects: any[] }) => (
  <div className={styles.grid}>
    {projects.map((p) => (
      <article key={p.title} className={styles.card}>
        <div className={styles.thumb}>
          <img src={p.image} alt={p.title} />
        </div>

        <div className={styles.body}>
          <h3 className={styles.projTitle}>{p.title}</h3>

          <p className={styles.projDesc}>{p.desc}</p>

          <div className={styles.tags}>
            {p.tags.map((t: string) => (
              <span key={t} className={styles.tag}>
                {t}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Live Demo ↗
              </a>
            )}

            {p.ppt && (
              <a
                href={p.ppt}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Full Deck ↗
              </a>
            )}

            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkGhost}
            >
              Project →
            </a>
          </div>
        </div>
      </article>
    ))}
  </div>
)

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <span className={styles.label}>Portfolio</span>

        <h2 className={styles.title}>Projects</h2>

        <p className={styles.subtitle}>
          Selected projects in Data Analytics and Software Development.
        </p>
      </div>

      <div className={styles.category}>
        <h3 className={styles.categoryTitle}>
          Data Analytics Projects
        </h3>

        <ProjectGrid projects={dataProjects} />
      </div>

      <div className={styles.category}>
        <h3 className={styles.categoryTitle}>
          Software Development Projects
        </h3>

        <ProjectGrid projects={softwareProjects} />
      </div>
    </section>
  )
}