
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path ="/" element = {<Home></Home>}></Route>
        <Route path ="/home" element = {<Home></Home>}></Route>
        <Route path ="review" element = {<Review></Review>}></Route>
        <Route path ="*" element = {<Notfound></Notfound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
