import React from 'react'

export default function About() {
  let aboutstyle = {
    color: 'white',
  }
  return (
    <div className='container text-center' style={aboutstyle}>
      <h2>About</h2>
      <p>Embellish is an online code formatter which is used to beautify and format your code. It supports more than 40 languages and supports syntax highlighting. Using Embellish is simple; just paste your raw code and let Embellish do the rest!
      </p>
      <p>
        Welcome to Embellish! Start Coding now!
      </p>
    </div>
  )
}
