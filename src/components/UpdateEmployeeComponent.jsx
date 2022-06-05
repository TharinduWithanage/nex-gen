import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            userName: '',
            eeID: '',
            BU: '',
            contribution: '',
            joiningDate: '',
            leavingDate: 'null',
            location: '',
            financialYear: ''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeEEIDHandler = this.changeEEIDHandler.bind(this);
        this.changeBUHandler = this.changeBUHandler.bind(this);
        this.changeContibutionHandler = this.changeContibutionHandler.bind(this);
        this.changeJoningDateHandler = this.changeJoningDateHandler.bind(this);
        this.changeLeavingDateHandler = this.changeLeavingDateHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.changeFinancialYearHandler = this.changeFinancialYearHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({userName: employee.userName,
                eeID: employee.eeID,
                bu: employee.bu,
                contribution: employee.contribution,
                joiningDate: employee.joiningDate,
                leavingDate: employee.leavingDate,
                location: employee.location,
                financialYear: employee.financialYear     
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {userName: this.state.userName, eeID: this.state.eeID, bu: this.state.bu, contribution: this.state.contribution, 
            joiningDate: this.state.joiningDate, leavingDate: this.state, leaveDate: this.state.leavingDate, location: this.state.location, financialYear: this.state.financialYear};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeUserNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }

    changeEEIDHandler= (event) => {
        this.setState({eeID: event.target.value})
    }

    changeBUHandler= (event) => {
        this.setState({bu: event.target.value})
    }

    changeContibutionHandler= (event) => {
        this.setState({contibution: event.target.value})
    }

    changeJoningDateHandler= (event) => {
        this.setState({joningDate: event.target.value})
    }

    changeLeavingDateHandler= (event) => {
        this.setState({leavingDate:event.target.value})
    }

    changeLocationHandler= (event) => {
        this.setState({location:event.target.value})
    }

    changeFinancialYearHandler= (event) => {
        this.setState({financialYear:event.target.value})
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> User Name: </label>
                                            <input placeholder="User Name" name="userName" className="form-control" 
                                                value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Employee ID: </label>
                                            <input placeholder="Employee ID" name="eeID" className="form-control" 
                                                value={this.state.eeID} onChange={this.changeEEIDHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Business Unit: </label>
                                            <input placeholder="Business Unit" name="BU" className="form-control" 
                                                value={this.state.bu} onChange={this.changeBUHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Contribution: </label>
                                            <input placeholder="Contribution" name=" contribution" className="form-control" 
                                                value={this.state.contribution} onChange={this.changeContibutionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Joining Date: </label>
                                            <input placeholder="DD/MM/YY" name="joiningDate" className="form-control" 
                                                value={this.state.joiningDate} onChange={this.changeJoningDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Leaving Date: </label>
                                            <input placeholder="DD/MM/YY" name="leavingDate" className="form-control" 
                                                value={this.state.leavingDate} onChange={this.changeLeavingDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Location: </label>
                                            <input placeholder="Location" name="location" className="form-control" 
                                                value={this.state.location} onChange={this.changeLocationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>FY: </label>
                                            <input placeholder=" FinancialYear " name="financialYear" className="form-control" 
                                                value={this.state.financialYear} onChange={this.changeFinancialYearHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
