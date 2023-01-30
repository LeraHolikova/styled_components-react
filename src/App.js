import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const Description = styled.p`
  font-size: 18px;
  color: #333; 
 `;

const Image = styled.img`
 width: 100%;
`;

const Info = styled.p`
font-size: 18px;
font-style: italic;
`;

const Title = styled.h1`
  text-align: center;
  font-family: Courier;
`;

const App = () => (
  <CardContainer>
    <Image src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" />
    <Title>25 Outstanding Scenic Hikes</Title>
    <Description>If hiking for you is all about the breathtaking scenery, try these gorgeous day hikes.</Description>
    <Info>2 hours ago</Info>
  </CardContainer>
);

export default App


