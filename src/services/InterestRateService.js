import axios from 'axios';

const INTEREST_RATE_BASE_URL = "http://localhost:8080/api/v1/interestRate";

class InterestRateService {

    getInterestRate(){
        return axios.get(INTEREST_RATE_BASE_URL);
    }

    createInterestDetails(interesrRateDetails){
        return axios.post(INTEREST_RATE_BASE_URL, interesrRateDetails);
    }

    getInterestDetailsById(interestId){
        return axios.get(INTEREST_RATE_BASE_URL + '/' + interestId);
    }

    updateInterestDetails(interestDetails, interestId){
        return axios.put(INTEREST_RATE_BASE_URL + '/' + interestDetails, interestId);
    }

    // deleteEmployee(employeeId){
    //     return axios.delete(INTEREST_RATE_BASE_URLE_URL + '/' + employeeId);
    // }
}

export default new InterestRateService()