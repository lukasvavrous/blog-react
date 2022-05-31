import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    background: rgba(150, 150, 150, 0.3);    
    width: 75vw;
    text-align: center;

    overflow-y: scroll;

    height:100%;
    height: 91vh;    
`

const Narrower = ({ children }) => (
    <Container>
        {children}
    </Container>
)


export default Narrower;