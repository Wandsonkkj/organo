import Banner from './Componentes/Banner';
import Input from './Componentes/Inputs';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Input label="Name" placeholder="Enter your name"/>
      <Input label="Position" placeholder="Enter your position"/>
      <Input label="Image" placeholder="Enter the adress for image "/>
    </div>
  );
}

export default App;
