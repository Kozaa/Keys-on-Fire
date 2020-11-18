import React from "react";
import styled from "styled-components";
import Letter from "./Letter";

const StyledWrapper = styled.div`
  width: 60%;
  position: relative;
`;

const data = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat, neque enim cumque ipsa nihil reprehenderit sequi ut debitis adipisci.".split(
  ""
);

const Text = () => {
  console.log(data);
  return (
    <StyledWrapper>
      {data.map((item, i) => (
        <Letter character={item} current={5} i={i} key={i} />
      ))}
    </StyledWrapper>
  );
};

export default Text;
