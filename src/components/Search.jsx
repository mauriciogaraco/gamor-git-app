import { games } from "../data/games";
import { Card } from "./Card";
import { useForm } from "./hooks/useForm";
import { getGameByName } from "./selectors/getGameByName";


export const Search = () => {
    const [formValues, handelInputChange ] = useForm({
        searchText:''
       });
     const {searchText} = formValues;
     const titleFilter = getGameByName('');
     
       const handelSearch = (e) =>{
         e.preventDefault();
      console.log(searchText)
       }
  return (
    <>
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

        {
            titleFilter.map(game => (
                <Card key={games.id} {...game}/>
            ))
        }
    </>
  )
}

