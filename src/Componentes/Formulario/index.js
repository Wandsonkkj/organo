import Bt from "../Buttom"
import Lista from "../DropdownList"
import Input from "../Inputs"
import "./Formulario.css"

const Forms = () => {
    const times = [
        'programming',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux and Design',
        'Mobile',
        'Innovation and management'
    ]
    return (
        <section className = "formss">
            <form>
                <h2>Fill in the information to creat a card form the employee</h2>
                <Input label="Name" placeholder="Enter your name" />
                <Input label="Position" placeholder="Enter your position" />
                <Input label="Image" placeholder="Enter the adress for image " />
                <Lista 
                item={times}
                label = "Time"
                />
                <Bt button="Creat card"/>

            </form>
        </section>
    )
}

export default Forms