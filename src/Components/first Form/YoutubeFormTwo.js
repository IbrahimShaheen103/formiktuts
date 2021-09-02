import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: ''
};

const onSubmit = (values) => {
    console.log(values)
};
const validationSchema = Yup.object({
    name: Yup.string().required('Requierd'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    channel: Yup.string().required('Required'),
    comments: Yup.string().min(6, 'Must be 6'),

})

const YouTubeFormTwo = () => {


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}

        >
            {formik => {
                return (
                    <Form >
                        <div className='form-control'>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' id='name' name='name' />
                            <ErrorMessage name='name' component={TextError} />
                        </div>

                        <div className='form-control'>
                            <label htmlFor='email' >E-mail</label>
                            <Field type='email' id='email' name='email' />
                            <ErrorMessage name='email' component={TextError}></ErrorMessage>
                        </div>

                        <div className='form-control'>
                            <label htmlFor='channel'>Channel</label>
                            <Field type='text' id='channel' name='channel' />
                            <ErrorMessage name='channel' component={TextError} />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='comments'>comments</label>
                            <Field as='textarea' type='text' id='comments' name='comments' />
                            <ErrorMessage name='comments' component={TextError} />
                        </div>

                        <button
                            type='submit'
                            disabled={!formik.isValid||formik.isSubmitting}

                        >
                            Submit
                        </button>
                    </Form>
                )
            }}
        </Formik>

    );
}

export default YouTubeFormTwo;