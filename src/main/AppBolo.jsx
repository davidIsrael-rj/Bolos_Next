import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './AppBolo.css'
import Footer from "@/components/template/Footer";
import Logo from "@/components/template/Logo";
import Nav from "@/components/template/Nav";
import React from "react";
import Home from '@/components/home/Home';

export default props =>
        <div className="appBolo">
            <Logo />
            <Nav />
            
            <Footer />
        </div>
