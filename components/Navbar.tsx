import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#about" className={styles.logo}>
        LRK.
      </a>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={styles.link}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </div>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.active : ''} />
        <span className={menuOpen ? styles.active : ''} />
        <span className={menuOpen ? styles.active : ''} />
      </button>
    </nav>
  )
}