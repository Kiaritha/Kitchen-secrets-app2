import { useState } from "react";
import "./recipe.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loginpage from "./Loginpage";
import SavedRecipes from "./SavedRecipes";


export default function RecipeApp() {
  const [imageFile, setImageFile] = useState({
  image1:null,
  image2:null,
  image3:null
  });

  const [textarea, setTextarea] = useState({
    condiments: "",
    instruction: "",
    condiments1: "",
    instruction1: "",
    condiments2: "",
    instruction2: ""
  });
  
  
    const handleDrop = (e, imageKey) => {
      e.preventDefault();
      const droppedFile = e.dataTransfer.files[0];
      setImageFile((prev) => ({ ...prev, [imageKey]: droppedFile }));
    };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleTextarea = (e) =>{
    const {name, value} = e.target;
    setTextarea((prevTextarea) => ({...prevTextarea, [name] : value}));
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleReset=()=> {
    setImageFile({ image1: null, image2: null, image3: null });
    setTextarea({
      condiments: "",
    instruction: "",
    condiments1: "",
    instruction1: "",
    condiments2: "",
    instruction2: ""
    });
  };

  
  return (
    <Router>
       <div className="App">
      <nav className="navg">
        <Link to="/">Home</Link> | <Link to="/recipes">Saved Recipes</Link> | <Link to="/login">Log in</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Loginpage />} />
      <Route
      path="/"
      element={
      <form onSubmit={handleSubmit}>
     <table className="contents">
      <tbody>
     <tr> 
         <th> IMAGE</th>
        <th>INGREDIENTS</th>
        <th>PREPARATION</th>
      </tr>
      <tr>
        <td>
        <div
          style={{
            border: '2px dashed yellow',
            width: '300px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'ivory',
            margin: '20px',
          }}
          onDrop={(e)=>handleDrop(e, "image1")}
          onDragOver={handleDragOver}
        >
          {imageFile.image1 ? (
            <div>
              <p>{imageFile.image1.name}</p>
              {imageFile.image1.type.startsWith('image') && (
                <img
                  src={URL.createObjectURL(imageFile.image1)}
                  alt="preview"
                  style={{ width: '35%', height: '35%', marginTop: '10px' }}
                />
              )}
            </div>
          ) : (
            <p>Drag and drop a imageFile here</p>
          )}
        </div>

        </td>
      <td> <textarea name="condiments" value={textarea.condiments} onChange={handleTextarea} className="inputs" />
           </td>
      <td>
        <textarea value={textarea.instruction} onChange={handleTextarea} name="instruction"
        className="inputs"
        />
      </td>
      </tr>
      <tr>
        <td> <div
          style={{
            border: '2px dashed yellow',
            width: '300px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'ivory',
            margin: '20px',
          }}
          onDrop={(e)=>handleDrop(e, "image2")}
          onDragOver={handleDragOver}
        >
          {imageFile.image2 ? (
            <div>
              <p>{imageFile.image2.name}</p>
              {imageFile.image2.type.startsWith('image') && (
                <img
                  src={URL.createObjectURL(imageFile.image2)}
                  alt="preview"
                  style={{ width: '50%', height: '50%', marginTop: '10px' }}
                />
              )}
            </div>
          ) : (
            <p>Drag and drop a imageFile here</p>
          )}
        </div>
</td>
        <td> <textarea name="condiments1" value={textarea.condiments1} onChange={handleTextarea} className="inputs" /> </td>

 <td> <textarea value={textarea.instruction1} onChange={handleTextarea} name="instruction1"
 className="inputs"
          /></td>
        </tr>
          <tr>
          <td><div
          style={{
            border: '2px dashed yellow',
            width: '300px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'ivory',
            margin: '20px',
          }}
          onDrop={(e)=>handleDrop(e, "image3")}
          onDragOver={handleDragOver}
        >
          {imageFile.image3 ? (
            <div>
              <p>{imageFile.image3.name}</p>
              {imageFile.image3.type.startsWith('image') && (
                <img
                  src={URL.createObjectURL(imageFile.image3)}
                  alt="preview"
                  style={{ maxWidth: '50%', maxHeight: '50%', marginTop: '10px' }}
                />
              )}
            </div>
          ) : (
            <p>Drag and drop a imageFile here</p>
          )}
        </div></td>
         <td> <textarea name="condiments2" value={textarea.condiments2}
                        onChange={handleTextarea} className="inputs" /> </td>
       <td>
        <textarea value={textarea.instruction2} onChange={handleTextarea} name="instruction2"
        className="inputs"
        />
      </td>
        </tr>
      </tbody>
     </table>
    <button type="submit" className="submitButton">Submit</button>
    <button className="deleteButton" type="button" onClick={handleReset}>Reset</button>
     </form>
   }
   />
   <Route path="/recipes"  element={<SavedRecipes imageFile={imageFile} textarea={textarea} />} />
    </Routes>
    </div>
    </Router>
  );
}



