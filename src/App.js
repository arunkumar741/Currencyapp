import React, { Component } from 'react';
import axios from 'axios';
import { ProgressBar } from 'react-bootstrap';
import Title from './components/Title';
import Form from './components/Form';
import Currencyinfo from './components/Currencyinfo';
import Description from './components/Description';
import './App.css';

class App extends Component {
  state = {
    usd: undefined,
    when: undefined,
    error: undefined,
   
  }

  getForecast = async (e) => {
    e.preventDefault();
    const code = e.target.elements.code.value;
    
    if(['btc','eth','xrp','bch','ada','itc','xlm','neo'].indexOf(code) !== -1){      
      const response = await axios(`https://infinite-depths.herokuapp.com/forecast?code=${code}`, {
      onDownloadProgress: ({ loaded, total }) => {
        this.setState({ progress: { loaded, total } });
      }
    })

    //const data = await response.json();
    const data1 = response.data;
      
    this.setState({     
    forecast: data1.forecast.map(item => ({
        usd: item.usd,
        when: item.when 
      }))
    });
    } else {
      this.setState({
        usd: undefined,
        when: undefined,
        error: "Please enter valid code"
      });
    }
  }
  render() {
    return (
      <div className="body">  
                {this.state.progress && <ProgressBar now={this.state.progress.loaded} max={this.state.progress.total} />}
            <div className="container">
              <div className="row">
                <div className="col-md-3"></div>
                  <div className="col-md-6">
                  <Title />
                        <Form getForecast={this.getForecast}/>
                        <table className="table table-hover table-bordered">
                          <thead>
                            <tr>
                            { this.state.forecast && <Description />}
                            </tr>
                          </thead>
                          {this.state.forecast && this.state.forecast.map((item,index) => (
                            <Currencyinfo
                            {...item}
                            key={index}
                            error={this.state.error} />
                          ))} 
                        </table>  
                    
                  </div>
                  <div class="col-md-3"></div>
                </div>
            </div>         
        
              
        
      </div>//main div
    );
  }
}


export default App;
