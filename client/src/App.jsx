
 import Header from './components/Header/header';
 import SignUp from './components/registration/Signup'
 import SignIn from './components/registration/Signin';
import './App.css'
import './styles/main.scss';
import TaskManager from './pages/taskmanagement/TaskManager';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/home/dashboard/Dashboard';
import Home from './pages/Home/home';

function App() {
  

  return (
   <div>
   
   <Router>
   <Header/>
    <Routes>
      <Route path='/' element = {<Home/>}/> 
      <Route path='/Signin' element = {<SignIn/>}/>
      <Route path='/SignUp' element = {<SignUp/>}/>
      <Route path='/taskmanager' element = {<TaskManager/>}/>
      <Route path='/dashboard' element = {<Dashboard/>}/>
    </Routes>
   </Router>
   </div>
  )
}

export default App
