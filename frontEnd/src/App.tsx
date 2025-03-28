import Home from "./pages/Home"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {


  return (
    <div className="bg-white text-gray-900 w-full flex justify-center ">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/*" element={<Home />}></Route>

        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App
