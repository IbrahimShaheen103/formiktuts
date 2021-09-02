import { ErrorMessage, Field } from "formik"
import React from "react";
import TextError from "./TextError";

const RadioButtons = ({ label, name, options, ...rest }) => {
    return ( 
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name}>
                {({field})=>{
                    return options.map(option=>(
                        <React.Fragment key={option.key}>
                            <input 
                                type='radio'
                                id={option.value}
                                {...field}
                                {...rest}
                                value={option.value}
                                checked={field.value===option.value}
                            />
                             <label htmlFor={option.value}>{option.key}</label><br/>
                        </React.Fragment>
                    ))
                }}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
     );
}
 
export default RadioButtons;