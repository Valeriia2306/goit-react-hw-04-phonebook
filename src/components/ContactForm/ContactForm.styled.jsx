import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #fff;
  border-radius: 5px;
  &:hover {
    color: blue;
  }
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
  & span {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  height: 25px;
  width: 220px;
  padding-left: 10px;
  border: none;
  border-radius: 5px;
  outline: yellow;
`;

const Button = styled.button`
  margin: 0 auto;
  font-size: 16px;
  width: 150px;
  height: 30px;
  color: hotpink;
  border: none;
  border-radius: 5px;
  &:hover {
    color: blue;
  }

  cursor: pointer;
`;
export { Label, Form, Input, Button };
