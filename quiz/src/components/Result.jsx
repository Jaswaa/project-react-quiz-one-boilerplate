import React, {Component} from "react";

export class Result extends Component {
  render() {
    return (
      <div className="last">
        <h1 className="Result">Results</h1>
        <div className="cmnt">
            <h4>You neeed more practice!</h4>
            <p className="score">Your score is 20%</p>
       <div>
       <div className="num">
         <b>Total number of questions</b>
         <b>15</b>
        </div>
        <div className="num">
            <b>Number of attempted question</b>
            <b>9</b>
        </div>
        <div className="num">
            <b>Number of wronge answers</b>
            <b>6</b>
         </div>
        </div>
       </div>
    
      <div className="button2">
        <button className="again">Play Again</button>
        <button className="back">Back to Home</button>
      </div>
      </div>
     
    )
  }
}

export default Result