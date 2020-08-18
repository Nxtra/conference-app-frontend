import React, { useEffect, useState } from 'react';
import { getAllLearnings } from '../services/repositories/learningsRepository';
import { config } from "../config"


function LearningList() {

  console.log("List is rendering")
  const [learnings, setLearnings] = useState([]);

  useEffect(() => {
    const fetchLearnings = async() => {
      console.log('executing useEffect')
      const data = await getAllLearnings(config.API_BASE_URL);
      console.log(data)
      setLearnings(data.learnings);
    }
    fetchLearnings();
  }, [])

  return (
    <React.Fragment>
      <div className="container">
        {learnings.map((learning) =>
          <div key={learning.id} className="border border-primary rounded p-3 m-3">
            <span>{learning.creator}: </span>
            <span>{learning.learning}</span>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default LearningList
