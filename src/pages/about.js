import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="site-content lg:px-0 px-6 lg:pt-12 pt-10">
      <div className="container mx-auto bg-primary">
        <div className="border-2 border-gray-700 shadow-2xl lg:px-10 lg:py-10 px-5 py-0">
          <div className="flex flex-col flex-wrap my-4">
            <div className="w-full">
              <img
                className="rounded-full border-2 border-gray-100 w-56"
                src="https://pbs.twimg.com/profile_images/1234147144019402756/kqWDnKfU_400x400.jpg"
                alt="Naveen Kharwar"
              />
              <p className="text-2xl pt-4">
                {" "}
                > WordPress Developer @LubusIN, WordPress Contributer, In Team
                with @wayoutworks
              </p>
            </div>
          </div>
          <div>
            <h5>Who is Naveen Kharwar?</h5>
            <p>
              I am a Web Developer, who usually works with front-end
              technologies and CMSs'. I have developed several projects using
              WordPress and GatsbyJS. I like to contribute in Open Source
              Technologies And WordPress stuffs, it helps me to stay productive
              as well as collabrative. Apart from this, I love to participate in
              technological events, such as WordCamps. To know more about me
              click here.<br /> Check out my <Link to="blog">blog!</Link>
            </p>
            <h5>Where Naveen Kharwar live?</h5>
            <p>I live in India.</p>
            <h5>Can I get your Netflix password?</h5>
            <p>Yes offcourse, here it is ******* </p>
            <h5>Is Naveen available for Freelance work?</h5>
            <p>Yes, Contact <a href="https://www.wayoutworks.com/">@wayoutworks</a>.</p>
            <h5>What are your skills?</h5>
            <p>
              Oh, are you getting professional? anyway here are my skills I
              will decorate with css <span role="img" aria-label="smile">🙂</span>
            </p>
            <div className="flex flex-wrap lg:w-2/3 w-full bg-gray-900 p-5 mb-5">
              <div className="lg:w-1/4 w-full">
                <h6 className="text-lg my-4">Soft Skills</h6>
                <ul className="lg:pr-3 pr-0">
                  <li>Good Communication Skills</li>
                  <li>Descipline</li>
                  <li>Managemnet</li>
                  <li>Sense of humour</li>
                  <li>Photography</li>
                </ul>
              </div>
              <div className="lg:w-1/4 w-full">
                <h6 className="text-lg my-4">Programming Skills</h6>
                <ul className="lg:pr-3 pr-0">
                  <li>HTML/JSX</li>
                  <li>CSS/SCSS</li>
                  <li>JavaScript</li>
                  <li>GatsbyJS</li>
                  <li>PHP</li>
                  <li>GraphQL</li>
                </ul>
              </div>
              <div className="lg:w-1/4 w-full">
                <h6 className="text-lg my-4">Designing Skills</h6>
                <ul className="lg:pr-3 p-0">
                  <li>Adobe XD</li>
                  <li>Figma</li>
                  <li>Adobe Illustrator</li>
                </ul>
              </div>
              <div className="lg:w-1/4 w-full">
                <h6 className="text-lg my-4">CMS Skills</h6>
                <ul className="lg:pr-3 p-0">
                  <li>WordPress</li>
                  <li>WooCommerce</li>
                  <li>Magento</li>
                  <li>ContentFul</li>
                  <li>Prismic CMS</li>
                </ul>
              </div>
            </div>
            <h5>You talk alot! show somthing that you did</h5>
            <p>
              hehehe! visit <a href="https://www.wayoutworks.com/">@wayoutworks</a>, You will be able to see all my client work done.<br />I use <a href="https://www.github.com/naveenkharwar">Github</a> you can visit there to check my pushed code.
            </p>
            <h5>Why you choose to have this simple website?</h5>
            <p>Do you feel the same? to know the complete reason there is a website <a href="https://motherfuckingwebsite.com/">https://motherfuckingwebsite.com/</a>, I agree with the author that a simple website is much better than to have a website with lots of unwanted animation and all those fuc*in stuffs <span role="img" aria-label="meh">😒</span>.</p>
            <h5>Well, nice to talk to you</h5>
            <p>
              Same here! If you have anything to share or just chat you can
              always contact me through <Link to="contact">Contact</Link> page visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
