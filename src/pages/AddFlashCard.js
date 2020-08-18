import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { withRouter } from "react-router-dom";


function AddFlashCard({history}) {
  const [flashCardSubject, setFlashCardSubject] = useState('');
  const [flashCardContent, setFlashCardContent] = useState('');

  const addFlashCard = async (flashCard) => {
    // TODO: implement requests with axio
    // console.log(`result data: ${JSON.stringify(result.data.createFlashCard)}`)
  }

  const handleChange = (event) => {
    if (event.target.id === 'subject') {
      setFlashCardSubject(event.target.value);
    } else if (event.target.id === 'content') {
      setFlashCardContent(event.target.value);
    }
  }

  const handleClick = (event) => {
    event.preventDefault();

    const flashCard = {
      subject: flashCardSubject,
      content: flashCardContent
    };

    console.log(`Flashcard: ${JSON.stringify(flashCard)}`)

    addFlashCard(flashCard).then(() => {
      // reset state
      setFlashCardSubject('')
      setFlashCardContent('')

      history.push("/");
    });
  }

  return (
    <div className="container">
      <Form onSubmit={handleClick}>

        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter subject" value={flashCardSubject} onChange={handleChange}></Form.Control>
          <Form.Text className="text-muted">
            Provide a general subject title for your FlashCard
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control type="text" placeholder="Enter Content" value={flashCardContent} onChange={handleChange}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )

}

export default withRouter(AddFlashCard);