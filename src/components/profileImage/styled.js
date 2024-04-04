import styled from "styled-components";

export const MemberProfileImageCrazy = styled.img`
  position: absolute;
  bottom: 0;
  left: 0%;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;

  transform: rotateY(180deg);

  backface-visibility: hidden;

  object-fit: cover;
`;

export const MemberProfileImageSerious = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const Container = styled.div`
  background-color: transparent;
  width: 13em;
  height: 13em;

  perspective: 1000px;

  &:hover ${InnerContainer} {
    transform: rotateY(180deg);
  }
`;