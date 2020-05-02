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
				<h1 className="lg:text-5xl text-4xl font-normal">Hey 👋, welcome to my space, I am <span className="font-bold">Naveen Kharwar.</span></h1>
                <p className="iam text-xl">designer & developer</p>
				<span className="block mb-3">📍 India</span>
				<span className="block mb-5">💌 naveenkharwar(@)hotmail.com</span>
					<ul>
						<li className="flex flex-no-wrap text-4xl">
							<a className="social-icons" href="#">
                                <FaTwitter />
                                <span className="after-icons">Twitter</span>    
                            </a>
							<a className="social-icons" href="#">
                                <FaFacebookF />
                                <span className="after-icons">Facebook</span>    
                            </a>	
							<a className="social-icons" href="#">
                                <FaDev />
                                <span className="after-icons">Dev</span>    
                            </a>		
							<a className="social-icons" href="#">
                                <FaInstagram />
                                <span className="after-icons">Instagram</span>    
                            </a>		
							<a className="social-icons" href="#">
                                <FaGithubAlt />
                                <span className="after-icons">GitHub</span>    
                            </a>		
							<a className="social-icons" href="#">
                                <FaWordpress />
                                <span className="after-icons">WordPress</span>    
                            </a>
						</li>
					</ul>
					<a className="inline-block bg-gray-800 hover:bg-gray-200 text-gray-100 hover:text-gray-900 text-base py-3 px-5" href="#">watch my
						portfolio</a>
			</div>
            </section>
  </Layout>
)

export default IndexPage
