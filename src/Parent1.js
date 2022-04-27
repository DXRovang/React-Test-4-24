import {useState, useEffect} from 'react';
// import Child1 from './Child1'
import Grandchild1 from './Grandchild1'
const Parent1 = () => {

const API = 'https://rickandmortyapi.com/api/character'
const [characters, setCharacters] = useState([])

useEffect(()=>{
  fetch(API)
  .then(r=>r.json())
  .then(data=>{
    setCharacters(data.results)
  })
  .catch((err)=>console.log(err))
}, [])

return ( 
  <div>
    Hello, back.  From Parent1
    {characters && <Grandchild1 characters={characters}/>}
    
  </div>
 );
}
export default Parent1;