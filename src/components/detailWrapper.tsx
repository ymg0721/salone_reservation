import styled from "@emotion/styled";

const DetailWrapper = styled.div`
  position: absolute;
  backdrop-filter: blur(70px);
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  width: -webkit-fill-available;
  margin: 20vw 10vw;
  padding-bottom: 3vw;
`;

export default DetailWrapper;
