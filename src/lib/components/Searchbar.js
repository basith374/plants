import styled from "styled-components";

function SearchIcon() {
  return (
    <svg width="16" viewBox="0 0 27 25">
      <path
        d="M23.4523 20.7473L17.8949 15.3241C19.2763 13.7031 20.1085 11.6214 20.1085 9.3533C20.1085 4.19587 15.809 0 10.5243 0C5.23944 0 0.939941 4.19587 0.939941 9.3533C0.939941 14.5104 5.23944 18.7059 10.5243 18.7059C12.8484 18.7059 14.9816 17.8939 16.6428 16.5458L22.2003 21.9691C22.3731 22.1379 22.5998 22.2222 22.8263 22.2222C23.0528 22.2222 23.2795 22.1379 23.4524 21.9691C23.7982 21.6317 23.7982 21.0848 23.4523 20.7473ZM2.71064 9.3533C2.71064 5.14868 6.21581 1.72798 10.5243 1.72798C14.8326 1.72798 18.3377 5.14868 18.3377 9.3533C18.3377 13.5576 14.8326 16.9779 10.5243 16.9779C6.21581 16.9779 2.71064 13.5576 2.71064 9.3533Z"
        fill="#aaa"
      />
    </svg>
  );
}

const Container = styled.div`
  background: #fff;
  border-radius: 22.5px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  svg {
    margin-top: 2px;
  }
`;

const Input = styled.input`
  border: none;
  padding: 0 1em;
  line-height: 25px;
  flex: 1;
  outline: none;
`;

export default function Searchbar({ placeholder }) {
  return (
    <Container>
      <SearchIcon /> <Input type="text" placeholder={placeholder} />
    </Container>
  );
}
