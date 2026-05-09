import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import Certification from '../components/Certifications'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Linda Ratna Kholifah</title>
        <meta name="description" content="Portfolio Fullstack Developer — React, Next.js, Node.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experiences />
        <Projects />
        <Certification />
        <Contact />
      </main>
    </>
  )
}
