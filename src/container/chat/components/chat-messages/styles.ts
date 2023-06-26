import styled from 'styled-components';

export const MessagesWrapper = styled.div`
  display: flex;
  padding: 31px;
  padding-bottom: 0;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 76vh;
  gap: 35px;
  ::-webkit-scrollbar {
    visibility: hidden;
  }
`;

export const LoaderWrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const MessagesBottom = styled.div``;
