// import {useState} from 'react'
import {Link} from 'react-router-dom'
const Child1 = ({characters}) => {


  // const [checked, setChecked] = useState([])

  // const handleCheck = (e) =>{
    
  //   let updatedList = [...checked];
  //   // console.log(checked.indexOf(e.target.value))
  //   if (e.target.checked){
  //     updatedList = [...checked, e.target.value]
  //   } else {
  //     updatedList.splice(checked.indexOf(e.target.value),1)
  //   }
  //   setChecked(updatedList)
  // }

  return ( 
    <div>
      Hi!  Child1
      {characters ? characters.map(character=>(
        <div key={character.id}>
          {/* <input 
              type="checkbox" 
              name={character} 
              value={character}
              onChange={handleCheck}
          >
          </input> */}
          <div><Link to={'/parent2'}>See Parent 2</Link></div>
          <div>{<img alt="special" src={character.image}/>}</div>
          <div>{character.id}</div>
        </div>
      )
   ) : null }
    </div>
   );
}
 
export default Child1;