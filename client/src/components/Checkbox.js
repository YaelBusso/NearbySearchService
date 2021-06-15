import {useState} from 'react'

const Checkbox = ({label, isChecked}) => {
    const [isChecked, setIsChecked] = useState(false)
    const toogleCheckboxChange=()=>{ 
        setIsChecked(!isChecked);
    }
    return (
        <div className="form-group">
         <label>
          <input type="checkbox"
            id="accepts_credit_card"
            value={label}
            checked={isChecked}
            onChange={toogleCheckboxChange}/>
        {label}
        </label>
        </div>
    )
}

export default Checkbox
