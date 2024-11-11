import React from "react";
import ActionText from "../components/ActionText";

const Reroll = ({
  handleClick,
}: {
  handleClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}) => <ActionText handleClick={handleClick}>reset</ActionText>;

export default Reroll;
