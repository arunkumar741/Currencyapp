import React from 'react';
import '../App.css';

class Currencyinfo extends React.Component {
    render(){
        return(           
            <tbody> 
                <tr className="warning">
                    { this.props.usd &&  <td id="tdata"> { this.props.usd }</td>}
                    { this.props.when && <td id="tdata">{ this.props.when }</td>}
                </tr>
                <tr>
                    { this.props.error && <td id="tdata"> { this.props.error } </td> }                
                </tr>
            </tbody>
        );
    }

};

export default Currencyinfo;