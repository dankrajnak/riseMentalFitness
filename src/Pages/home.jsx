// @flow
import React, { useState } from "react";
import styled from "styled-components";
import {
  DragDropContext,
  Droppable,
  type OnDragEndResponder
} from "react-beautiful-dnd";
import useFullScreen from "../Hooks/useFullScreen";
import DraggableCircle from "../UI/DraggableCircle.jsx";
import getMoods, { getMoodsArray, type Mood } from "../Service/MoodService";
import MoodLabel from "../UI/MoodLabel.jsx";

const fullScreenPadding = 80;
const FullScreenContainer = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height - fullScreenPadding * 2}px;
  background: ${props => props.background || "#222"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: ${fullScreenPadding}px;
  padding-bottom: ${fullScreenPadding}px;
  transition: background 1s ease;
`;

const firstHalfMoods: Mood[] = getMoodsArray().slice(
  0,
  Math.floor(getMoodsArray().length / 2)
);
const secondHalfMoods: Mood[] = getMoodsArray().slice(
  Math.floor(getMoodsArray().length / 2)
);
const Home = () => {
  const [width, height] = useFullScreen();
  const [moodId: ?string, setMood] = useState(null);

  return (
    <FullScreenContainer
      width={width}
      height={height}
      background={moodId && getMoods()[moodId] && getMoods()[moodId].color}
    >
      {(!moodId || moodId === "home") && (
        <DragDropContext
          onDragEnd={result =>
            setMood(result.destination && result.destination.droppableId)
          }
        >
          {firstHalfMoods.map(mood => (
            <MoodLabel key={mood.label} mood={mood} />
          ))}
          <Droppable droppableId="home">
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {provided.placeholder}
                <DraggableCircle id={"mainCircle"} />
              </div>
            )}
          </Droppable>
          {secondHalfMoods.map(mood => (
            <MoodLabel key={mood.label} mood={mood} />
          ))}
        </DragDropContext>
      )}
      <div>
        Icons made by{" "}
        <a
          href="https://www.freepik.com/?__hstc=57440181.eccc5b639ce6ca892ed50493964a9634.1556395405810.1556395405810.1556395405810.1&__hssc=57440181.1.1556395405811&__hsfp=3475968847"
          title="Freepik"
        >
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        is licensed by{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >
          CC 3.0 BY
        </a>
      </div>
    </FullScreenContainer>
  );
};

export default Home;
