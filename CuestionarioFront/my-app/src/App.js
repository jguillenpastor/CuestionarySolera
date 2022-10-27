
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import SingUp from './Pages/SingUp';
import Questions from './Pages/Questions';
import Completed from "./Pages/Completed";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SingUp/>}/>
      <Route path="/questions" element={<Questions/>}/>
      <Route path="/formcompleted" element={<Completed/>}/>
    </Routes>
  </Router>
  );
}

export default App;
