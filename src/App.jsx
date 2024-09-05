import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"

function App() {
    const name ="Adit"
  
    return (
      <BrowserRouter>
      <Routes>
        {/* <Route path= '/' element={<h1> THis is home page...</h1>} /> */}
        {/* <Route path='/about' element= {<h1>THis  is about page</h1>} /> */}
        {/* <Route path='/contact' element= {<h1>This is contact page.</h1>} /> */}
        <Route path= '/email' element= {<h2>This is just the beginning...</h2>} />
        <Route path='/home' element={<Home />} />
    

        
      </Routes>
      </BrowserRouter>
      // <div>
      //   <h1> Hello {name}</h1>
      //   <h2>Hi Don {1+2}</h2>
      //   <h1>Bye World</h1>
      // </div>
        
    )
  }
  
  export default App
  