import PropTypes from 'prop-types'
import React from 'react'
import raj from '../images/raj.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
  
      <img className="rajLogo" src={raj} alt="" />

    <div className="content">
      <div className="inner">
        <h1>Rajuju Brown</h1>
        <p>
          Music Producer{' '}

        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Music
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Film
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
