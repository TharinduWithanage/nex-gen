import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            userName: '',
            eeID: '',
            bu: '',
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
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
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
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {userName: this.state.userName, eeID: this.state.eeID, BU: this.state.BU, contribution: this.state.contribution, 
            joiningDate: this.state.joiningDate, leavingDate: this.state, leaveDate: this.state.leavingDate, location: this.state.location, financialYear: this.state.financialYear};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
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

export default CreateEmployeeComponent
