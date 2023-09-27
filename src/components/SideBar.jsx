import './sideBar.css'
import '../App.css'



export const SideBar = ( ) => {

  return (
    <div className='d-flex p-4 row ' >
       
     
    <h3>Categorys</h3>
    <div>
   
    <label >Indy</label>
    </div>
    <div>
    
    <label >RPG</label>
    </div>
    <div>
    
    <label >Cars</label>
    </div>
    <div>
    
    <label >Shooter</label>
    <div>
    
    <label >Sport</label>

    </div>
    <div>
   
    <label >Action</label>
    </div>
    </div>
    <h3 className='mt-4'>Platforms</h3>
    <div>
    
    <label >PC</label>

    </div>
    <div>
  
    <label >PS-5</label>

    </div>
    <div>
  
    <label >Nintendo</label>

    </div>
    <div>
   
    <label >X-Box</label>

    </div>
    <a className='btn btn-filter'>Register</a>
    </div>
  )
}
