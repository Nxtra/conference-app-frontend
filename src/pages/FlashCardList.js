import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from "aws-amplify";


function FlashCardList() {

  console.log("List is rendering")
  const [flashCards, setFlashCards] = useState([]);

  useEffect(() => {
    const fetchFlashCards = async() => {
      console.log('executing useEffect')
      // TODO: implement requests with axios
      // console.log(`result from listFlashCards in useEffect: ${JSON.stringify(result)}`)
      // console.log(`should be cards: ${JSON.stringify(result.data.listFlashCards.items)}`)

      // setFlashCards(result.data.listFlashCards.items);
    }
    fetchFlashCards();
  }, [])

  return (
    <React.Fragment>
      <div className="container">
        {flashCards.map((flashCard) =>
          <div key={flashCard.id} className="border border-primary rounded p-3 m-3">
            <span>{flashCard.subject}: </span>
            <span>{flashCard.content}</span>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default FlashCardList
