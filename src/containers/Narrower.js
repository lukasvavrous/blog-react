import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    background: rgba(150, 150, 150, 0.3);    
    width: 75vw;
    text-align: center;

    height: 90vh;
    overflow-y: hidden;
`

const Narrower = ({ children }) => (
    <Container>
        {children}
    </Container>
)


export default Narrower;