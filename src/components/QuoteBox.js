import { useState } from 'react'

import quotesObject from '../quotes.json'
import Quote from './Quote'
import Button from './Button'
import '../styles/QuoteBox.css'

const quotesArray = quotesObject.quotes;
console.log(quotesArray);

const QuoteBox = () => {

  const [quote, setQuote] = useState(quotesArray[0])
  // const [value, setNextQuote] = useState('')

  const QuoteRondomizer = () => {
    setQuote(quotesArray[Math.floor(Math.random()*quotesArray.length)])
  }
  return (
    <div className="card">
      <Quote quote={quote}/>
      <div className="flex">
        <Button setQuote={QuoteRondomizer} value="Next quote"/>
      </div>
    </div>
  )
}

export default QuoteBox
