import React from "react";
import "./SvdRecipes.css";

export default function SavedCheques({ imageFile,textarea }){
    return (
<div className="recipestable">
    <h1>My Recipes</h1>
  <table>
    <thead>
    <tr>
        <th>Image</th>
        <th>Ingredients</th>
        <th>Instructions</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>
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
        </td>
        <td>
        <textarea name="condiments" value={textarea.condiments} className="inputs" readOnly />
        </td>
        <td> <textarea value={textarea.instruction} name="instruction"
        className="inputs" readOnly
        /></td>
    </tr>
    <tr>
        <td> {imageFile.image2 ? (
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
          )}</td>
          <td><textarea name="condiments1" value={textarea.condiments1} className="inputs" readOnly /></td>
          <td><textarea value={textarea.instruction1} name="instruction1"
            className="inputs" readOnly
          /></td>
    </tr>
<tr>
    <td>{imageFile.image3 ? (
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
        </td>
        <td><textarea name="condiments2" value={textarea.condiments2}
                         className="inputs" readOnly /></td>
                        <td><textarea value={textarea.instruction2} name="instruction2" readOnly
        className="inputs"
        /></td>
</tr>
</tbody>
  </table>
</div>
    )
}