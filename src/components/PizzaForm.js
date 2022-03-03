import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import schema from '../validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';
import { boolean } from "yup";
export default function PizzaForm(props) {
    // const {
    // /  values,
    //   submit,
    //   change,
    //   disabled,
    //   errors,
    // } = props


  console.log(props)
    const onSubmit = evt => {
      evt.preventDefault()
      //submit()
    }

// const PizzaForm = () => {
     const { type } = useParams()

     const [errors, setErrors] = useState({
        name: "",
      size: "",
      olives: "",
      mushrooms: "",
      onions: "",
      pinapple: "",
      instructions: ""
    })

    const [form, setForm] = useState({
        name: '',
        size: '',
        olives: false,
        mushrooms: false,
        onions: false,
        pineapple: false,
        instructions: '',
    })
const formChange = (e) => {
    console.log(e.target.name, e.target.value);
    if (form.name.length<=2) {
        setErrors({
            ...errors, name: "name must be at least 2 characters"
          });
       console.log("NAME TOO SHORT")
    } else {
        setErrors({
            ...errors, name: ""
          });
    }
    setForm({...form, [e.target.name]:e.target.value})
}

const submitForm = (e) => {
    e.preventDefault()
    const orderData = {
        name: form.name,
        size: form.size,
        olives: form.olives,
        mushrooms: form.mushrooms,
        onions: form.onions,
        pineapple: form.pineapple,
        instructions: form.instructions
    }
    console.log(orderData)
    axios.post('https://reqres.in/api/orders', orderData)
      .then(res => {
        console.log("order posted")
      }).catch(err => console.error(err))


}
    return(<article>
    <h1>Type {type} order form.</h1>
    <form onSubmit={submitForm} id="pizza-form">
        <label>
            Enter your name
            <input onChange={formChange} type="text" name="name" id="name-input"></input>;
        </label>
        { <p className="error">{errors.name}</p> }

        <label>
            Enter your special instructions
            <input onChange={formChange} type="text" name="instructions" id= "special-text"></input>
        </label>
        <label>Select a pizza size</label>
            <select  onChange={formChange}
            id="size-dropdown"
            name="size"
            value={form.size}
            >
            <option value=''>- Select an option -</option>
            <option value='small'>small</option>
            <option value='medium'>medium</option>
            <option value='large'>large</option>
            </select>
            <h4>Toppings</h4>
            <label><input onChange={formChange} type="checkbox" name="olives"></input></label>
            <label><input onChange={formChange} type="checkbox" name="mushrooms"></input></label>
            <label><input onChange={formChange} type="checkbox" name="onions"></input></label>
            <label><input onChange={formChange} type="checkbox" name="pineapple"></input></label>
            <button type="submit" id="order-button">Submit!</button>

    </form>
    </article>


// const validate = (name, value) => {
//     yup.reach(schema, name)
//       .validate(value)
//       .then(() => setFormErrors({ ...formErrors, [name]: '' }))
//       .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
//   }

  
//     // 🔥 STEP 10- RUN VALIDATION WITH YUP
//     const inputChange = (name, value) => {
//         validate(name, value);
//         setFormValues({
//         ...formValues,
//         [name]: value
//     })
//   }

//   const formSubmit = () => {
//     const newPizza = {
//       name: formValues.name.trim(),
//       size: formValues.email.trim(),
//       olives: formValues.role.trim(),
//       mushrooms: formValues.civil.trim(),
//       onions: formValues.civil.trim(),
//       pineapple: formValues.civil.trim(),
//       // 🔥 STEP 7- WHAT ABOUT HOBBIES?
//       hobbies: ['hiking', 'reading', 'coding'].filter(hobby => formValues[hobby])
//     }


    )}