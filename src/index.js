import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';



class App extends React.Component{

    constructor(props){
        super(props);
        //THIS IS THE ONLY TIME WE  DO A DIRECT ASSIGNMENT TO THIS.STATE
        this.state = {lat: null, long: null, errorMessage:''};

      
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat : position.coords.latitude, long: position.coords.longitude}),
            err      => this.setState({ errorMessage:err.message})
        );
    }
    componentDidUpdate(){
        console.log("My component updated- it  just rerenderd");
    }

    //React says we have to define render
    render(){
        if(this.state.errorMessage && !this.state.lat){
            return(
                <div>Error    : {this.state.errorMessage} </div>
            );
        }
        if(!this.state.errorMessage && this.state.lat){
            return(
                <div> Latitude : {this.state.lat} <br/> Longitude : {this.state.long} </div>
               
            );
        }
        return(
            <div>Loading...! </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);