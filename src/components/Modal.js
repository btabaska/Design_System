import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { illustrations, CloseIcon } from "../assets";
import { PrimaryButton } from "./Buttons";
import { useSpring, animated, config } from "react-spring";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 30px;
  top: 30px;
  width: 40px;
  height: 40px;
  padding: none;
`;

export const SignUpModal = ({ showModal, setShowModal }) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0)" : `translateY(-200%)`,
    config: config.slow,
  });
  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img
          src={illustrations.SignUp}
          alt="Sign up for an account"
          aria-hidden="true"
        />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>Sign up Today to get access!</SignUpText>
        <PrimaryButton>Sign Up!</PrimaryButton>
        <CloseModalButton
          aria-label="Close Modal"
          onClick={() => setShowModal(!showModal)}
        >
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  );
};
