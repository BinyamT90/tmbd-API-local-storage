import React from 'react'
import {MainBody} from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {createTheme, MuiThemeProvider} from "@material-ui/core";

const theme = createTheme({
    typography: {

        fontFamily: "Shippori Mincho B1",
        button: {
            fontFamily: "Shippori Mincho B1",
            fontStyle: 'normal',
            fontWeight: 'normal',
            textDecoration: 'none',
        },
    }
});

function App() {

    return (
        <MuiThemeProvider theme={theme}>
            <Navbar/>
            <MainBody/>
            <Footer/>
        </MuiThemeProvider>
    );
}

export default App;
