import './App.css'
import Chicken from "./Chicken.jsx";
import Greeter from "./Greeter.jsx";
import Dog from './Dog.jsx'
import DiceRolls from './DiceRolls.jsx'
import LoginForm from "./LoginForm.jsx";
import RandomPokemon from "./RandomPokemon.jsx";
import ListPicker from './ListPicker.jsx';
import DoubleDice from './DoubleDice.jsx';
import ColorList from './ColorList.jsx';
import Slots from './Slots.jsx';
import ShoppingList from './ShoppingList.jsx';
const data=[
    {item:'eggs',quantity:12,completed:false},
    {item:'milk',quantity:1,completed:true},
    {item:'chicken',quantity:102,completed:false},
    {item:'carrots',quantity:102,completed:true},
    {item:'beans',quantity:152,completed:false}
];
function App() {
    return <div>
        {/* <Greeter person="Abin"/>
        <Greeter person="Nithin"/>
        <Chicken></Chicken>
        <Dog/>
        <LoginForm></LoginForm>
        <DiceRolls></DiceRolls>

        <RandomPokemon></RandomPokemon> */}
        {/* <ListPicker values={[1,2,3]}/> */}
        {/* <DoubleDice/>
        <DoubleDice/>
        <DoubleDice/> */}
        {/* <ColorList colors={["red","pink","blue"]}/> */}

        {/* <Slots val1="🥰" val2="🥰" val3="🥰" />
        <Slots val1="🥰" val2="☺️" val3="🥰" />
        <Slots val1="🥰" val2="🥰" val3="😭" />
        <Slots val1="🥸" val2="🥰" val3="🥰" />
        <Slots val1="🥰" val2="🥰" val3="🥰" /> */}

        <ShoppingList items={data}/>
    </div>
}

export default App;
