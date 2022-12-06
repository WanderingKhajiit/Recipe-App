import React, { useState } from "react";

function RecipeCreate({create}) {
const initialFormState = {
  name:"",
  cuis:"",
  photo:"",
  ingredients:"",
  preparation:""
}
const [formData, setFormData] = useState({...initialFormState})
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
const handleChange = ({target}) =>{
  const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
})}
  const handleSubmit = (event) =>{
    event.preventDefault()
    create(formData)
    setFormData({...initialFormState})
  }
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td style={{}}>
              <label htmlFor="name">
              <input id="name" name="name" onChange={handleChange} value={formData.name} required={true} placeholder="name"/>
              </label>
              </td>
              <td>
                <label htmlFor="cuisine">
              <input id="cuisine" name="cuisine" onChange={handleChange} value={formData.cuisine} required={true} placeholder="cuisine"/>
              </label>
              </td>
              <td>
                <label htmlFor="photo">
              <input id="photo" name="photo" type="url" onChange={handleChange} value={formData.photo} required={true} placeholder="url"/>
              </label>
              </td>
              <td>
                <label htmlFor="ingredients">
              <textarea id="ingredients" name="ingredients" onChange={handleChange} value={formData.ingredients} required={true} placeholder="ingredients"/>
              </label>
              </td>
              <td>
                <label htmlFor="preparation">
              <textarea id="preparation" name="preparation" onChange={handleChange} value={formData.preparation} required={true} placeholder="preperation"/>
              </label>
              </td>
              
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
