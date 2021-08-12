import './App.css';
import 'antd/dist/antd.css';
import {HashRouter, Route} from "react-router-dom";
import {Portfolio} from "./component/Portfolio";
import {Header} from "./component/Header";
import {NavBar} from "./component/NavBar";
import {Footer} from "./component/Footer";



function App() {
  return (
      <div className="body">
          <Header/>
          <NavBar/>
          <Footer/>

      </div>



  )

}
export default App;
