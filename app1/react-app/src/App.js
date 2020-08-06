import React from 'react';

import Navegacao from './components/Navegacao';
import Home from './components/Home';
import Servicos from './components/Servicos';
import Contatos from './components/Contatos';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component{

	render(){
		return(
			<Router>
				<div>
					<Navegacao />
					<Switch>

						<Route exact path="/">
							<Home />
						</Route>

						<Route exact path="/servicos">
							<Servicos />
						</Route>

						<Route exact path="/contatos">
							<Contatos />
						</Route>
						
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App;