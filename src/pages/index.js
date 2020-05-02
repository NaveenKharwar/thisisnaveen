import React from "react"
import { Link } from "gatsby"
import { FaFacebookF,FaTwitter,FaDev,FaInstagram,FaGithubAlt, FaWordpress } from "react-icons/fa";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
		<section className="lg:px-0 px-6">
			<div className="container mx-auto ">
				<h1 className="lg:text-6xl text-4xl font-normal">Hey 👋,<br />Welcome to my space, I am Naveen Kharwar</h1>
                <p className="iam text-xl">designer & developer</p>
				<span className="block mb-3">📍 India</span>
				<span className="block mb-5">💌 naveenkharwar(@)hotmail.com</span>
					<ul className="mb-5">
						<li className="flex flex-no-wrap text-4xl">
							<a className="mr-6" href="#"><FaTwitter /></a>
							<a className="mr-6" href="#"><FaFacebookF /></a>	
							<a className="mr-6" href="#"><FaDev /></a>		
							<a className="mr-6" href="#"><FaInstagram /></a>		
							<a className="mr-6" href="#"><FaGithubAlt /></a>		
							<a className="mr-0" href="#"><FaWordpress /></a>
						</li>
					</ul>
					<a className="inline-block bg-gray-900 hover:bg-gray-200 text-gray-100 hover:text-gray-900 text-base py-3 px-5" href="#">watch my
						portfolio</a>
			</div>
            </section>
  </Layout>
)

export default IndexPage
