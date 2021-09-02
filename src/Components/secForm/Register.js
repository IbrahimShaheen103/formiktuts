import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const Register = () => {
    const options = [
        { key: 'Email', value: 'emailmoc' },
        { key: 'Telephone', value: 'telephonemoc' }
    ]
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        confirmPassword: Yup.string()
            .required()
            .oneOf([Yup.ref('password'), ''], 'Passwords must match'),
        modeOfContact: Yup.string().required('Required'),
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: Yup.string().required('Required')
        })
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
            {formik => {
                return (
                    <Form>
                        <FormikControl
                            control='input'
                            type='email'
                            label='Email'
                            name='email'
                        />
                        <FormikControl
                            control='input'
                            type='password'
                            label='Password'
                            name='password'
                        />
                        <FormikControl
                            control='input'
                            type='password'
                            label='Confirm Password'
                            name='confirmPassword'
                        />
                        <FormikControl
                            control='radio'
                            label='Mode of contact'
                            name='modeOfContact'
                            options={options}
                        />
                        <FormikControl
                            control='input'
                            type='text'
                            label='Phone number'
                            name='phone'
                        />
                        <button type='submit' disabled={!formik.isValid}>
                            Submit
                        </button>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default Register;