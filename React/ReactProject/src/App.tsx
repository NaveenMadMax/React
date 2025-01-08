import './App.css';
import Home from  './Components/pages/Home'
import Products from './Components/pages/Products'
import AboutUs from './Components/pages/AboutUs'
import FillForm from './Components/pages/FillForm'
import {Routes, Route} from 'react-router-dom'
import Task1 from './Components/Task1/Task1'
import Task2 from './Components/Task2/task2'
import Task3 from './Components/Task3/task3'
import Task4 from './Components/Task4/task4'
import Task5 from './Components/Task5/task5'
import Task6 from './Components/Task6/task6'
import Task7 from './Components/Task7/task7'
import Task8 from './Components/Task8/task8'
import Task9 from './Components/Task9/task9'
import Task10 from './Components/Task10/task10'
import Task13 from './Components/Task13/task13'

const App= () => {
  return (
    <div>
      <Task13/>
      <Routes >
        <Route path="/home" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/fillform" element={<FillForm/>} />
        <Route path="/task1" element={<Task1/>} />
        <Route path="/task2" element={<Task2/>} />
        <Route path="/task3" element={<Task3/>} />
        <Route path="/task4" element={<Task4/>} />
        <Route path="/task5" element={<Task5/>} />
        <Route path="/task6" element={<Task6/>} />
        <Route path="/task7" element={<Task7/>} />
        <Route path="/task8" element={<Task8/>} />
        <Route path="/task9" element={<Task9/>} />
        <Route path="/task10" element={<Task10/>} />
      </Routes>
    </div>
  );
}
export default App;