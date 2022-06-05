import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: [{"id":":id","userName":"dilhani","eeID":"1234","bu":"SRG","contribution":"5000",
                "joiningDate":"2022-06-05","leavingDate":"2024-06-11","location":"LK02","financialYear":"2022"}]
        }
        
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
       
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

    

    render() {
        return (
            <div>
                 <h2 className="text-center">Employees List</h2>
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
                                             <td> {employee.financialYear} </td>   
                                             <td> {employee.eeID}</td>
                                             <td> {employee.userName}</td>
                                             <td> {employee.joiningDate}</td>
                                             <td> {employee.leaveDate}</td>
                                             <td> {employee.location}</td>
                                             <td> {employee.bu}</td>
                                             <td> {"23000"}</td>
                                             <td> {"800"}</td> 
                                             <td> {"5000"}</td>
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
