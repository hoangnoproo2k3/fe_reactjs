import './App.scss';
import Header from './components/Header/header';
import { Outlet, NavLink } from "react-router-dom";

// import './components/Header/Header'
const App = () => {

  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />

      </div>
      <div className='main-container'>
        <div className='sidenav-container'>

        </div>
        <div className='app-content'>
          <Outlet></Outlet>
        </div>
      </div>

    </div>
  );
}

export default App;
