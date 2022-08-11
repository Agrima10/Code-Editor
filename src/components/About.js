import React from 'react'

export default function About() {
  let aboutstyle = {
    color: 'white',
  }
  return (
    <div className='container text-center' style={aboutstyle}>
      <h2>About</h2>
      <p>CodePro is an online code editor which can be used for various languages such as for compiler and debugger tool for C/C++ languages. It is world's first online IDE which gives debugging facility with embedded gdb debugger. This is a very handy webapp for coders who love coding in online IDE but face unexpected crashes and tricky bugs in their code. CodePro provides debugging power to such users to help them out.
        So all in all, its a great online IDE powered with code editor, compiler and debugger.</p>
    </div>
  )
}
