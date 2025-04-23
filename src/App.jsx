import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppNavbar from "./components/AppNavbar.jsx";
import ApplicationBody from "./components/ApplicationBody.jsx";
import AddListButton from "./components/AddListButton.jsx";
import './App.css'

function App() {


      return (
          <div className="min-h-screen bg-gray-100 dark:bg-gray-700">

                  <AppNavbar></AppNavbar>
                  <ApplicationBody></ApplicationBody>
                  <AddListButton></AddListButton>

          </div>

      )
}

export default App
