import React from 'react';
import Nome from './Nome';
import Nome from './Apelido';

class Identificacao extends React.Component{
    render(){
        return(
            <div>
                <Nome />
                <Apelido />
            </div>
        )
    }
}

export default Identificacao;