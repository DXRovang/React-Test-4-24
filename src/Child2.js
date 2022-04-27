import {Link} from 'react-router-dom'
const Child2 = (cards) => {

  return ( 
    <div>
      Hi!  Child2
      {cards ? cards.cards.map(card=>(
        <div key={card.id}>
          <Link to={"/parent1"}>View Parent 1</Link>
          <img src={card.image} alt="image" width={250} height={450}/>
        </div>
      )
   ) : null }
    </div>
   );
}
 
export default Child2;