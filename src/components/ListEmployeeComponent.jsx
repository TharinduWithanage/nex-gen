import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.addRates = this.addRates.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    addRates(){
        this.props.history.push('/add-interest-details/_addRates');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                    <div className = "button">
                        <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                    </div>
                    <div className = "button">
                        <button className="btn btn-primary" onClick={this.addRates}> Add Rates</button>
                    </div>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Financial Year</th>
                                    <th> Employee ID</th>
                                    <th> Employee User Name</th>
                                    <th> Date of Joining</th>
                                    <th> Date of Leaving</th>
                                    <th> Location</th>
                                    <th> BG</th>
                                    <th> Total Contribution</th>
                                    <th> Total Simple Interest</th>
                                    <th> Total Compound Interest</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.financialYear} </td>   
                                             <td> {employee.eeID}</td>
                                             <td> {employee.joiningDate}</td>
                                             <td> {employee.leaveDate}</td>
                                             <td> {employee.location}</td>
                                             <td> {employee.bu}</td>
                                             <td> {employee.joiningDate}</td>
                                             <td> {employee.joiningDate}</td> 
                                             <td> {employee.joiningDate}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent
