import './Input.css'

export const Input = (information) => {
    return(
        <div className="compose-text">
            <label> {information.label} </label>
            <input placeholder="enter your name"></input>
        </div>
    )
}
