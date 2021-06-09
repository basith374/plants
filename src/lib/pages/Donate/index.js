import styled from "styled-components";
import Layout from "../../components/Layout";
import Input from "./Input";
import Textarea from "./Textarea";

function Location() {
  return (
    <svg width="16" viewBox="0 0 38 38">
      <path
        d="M18.9998 3.16669C12.8723 3.16669 7.9165 8.12252 7.9165 14.25C7.9165 22.5625 18.9998 34.8334 18.9998 34.8334C18.9998 34.8334 30.0832 22.5625 30.0832 14.25C30.0832 8.12252 25.1273 3.16669 18.9998 3.16669ZM18.9998 18.2084C16.8148 18.2084 15.0415 16.435 15.0415 14.25C15.0415 12.065 16.8148 10.2917 18.9998 10.2917C21.1848 10.2917 22.9582 12.065 22.9582 14.25C22.9582 16.435 21.1848 18.2084 18.9998 18.2084Z"
        fill="#aaa"
      />
    </svg>
  );
}

function Upload() {
  return (
    <svg width="16" viewBox="0 0 38 38">
      <g>
        <path
          d="M7.91666 17.4167C9.66308 17.4167 11.0833 15.9965 11.0833 14.25C11.0833 12.5036 9.66308 11.0834 7.91666 11.0834C6.17025 11.0834 4.75 12.5036 4.75 14.25C4.75 15.9965 6.17025 17.4167 7.91666 17.4167Z"
          fill="#aaa"
        />
        <path
          d="M33.25 7.91667H16.4888L13.7877 5.21392C13.49 4.91625 13.0878 4.75 12.6667 4.75H4.75C2.13117 4.75 0 6.88117 0 9.5V28.5C0 31.1188 2.13117 33.25 4.75 33.25H33.25C35.8688 33.25 38 31.1188 38 28.5V12.6667C38 10.0478 35.8688 7.91667 33.25 7.91667ZM4.75 7.91667H12.0112L14.7139 10.6194C15.01 10.9171 15.4138 11.0833 15.8333 11.0833H33.25C34.1224 11.0833 34.8333 11.7943 34.8333 12.6667V23.6534L26.505 15.3251C25.422 14.2421 23.6598 14.2421 22.5783 15.3251L15.0417 22.8618L13.0467 20.8668C11.9637 19.7838 10.2014 19.7838 9.12 20.8668L3.16667 26.8201V9.5C3.16667 8.62758 3.87758 7.91667 4.75 7.91667Z"
          fill="#aaa"
        />
      </g>
    </svg>
  );
}

const Button = styled.button`
  background: #306060;
  line-height: 40px;
  width: 100%;
  border-radius: 22.5px;
  color: #fff;
  border: none;
  font-weight: 600;
`

export default function Donate() {
  return (
    <Layout animate={{ y: 0 }} initial={{ y: 10 }}>
      <Input placeholder="Upload Image">
        <Upload />
      </Input>
      <Textarea placeholder="Reason" />
      <Input placeholder="How old is you your plant" />
      <Input placeholder="Location">
        <Location />{" "}
      </Input>
      <Button>Post</Button>
    </Layout>
  );
}
