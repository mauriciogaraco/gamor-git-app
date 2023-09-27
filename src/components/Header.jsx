import sun from '../img/sun-svgrepo-com.svg'
import gamor from '../img/Letter-G-icon.png'

import './header.css'


 

// eslint-disable-next-line react/prop-types
export const Header = () => {
 
  return (
        <>
        <nav className="navbar navbar-dark bg-dark fixed-top">
        <ul className="navbar-nav d-flex flex-row ml-2 nav">
        <li className="nav-item">
                <img src={gamor} className='gamor small-image'/>
            </li>
            <li className="nav-item">
                <h3 >GAMOR</h3>
            </li>
           
            <div className='d-flex nav-p '>
              
            <li className="nav-item">
                <a className="pt-1 ml-1 mr-1" href="#">Home</a>
            </li>
            <li className="nav-item ml-1 mr-1">
                <a className="pt-2" href="./Categorys.jsx">Categorys</a>
            </li>
            <li className="nav-item ml-1 ">
                <a className="pt-1" href="#"></a>
            </li>
            <div className='user d-flex flex-row'>
      
      <li className='mr-1'><img  className="image-responsive small-image" src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?w=740&t=st=1695315341~exp=1695315941~hmac=d26d14cc93ee8fbcedb89997b1bb9daeec78658e1ffccdbf52ba33567d0f37e9" alt='user picture'/>
       </li> 
     
     <li><p className="logo"><h4>Logo</h4></p></li>
   
     <li className='ml-1'><button  className=' btn' ><img className='small-image sun' src={sun}/></button></li>
     
     </div>   
            </div>
        </ul>
       </nav>  
       {
        
       }  
    </>
  )
}
       