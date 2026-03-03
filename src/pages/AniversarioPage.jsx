import Countdown from "../Components/countdown/Countdown"
import LiloGIF from '/images/lilo-gif.gif'
import HarryGIF from '/images/harry-potter.gif'

function AniversarioPage() {
  return (
    <div style={{ minHeight: '100vh' }} >
      <img style={{ width: '100%' }} src={LiloGIF} alt="Lilo gif" srcset="" />
      <Countdown />

      <img style={{ width: '100%' }} src={HarryGIF} alt="harry gif" srcset="" />
    </div>
  )
}



export default AniversarioPage