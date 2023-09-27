import '../App.css'
import valhalla from '../img/valhalla.jpg';
//import minecraft from '../img/minecraft.jpg'
//import { Card } from './Card'
export const Content = () => {
  return (
    <div className='d-flex row'>
    <div className="">
      <h1 className='title'>Popular Now</h1>
      <img  className='img-fluid portada mt-6 p-0 ' src={valhalla} alt="" />
      
</div>

</div>
  )
}
