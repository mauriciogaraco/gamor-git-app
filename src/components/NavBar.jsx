import  './header.css';

export const NavBar = () => {
  return (
        

  <div className="container-fluid">
  <div><header >

<nav>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  <ul className="nav">
    <div className='nav-home mt-5'>
    <li className='mt-5'><a href="" >Home</a></li>
    <li><a href="">Streamings</a></li>
    <li><a href="">News</a></li>
    </div>
    <div className='user p-2'>
      
      <li className='mr-1'><img  className="image-responsive small-image" src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?w=740&t=st=1695315341~exp=1695315941~hmac=d26d14cc93ee8fbcedb89997b1bb9daeec78658e1ffccdbf52ba33567d0f37e9" alt='user picture'/>
       </li> 
     
     <li><p className="logo"><h4>Logo</h4></p></li>
     <li className='ml-1'><p>User name</p></li>
     </div>      
  </ul>
</nav>
  
            
    </header>
     </div> </div>


  )
}
