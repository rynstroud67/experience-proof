import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavigationComponent from '../components/navigation';
import MuiAlert from '@mui/lab/Alert';
import HomeComponent from "../components/home";
import ProgrammingComponent from "../components/programming";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const RouterConfig = () => {
    return (
        <Router>
            <NavigationComponent />
            <Routes>
                <Route path='/experience-proof' element={HomeComponent()}/>
                <Route path='/experience-proof/programming' element={ProgrammingComponent()}/>
            </Routes>
        </Router>
    ) 
}