import Buttons, { SecondaryBtn } from '../Buttons/Buttons';
import './GamingLibItem.css';

const GamingLibItem = ({gameName,imgGame, dateAdded, hoursPlayed, btnDownload}) => {
   



  return (
   
    <div className="item-gaming-lib">
        <div style={{display:"flex", alignItems:"center"}}>
            <img src={imgGame} style={{borderRadius:"20px"}}/>
            <ul>
                <li>{gameName}</li>
                <li className='bottom-line'>Sandbox</li>
            </ul>
        </div>
        <ul>
            <li>Date Added</li>
            <li className='bottom-line'>{dateAdded}</li>
        </ul>
        <ul>
            <li>Hours Played</li>
            <li className='bottom-line'>{hoursPlayed}</li>
        </ul>
        <ul>
            <li>Currently</li>
            <li className='bottom-line'>Downloaded</li>
        </ul>
        {btnDownload === "Download"? <Buttons insideBtn='Download'/>: <SecondaryBtn secondaryButton="Downloaded"/> }
        

    </div>
    
   
  )
}

export default GamingLibItem
