import './css/App.css'
import './css/Pages.css'
import Autorizace from './Pages/Autorizace';
import SPEC from './Pages/SPEC';
import Reklamace from './Pages/Reklamace';
import Platby from './Pages/Platby';
import resetLocalStorage from "./components/ResetButton";
import CreateFile from "./components/FileSaver";

function App() {

  return (
    <>
      <nav className="nav">
        <a className="site-title">
          Work Tracker
        </a>
        <div className="export">
          {CreateFile()}
        </div>
      </nav>
      <div className='pages-container'>
        <div className='Autorizace-component'>
          <Autorizace/>
        </div>
        <div className='SPEC-component'>
          <SPEC />
        </div>
        <div className='Reklamace-component'>
          <Reklamace />
        </div>
        <div className='Platby-component'>
          <Platby />
        </div>
      </div>
        <div className="reset">
          <button onClick={resetLocalStorage}>Reset</button>
        </div>
    </>
  )
}

export default App
