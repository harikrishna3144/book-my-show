import { useState } from "react"
import './index.css'


const typeOptions = [
    {
      optionId: '1',
      displayText: 'Standard',
    },
    {
      optionId: '2',
      displayText: 'Premium',
    },
  ]

const SelectUserType = () => {
    const [typeText,setTypeText] = useState('')

const onChangeTypeUser = (event) => {
  console.log("Hi Tej")
  console.log({typeText})
    setTypeText(event.target.value)
}


  return (
    <div className="select-type-container">
        <div>
        <div className="input-container">
            <h3>Ticket Type</h3>
        <select value={typeText} onChange={onChangeTypeUser}  className="select-user-text" >
            {typeOptions.map((eachOption) => (
                <option selected  key={eachOption.optionId} >
                    {eachOption.displayText}
                </option>
            ))}
        </select>
        </div>
        {/* <p>{typeText}</p> */}
        </div>
        <div className="input-container">
            <h3>Qty</h3>
        <select value={typeText} onChange={onChangeTypeUser}  className="select-user-text" >
            {typeOptions.map((eachOption) => (
                <option selected  key={eachOption.optionId} >
                    {eachOption.displayText}
                </option>
            ))}
        </select>
        </div>
        {/* <input className="numbers-Qty" type="number" placeholder="Qty" /> */}

    </div>
  )
}
export default SelectUserType
