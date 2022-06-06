import React, { useState } from "react";
import styled from "styled-components";
import { EditText, EditTextarea } from 'react-edit-text';
import { editPost, deletePost } from "../services/UserService";
import { Link } from "react-router-dom";
import { store } from "../app/store";
import {Card,Button, Container} from "react-bootstrap"


const Post = (props) => {           
    const getCanBeEdited = () => {
        let undefinedAuthor = props.data.author == undefined;
        let isSameName = props.data.author == store.getState().loged.user.name;

        console.log(undefinedAuthor, isSameName);
        let canEdit = undefinedAuthor || isSameName;                
        return canEdit;
    }
    
    const [canEdit, setCanEdit] = useState(() => getCanBeEdited())
    const [isReaonly, setIsReaonly] = useState(true)     
    const [isEdited, setIsEdited] = useState(false)     

    const [title, setTitle] = useState(props.data.title)     
    const [content, setContent] = useState(props.data.content)        
    

    const makeEditable = () => {   
        setIsReaonly(!isReaonly)

        console.log("now: ",isReaonly)
    }

    const onSaveHandler = async ({name, value}) =>{                        
        let success = await editPost(props.data._id, name, value);
        console.log(success, isEdited);
        setIsEdited(success);
    }
    
    const removePost = async () => {
        let res = await deletePost(props.data._id);
        props.refetch();
        console.log(props)            
    }

    return (
        <Container>

<Card className="mt-3 text-center" style={!isReaonly ? {color: 'rgba(10,10,255,0.6)'} : {}}>

            
            { canEdit &&
            <StyledFunctionalBox>
                <StyledButtonEdit onClick={makeEditable} className={!isReaonly ? 'activeButton' : ''}>E</StyledButtonEdit>
                <StyledButtonDelete onClick={removePost}>X</StyledButtonDelete>
            </StyledFunctionalBox>
            }
            <EditText name="title" onChange={(x) => setTitle(x)} defaultValue={props.data.title} onSave={onSaveHandler} readonly={isReaonly}></EditText>                
            <StyledEditTextarea name="content" onChange={(x) => setContent(x)} defaultValue={props.data.content} onSave={onSaveHandler} readonly={isReaonly}></StyledEditTextarea>
            <StyledLink to={`/posts/${props.data.author}`}>{props.data.author}</StyledLink>
            </Card>

        </Container>

    );
}    

const StyledFunctionalBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

`

const StyledPostElement = styled.div`    
    display:flex;
    flex-direction:column;

    background: rgba(150, 150, 150, 0.3);
    
    border: 1px solid rgba(150, 150, 150, 1);;
    padding: 5px;
    margin: 10px;    
    min-height: 10vh;    

    a{
        align-self:flex-start;
        color: blue;
    }

    .editing{
        color: rgba(0, 0, 0, 0.5);
    }
`

const StyledButtonEdit = styled.button`
    align-self: flex-end;

    border: 1px solid black;
    background-color: rgba(255,255,255,0.4);
    padding: 5px;
    margin: 5px;

    .activeButton{
        background-color: red;
    }
`

const StyledButtonDelete = styled.button`
    align-self: flex-start;

    border: 1px solid black;
    background-color: rgba(255,255,255,0.4);
    padding: 5px;
    margin: 5px;

    .activeButton{
        background-color: red;
    }
`

const StyledLink = styled(Link) `
    margin-top: auto !important;
`

const StyledEditTextarea = styled(EditTextarea) `
    height: auto !important;
`
export default Post;