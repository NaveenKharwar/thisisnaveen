import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <div className="flex justify-between items-center flex-wrap lg:p-16 p-6">
        <h3 className="text-3xl font-bold font-brand">
          <Link className="text-gray-100 hover:text-gray-100 lowercase" to="/">Naveen Kharwar </Link>
        </h3>
        <ul className="flex lg:mt-0 mt-10">
          <li>
            <Link
              className="bg-gray-800 hover:bg-gray-200 text-gray-100 hover:text-gray-900 py-4 px-6 border-r-2 border-gray-700"
              to="about"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              className="bg-gray-800 hover:bg-gray-200 text-gray-100 hover:text-gray-900 py-4 px-6"
              to="contact"
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
