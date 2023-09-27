import  { useState } from 'react'

export const useForm = (second = {}) => {
 
    const [value, setvalue] = useState(second);
    const reset = () => {
      setvalue(second)
  }
  
 
  const handelInputChange =({target}) => {
    setvalue({
        ...value,
        [target.name]: target.value
     });
  }
  return [value, handelInputChange, reset]
}
