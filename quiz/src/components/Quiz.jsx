import React, { Component } from 'react'

export class Quiz extends Component {
  render() {
    return (
      <div className='quiz'>
        <h1>Question</h1>
        <p>1 of 15</p>
        <p className='question'>Which is the only mammal that can jump?</p>

        <div className='choices'>
            <div className='option'>Dog</div>
            <div className='option'>Elephant</div>
            <div className='option'>Goat</div>
            <div className='option'>Lion</div>
        </div>

        <div className='buttons'>
            <button className='previous'>Previous</button>
            <button className='next'>Next</button>
            <button className='quit'>Previous</button>
        </div>
      </div>
    )
  }
}

export default Quiz