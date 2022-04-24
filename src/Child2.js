const Child2 = (cards) => {

  return ( 
    <div>
      Hi!  Child2
      {cards ? cards.cards.map(card=>(
        <div key={card.id}>
          <img src={card.image} alt="image"/>
        </div>
      )
   ) : null }
    </div>
   );
}
 
export default Child2;