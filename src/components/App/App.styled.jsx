import styled from '@emotion/styled';

const Container = styled.div`
  padding: 20px 10px;

  margin: 50px auto;
  width: 500px;

  background: hotpink;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const Tittle = styled.h1`
  font-size: 30px;
  color: #fff;
  font-weight: 900;
  text-align: center;
  margin-bottom: 30px;
`;

const Subtittle = styled.h2`
  font-size: 27px;
  font-weight: 700;
  text-align: center;
  color: white;
`;
export { Tittle, Container, Subtittle };
