import React,{ Component } from 'react'
import axios from 'axios'
class TicketForm extends Component{
    constructor(props){
        super(props)

        this.state={
            name : "",
            department : "",
            priority : "",
            message : "",
            notice : ""

        }
    }
    // handleNameChange=(e)=>{
    //   //  console.log(e.target.value)
    //   const name=e.target.value
    //   this.setState(()=>({
    //         name : name 
    //   }))
    // }

    //   handleDeptChange=(e)=>{
    //       const department = e.target.value
    //       this.setState(()=>({
    //         department
    //       }))

    //   }

    //   handlePriorityChange=(e)=>{
    //       const priority = e.target.value
    //       this.setState(()=>({
    //             priority
    //       }))
    //   }
    //   handleMessageChange=(e)=>{
    //       const message=e.target.value 
    //       this.setState(()=>({
    //             message 
    //       }))
    //   }

      handleChange=(e)=>{
          e.persist()
          this.setState(()=>({
            [e.target.name] : e.target.value   
          }))
      }

      handleSubmit=(e)=>{
          e.preventDefault() 
          const formData={
              name : this.state.name,
              department : this.state.department,
              priority : this.state.priority,
              message : this.state.message,
              notice : ''
          }

          //api post 
          axios.post(`http://dct-api-data.herokuapp.com/tickets?api_key=380d174098e8f3b4`,formData)
            .then(response=>{

                //console.log(response.data)
                this.props.handleSubmit(response.data)

                this.setState(()=>({
                    name:'',department:'',priority : '',message:'',
                    notice : 'successfully created ticket' 

                }))

                setTimeout(()=>{
                    this.setState(()=>({
                        notice : ''
                    }))

                },2000)
                
            })
            .catch(err=>{
                console.log(err)
            })

      }

    
    render(){
        return(
            <div>
                {this.state.notice && <p> { this.state.notice } </p>}
                <h2> Add Ticket </h2>
                <form onSubmit={ this.handleSubmit }> 
                    <label>
                        Name <br/>
                        <input type="text"  value ={this.state.name} onChange={ this.handleChange } name="name"/>
                    </label> <br/>

                    <label>
                        Department <br/>
                        < select value={this.state.department} onChange={this.handleChange} name ="department">
                            <option value=""> Select </option>
                            <option value="technical"  > Technical </option>
                            <option value="sales"> Sales </option>
                            <option value="hr"> HR </option> 
                        </select>
                    </label> <br/>

                    <label>
                        Priority <br/>
                        <select value ={this.state.priority} onChange={this.handleChange} name ="priority"> 
                            <option value=""> Select </option>
                            <option value="high"> High </option>
                            <option value="medium"> Medium </option>
                            <option value="low"> Low </option>
                        </select>
                    </label> <br/>

                    <label>
                        Message <br/>
                        <textarea value={this.state.message} onChange={this.handleChange} name ="message"> 

                        </textarea>

                    </label> <br/>

                    <input type="submit" value="Add ticket" /> 
                
                </form>
            </div>
        )
    }
}

export default TicketForm 