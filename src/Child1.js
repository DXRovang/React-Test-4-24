const Child1 = ({earth}) => {
  return ( 
    <div>
      Hi!  Child1
      {earth ? earth.map(photo=>(
        <div key={photo.id}>
          <img alt="special" src={`https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/${photo.image}.png?api_key=DEMO_KEY`}/>
          </div>
      )
   ) : null }
    </div>
   );
}
 
export default Child1;