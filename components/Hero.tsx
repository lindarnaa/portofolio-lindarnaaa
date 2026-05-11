import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      el.style.setProperty('--mx', `${x}%`)
      el.style.setProperty('--my', `${y}%`)
    }

    el.addEventListener('mousemove', onMove)

    return () => {
      el.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <section className={styles.hero} id="about" ref={heroRef}>
      
      {/* BACKGROUND */}
      <div className={styles.bg}>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />

        <div className={styles.grid} />

        {/* STARS */}
        <div className={styles.stars}></div>

        {/* METEORS */}
        <div className={styles.meteor}></div>
        <div className={`${styles.meteor} ${styles.meteor2}`}></div>
        <div className={`${styles.meteor} ${styles.meteor3}`}></div>
      </div>

      {/* MAIN */}
      <div className={styles.wrapper}>

        {/* LEFT */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Available for Work
          </div>

          <h1 className={styles.heading}>
            Linda <br />
            <span className={styles.accent}>Ratna</span> <br />
            Kholifah
          </h1>

          <p className={styles.desc}>
            Computer Engineering fresh graduate with an interest in web development.
            Experienced in building web applications using React.js,
            CodeIgniter, HTML, CSS, JavaScript, and API integration to create
            interactive and responsive applications. Skilled in UI design using
            Figma and passionate about continuous learning and contributing to
            technology development.
          </p>

          <div className={styles.btnGroup}>
            <a href="#projects" className={styles.btnPrimary}>
              View Projects
            </a>
            <a
              href="/CV_Linda Ratna Kholifah.pdf"
              download
              className={styles.btnCV}
            >
              Download CV
            </a>
          </div>

          <div className={styles.stats}>
            {[
              { num: '3+', label: 'Project', color: 'var(--c1)' },
              { num: '2', label: 'Experience', color: 'var(--c2)' },
              { num: '3.74', label: 'IPK', color: 'var(--c3)' },
            ].map((s) => (
              <div key={s.label} className={styles.stat}>
                <span
                  className={styles.statNum}
                  style={{ color: s.color }}
                >
                  {s.num}
                </span>

                <span className={styles.statLabel}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageBg}></div>

          <img
            src="/linda.png"
            alt="Linda Ratna"
            className={styles.image}
          />

          <div className={styles.imageGlow}></div>
        </div>
      </div>
    </section>
  )
}