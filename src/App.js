import './App.scss';
import "./style/Style.scss"
import {Route, Routes} from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Study from "./components/Study/Study";
import Contacts from "./components/Contacts/Contacts";
import Search from "./components/Search/Search"
function App() {
  return (

    <div className="App">

      <Routes>
        <Route path={"/Header"} element={<Header/>}/>
        <Route path={"/Footer"} element={<Footer/>}/>
        <Route path={"/Home"} element={<Home/>}/>
        <Route path={"/About"} element={<About/>}/>
        <Route path={"/Study"} element={<Study/>}/>
        <Route path={"/Contacts"} element={<Contacts/>}/>
        <Route path={"/Search"} element={<Search/>}/>

      </Routes>

    </div>
  );
}

export default App;
