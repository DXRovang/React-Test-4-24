import {useParams} from 'react-router-dom'
import {useState} from 'react'
// import {Link} from 'react-router-dom'

const Grandchild1 = ({characters}) => {

  const [toggle, setToggle] = useState(false)
  const [toggleDiv, setToggleDiv] = useState(true)
  const [first, setFirst] = useState(["Nick", "Alex"])

  const handleClickA = () =>{
    setFirst(["Alex", "Nick"])
  }  
  const handleClickN = () =>{
    setFirst(["Nick", "Alex"])
  } 
  const changeColor = () =>{
    setToggle(!toggle)
  }

  const list = ["james", "dan", "charles"]

  const {id} = useParams()
  const names = {
    1 : "james",
    2 : "mike", 
    3 : "charles"
  }

  // const [n, setN] = useState(names)
  // const myList = [characters]
  // console.log(myList)
  // debugger
  return ( 
    <div>
      GrandChild, too!
      <div className={toggle ? "pink border" : "blue border"}>
        This div changes color
        <div>
          {/* <button onClick={()=>setToggle(!toggle)}>Toggle Color</button> */}
          <button onClick={changeColor}>Toggle Color</button>
        </div>
      </div>
  
      <div className="border">
        <button onClick={()=>setToggleDiv(!toggleDiv)}>Toggle Div</button>
        <div>
          {toggleDiv && (<div>Now you see me...</div>)}
        </div>
      </div>

      <div className="border">
        <button onClick={handleClickN}>Nick is First</button>
        <button onClick={handleClickA}>Alex is First</button>
        <div>{first.map(name=><div>{name}</div>)}</div>
      </div>

      <div className="border">
        <div className="blue">This div uses filter on an array</div>
        {list.filter(n=> n.includes("e")).map(n=><div>{n}</div>)}
      </div>

      <div className="border">
        <div className="blue">This div filters an object's keys via useParams</div>
        {Object.keys(names).filter(key=>(key===id)).map(n=>names[n])}
      </div>
      
    {/* <div>{toggle}</div> */}
    {/* <div>{names[id]}</div> */}
    {/* <div>{list.filter((key, index)=>index === id).map(i=><div>{i}</div>)}</div> */}
  </div>
   );
}
 
export default Grandchild1;