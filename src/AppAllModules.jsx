import { RouterProvider } from "react-router-dom";
import Footer from "./share/footer/components/Footer";

//FIC: import for redux
import { GET_DATA_START } from "./security/redux/thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

 import Router from "./navigation/NaviRoutesSecurity.jsx";
// import  Router from "./navigation/NaviRoutesEducation";
// import  Router from "./navigation/NaviRoutesCommerce";

export default function AppAllModules() {
    // //FIC: objeto para heredar clase de dispath de redux.
    const dispatch = useDispatch();
    //FIC: para que solo entre la primera vez a cargar la data.
    useEffect(() => {
        dispatch(GET_DATA_START()).then(() => {
            // setLoading(false);
            console.log("<<END-DISPATCH>>: GET_DATA_START se ejecuto de forma correcta");
        });
    }, []);
    return (
        <>
            <div id='div-app'>
                {/* <h1>Main App - All Modules</h1> */}
                <RouterProvider router={Router} />
                <div id='div-footer'>
                    <Footer />
                </div>
            </div>
        </>
    );
}