import "react"
import "react-dom"
import logo from '../assets/investment-calculator-logo.png'

export default function Header() {
    return (
      <div id="header">
        <img src={logo} alt="money in the bag logo"></img>
        <h1>Investment Calculator</h1>
      </div>
    );
}