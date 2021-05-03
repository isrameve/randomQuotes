import '../styles/Quote.css'

const Quote = ({ quote, author }) => {
  return (
    <div className="text">
      <p>{quote.quote}</p>
      <span>{quote.author}</span>
    </div>
  )
}

export default Quote