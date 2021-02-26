import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;
export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <path
      d="M28.5 9.615L26.385 7.5L18 15.885L9.615 7.5L7.5 9.615L15.885 18L7.5 26.385L9.615 28.5L18 20.115L26.385 28.5L28.5 26.385L20.115 18L28.5 9.615Z"
      fill="black"
    />
  </CloseIconWrapper>
);
