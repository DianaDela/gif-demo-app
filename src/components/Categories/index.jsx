import { useState } from "react";
import CategoriesList from "./CategoriesList"
import GifsExpo from "../GifsExpo";
import Swal from "sweetalert2"

const Categories = ({categories = [], setCategories}) => {
    const [inputValue, setInputValue] =useState("")

    const handleInput = ({target}) => {
        setInputValue(target.value)
    }


    const handleAddCategoryButton = () => {
        if (!categories.includes(inputValue)){
            setCategories([inputValue, ...categories])
        setInputValue("")
        }
    }

    const clearList = async () =>{
        const result = await Swal.fire({
            title:"Clear the List?",
            text:"You won't be able to revert this!",
            icon:"warning",
            showCancelButton:true,
            confirmButtonText:"Yes, clear it!",
        });

        if(result.isConfirmed){
            localStorage.setItem("categories", JSON.stringify([]))
            setCategories([]);
        }
    }

    return (
        <>
        <input
      onChange={(e) => handleInput(e)} 
      placeholder="Write category name"
      type="text"
      value={inputValue} 
      />
      <button
      className="btn btn-primary btn-sm ms-2"
      onClick={handleAddCategoryButton}
      type="button"
      >
        Add
      </button>
      <button
        className="btn btn-danger btn-sm ms-2 mb-1"
        onClick={clearList}
        type="button"
        >
        Delete
        </button>

      <br />
      <CategoriesList 
       categories={categories} 
       setCategories={setCategories}/>
       <hr />
       <GifsExpo categories={categories} />
       <br />
        {
        categories.length === 0 && (<h4>Add a category...</h4>)
        }
      </>
    )
}

export default Categories