import styled from 'styled-components';

export const SectionHeader = styled.div`
  background-color: #1E1E1E;
  padding: 15px;
`;

export const SectionHeader2 = styled.div`
  background-color: #1E1E1E;
  padding: 15px;
  display: flex;
`;

export const TitleGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 1.4em;
  color: #bbb;
  font-weight: light;
`;

export const SectionContainer = styled.div`
  margin-bottom: 5px;
`;

export const Button = styled.a`
  cursor: pointer;
  color: #4AF4FF;
  padding: 2px;
  display: flex;
  margin: 5px;
  align-items: center;

  &:hover {
    color: #37A7AE;
  }

  &:disabled {
    color: #ff0;
  }
`;

export const Half = styled.div`
  width: 50%;
`;

export const Half2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  align-items: center;
`;
