import { Outlet } from "react-router-dom"

import Footer from "./Shared/Footer/Footer"
import NavigationBar from "./Shared/NavigationBar/NavigationBar"


function App() {


  return (
      <div>
        
        <NavigationBar></NavigationBar>

        <Outlet></Outlet>

        <Footer></Footer>
      </div>
  )
}

export default App
