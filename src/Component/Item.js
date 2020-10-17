import React from 'react'
import styled from 'styled-components'

export const Item = (props) => {
    return(
        <ItemDiv>
            <Title>{props.title}</Title>
            <Content>{props.content}</Content>
            <Date>{props.date}</Date>
        </ItemDiv>
    )
}

const ItemDiv = styled.div`
width: 80%;
margin: auto;
display: flex;
justify-content: space-between;
`;

const Title = styled.div`
text-align: center;
width:30%;
`
const Content = styled.div`
text-align: center;
width: 50%;

`
const Date = styled.div`
text-align: center;
width: 26%;
`
