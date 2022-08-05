import React from 'react'

export default function Footer() {
    let footerstyle={
        backgroundColor: 'black',
        color: 'white'
    }
  return (
    <div>
      <footer className="text-muted">
        <div className="container-fluid position-absolute bottom-0" style={footerstyle}>
          <p>Copyright CodePro</p>
        </div>
      </footer>
    </div>
  )
}
