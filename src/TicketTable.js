import React from 'react'

const TicketTable = (props) =>{

 //     console.log(props) 

    return (
        <div>
        <table border="1">
        <thead>
          <tr> 
            <th> Code </th>  
            <th> Name </th>
            <th> Department </th>
            <th> Priority </th>
            <th> Message </th>
            <th> Status </th> 
          </tr>
        </thead>

        <tbody>
        {
          props.tickets.map(ticket =>{
            return (
              <tr key ={ticket.ticket_code}>
                <td> { ticket.ticket_code } </td>
                <td> { ticket.name } </td>
                <td> { ticket.department  }</td>
                <td> { ticket.priority }</td>
                <td> { ticket.message }</td>
                <td> { ticket.status }</td>
               </tr>

            )
          })
        }
        </tbody>
      </table>
        </div>
    )


    

}

export default TicketTable