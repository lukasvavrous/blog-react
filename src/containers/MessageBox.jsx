import styled, { css } from 'styled-components'

const Container = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;  
    justify-content: flex-start;    
    overflow-y: scroll;  
`

const KeepDown = styled.div`    
    flex-direction:column;  
    display: flex;
    width: 100%;
`

const StyledMessage = styled.p`
    font-size: large;
    padding: 10px;
    margin: 1rem 1rem 0 1rem ;
    background-color: ${props => props.isMyMessage ? 'rgba(158, 155, 204, 0.705)' : 'rgba(47, 33, 236, 0.705)' };
    border-radius: 15px;
    align-self: ${props => props.isMyMessage ? "flex-start" : "flex-end"};
`

const StyledAuthor = styled.p`        
    font-size: small;    
    margin: 0 2em;        
    color: rgba(231, 230, 238, 0.705);
    align-self: ${props => props.isMyMessage ? "flex-start" : "flex-end"};
`

function ChatMessage(props){             
    return (
        <>
        <StyledMessage isMyMessage={props.isMyMessage}>{props.text}</StyledMessage> 
        <StyledAuthor isMyMessage={props.isMyMessage}>{props.author}</StyledAuthor>
        </>
    )
}

function MessageBox(props){    
    return(
        <Container>
            <KeepDown>
                {props.messages && props.messages.map(msg => <ChatMessage key={msg.id} text={msg.content} author={msg.sender} isMyMessage={msg.sender == props.currentUser}/>)}
            </KeepDown>    
        </Container>
    )
}

export default MessageBox;