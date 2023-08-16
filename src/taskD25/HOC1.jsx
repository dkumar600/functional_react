import { useState } from "react";
import LoggedOut from "./Loggedout";

import { BrowserRouter,Route,Routes } from "react-router-dom";
import LoggedIn from "./LoogedIn";

const HOC1 = () => {
    const [status] = useState(JSON.parse(localStorage.getItem("Status")) ? JSON.parse(localStorage.getItem("Status")):{});
    return(
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoggedOut/>}/>
          <Route exact path="/LoggedIn" element={<LoggedIn/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default HOC1;