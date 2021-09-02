import { Form, Formik } from "formik"
import * as Yup from 'yup'
import FormControl from './FormikControl'
const Login = () => {
    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        password: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('Form data', values)
    }
    return ( 
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      
        >
            {formik=>
                <Form>
                    <FormControl 
                        control='input'
                        type='email'
                        label='E-mail'
                        name='email'
                    />
                       <FormControl 
                        control='input'
                        type='password'
                        label='Password'
                        name='password'
                    />
                    <button
                     type='submit'
                     disabled={!formik.isValid}
                     >
                         Submit
                    </button>
                </Form>
            }
        </Formik>

     );
}

export default Login;