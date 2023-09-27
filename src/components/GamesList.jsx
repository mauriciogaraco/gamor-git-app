
import { games } from "../data/games";
import { Card } from "./Card";
import { NoResult } from "./NoResult";
import { SideBar } from "./SideBar";
import { useForm } from "./hooks/useForm";





export const GamesList = () => {
  

{/** Filter by Name */}
  const [formValues, handelInputChange ] = useForm({
    searchText:''
   });
 const {searchText} = formValues;
 const titleFilter = games.filter( (g =>g.title.toLowerCase().includes(searchText.toLowerCase())));
 
   const handelSearch = (e) =>{
     e.preventDefault();
  console.log(searchText)
   } 

  return (
    <>
           <div className="row d-flex">
            <aside className="col-md-3 sidebar">
               <SideBar/>
            </aside>
            </div>
     <div className='d-flex div-search'> 
     <h1 className='h1-title'>Games</h1> 
<form onSubmit={handelSearch}>
<input type='text'
 placeholder='Search Name'
  name='searchText' 
  className='input-search'
  onChange={handelInputChange}
 value={searchText}
 />

<button type='submit' className='btn btn-outline-warning btn-search'>Search..</button>
</form>     
                 </div> 
  

    <div className="fila grid">
   {(searchText === "")?  ( games.map(game=>(
                    <Card key={game.id} {...game}/>
                ))) :( (titleFilter.length === 0) ?( <NoResult/>)
                :(titleFilter.map(c=>(
                  <Card key={c.id} {...c}/>
                )))
                )
                }
             
              
             
             </div>
             </>
  )
}

