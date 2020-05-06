import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Naveen" />
    <section className="site-content lg:px-0 px-6">
      <div className="container mx-auto">
          <h3 className="lg:text-4xl text-2xl">I am a teacher, student, friend, web developer if you need anyone from the following you can contact me.</h3>
          <h4 className="lg:text-3xl text-xl text-blue-500 my-6">> naveenkharwar@hotmail.com</h4>
          <h5 className="lg:text-2xl text-lg lg:text-justify text-center bg-blue-500 inline-block lg:p-6 p-3 text-gray-900"><span role="img" aria-label="code">👩‍💻</span> For work purpose <span className="text-gray-900">wayoutworks@outlook.com</span></h5>
      </div>
    </section>
  </Layout>
)

export default ContactPage
