const Child1 = ({earth}) => {
  return ( 
    <div>
      Hi!  Child1
      {earth ? earth.map(photo=>(
        <div key={photo.id}>{photo.image}</div>
      )
   ) : null }
    </div>
   );
}
 
export default Child1;