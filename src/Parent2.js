import {useState, useEffect} from 'react';
import Child2 from './Child2'

const Parent2 = () => {
 
const API = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
const [mars, setMars] = useState([])

useEffect(()=>{
  fetch(API)
  .then(r=>r.json())
  .then(data=>{
    // console.log(data.photos[0])
    setMars(data.photos)
  })
  .catch((err)=>console.log(err))
}, [])

return ( 
  <div> 
    Hello, back.  From Parent2
    {mars && <Child2 mars={mars}/>}
  </div>

 );

}

export default Parent2;