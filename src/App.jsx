import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppNavbar from "./components/AppNavbar.jsx";
import ApplicationBody from "./components/ApplicationBody.jsx";
import './App.css'

function App() {


      return (
          <>
              <AppNavbar></AppNavbar>
              <ApplicationBody></ApplicationBody>
          </>
      )
}

export default App
