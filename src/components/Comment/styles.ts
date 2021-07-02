import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
`;

const CommentBox = styled.div`
  width: 100%;
`;

const FolderSpan = styled.span`
  margin: 0 20px;
  font-size: 0.95em;
  color: #999;
`;

const ForUserMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  margin-top: 10px;
  border-top: 1px solid #ccc;
  font-size: 0.8em;
`;

const FormBox = styled.form``;

const NameInput = styled.input`
  width: 120px;
  padding: 10px 25px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
`;

const ContentBox = styled.div`
  position: relative;
  justify-content: space-between;
  width: 310px;
  padding: 5px 15px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 30px;
`;

const ContentInput = styled.input`
  width: 250px;
  padding: 10px;
  border: none;
  outline: none;
`;

const SubmitBtn = styled.button`
  padding: 5px;
  border: none;
  background-color: transparent;
  color: #52a6df;
`;

// comment 부분 스타일링
const SingleComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  margin: 10px 20px;
`;

const User = styled.span`
  display: inline-block;
  position: relative;
  width: auto;
  margin-right: 5px;
  font-weight: 800;
  vertical-align: baseline;
  white-space: nowrap;
`;

const Text = styled.span`
  display: inline-block;
  width: auto;
  white-space: normal;
  margin: 0;
  margin-right: 5px;
  vertical-align: baseline;
`;

export {
  Container,
  CommentBox,
  FolderSpan,
  ForUserMsg,
  FormBox,
  NameInput,
  ContentBox,
  ContentInput,
  SubmitBtn,
  SingleComment,
  User,
  Text,
};
