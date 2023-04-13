const Phrase = ({advice}) => {
  return (
    <div className='phrase'>
      <h3>ADVICE #{advice?.slip.id}</h3>
      <p>"{advice?.slip.advice}"</p>
  </div>
  )  
}

export default Phrase