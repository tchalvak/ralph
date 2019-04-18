import React from 'react'
import PropTypes from 'prop-types'

const Bio = props => {
    const person = props.person || {}
    const { children } = props
    return (
        <section>
            <h1>{person.name}</h1>
            <h2>{person.phone}</h2>
            {children}
        </section>
    )
}

Bio.propTypes = {
    person: PropTypes.object.isRequired,
}

export default Bio
