import {useState, useEffect} from 'react';
import Child2 from './Child2'

const Parent2 = () => {
  return ( 
    <div> 
      Hello, back.  From Parent2
      <Child2/>
    </div>
  
   );
}
 
const API = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
// const [mars, setMars] = useState([])


export default Parent2;