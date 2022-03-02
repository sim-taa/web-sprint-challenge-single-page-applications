import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import schema from '../validation/formSchema';
import * as yup from 'yup';

const PizzaForm = () => {
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
            <input type="text" name="name" id= "name-input"></input>;
        </label>
    </form>
    </article>)
}

export default PizzaForm;