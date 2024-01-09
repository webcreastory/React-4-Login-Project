import styled from 'styled-components';

export const StDiv = styled.div`
    height: 79vh;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 12px;
`;
export const StDiv2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const StInput = styled.input`
    box-sizing: border-box;
    height: 46px;
    width: 100%;
    outline: none;
    border-radius: 3px;
    padding: 0px 12px;
    font-size: 14px;
    border: 1px solid rgb(238, 238, 238);
`;
export const TextDiv = styled.div`
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    text-decoration: none;
    outline: none;
    font-family: "Noto Sans KR", sans-serif;
`;
export const StBtn = styled.button`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: row;
    flex-shrink: 0;
    border: 1px solid rgb(238, 238, 238);
    color: rgb(255, 255, 255);
    height: 46px;
    border-radius: 8px;
    background-color: gray;
    cursor: pointer;
    width: 100%;
`