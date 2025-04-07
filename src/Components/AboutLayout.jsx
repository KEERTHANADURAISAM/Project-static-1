import React from 'react'
import Layout from './Layout'
import About from './About'
import Features from './Feature'
import Facts from './Facts'
import TeamSection from './Team'

const AboutLayout = () => {
  return (
    <div>
        <Layout/>
        <Features/>
        <About/>
        <Facts/>
        <TeamSection/>

    </div>
  )
}

export default AboutLayout