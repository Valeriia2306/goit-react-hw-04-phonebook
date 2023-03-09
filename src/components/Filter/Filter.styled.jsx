import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;

  & span {
    margin-bottom: 10px;
    color: white;
  }
`;
const Input = styled.input`
  width: 300px;
  height: 30px;
  padding-left: 10px;

  border-radius: 5px;
  border: none;
  &:hover {
    color: blue;
  }
`;

export { Label, Input };
