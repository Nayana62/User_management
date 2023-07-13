import './App.css';
import AddUser from './pages/AddUser';
import Dashboard from './pages/Dashboard';
import UpdateUser from './pages/UpdateUser';
import UserDetails from './pages/UserDetails';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/users' element={<AddUser/>}/>
        <Route path='/users/update/:id' element={<UpdateUser/>}/>
        <Route path='/users/:id' element={<UserDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
