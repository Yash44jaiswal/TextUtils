import React, {useState } from 'react'
import NavBar from './Component/NavBar'
import News from './Component/News'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";



const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0)

  
    return (
      <BrowserRouter>
      <div>
        <NavBar/>
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key={"General"} pageSize={pageSize} category="General"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} key={"Business"} pageSize={pageSize} category="Business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key={"Entertainment"}  pageSize={pageSize} category="Entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress} key={"General"} pageSize={pageSize} category="General"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} key={"Health"} pageSize={pageSize} category="Health"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} key={"Science"}  pageSize={pageSize} category="Science"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} key={"Sports"} pageSize={pageSize} category="Sports"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} key={"Technology"} pageSize={pageSize} category="Technology"/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }

export default App

