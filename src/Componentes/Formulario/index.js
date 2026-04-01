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

    const toSave = (event) => {
        event.preventDefault() //faz com q o butão saia do seu comportamento padrão que é redirecionar para a propria pagina 
        console.log('esta salvo')
    }

    return (
        <section className="formss">
            <form onSubmit={toSave}>
                <h2>Fill in the information to creat a card form the employee</h2>
                <Input mandatory={true} label="Name" placeholder="Enter your name" />
                <Input mandatory={true} label="Position" placeholder="Enter your position" />
                <Input label="Image" placeholder="Enter the adress for image " />
                <Lista
                    mandatory={true}
                    item={times}
                    label="Time"
                />
                <Bt button="Creat card" />

            </form>
        </section>
    )
}

export default Forms