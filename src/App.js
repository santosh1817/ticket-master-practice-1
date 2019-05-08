import React,{ Component } from 'react';
import axios from 'axios'

import TicketTable from './TicketTable'
import TicketForm from './TicketForm'

class  App extends Component{
  constructor(){
    super()

    this.state = {
      tickets : []
    }
  }
  componentDidMount(){

    
    axios.get(`http://dct-api-data.herokuapp.com/tickets?api_key=380d174098e8f3b4`)
      .then(response=>{
        this.setState(()=>({
          tickets : response.data 
        }))
      })
      .catch(err=> console.log(err) 
      )

      

  }


  render(){
  return (
    <div>
      <h1> Ticket Master </h1>

     
      <h2> Listing tickets -- { this.state.tickets.length }</h2>

      <h3> Open tickets </h3>
      <TicketTable tickets={ this.state.tickets.filter((ticket)=>ticket.status==='open') } />

      < TicketForm /> 
      
      <h3> Close tickets </h3> 
      <TicketTable tickets={ this.state.tickets.filter((ticket)=>ticket.status==='close') } />

      < TicketForm /> 
      

    </div>
  )
} 

}

export default App;
