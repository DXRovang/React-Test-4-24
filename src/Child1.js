const Child1 = ({characters}) => {
  return ( 
    <div>
      Hi!  Child1
      {characters ? characters.map(character=>(
        <div key={character.id}>
          <img alt="special" src={character.image}/>
          </div>
      )
   ) : null }
    </div>
   );
}
 
export default Child1;