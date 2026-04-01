import Bt from "../Buttom"
import Input from "../Inputs"
import "./Formulario.css"

const Forms = () => {
    return (
        <section className = "formss">
            <form>
                <h2>Fill in the information to creat a card form the employee</h2>
                <Input label="Name" placeholder="Enter your name" />
                <Input label="Position" placeholder="Enter your position" />
                <Input label="Image" placeholder="Enter the adress for image " />
                <Bt></Bt>

            </form>
        </section>
    )
}

export default Forms