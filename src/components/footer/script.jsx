import React from "react";
import './footer.css'
import github from '../../icons/github.svg'
import linkedin from '../../icons/linkedin.svg'
import portfolio from '../../icons/portfolio.png'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="redes">
                <p>Contate-nos.</p>
                <nav className="nav-redes">
                    <a href="https://www.linkedin.com/in/urbanykv/" target="_blank">
                        <img src={linkedin} alt="LinkedIn Logo" />
                    </a>
                    <a href="https://github.com/urbanykv" target="_blank">
                        <img src={github} alt="GitHub Logo" />
                    </a>
                    <a href="https://portfolio-matheusurban.vercel.app/" target="_blank">
                        <img src={portfolio} alt="Portfólio Logo" />
                    </a>
                </nav>
            </div>
            <hr/>
            <div className="informacoes-footer">
                <p>
                    2023 Matheus Urban. Todos os direitos reservados. Urban Store Comércio de Produtos Esportivos Ltda - CNPJ: 12.345.678/9101-23
                </p>
                <p>
                    Avenida das Flores, S/N Km 901.5 - Galpão Modulo 1234 - CEP 12345-678 - Cidadela do Sol - MU
                </p>
            </div>
        </footer>
    )
}

export default Footer;