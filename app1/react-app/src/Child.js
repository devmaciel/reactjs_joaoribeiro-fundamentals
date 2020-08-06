import React, { Component } from 'react';

class Child extends Component {

    AlterarChild = () =>{
        this.props.funcaoAlterar('João');
    }

    render() {
        return (
            <div>
                <h3>Child</h3>
                <p>Nome: {this.props.nome}</p>
                <button onClick={this.AlterarChild}>Alterar</button>
            </div>
        );
    }
}

export default Child;