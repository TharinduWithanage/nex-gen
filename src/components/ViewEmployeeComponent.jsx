import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee User Name: </label>
                            <div> { this.state.employee.userName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee ID: </label>
                            <div> { this.state.employee.eeID }</div>
                        </div>
                        <div className = "row">
                            <label> Business Unit: </label>
                            <div> { this.state.employee.BU }</div>
                        </div>
                        <div className = "row">
                            <label> Contribution: </label>
                            <div> { this.state.employee.contribution }</div>
                        </div>
                        <div className = "row">
                            <label> Joining Date: </label>
                            <div> { this.state.employee.joiningDate }</div>
                        </div>
                        <div className = "row">
                            <label> Location: </label>
                            <div> { this.state.employee.location }</div>
                        </div>
                        <div className = "row">
                            <label> Financial Year: </label>
                            <div> { this.state.employee.financialYear }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
