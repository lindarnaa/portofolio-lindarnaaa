import styles from './Experiences.module.css'

const internship = [
  {
    role: 'Frontend Developer',
    company: 'Dinas Komunikasi dan Informatika',
    period: 'Jan 2025',
    desc: [
      'Developed responsive user interfaces using PHP (CodeIgniter) and Bootstrap based on UI/UX design specifications.',
      'Collaborated with backend teams to integrate features and manage data flow.',
      'Improved usability and layout consistency across multiple web pages.',
    ],
  },
  {
    role: 'IT Support',
    company: 'CV Bangun Jaya Komputer',
    period: 'Apr 2021 – Jun 2021',
    desc: [
        'Installed and configured Windows operating systems on 5 client devices, ensuring efficient deployment and optimized system performance.',
        'Troubleshot and resolved issues on PCs, printers, and other hardware/software components.',
        'Conducted hardware and software maintenance to ensure optimal system performance.',
        'Provided data entry and administrative support, accurately processing 50 records and streamlining office operations.',
    ],
  },
]

const organization = [
  {
    role: 'Staff of Training and Career at RISTEK',
    company: 'Himpunan Mahasiswa Teknik Komputer',
    period: 'Sep 2023 – Apr 2024',
    desc: [
        'Served as Vice Coordinator of the Recreation Event in the Cadreization Division, contributing to the planning and execution of 4 activities to enhance student engagement.',
        'Managed the execution of workshop activities for new Computer Engineering students at Diponegoro University to introduce the university’s four research pillars and the department’s four core disciplines, involving approximately 185 participants.',

    ],
  },
]

export default function Experiences() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.header}>
        <span className={styles.label}>Experience</span>
        <h2 className={styles.title}>Experiences</h2>
        <p className={styles.subtitle}>
          My journey in developing technical and professional skills through internships and organizational experiences.
        </p>
      </div>

      {/* ================= INTERNSHIP ================= */}
      <h3 className={styles.subSectionTitle}>Internship</h3>

      <div className={styles.timeline}>
        {internship.map((exp, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.dot}></div>

            <div className={styles.content}>
              <h3>{exp.role}</h3>

              <span className={styles.company}>
                {exp.company} • {exp.period}
              </span>

              <ul className={styles.list}>
                {exp.desc.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* ================= ORGANIZATION ================= */}
      <h3 className={styles.subSectionTitle}>Organization</h3>

      <div className={styles.timeline}>
        {organization.map((exp, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.dot}></div>

            <div className={styles.content}>
              <h3>{exp.role}</h3>

              <span className={styles.company}>
                {exp.company} • {exp.period}
              </span>

              <ul className={styles.list}>
                {exp.desc.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}