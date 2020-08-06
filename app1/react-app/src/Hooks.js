import React, {useState} from 'react';

const App = () =>{
    //não funfa
    // let nome = "João";
    // const AlterarNome = () => {
    //     nome = "Pedro";
    //     console.log('teste');
    // }

    //HOOK
    const[Nome, setNome] = useState('João');

    return(
        <div>
            <h1>React (function component)</h1>
            <p>O meu nome é: {Nome}</p>

            <hr/>

            {/* <button onClick={AlterarNome}>Alterar Nome</button>  */}
            <button onClick={() => setNome('Pedro')}>Alterar Nome</button>
        </div>
    )
}

export default Hooks;