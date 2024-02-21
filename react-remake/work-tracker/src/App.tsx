import './css/App.css';
import './css/Pages.css';
import Autorizace from './Pages/Autorizace';
import SPEC from './Pages/SPEC';
import Reklamace from './Pages/Reklamace';
import Platby from './Pages/Platby';
import resetLocalStorage from "./components/ResetButton";
import Tabs from "./Tabs";

function App() {
  let component
  switch (window.location.pathname) {
    case "":
      component = <Autorizace />
      break
      case "/Autorizace":
        component = <Autorizace />
        break
        case "/SPEC":
          component = <SPEC />
          break
          case "/Reklamace":
            component = <Reklamace />
            break
            case "/Platby":
              component = <Platby />
              break
  }
  return (
    <>
      <Tabs />
      {component}
        <div className="reset">
          <button onClick={resetLocalStorage}>Reset</button>
        </div>
    </>
  )
}

export default App
