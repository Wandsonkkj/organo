import './Input.css'

export const Input = (information) => {
    return(
        <div className="compose-text">
            <label> {information.label} </label>
            <input required={information.mandatory} placeholder={information.placeholder}></input>
        </div>
    )
}
