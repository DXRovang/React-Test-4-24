const Child2 = (mars) => {
  // debugger
  return ( 
    <div>
      Hi!  Child2
      {mars ? mars.mars.map(photo=>(
        <div key={photo.id}>
          {photo.img_src}
        </div>
      )
   ) : null }
    </div>
   );
}
 
export default Child2;