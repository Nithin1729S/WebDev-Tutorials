import './App.css'
import Chicken  from "./Chicken.jsx";
import Greeter from "./Greeter.jsx";
import Dog from './Dog.jsx'
import DiceRolls from './DiceRolls.jsx'
import LoginForm from "./LoginForm.jsx";
import RandomPokemon from "./RandomPokemon.jsx";
function App() {
    return <div>
        <Greeter person="Abin"/>
        <Greeter person="Nithin"/>
        <Chicken></Chicken>
        <Dog/>
        <LoginForm></LoginForm>
        <DiceRolls></DiceRolls>

        <RandomPokemon></RandomPokemon>
    </div>
}

export default App;
