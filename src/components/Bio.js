import React from 'react'

const Bio = (props) => {
  const { person } = props.person || {};
  return (
    <section>
      <h1>{person.name}</h1>
      <h2>Phone: {person.phone}</h2>
    </section>
  )
}

export default Bio;
