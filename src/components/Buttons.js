import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header2};
    padding: 12px 24px;
  `,
  warning: ({ props }) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
      border: 1px solid ${props.theme.status.warningColorHover};
      border-radius: 20px;
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }
  `,

  secondaryButtonWarning: ({ props }) => `
    background: none;
    border-color: ${props.theme.status.warningColor};
    color: ${props.theme.status.warningColor};
  `,

  tertiaryButtonWarning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
  `,
  //Error
  error: ({ props }) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${props.theme.status.errorColorHover};
      border: 1px solid ${props.theme.status.errorColorHover};
      border-radius: 20px;
    }

    &:active {
      background-color: ${props.theme.status.errorColorActive};
    }
  `,

  secondaryButtonError: ({ props }) => `
    background: none;
    border-color: ${props.theme.status.errorColor};
    color: ${props.theme.status.errorColor};
  `,

  tertiaryButtonError: ({ props }) => `
    background: none;
    color: ${props.theme.status.errorColor};
  `,
  //Success
  success: ({ props }) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
      border: 1px solid ${props.theme.status.successColorHover};
      border-radius: 20px;
    }

    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,

  secondaryButtonSuccess: ({ props }) => `
    background: none;
    border-color: ${props.theme.status.successColor};
    color: ${props.theme.status.successColor};
  `,

  tertiaryButtonSuccess: ({ props }) => `
    background: none;
    color: ${props.theme.status.successColor};
  `,
};

const Button = styled.button`
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-size: ${typeScale.paragraph};
  line-height: 27px;
  border-radius: 20px;
  padding: 9px 20px;
  transition: backgrouund-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
  &:focus {
    background-color: ${(props) => props.theme.primaryColorHover};
    color: ${(props) => props.theme.textColorOnPrimary};
    border: 1px solid ${(props) => props.theme.primaryColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    background-color: ${(props) => props.theme.primaryColorActive};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  color: ${(props) => props.theme.textColorOnPrimary};

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.primaryColor};
  box-sizing: border-box;
  background: none;
  padding: 8px 19px;

  &:disabled {
    background-color: transparent;
    color: ${(props) => props.theme.textOnDisabledInverted};
    border: 1px solid ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const TeritaryButton = styled(Button)`
  background: none;
  border: none;

  &:disabled {
    background-color: transparent;
    color: ${(props) => props.theme.textOnDisabledInverted};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
