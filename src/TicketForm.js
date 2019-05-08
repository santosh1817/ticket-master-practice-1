import React,{ Component } from 'react'

class TicketForm extends Component{
    render(){
        return(
            <div>
                <form>
                    <label>
                        Name <br/>
                        <input type="text" />
                    </label> <br/>

                    <label>
                        Department <br/>
                        < select>
                            <option value=""> Select </option>
                            <option value="technical"> Technical </option>
                            <option value="sales"> Sales </option>
                            <option value="hr"> HR </option> 
                        </select>
                    </label> <br/>

                    <label>
                        Priority <br/>
                        <select>
                            <option value=""> Select </option>
                            <option value="high"> High </option>
                            <option value="medium"> Medium </option>
                            <option value="low"> Low </option>
                        </select>
                    </label> <br/>

                    <label>
                        Message <br/>
                        <textarea> </textarea>

                    </label> <br/>

                    <input type="submit" value="Add ticket" /> 
                
                </form>
            </div>
        )
    }
}

export default TicketForm 