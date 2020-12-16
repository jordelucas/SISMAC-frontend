import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    text-align: center;
    padding: 1rem 0;
    border-top: 1px solid #333;
`

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <p>&copy; SISBARBER 2020. Todos os direitos reservados</p>
        </StyledFooter>  
    )
}

export default Footer;