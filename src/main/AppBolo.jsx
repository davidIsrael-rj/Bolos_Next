import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './AppBolo.css'
import Footer from "@/components/template/Footer";
import Logo from "@/components/template/Logo";
import Main from "@/components/template/Main";
import Nav from "@/components/template/Nav";
import React from "react";

export default props =>
    <div className="appBolo">
        <Logo />
        <Nav />
        <Main icon="home" title="Início"
            subtitle="Bolos feitos com carinhos" />
        <Footer />
    </div>
