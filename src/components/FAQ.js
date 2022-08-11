import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
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
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is CodePro?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
      <strong>CodePro</strong> is online compiler and debugger tool for C/C++ language. You can compile with gcc/g++ and can debug using gdb.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Which languages and frameworks are supported?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
      CodePro works with JavaScript (including TypeScript) and has front-end and full-stack support.
We've client templates for: React, Vue, Angular, Preact, Svelte, Dojo, CX, Reason, as well as vanilla JavaScript that uses Parcel, and one for static (HTML, JavaScript, CSS) projects.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What are memory and time constraints for program?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
      <strong>Compilation time:</strong> 10 seconds <strong>Run time:</strong> 10 seconds in text mode.In interactive console mode, you can run as long as program is finished or until we find user inactivity for longer than 15 mins.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Which standard and version used for compiler and debugger?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
      Standard and version
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}
