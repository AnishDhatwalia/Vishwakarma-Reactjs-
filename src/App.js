import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css';
import {First} from './Components/First';
import {LoadMore} from './Components/LoadMore';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/Vishwakarma-Reactjs-" element={<First/>}/>
        <Route path="/Vishwakarma-Reactjs-/LoadMore" element={<LoadMore/>}  />
        <Route path="*" element={<Navigate to="/Vishwakarma-Reactjs-"/> } replace/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
