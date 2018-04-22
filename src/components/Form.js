import React from 'react';

class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.getForecast}>
                <input type = "text" name="code" placeholder="Enter Crypto code"/>
                
                <button>Get forecast</button>
            </form>
        );
    }

};

export default Form;