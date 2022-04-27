import {useParams} from 'react-router-dom'
import {useState} from 'react'
// import {Link} from 'react-router-dom'

const Grandchild1 = ({characters}) => {

  const names = {
    1 : "james",
    2 : "mike", 
    3: "charles"
  }

  const [nebraska, setNebraska] = useState(["Nick", "Alex"])

  const [toggle, setToggle] = useState(false)

  const handleClick = () =>{
    console.log(nebraska)
    setNebraska(["Alex", "Nick"])
    console.log(nebraska)
  }  
  const myList = [characters]
  const {id} = useParams()
  console.log(myList)
  // debugger
  return ( 
    <div>
    Hi!  Grandchild1
    <div>{names[id]}</div>
    <button onClick={()=>setToggle(!toggle)}>Toggle</button>
    <button onClick={handleClick}>Click me</button>
    <div>{toggle}</div>
    <div>
      {toggle && (<div>Now you see me...</div>)}
    </div>
    {/* {myList ? myList[0].filter(character => character.id === id).map(c=>(<div key={c.id}>{c.name}</div>)):null } */}
  </div>
   );
}
 
export default Grandchild1;