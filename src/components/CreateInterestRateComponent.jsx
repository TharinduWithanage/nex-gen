import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import InterestRateService from '../services/InterestRateService';

class CreateInterestRateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,            
            financialYear: '',
            interestRate: ''
        }
        this.changeFinancialYearHandler = this.changeFinancialYearHandler(this);
        this.changeInterestRateHandler = this.changeInterestRateHandler(this);
        this.saveOrUpdateRates = this.saveOrUpdateRates.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_addRates'){
            return
        }else{
            InterestRateService.getInterestDetailsById(this.state.id).then( (res) =>{
                let interestDetails = res.data;
                this.setState({financialYear: interestDetails.financialYear,
                    interestRate: interestDetails.interestRate

                });
            });
        }        
    }
    saveOrUpdateRates = (e) => {
        e.preventDefault();
        let interestDetails = {financialYear: this.state.financialYear, interestRate: this.state.interestRate};
        console.log('interestDetails => ' + JSON.stringify(interestDetails));

        // step 5
        if(this.state.id === '_addRates'){
            InterestRateService.createInterestDetails(interestDetails).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            InterestRateService.updateInterestDetails(interestDetails, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
        }
    }
    
    changeFinancialYearHandler= (event) => {
    //    this.setState({financialYear: event.target.value})
    }

    changeInterestRateHandler= (event) => {
        // this.setState({ interestRate:event.target.value})
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_addRates'){
            return <h3 className="text-center">Add Interest Rates</h3>
        }else{
            return <h3 className="text-center">Update Interest Rates</h3>
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
                                            <label> Financial Year: </label>
                                            <input placeholder="Financial Year" name="financialYear" className="form-control" 
                                                value={this.state.financialYear} onChange={this.changeFinancialYearHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Interest Rate: </label>
                                            <input placeholder="Interest Rate" name="Interest Rate" className="form-control" 
                                                value={this.state.interestRate} onChange={this.changeInterestRateHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateRates}>Save</button>
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

export default CreateInterestRateComponent
