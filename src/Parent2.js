import {useState, useEffect} from 'react';
import Child2 from './Child2'

const Parent2 = () => {
 
const API = 'https://tarot-trove-backend.herokuapp.com/api/v1/cards'
const [cards, setCards] = useState([])

useEffect(()=>{
  fetch(API)
  .then(r=>r.json())
  .then(data=>{
    // console.log(data[0].image)
    setCards(data)
  })
  .catch((err)=>console.log(err))
}, [])

return ( 
  <div> 
    Hello, back.  From Parent2
    {cards && <Child2 cards={cards}/>}
  </div>

 );

}

export default Parent2;