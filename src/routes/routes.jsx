import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import DisbursementPage from "../components/Disbursement/Disbursement.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "desembolsos",
        element: <DisbursementPage/>,  
    }
]);
