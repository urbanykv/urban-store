import React, { useState } from "react";
import './header.css'
import Carrinho from "../carrinho/script";
import Perfil from "../perfil/script";

const Header = () => {

    const [header, setHeader] = useState('header');

    window.addEventListener('scroll', () => {
        if(window.scrollY !== 0){
            setHeader('headerFixed')
        }else{
            setHeader('header')
        }
    })

    return(
        <header className={header}>
                <img src="assets/logo-urban-store.png" alt="Logo Urban Store" id="logo-urban-store"/>
            <section className="perfil-options">
                <Perfil/>
                <Carrinho/>
            </section>
        </header>
    )
}

export default Header