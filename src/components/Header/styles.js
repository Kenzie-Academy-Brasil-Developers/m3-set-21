import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  justify-content: space-between;
  box-shadow: var(--box-shadow);
  flex-wrap: wrap;

  padding: 20px 40px 0px 40px;

  img {
    width: 170px;
    height: 50px;
  }

  > div {
    width: 300px;
  }
`;
