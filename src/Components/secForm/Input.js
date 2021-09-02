import { ErrorMessage, Field } from "formik";
import TextError from './TextError'
const Input = ({ label, name, ...rest }) => {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage component={TextError} name={name} />
        </div>
    );
}

export default Input;