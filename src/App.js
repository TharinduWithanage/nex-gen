import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './containers/SideBar';
import AddEmployee from './containers/AddEmployee';

function App() {
  return (
    <div className="App">

      <Router>
        <SideBar />
        <Routes>
          {/* {/* <Route path="/" exact component={} /> */}
          {/* <Route path="#" exact component={} /> / */}
          <Route path="/AddEmployee" component={<AddEmployee />} />
          <Route> 404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
