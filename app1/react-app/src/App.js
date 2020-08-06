import React from 'react';
import './App.css';

class App extends React.Component{

	render(){
		return(
			<div>
				<h3 className="cor-texto">Texto da minha aplicação</h3>
			</div>
		)
	}
}


export default App;
// import React from 'react';
// import Child from './Child';

// class App extends React.Component{

// 	state = {
// 		nome: "Default",
// 	}

// 	Alterar = (novoNome) =>{
// 		this.setState({nome: novoNome});
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<h3>Parent</h3>
// 				<button onClick={this.Alterar('Pedro')}>Alterar</button>
// 				<hr/>
// 				<Child nome={this.state.nome}/>
// 				<Child funcaoAlterar = {this.Alterar}/>
// 			</div>
// 		)
// 	}
// }


// export default App;
