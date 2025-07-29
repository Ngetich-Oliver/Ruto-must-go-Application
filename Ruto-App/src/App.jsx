import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Kasongo from "./Kasongo";  
import Murder from "./Murder";  
import AbuseOffice  from "./AbuseOffice";     
import FLying  from "./FLying";


function App() {
return(
<Router>
  <Routes>
    <Route path="/Kasongo" element={<Kasongo/>}></Route>
    <Route path="/Murder" element={<Murder/>}></Route>
    <Route path="/AbuseOffice" element={<AbuseOffice/>}> </Route>
    <Route path="/FLying" element={<FLying/>}> </Route>
   
  </Routes>
</Router>
);

}

export default App;
