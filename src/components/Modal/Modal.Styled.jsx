import styled from "@emotion/styled";

export const Overlay = styled.div`
    position: fixed;
    overflow: auto;
    top: 0;
    left: 0;
    display: flex;
    alight-item: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    z-index: 1200;
    background-color: rgba(0, 0, 0, 0.7);
    
`;

export const Window = styled.div`
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
    padding: 170px;
`;