


import './style/style.css';
// eslint-disable-next-line react/prop-types
export const Card = ({title,category,platform, img}) => {

  return (
   
      
        <div className="card ">
            <img  src={img} alt="imagen de juego" className='img-fluid'/>
            <div className="footer-card">
                <div>
                   <p>{title}</p>
                    <p>Category: ---    {category}</p>
                    <p>Platform: ---    {platform}</p>
                </div>
                <button className='btn '>Watch</button>
            </div>
        </div>
  )
}
