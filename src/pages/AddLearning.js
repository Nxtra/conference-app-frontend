import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { postLearning } from '../services/repositories/learningsRepository'

import { withRouter } from "react-router-dom";
import { config } from "../config"


function AddLearning({history}) {
  const [learningCreator, setLearningCreator] = useState('');
  const [learningContent, setLearningContent] = useState('');
  const [learningSession, setLearningSession] = useState('None');
  const [learningCategory, setLearningCategory] = useState('General');


  const addLearning = async (learning) => {
    console.log(`learning about to be created: ${JSON.stringify(learning)}`)
    await postLearning(config.API_BASE_URL, learning)
  }

  const handleChange = (event) => {
    if (event.target.id === 'creator') {
      setLearningCreator(event.target.value);
    } else if (event.target.id === 'content') {
      setLearningContent(event.target.value);
    } else if (event.target.id === 'session') {
      setLearningSession(event.target.value);
    }else if (event.target.id === 'category') {
      setLearningCategory(event.target.value);
    }
  }

  const handleClick = (event) => {
    event.preventDefault();

    const learning = {
      creator: learningCreator,
      learning: learningContent,
      session: learningSession,
      category: learningCategory
    };

    console.log(`Flashcard: ${JSON.stringify(learning)}`)

    addLearning(learning).then(() => {
      // reset state
      setLearningCreator('')
      setLearningContent('')
      setLearningSession('')
      setLearningCategory('')

      history.push("/");
    });
  }

  return (
    <div className="container">
      <Form onSubmit={handleClick}>

        <Form.Group controlId="creator">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={learningCreator} onChange={handleChange}></Form.Control>
          <Form.Text className="text-muted">
            Provide the your name or nickname
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="content">
          <Form.Label>Your learning</Form.Label>
          <Form.Control type="text" placeholder="Enter content" value={learningContent} onChange={handleChange}/>
          <Form.Text className="text-muted">
            Provide the key sentence of your learning. Enter content of what you learned.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="session">
          <Form.Label>Session</Form.Label>
          <Form.Control type="text" placeholder="Enter conference session" value={learningSession} onChange={handleChange}/>
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Enter category" value={learningCategory} onChange={handleChange}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )

}

export default withRouter(AddLearning);