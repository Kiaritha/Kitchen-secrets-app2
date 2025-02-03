import { useState } from "react";
import "./recipe.css"


export default function RecipeApp() {
  const [imageFile, setImageFile] = useState(null);
  const [textarea, setTextarea] = useState("");
  

  const handleDrop = (e) => { 
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setImageFile(droppedFile);
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

  
  return (
    <div className="App">
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
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {imageFile ? (
            <div>
              <p>{imageFile.name}</p>
              {imageFile.type.startsWith('image') && (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="preview"
                  style={{ width: '35%', height: '35%', marginTop: '10px' }}
                />
              )}
            </div>
          ) : (
            <p>Drag and drop a imageFile here, or click to select a imageFile</p>
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
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {imageFile ? (
            <div>
              <p>{imageFile.name}</p>
              {imageFile.type.startsWith('image') && (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="preview"
                  style={{ width: '50%', height: '50%', marginTop: '10px' }}
                />
              )}
            </div>
          ) : (
            <p>Drag and drop a imageFile here, or click to select a imageFile</p>
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
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {imageFile ? (
            <div>
              <p>{imageFile.name}</p>
              {imageFile.type.startsWith('image') && (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="preview"
                  style={{ maxWidth: '50%', maxHeight: '50%', marginTop: '10px' }}
                />
              )}
            </div>
          ) : (
            <p>Drag and drop a imageFile here, or click to select a imageFile</p>
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
    <button className="deleteButton">Reset</button>
     </form>

    </div>
  );
}



