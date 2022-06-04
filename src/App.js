import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './containers/SideBar';

function App() {
  return (
    <div className="App">

      <Router>
        <SideBar />
        <Routes>
          {/* <Route path="/" exact component={} />
          <Route path="#" exact component={} /> */}
          <Route> 404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
