import '../styles/Button.css'

const Button = ({ value, setQuote }) => {
  return (
    <button onClick={setQuote} className="button" >{value}</button>
  )
}

export default Button