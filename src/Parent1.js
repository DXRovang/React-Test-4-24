import {useState, useEffect} from 'react';
import Child1 from './Child1'

const Parent1 = () => {

const API = 'https://rickandmortyapi.com/api/character'
const [characters, setCharacters] = useState([])

useEffect(()=>{
  fetch(API)
  .then(r=>r.json())
  .then(data=>{
    // console.log(data.results)
    setCharacters(data.results)
  })
  .catch((err)=>console.log(err))
}, [])

return ( 
  <div>
    Hello, back.  From Parent1
    {characters && <Child1 characters={characters}/>}
  </div>
 );
}
export default Parent1;