import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 22.5px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  svg {
    margin-top: 2px;
    width: 16px;
  }
`;

export const Input = styled.input`
  border: none;
  padding: 0 1em;
  line-height: 25px;
  flex: 1;
  outline: none;
`;

export const TextArea = styled.textarea`
  border: none;
  flex: 1;
  font-size: 13px;
  padding: 15px 30px;
  outline: none;
  height: 160px;
`;
