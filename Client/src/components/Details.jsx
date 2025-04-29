import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/App_Context';
const FetchRecipeById = () => {
    const {id} =  useParams();
    const {getRecipeById} = useContext(AppContext);

  return (
    <div>Details</div>
  )
}

export default Details