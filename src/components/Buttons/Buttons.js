import './Buttons.css';

const Buttons = ({insideBtn="any Thing"}) => {
  return (
   
    <button className="btns-style" >
        {insideBtn}
      </button>
      
    
  )
}





const SecondaryBtn = ({secondaryButton}) => {
  return (
    <div>
      <button className='secondary-btn'>{secondaryButton}</button>
      
    </div>
  )
}



export default Buttons;
export {SecondaryBtn}














