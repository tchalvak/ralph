import React from 'react'

const Bio = (props) => {
  const { person } = props.person || {};
  return (
    <section>
      <h2>Phone: {person}</h2>
    </section>
  )
}

export default Bio;
