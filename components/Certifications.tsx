import styles from './Certifications.module.css'

const certifications = [
  {
    title: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    image: '/CCNA_Enterprise.png',
    file: '/CCNA_Enterprise.pdf',
    featured: true,
  },
  {
    title: 'CCNAv7: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    image: '/ccna2.png',
    file: '/CCNA_Switching.pdf',
    featured: true,
  },
  {
    title: 'CCNAv7: Introduction to Networks ',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    image: '/network.png',
    file: '/network.pdf',
    featured: true,
  },
  {
    title: 'Database Foundations ',
    issuer: 'Oracle Academy',
    year: '2024',
    image: '/DFO_Linda.png',
    file: '/DFO_Linda.pdf',
    featured: true,
  },
  {
    title: 'Database Design ',
    issuer: 'Oracle Academy',
    year: '2024',
    image: '/DD_Linda.png',
    file: '/DD_Linda.pdf',
    featured: true,
  },
  {
    title: 'Introduction to IoT and Digital Transformation',
    issuer: 'Cisco Networking Academy',
    year: '2023',
    image: '/iot.png',
    file: '/iot.pdf',
    featured: true,
  },
  {
    title: 'IT Essentials ',
    issuer: 'Cisco Networking Academy',
    year: '2023',
    image: '/ites.png',
    file: '/ites.pdf',
    featured: true,
  },
  {
    title: 'Software Engineering (Programming)',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: '2022',
    image: '/BNSP.png',
    file: '/BNSP.pdf',
    featured: true,
  },
]

export default function Certifications() {
  return (
    <section className={styles.section} id="certifications">
      <div className={styles.header}>
        <span className={styles.label}>Achievement</span>
        <h2 className={styles.title}>Certifications</h2>
        <p className={styles.subtitle}>
          Professional certifications and learning achievements that support my technical skills.
        </p>
      </div>

      <div className={styles.grid}>
        {certifications.map((c) => (
          <article
            key={c.title}
            className={`${styles.card} ${c.featured ? styles.featured : ''}`}
          >
            <div className={styles.thumb}>
              <img src={c.image} alt={c.title} />
            </div>

            <div className={styles.body}>
              {c.featured && (
                <div className={styles.featuredBadge}>🎖 Verified</div>
              )}

              <h3 className={styles.certTitle}>{c.title}</h3>

              <p className={styles.certMeta}>
                {c.issuer} • {c.year}
              </p>

              <div className={styles.links}>
                <a href={c.file} className={styles.link}>
                  View Certificate ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}