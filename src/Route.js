import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloBtn from './HelloBtn'
import Car from "./Car"
import Login from "./Login"
import NoPage from "./NoPage";
function Routee() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/">
          <Route path="/login" element={<Login />} />
          <Route path="/car" element={<Car />} />
          <Route path="/hello" element={<HelloBtn />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
export default Routee;
