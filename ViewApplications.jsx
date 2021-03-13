import React, { useState } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form
} from "react-bootstrap";
import Field from "./Field";

const questions = [
  {
    content: "How are you",
    type: "text",
    ans: "I am fine"
  },
  {
    content: "what is time ? ",
    type: "time",
    ans: "21:29"
  },
  {
    content: "Number of students",
    type: "number",
    ans: 4
  },
  {
    content: "enter mail?",
    type: "email",
    ans: "j@g.com"
  },
  {
    content: "enter password?",
    type: "password",
    ans: "asd"
  },
  {
    content: "enter ",
    type: "file",
    ans: ""
  },
  {
    content: "How",
    type: "text-area",
    ans: "dfsdgvf"
  },
  {
    content: "enter date",
    type: "date",
    ans: "02-03-2021"
  }
];
//Array from server
const qArray = questions;

function ViewApplication() {
  const [qState, setQState] = useState(qArray);

  // const [image, setImage] = useState('')
  // const [uploading, setUploading] = useState(false)

  // function onSubmit(event) {
  //   event.preventDefault();
  //   console.log(qState);
  // }

  // function handleChange(event) {
  //   const { value, name } = event.target;
  //   setQState((prev) => {
  //     prev[name].ans = value;
  //     return [...prev];
  //   });
  // }

  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0]
  //   const formData = new FormData()
  //   formData.append('image', file)
  //   setUploading(true)

  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     }

  //     const { data } = await axios.post('/api/upload', formData, config)

  //     setImage(data)
  //     setUploading(false)
  //   } catch (error) {
  //     console.error(error)
  //     setUploading(false)
  //   }
  // }

  return (
    <Form>
      {qState.map((question, index) => {
        return (
          <Form.Group controlId={index} key={index}>
            <Form.Label>{question.content}</Form.Label>
            <Form.Label>{question.ans}</Form.Label>
          </Form.Group>
        );
      })}

      {/* 

      <Button
        // disabled={onSubmit}
        type="submit"
        variant="primary"
      >
        Submit
      </Button> */}
    </Form>
  );
}

export default ViewApplication;
