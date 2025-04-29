import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import {useNavigate} from "react-router-dom";

const AddRecipe = () => {
  const navigate = useNavigate()
    const { addRecipe } = useContext(AppContext);

    const [formData, setformData] = useState({
      title:"",
      ist:"",
      ing1:"",
      ing2:"",
      ing3:"",
      ing4:"",
      qty1:"",
      qty2:"",
      qty3:"",
      qty4:"",
      imgurl:"",
    })

    const onChangeHandler=(e) => {
      const { name , value} = e.target
      setformData({...formData,[name]:value})
    }


    
    const onSubmitHandler = async (e) => {
      e.preventDefault()
      const {   title,
        ist,
        ing1,
        ing2,
        ing3,
        ing4,
        qty1,
        qty2,
        qty3,
        qty4,
        imgurl } = formData;
      const result  = await  addRecipe(  title,
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
      );
      // console.log("addrecipe" ,result)
      toast.success(result.data.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          // console.log(result.data);
          setTimeout(() => {
            navigate('/Home')
          }, 1500);
    }

  return (
    <>
    <ToastContainer />
      <div
        className="container my-5 p-5"
        style={{
          width: "500px",
          border: "2px solid yellow",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center">Add Recipe</h2>
        <form
        onSubmit={onSubmitHandler}
          style={{
            width: "400px",
            margin: "auto",
          }}
          className="my-3 p-3"
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
            value={formData.title}
            onChange={onChangeHandler}
            name="title"  
            type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">
              Instructions
            </label>
            <input
            value={formData.ist}
            onChange={onChangeHandler}
            name="ist"
              type="text"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Ingredient no 1
            </label>
            <input
            value={formData.ing1}
            onChange={onChangeHandler}
            name="ing1"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">
              Ingredient no 2
            </label>
            <input
            value={formData.ing2}
            onChange={onChangeHandler}
            name="ing2"
              type="text"
              className="form-control"
              id="exampleInputPassword2"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword3" className="form-label">
              Ingredient no 3
            </label>
            <input
            value={formData.ing3}
            onChange={onChangeHandler}
            name="ing3"
              type="text"
              className="form-control"
              id="exampleInputPassword3"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword4" className="form-label">
              Ingredient no 4
            </label>
            <input
            value={formData.ing4}
            onChange={onChangeHandler}
            name="ing4"
              type="text"
              className="form-control"
              id="exampleInputPassword4"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword5" className="form-label">
              Quantity no 1
            </label>
            <input
            value={formData.qty1}
            onChange={onChangeHandler}
            name="qty1"
              type="text"
              className="form-control"
              id="exampleInputPassword5"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword6" className="form-label">
              Quantity no 2
            </label>
            <input
            value={formData.qty2}
            onChange={onChangeHandler}
            name="qty2"
              type="text"
              className="form-control"
              id="exampleInputPassword6"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword7" className="form-label">
              Quantity no 3
            </label>
            <input
            value={formData.qty3}
            onChange={onChangeHandler}
            name="qty3"
              type="text"
              className="form-control"
              id="exampleInputPassword7"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword8" className="form-label">
              Quantity no 4
            </label>
            <input
            value={formData.qty4}
            onChange={onChangeHandler}
            name="qty4"
              type="text"
              className="form-control"
              id="exampleInputPassword8"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword9" className="form-label">
              imgUrl
            </label>
            <input
            value={formData.imgurl}
            onChange={onChangeHandler}
            name="imgurl"
              type="text"
              className="form-control"
              id="exampleInputPassword9"
            />
          </div>

          <div className="container d-grid col-6 ">
            <button type="submit" className="btn btn-primary mt-3">
              Add The Recipe
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;
