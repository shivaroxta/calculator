import {useState} from 'react'
import './index.css'

const LettersCalculator = () => {
  const [letters, setLetters] = useState(0)

  const onChangeLetters = event => {
    setLetters(event.target.value.length)
  }

  return (
    <div className="container">
      <div className="calculator-container">
        <h1 className="heading">
          Calculate the <br /> Letters you <br /> enter
        </h1>
        <div className="search-bar">
          <label htmlFor="search" className="labelElement">
            Enter the phrase
          </label>
          <input
            className="inputElement"
            type="search"
            id="search"
            placeholder="Enter the phrase"
            onChange={onChangeLetters}
          />
        </div>
        <p className="letters">No.of letters: {letters} </p>
      </div>
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
      </div>
    </div>
  )
}

export default LettersCalculator
