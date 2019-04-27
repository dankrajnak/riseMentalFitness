// @flow
import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import microphone from "../Images/microphone.svg";
import getMoods from "../Service/MoodService";

const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${props => props.backgroundColor || "#eee"};
  transition: background 1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const MicrophoneSvg = styled.img`
  width: 40px;
  height: 40px;
`;

type Props = {
  id: string
};

const DraggableCircle = (props: Props) => {
  return (
    <Draggable draggableId={props.id} index={0}>
      {(provided, snapshot) => (
        <Circle
          backgroundColor={
            snapshot.draggingOver &&
            getMoods()[snapshot.draggingOver] &&
            getMoods()[snapshot.draggingOver].color
          }
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <MicrophoneSvg src={microphone} alt="logo" />{" "}
        </Circle>
      )}
    </Draggable>
  );
};

export default DraggableCircle;
