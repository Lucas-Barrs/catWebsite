import { Button } from "@mui/material"
import './RandomPic.css'

function NewCatPic({refetchFunction}) {
  return(
    <>
      <Button onClick={refetchFunction} variant="outlined" color="success">New Cat</Button>
      <br/><br/>
      {/* <img className="random-pic" src={imgUrl}/> */}
    </>
  )
}

export default NewCatPic
