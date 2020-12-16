import React from 'react'

import { StyledNavbar } from './styles';

const Navbar: React.FC = () => {
    return (
        <StyledNavbar>
            <span className="brand">SISBARBER</span>
          
            <div className="user-info">
                <div className="welcome">
                    <small>Bem-vindo(a)</small>
                    <strong>Jordevá L.</strong>
                </div>
            
                <img 
                    src="https://avatars2.githubusercontent.com/u/33496399?s=460&u=ba659f521711486b87e6f5e9ea7f19b770c7fa0c&v=4"
                    alt="Foto do perfil"
                />
            </div>
        </StyledNavbar>  
    )
}

export default Navbar;