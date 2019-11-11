import styled from 'styled-components';

export const SectionHeader = styled.div`
  background-color: #1E1E1E;
  padding: 15px;
`;

export const SectionHeader2 = styled.div`
  background-color: #1E1E1E;
  padding: 15px;
  padding-right: 0;
  /*display: flex;*/
  display: grid;
  grid-template-columns: auto 240px;
  align-items: center; /*start;*/
  justify-content: space-between;
`;

export const TitleGroup = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  /*margin-bottom: 10px;*/
`;

export const Title = styled.span`
  font-size: 1.3em;
  color: #ccc;
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

  &.disabled {
    color: #7D7D7D;
    cursor default;
  }
`;

export const Half = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const Half2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  align-items: center;
`;

export const OptionsGroup = styled.div`
  display: flex;
  margin: 5px 0;
`;

export const ToggleButton = styled.span`
color: ${(props) => props.disabled ? "#6B6B6B" : "#4AF4FF"};
cursor: pointer;
margin-right: 10px;
font-size: 1.2em;

&:hover {
  opacity: 0.7;
}

&:last-of-type {
  margin-right: 2em;
}
`;

export const Queries = styled.div`
  margin-left: 20px;
  color: #1B856B;
  background-color: #273635;
  display: flex;
  align-items: center;
`;

export const QueryKey = styled.span`
  color: #2CEBBD;
  font-size: 0.9em;
`;

export const QueryNumEntities = styled.span`
  color: #2CEBBD;
`;

export const ReactiveLists = styled.ul`
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #2CEBBD;
`;

export const ReactiveList = styled.li`
 display:flex;
 justify-content: space-between;

 .deferredRemoval & {
    color: #727272;
 }
`;
