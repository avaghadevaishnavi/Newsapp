import React, { Component } from 'react'

export class About extends Component {
    
  render() {
    return (
      <div>
        <div className="accordion" id="accordionExample" style={{margin:'90px'}}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>App</strong> This is news app Which contain the  Differnt Types Of News<code> you can go and Read news by exploring categories</code>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Feature Of App</strong> You can click on the news and  can read the whole news<code>by clicking on news</code>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <strong>Feddback</strong>you can give your feedback/opinion about app for it's improvment
      </div>
    </div>
  </div>
</div>
<form>
    <div className=" mb-3 centre"  style={{marginTop:'90px'}}>
    <label for="exampleInputEmail1" className="form-label">Did you find our News App helpfull?</label>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    Yes
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    No
  </label>
</div>
    <div id="emailHelp" className="form-text">Your Option Matters</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label"> If No-How can we make your experience even better?</label>
    <input type="text" className="form-control" id="exampleInputPassword1"style={{width:"500px"}}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">If yes-What's one thing that  doing well with and should carry on doing? .</label>
    <input type="text" className="form-control" id="exampleInputPassword1"style={{width:"500px"}}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Love to use again</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </div>
    )
  }
}

export default About
