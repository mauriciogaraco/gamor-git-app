import  ghost from '../img/ghosts-pacman.png'

export const NoResult = () => {
  return (
    <div className=''>
        
       <h4>
        Game no found
       </h4>
       <img  className=' img-fluid' src={ghost}/>
    </div>
  )
}
