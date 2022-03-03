import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import schema from '../validation/formSchema';
import * as yup from 'yup';
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
      submit()
    }

// const PizzaForm = () => {
     const { type } = useParams()

    const [form, setForm] = useState({
        name: '',
        size: '',
        olives: false,
        mushrooms: false,
        onions: false,
        pineapple: false,
        instructions: '',
    })

    return(<article>
    <h1>Type {type} order form.</h1>
    <form id="pizza-form">
        <label>
            Enter your name
            <input type="text" name="name" id="name-input"></input>;
        </label>
        <label>
            Enter your special instructions
            <input type="text" name="instructions" id= "special-text"></input>
        </label>
        <label>Select a pizza size</label>
            <select 
            id="size-dropdown"
            name="size"
            value=''
            >
            <option value=''>- Select an option -</option>
            <option value='small'>small</option>
            <option value='medium'>medium</option>
            <option value='large'>large</option>
            </select>
            <h4>Toppings</h4>
            <label><input type="checkbox" value="olives"></input></label>
            <label><input type="checkbox" value="mushrooms"></input></label>
            <label><input type="checkbox" value="onions"></input></label>
            <label><input type="checkbox" value="pinapple"></input></label>
            
    </form>
    </article>
    )}