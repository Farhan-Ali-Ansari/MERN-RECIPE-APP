import React, { useEffect } from "react";
import { AppContext } from "./App_Context";
import axios from "axios";
import { useState } from "react";

const App_State = (props) => {
  const url = "http://localhost:3000/api";
  const [token, settoken] = useState("");
  const [recipe, setrecipe] = useState([])

  useEffect(() => {
    const fetchRecipe = async () =>{
      const api = await axios.get(
        `${url}/`,
      
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      
      );
      console.log(api.data.recipe)
      setrecipe(api.data.recipe)

    }
    fetchRecipe()
  }, []);

  //Register

  const Register = async (name, gmail, password) => {
    const api = await axios.post(
      `${url}/register`,
      {
        name,
        gmail,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return api;
  };

  //login
  const login = async (gmail, password) => {
    const api = await axios.post(
      `${url}/login`,
      {
        gmail,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    settoken(api.data.token);

    return api;

    // console.log("login data",api)
  };

  // add recipe
  const addRecipe = async (
    title,
    ist,
    ing1,
    ing2,
    ing3,
    ing4,
    qty1,
    qty2,
    qty3,
    qty4,
    imgurl
  ) => {
    const api = await axios.post(
      `${url}/add`,
      {
        title,
        ist,
        ing1,
        ing2,
        ing3,
        ing4,
        qty1,
        qty2,
        qty3,
        qty4,
        imgurl,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Auth:token
        },
        withCredentials: true,
      }
    );

    return api
  };
  // recipe by id
  const getRecipeById= async (id) =>{
    const api = await axios.get(
      `${url}/${id}`,
      
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return api

  }
  return (
    <AppContext.Provider
      value={{
        login,
        Register,
        addRecipe,
        recipe,
        getRecipeById,


      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default App_State;
