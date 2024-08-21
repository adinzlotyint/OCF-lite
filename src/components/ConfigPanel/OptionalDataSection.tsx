import React from "react";

interface Props {
  isVisible: boolean;
}

const OptionalDataSection = ({ isVisible }: Props) => {
  return <div>{isVisible && "Optional section"}</div>;
};

export default OptionalDataSection;
