import styles from './Contact.module.css'

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa'

const socials = [
  {
    label: 'GitHub',
    username: 'lindarnaa',
    href: 'https://github.com/lindarnaa',
    icon: <FaGithub />,
  },
  {
    label: 'LinkedIn',
    username: 'Linda Ratna Kholifah',
    href: 'https://www.linkedin.com/in/linda-ratna-kholifah-889840287/',
    icon: <FaLinkedin />,
  },
  {
    label: 'Instagram',
    username: '@lindarnaa',
    href: 'https://www.instagram.com/lindarnaa?igsh=MTY2d3hrM3hxemp6aQ==',
    icon: <FaInstagram />,
  },
  {
    label: 'Whatsapp',
    username: '085641568036',
    icon: <FaWhatsapp />,
  },
  {
    label: 'Email',
    username: 'lindakholifah11@gmail.com',
    icon: <FaEnvelope />,
  },
]

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.bgGlow} />

      <div className={styles.box}>
        <span className={styles.label}>
          ✦ Let&apos;s Collaborate
        </span>

        <h2 className={styles.title}>
          Have an exciting
          <br />
          <span className={styles.accent}>project?</span>
        </h2>

        <p className={styles.desc}>
          Open for freelance, full-time opportunities, and project collaborations.
          Always excited to discuss and bring creative ideas to life.
        </p>

        <div className={styles.divider} />

        <div className={styles.socials}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              <span className={styles.icon}>
                {s.icon}
              </span>

              <div className={styles.socialInfo}>
                <span className={styles.socialLabel}>
                  {s.label}
                </span>

                <small className={styles.socialUsername}>
                  {s.username}
                </small>
              </div>
            </a>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <p>
          Built with React and Tailwind CSS &amp; passion by{' '}
          <strong>Linda</strong>
        </p>

        <p className={styles.copy}>
          © 2026 · All rights reserved
        </p>
      </footer>
    </section>
  )
}