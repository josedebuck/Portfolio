import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
`;

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: 400ms;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
`;

export const TechImg = styled.img`
  height: 50px;
  width: 50px;
`;

export const TechName = styled.div`
  font-size: 14px;
`;