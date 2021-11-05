import React from "react";
import PageTemplate from "../components/PageTemplate";
import login from "../services/login";

const HomePage = () => {
    console.log(login())
    return (
        <PageTemplate pageTitle="Home page"/>
    )
}

export default HomePage;