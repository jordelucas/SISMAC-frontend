import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    text-align: center;
    padding: 10px 0;
    border-top: 1px solid #333;
`

function Footer() {
    return (
        <StyledFooter>
            <p>&copy; SISMAC 2020. Todos os direitos reservados</p>
        </StyledFooter>  
    )
}

export default Footer;