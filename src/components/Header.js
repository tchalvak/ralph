import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <span className="icon fa-diamond" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>AI</h1>
                <p>Artificial Intelligence for Lazy, Smart Professionals</p>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                            props.onOpenArticle('intro')
                        }}
                    >
                        Intro
                    </a>
                </li>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                            props.onOpenArticle('presentation')
                        }}
                    >
                        Presentation
                    </a>
                </li>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                            props.onOpenArticle('citations')
                        }}
                    >
                        Citations
                    </a>
                </li>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                            props.onOpenArticle('about')
                        }}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="javascript:;"
                        onClick={() => {
                            props.onOpenArticle('contact')
                        }}
                    >
                        Contact
                    </a>
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
