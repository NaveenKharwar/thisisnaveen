import React from "react"

import {
  FaCodepen,
  FaTwitter,
  FaDev,
  FaInstagram,
  FaGithubAlt,
  FaWordpress,
} from "react-icons/fa"

const accounts = [
  {
    id: "1",
    account: "Twitter",
    url: "https://twitter.com/naveenkharwar0/",
    icon: <FaTwitter />,
  },
  {
    id: "2",
    account: "Codepen",
    url: "https://codepen.io/naveenkharwar/",
    icon: <FaCodepen />,
  },
  {
    id: "3",
    account: "DevTo",
    url: "https://dev.to/naveenkharwar/",
    icon: <FaDev />,
  },
  {
    id: "4",
    account: "Instagram",
    url: "https://www.instagram.com/naveenkhar.war/",
    icon: <FaInstagram />,
  },
  {
    id: "5",
    account: "GitHub",
    url: "http://github.com/NaveenKharwar/",
    icon: <FaGithubAlt />,
  },
  {
    id: "6",
    account: "WordPress",
    url: "http://profiles.wordpress.org/naveenkharwar/",
    icon: <FaWordpress />,
  },
]

function SocialIcons(props) {
  const listAccounts = accounts.map(item => (
    <a className="social-icons" key={item.id} href={item.url}>
      {item.icon}
      <span className="after-icons">{item.account}</span>
    </a>
  ))
  return (
    <ul>
      <li className="flex flex-no-wrap text-4xl">{listAccounts}</li>
    </ul>
  )
}

export default SocialIcons
