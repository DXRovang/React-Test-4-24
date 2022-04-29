import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'

const Grandchild1 = ({characters}) => {

  const [toggle, setToggle] = useState(false)
  const [toggleDiv, setToggleDiv] = useState(true)
  const [first, setFirst] = useState(["Nick", "Alex"])
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  const [multiply, setMultiply] = useState(1)

  const handleClickA = () =>{
    setFirst(["Alex", "Nick"])
  }  
  const handleClickN = () =>{
    setFirst(["Nick", "Alex"])
  } 
  const changeColor = () =>{
    setToggle(!toggle)
  }

  const {id} = useParams()
  const names = {
    1 : "shark",
    2 : "octopus", 
    3 : "whale"
  }
  const list = ["james", "dan", "charles", "vanessa", "lisa"]
  const [move, setMove] = useState(["james", "dan", "charles", "vanessa", "lisa"])


  useEffect(()=>{
    document.title = `You clicked ${count} times.`
  })

  useEffect(()=>{
    setMultiply((m)=>m * 2)
  }, [num])

  const changeList = () =>{
    setMove(()=>[...move, "ariel"])
  }

  const deleteList = ()=>{
    setMove((list) => list.filter((_,index)=> index!== (list.length - 1)))
  }

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

      <div className="border">
        <div className="blue">This div uses useEffect with no 2nd arg</div>
        <div>You clicked {count} times.</div>
        <button onClick={()=> setCount(()=>count + 1)}>Counter</button>
      </div>

      <div className="border">
        <div className="blue">This div useEffect with 2nd arg</div>
        <div>The number is now {num}, and the multiply is {multiply}</div>
        <button onClick={()=>setNum(num=>num + 1)}>+</button>
        <button onClick={()=>setNum(num=>num - 1)}>-</button>
      </div>

      <div className="border">
        <div className="blue">This div uses spread operator and an index</div>
        <div>{move.map(n=><div>{n}</div>)}</div>
        <button onClick={changeList}>Add a name</button>
        <button onClick={deleteList}>Delete last name</button>
      </div>

  </div>
   );
}
 
export default Grandchild1;