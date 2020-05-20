import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Helmet } from "react-helmet"

import SocialIcons from "../components/social/socialIcons"

const IndexPage = () => (
  <Layout>
      <Helmet>
          <title>Naveen Kharwar | Developer and Problem Solver</title>
          <meta name="description" content="Howdy! I'm Naveen Kharwar — a freelance designer and Web/WordPress developer from India." />
          <meta name="theme-color" content="#000" />
      </Helmet>
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
          className="inline-block bg-gray-800 hover:bg-gray-200 text-gray-100 hover:text-gray-900 font-brand text-base font-semibold py-3 px-5"
          target="_blank" rel="me noopener noreferrer"
          href="https://wayoutworks.in/projects/"
        >
          watch my portfolio
        </a>
      </div>
    </section>
  </Layout>
)

export default IndexPage
