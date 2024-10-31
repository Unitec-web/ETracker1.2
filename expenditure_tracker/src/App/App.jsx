import { Route, Routes } from 'react-router-dom';
import '../styles.css';
import WelcomePage1 from '../Pages/welcome-page/WelcomePage1';
import Login from '../Pages/login-page/Login';
import SignUp from '../Pages/signup-page/SignUp';
import WelcomePage2 from '../Pages/welcome-page/welcomePage2';
import { EtrackerAuth } from '../context/context';
import Total from '../Pages/total/Total';
import Notes from '../Pages/Note/Notes';
import Expenditure from '../Pages/expenditure/Expenditure';
function App() {
  return (
    
    <Routes>
    
      <Route  path="/" element={<WelcomePage1 />} />
      <Route path="/welcomepage2" element={<WelcomePage2 />} />
     
      <Route path='/login' element={<EtrackerAuth> <Login /></EtrackerAuth>} />
      <Route path='/register' element={<EtrackerAuth><SignUp /></EtrackerAuth>} />
      {/* Nav bar routes */}
      <Route path='/homepage' element={<EtrackerAuth><Expenditure /></EtrackerAuth>}/>
      <Route path='/note' element={<Notes />} />
      <Route path='/total' element={<Total/>} />
    </Routes>
  
  );
}

export default App;
