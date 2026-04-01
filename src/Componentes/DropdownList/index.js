import "./DropdownList.css"

const Lista = (props) => {
    return (
        <div className="dropdownList">
            <label>{props.label}</label>
            <select required = {props.mandatory}>
                {props.item.map((item, index) => { return <option key={index} > {item} </option> })}
            </select>

        </div>
    )
}

export default Lista