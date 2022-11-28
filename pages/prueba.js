import React, {useState} from 'react'
import Select from 'react-select'
import { useForm } from "react-hook-form";


const prueba = () => {
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
    }
    const optionsIndustry = [
        {value: 'Agriculture', label: 'Agriculture'},
        {value: 'Business Services', label: 'Business Services'},
        {value: 'Construction', label: 'Construction'}
    ]
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // data suscripcion peticion demo
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("country")}>
                {optionsIndustry.map( (option) =>(
                    <option value={option.value}>{option.label}</option>
                )
                )}
            </select>
            <input type="submit" value="SUBSCRIBE TO UPDATES"/>
        </form>
    ) 
}

export default prueba