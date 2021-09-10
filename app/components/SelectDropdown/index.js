import styled from 'styled-components';

const SelectDropDown = styled.select`
  height: 36px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #f9f9f9;
  color: #161616;
  border: 1px solid #e2e0e0;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-radius: 0;
  }
`;

export default SelectDropDown;
