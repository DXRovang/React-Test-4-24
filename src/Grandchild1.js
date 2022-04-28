import {useParams} from 'react-router-dom'
import {useState} from 'react'
// import {Link} from 'react-router-dom'

const Grandchild1 = ({characters}) => {

  const [toggle, setToggle] = useState(false)
  const [toggleDiv, setToggleDiv] = useState(false)
  const [first, setFirst] = useState(["Nick", "Alex"])

  const handleClick = () =>{
    setFirst(["Alex", "Nick"])
  }  
  const handleClickN = () =>{
    setFirst(["Nick", "Alex"])
  } 
  // const names = {
  //   1 : "james",
  //   2 : "mike", 
  //   3 : "charles"
  // }

  // const list = ["james", "dan", "charles"]
  // const [n, setN] = useState(names)

  // const myList = [characters]
  // const {id} = useParams()
  // console.log(myList)
  // debugger
  return ( 
    <div>
      <div className={toggle ? "pink border" : "blue border"}>
        This div changes color
        <div>
          <button onClick={()=>setToggle(!toggle)}>Toggle Color</button>
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
        <button onClick={handleClick}>Alex is First</button>
        <div>{first.map(name=><div>{name}</div>)}</div>
      </div>
    {/* <div>{toggle}</div> */}

    {/* <div>{names[id]}</div>
    <div>{list.filter(n=> n.includes("m")).map(n=><div>{n}</div>)}</div>

    <div>{Object.keys(names).filter(key=>(key===id)).map(n=>names[n])}</div> */}
    {/* <div>{list.filter((key, index)=>index === id).map(i=><div>{i}</div>)}</div> */}
  </div>
   );
}
 
export default Grandchild1;