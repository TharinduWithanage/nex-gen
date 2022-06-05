import axios from 'axios';

const INTEREST_RATE_BASE_URL = "http://localhost:8080/api/v1/interestRate";

class InterestRateService {

    getInterestRate(){
        return axios.get(INTEREST_RATE_BASE_URL);
    }

    createInterestDetails(interesrRateDetails){
        return axios.post(INTEREST_RATE_BASE_URL, interesrRateDetails);
    }

    getInterestDetailsById(financialYear){
        return axios.get(INTEREST_RATE_BASE_URL + '/' + financialYear);
    }

    updateInterestDetails(financialYear, interestRate){
        return axios.put(INTEREST_RATE_BASE_URL + '/' + financialYear, interestRate);
    }

    // deleteEmployee(employeeId){
    //     return axios.delete(INTEREST_RATE_BASE_URLE_URL + '/' + employeeId);
    // }
}

export default new InterestRateService()