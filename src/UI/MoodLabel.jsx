// @flow
import React, { type Node } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import { type Mood } from "../Service/MoodService";

const Label = styled.div`
  color: ${props => props.color};
  font-weight: bold;
`;

const DropContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  width: 80px;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

type Props = {
  mood: Mood,
  children?: Node
};
const MoodLabel = (props: Props) => {
  return (
    <Droppable droppableId={props.mood.label}>
      {provided => (
        <DropContainer ref={provided.innerRef}>
          <ContentContainer>{props.children}</ContentContainer>
          <Label color={props.mood.color}>
            {props.mood.label.toLocaleUpperCase()}
          </Label>
        </DropContainer>
      )}
    </Droppable>
  );
};

export default MoodLabel;
