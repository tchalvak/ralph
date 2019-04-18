import React from 'react'
import PropTypes from 'prop-types'

const Bio = props => {
    const person = props.person || {}
    const { children } = props
    return (
        <section>
            <h2>{person.name}</h2>
            <h3>{person.number}</h3>
            {person.email && (
                <h3>
                    <a href={`mailto:${person.email}`}>{person.email}</a>
                </h3>
            )}
            {person.avatar && (
                <span className="image main">
                    <img src={person.avatar} alt="" />
                </span>
            )}
            {children}
        </section>
    )
}

Bio.propTypes = {
    person: PropTypes.object.isRequired,
}

export default Bio
