const Child1 = ({earth}) => {
  return ( 
    <div>
      Hi!  Child1
      {earth ? earth.map(photo=>(
        <div>{photo.image}</div>
      )
   ) : null }
    </div>
   );
}
 
export default Child1;