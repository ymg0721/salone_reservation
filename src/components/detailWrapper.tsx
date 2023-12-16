import styled from "@emotion/styled";

export const DetailWrapper = styled.div`
  height: 100%;
  width: -webkit-fill-available;
  position: absolute;
  overflow: hidden;
  overflow-y: auto;
`;

export const ScrollChildrenWrpapper = styled.div`
  margin: 140vw 8vw 40vw 8vw;
  height: 100%;
  width: -webkit-fill-available;
  -webkit-backdrop-filter: blur(70px);
  backdrop-filter: blur(70px);
  border-radius: 24px;
`;

export const Wrapper = styled.div`
  background: rgb(247, 246, 245);
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;
