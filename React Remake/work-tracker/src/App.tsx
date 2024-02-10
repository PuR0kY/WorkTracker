import { useState } from 'react'
import Tabs from "./Tabs";
import './App.css'
import Autorizace from './Pages/Autorizace';
import SPEC from './Pages/SPEC';
import Reklamace from './Pages/Reklamace';
import Platby from './Pages/Platby';

function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = App
      break
      case "/Autorizace":
        Component = Autorizace
        break
        case "/SPEC":
          Component = SPEC
          break
          case "/Reklamace":
            Component = Reklamace
            break
            case "/Platby":
              Component = Platby
              break
  }
  return (
    <>
      <Tabs />
    </>
  )
}

export default App
