import React from "react";
import { useParams } from "react-router-dom";

const PizzaForm = () => {
    const { type } = useParams()

    return(<article>
    <h1>Type {type} order form.</h1>
    </article>)
}

export default PizzaForm;