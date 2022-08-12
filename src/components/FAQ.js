import React from 'react'

export default function FAQ(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 
    // })      
    let myStyle={
        color: props.mode ==='dark'?'white':'#150050',
        backgroundColor: props.mode ==='dark'?'rgb(60 20 170)':'white',
        border: '2px solid',
        borderColor: props.mode ==='dark'?'white':'#150050',
    }
  return (
    <div>
      <div className="container my-3">
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is&nbsp; <strong> Embellish </strong>?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      <strong>Embellish</strong> is online code formatter which is used to beautify and format code.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Which languages and frameworks are supported?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      All languages are supported in our <strong>Embellish</strong>.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What formatting styles are suppported?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      <strong> Embellish</strong>&nbsp;supports a host of formatting styles from dark themes such as tomorrowNightBright to light themes such as SolarizedLight. Our purpose is to provide a unique user experience and ensure that every programmer is able to code instyles that they are comfortable with to ensure maximum productivity.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        How does&nbsp; <strong> Embellish </strong> &nbsp;work?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      <strong> Embellish</strong>&nbsp;takes in your code and highlights your code in real-time according to your chosen theme to make your code more attractive.
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}
