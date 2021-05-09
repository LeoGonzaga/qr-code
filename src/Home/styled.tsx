import styled, { keyframes } from "styled-components";
import { colors } from "../../constants/color";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${colors.primary};
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 90%;
  width: 50%;
  background: ${colors.second};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    height: 90%;
    width: 80%;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  color: ${colors.secondary};
`;
export const Image = styled.img`
  height: 340px;
  width: 340px;
  @media only screen and (max-width: 600px) {
    height: 200px;
    width: 200px;
  }
`;

export const Input = styled.input`
  height: 50px;
  width: 340px;
  border: 1px solid #384952;
  border-radius: 5px;
  margin-top: 40px;
  padding: 10px;
  outline: none;
  @media only screen and (max-width: 600px) {
    width: 250px;
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 340px;
  background-color: ${colors.primary};
  border-style: none;
  border: 1px solid ${colors.secondary};
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  color: #ffff;
  font-size: 20px;
  outline: none;
  font-weight: bold;
  transition: 0.2s ease-in;
  @media only screen and (max-width: 600px) {
    width: 250px;
  }
  &:hover {
    border: 1px solid ${colors.hover};
    background-color: ${colors.hover};
    color: ${colors.secondary};
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 340px;
  height: 340px;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #8614c5; /* Blue */
  border-radius: 50%;

  animation: ${rotate} 2s ease-in-out infinite;
`;

const toast = keyframes`
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
`;

export const Notification = styled.span`
  color: ${colors.secondary};
  background-color: ${colors.hover};

  position: fixed;

  top: 12px;
  right: 12px;
  transition: 0.6s ease-in-out;
  animation: ${toast} 0.9s ease;
  height: 80px;
  width: 250px;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10;

  border-radius: 5px;
`;
