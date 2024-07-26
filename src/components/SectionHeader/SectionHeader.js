
const SectionHeader = ({heading, headEm}) => {
  return (
    <div style={{marginBottom:"30px"}}>
       <h4 style={{fontWeight:"var(--font-weight-bold)", fontSize:"36px"}}>{heading} <em style={{color:"var(--color-primary)"}}>{headEm}</em></h4>
  
    </div>
  )
}

export default SectionHeader
