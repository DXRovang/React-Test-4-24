import {useState, useEffect} from 'react';
import Child1 from './Child1'

const Parent1 = () => {
  return ( 
    <div>
      Hello, back.  From Parent1
      <Child1/>
    </div>
   );
}

const API = 'https://api.nasa.gov/EPIC/api/natural?api_key=DEMO_KEY'
 
export default Parent1;