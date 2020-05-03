import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import SocialIcons from "../components/social/socialIcons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="lg:px-0 px-6">
      <div className="container mx-auto ">
        <h1 className="lg:text-5xl text-4xl font-normal">
          Hey{" "}
          <span role="img" aria-label="hello">
            👋
          </span>
          , welcome to my space, I am{" "}
          <span className="font-bold">Naveen Kharwar.</span>
        </h1>
        <p className="iam text-xl">designer & developer</p>
        <span className="block mb-3">
          <span role="img" aria-label="location">
            📍
          </span>{" "}
          India
        </span>
        <span className="block mb-5">
          <span role="img" aria-label="email">
            💌
          </span>{" "}
          naveenkharwar(@)hotmail.com
        </span>
        <SocialIcons />
        <a
          className="inline-block bg-gray-800 hover:bg-gray-200 text-gray-100 hover:text-gray-900 text-base py-3 px-5"
          href="https://wayoutworks.in/projects/"
        >
          watch my portfolio
        </a>
      </div>
    </section>
  </Layout>
)

export default IndexPage
