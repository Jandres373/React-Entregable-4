import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Lottie from '../assets/animation_lmpc38im.json'
const LottieEmpty = ({response}) => {
  return (
<div className='flex flex-col' onClick={()=>console.log(response)}>
<Player
  autoplay
  loop
  src={Lottie}
  style={{ height: '300px', width: '300px' }}
>
  <Controls />
</Player><h3 className="text-2lg font-bold">Upsss! It looks like there are no users yet. Please hit the create user button to continue.</h3></div>

  )
}

export default LottieEmpty