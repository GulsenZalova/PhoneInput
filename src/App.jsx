import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("")
  const handleChange = (e) => {
    const inputValue = e.target.value
    if (inputValue.length <= 14) {
      const phoneNumber = makePhoneNumber(inputValue)
      setValue(phoneNumber)
    }
  }
  const makePhoneNumber = (phone) => {
    if (!phone) return phone;
    const phoneNumber = phone.replace(/[^\d]/g, '');
    if (phoneNumber.length < 4) return phoneNumber;
    if (phoneNumber.length < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }


const handleSubmit = () => {
  setValue("")
  console.log("salam")
}
return (
  <div className="App">
    <input type="text" placeholder='(555) 555-5555' value={value} onChange={handleChange} />
    <button id='btn' style={{ opacity: value.length != 14 ? 0.5 : 1 }} onClick={handleSubmit} disabled={value.length != 14 ? true : false}>Submit</button>
  </div>
)
}

export default App


