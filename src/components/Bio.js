import React from 'react'
import PropTypes from 'prop-types'

const Bio = props => {
    const person = props.person || {}
    return (
        <section>
            <h1>{person.name}</h1>
            <h2>Phone: {person.phone}</h2>
        </section>
    )
}

Bio.propTypes = {
    person: PropTypes.object.isRequired,
}

export default Bio
