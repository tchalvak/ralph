import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
    render() {
        let close = (
            <div
                className="close"
                onClick={() => {
                    this.props.onCloseArticle()
                }}
            />
        )

        return (
            <div
                ref={this.props.setWrapperRef}
                id="main"
                style={
                    this.props.timeout
                        ? { display: 'flex' }
                        : { display: 'none' }
                }
            >
                <article
                    id="intro"
                    className={`${
                        this.props.article === 'intro' ? 'active' : ''
                    } ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">
                        Artificial Intelligence
                        <br />
                        for Lazy,
                        <br />
                        Smart Professionals
                    </h2>
                    <span className="image main">
                        <img src={pic01} alt="" />
                    </span>
                    <p>
                        Artificial Intelligence today is a wholly different
                        landscape from the science fiction ideas that were
                        written about 50 years ago. For example, we have a
                        variety of speech interfaces in the form of devices and
                        tools like Alexa, Siri, Google Home, and more, devices
                        in a box that are nothing similar to the idea of a human
                        in a box.
                    </p>
                    <p>
                        We give these things a voice because they are a new way
                        of working with your computer. One part of the AI
                        movement is an introduction of new tools; speech instead
                        of a keyboard, speech instead of a screen.
                    </p>
                    <p>
                        Another practical aspect of the AI movement is a force
                        multiplication of simple decision-making. Customer
                        support is an example of this.
                    </p>
                    <p>
                        I can put a customer service support chat on my website
                        so that users can talk to me directly, but if they are
                        in a different timezone, I'm unavailable. By using an
                        AI, or chatbot, I can provide a reduced experience, for
                        more time in the day and night. It would always be
                        better if they could talk to me, I'm really good at
                        talking and helping, but if the choice is between me for
                        1 hour a day and a much less effective chat-bot for 24
                        hours a day, I am going to give that up to the AI.
                    </p>
                    {close}
                </article>

                <article
                    id="presentation"
                    className={`${
                        this.props.article === 'presentation' ? 'active' : ''
                    } ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">Presentation</h2>
                    <span className="image main">
                        <img src={pic02} alt="" />
                    </span>
                    <p>
                        The presentation isn't ready yet, check back at the end
                        of April or contact me and I will notify you when the
                        presentation is available online!
                    </p>
                    {close}
                </article>

                <article
                    id="citations"
                    className={`${
                        this.props.article === 'citations' ? 'active' : ''
                    } ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">Citations</h2>
                    <span className="image main">
                        <img src={pic02} alt="" />
                    </span>
                    <p>
                        To provide citations of my research, I will make both
                        the citations and the slides available here once they're
                        complete.
                    </p>
                    <div>
                        The presentation isn't ready yet, check back at the end
                        of April or contact me and I will notify you when the
                        presentation is available online!
                    </div>
                    {close}
                </article>

                <article
                    id="about"
                    className={`${
                        this.props.article === 'about' ? 'active' : ''
                    } ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">About</h2>
                    <span className="image main">
                        <img src={pic03} alt="" />
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur et adipiscing
                        elit. Praesent eleifend dignissim arcu, at eleifend
                        sapien imperdiet ac. Aliquam erat volutpat. Praesent
                        urna nisi, fringila lorem et vehicula lacinia quam.
                        Integer sollicitudin mauris nec lorem luctus ultrices.
                        Aliquam libero et malesuada fames ac ante ipsum primis
                        in faucibus. Cras viverra ligula sit amet ex mollis
                        mattis lorem ipsum dolor sit amet.
                    </p>
                    {close}
                </article>

                <article
                    id="contact"
                    className={`${
                        this.props.article === 'contact' ? 'active' : ''
                    } ${this.props.articleTimeout ? 'timeout' : ''}`}
                    style={{ display: 'none' }}
                >
                    <h2 className="major">Contact</h2>
                    <p>You can:</p>
                    <ul className="actions">
                        <li>
                            <a
                                title="mailto:roy.ronal.ds@gmail.com"
                                href="mailto:roy.ronal.ds@gmail.com"
                                rel="nofolow"
                            >
                                <button type="button">Email Me</button>
                            </a>
                            <small>(roy.ronal.ds@gmail.com)</small>
                        </li>
                    </ul>
                    <p>Or check out one of my social profiles below.</p>
                    {/*
                    <form method="post" action="#">
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="4" />
                        </div>
                        <ul className="actions">
                            <li>
                                <input
                                    type="submit"
                                    value="Send Message"
                                    className="special"
                                />
                            </li>
                            <li>
                                <input type="reset" value="Reset" />
                            </li>
                        </ul>
                    </form>
                    */}
                    <ul className="icons">
                        <li>
                            <a
                                href="https://twitter.com/tchalvak"
                                className="icon fa-twitter"
                            >
                                <span className="label">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/tchalvak"
                                className="icon fa-facebook"
                            >
                                <span className="label">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/tchalvak"
                                className="icon fa-github"
                            >
                                <span className="label">GitHub</span>
                            </a>
                        </li>
                    </ul>
                    {close}
                </article>
            </div>
        )
    }
}

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
}

export default Main
