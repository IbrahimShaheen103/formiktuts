import { ErrorMessage, Field } from "formik"
import TextError from "./TextError"

const Select = ({
    label, name, options, ...rest
}) => {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest} >
            {options.map(option=>(
                <option key={option.value} value={option.value}>
                    {option.key}
                </option>
            ))}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    );
}

export default Select;