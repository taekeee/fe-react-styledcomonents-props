import React from "react";
import styled from "styled-components";

//창의 전체적인 디자인
const BoxEach = styled.div`
display: inline-block;
background-color: gray;
border: solid 3px white;
border-radius: 30px;
margin:15px;
`;

const BoxLink = styled.img`
content:url(${(props) => props.url});
width: 300px;
height: 300px;
border-radius: 30px;
margin:10px;
`;

const BoxTitle = styled.h1`
margin-top:5px;
margin-left: 25px;
margin-bottom: 8px;
font-size: 28px;

`;

const BoxText = styled.p`
margin-top: 0px;
margin-left: 25px;
font-size: 18px;

`;

const BoxButton = styled.p`
text-align: center;
margin-left: 10px;
margin-right: 10px;
background: ${(props) => (props.buttonColor ? props.buttonColor : "black")};
border-radius: 30px;
padding: 10px;
font-size: 18px;
color :white;
`;


const MediaCard = (props) => {
    return(
        <>
            <BoxEach>
                <BoxLink url={props.url}></BoxLink>
                <BoxTitle>{props.title}</BoxTitle>
                <BoxText>{props.text}</BoxText>
                <BoxButton buttonColor={props.buttonColor}>Action</BoxButton>
            </BoxEach>
        </> //jsx는 한 개의 teg만 return받을 수 있으므로, 여러개의 teg를 가져올 시 빈 태그로 묶어줘야한다.
    );

}

export default MediaCard;