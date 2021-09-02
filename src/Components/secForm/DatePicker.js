import { ErrorMessage, Field } from "formik"
import DataView from 'react-datepicker'
import TextError from "./TextError";
import 'react-datepicker/dist/react-datepicker.css'

const DatePicker = ({ label, name, ...rest }) => {
    return ( 
        <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field name={name}>
            {
                ({form, field})=>{
                    const {setFieldValue}=form
                    const {value}=field
                    return(
                        <DataView
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={val=>setFieldValue(name,val)}
                        

                        />
                    )
                }
            }
        </Field>
        <ErrorMessage component={TextError} name={name} />
        </div>
     );
}
 
export default DatePicker;