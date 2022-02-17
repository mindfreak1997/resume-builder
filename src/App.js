import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router';
import Header from '../src/components/Header'
import PersonalDetails from './components/Personal';
import EducationDetails from './components/Education';
import ProjectDetails from './components/project';
import Skills from './components/skills';
import Extras from './components/extras';
import HomePage from './components/homePage';
import Report from './components/report';
import Report1 from './components/report1';
import Search from './components/Search';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
          <Route path='/personal' element={<PersonalDetails/>}/>
          <Route path='/education' element={<EducationDetails/>}/>
          <Route path='/project' element={<ProjectDetails/>}/>
          <Route path='/skills' element={<Skills/>} />
          <Route path='/extras' element={<Extras/>} />
          <Route path='/report' element={<Report/>}/>
          <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
