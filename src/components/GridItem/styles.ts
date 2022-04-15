import styled from "styled-components";

type ContainerProps = {
  showBackground: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background-color: ${(props) =>
    props.showBackground ? "#1550ff" : "#e2e3e3"};
`;

type IconProps = {
  opacity?: number;
};

export const Icon = styled.img<IconProps>`
  width: 40px;
  height: 40px;

  opacity: ${(props) => props.opacity ?? "1"};
`;
