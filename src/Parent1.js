import {useState, useEffect} from 'react';
import Child1 from './Child1'

const Parent1 = () => {

const API = 'https://api.nasa.gov/EPIC/api/natural?api_key=DEMO_KEY'
const [earth, setEarth] = useState([])

useEffect(()=>{
  fetch(API)
  .then(r=>r.json())
  .then(data=>{
    setEarth(data)
  })
  .catch((err)=>console.log(err))
}, [])

return ( 
  <div>
    Hello, back.  From Parent1
    {earth && <Child1 earth={earth}/>}
  </div>
 );
}
export default Parent1;