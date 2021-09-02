import { Form, Formik } from "formik";
import * as Yup from 'yup'
import FormikControl from "./FormikControl";

const FormikContainer = () => {
    const initialVallues = {
        email: '',
        discription: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: null,
    };
    const validationSchema = Yup.object({
        email: Yup.string().required().email(),
        discription: Yup.string().required(),
        selectOption: Yup.string().required(),
        radioOption: Yup.string().required(),
        checkboxOption: Yup.array().required(),
        birthDate: Yup.date().required().nullable()
    });
    const onSubmit = values => {
        console.log(values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }
    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'option1', value: 'option1' },
        { key: 'option2', value: 'option2' },
        { key: 'option3', value: 'option3' },
    ]
    const radioOptions = [
        { key: 'Option 1', value: 'rOption1' },
        { key: 'Option 2', value: 'rOption2' },
        { key: 'Option 3', value: 'rOption3' }
    ]
    const checkboxOptions = [
        { key: 'Option 1', value: 'cOption1' },
        { key: 'Option 2', value: 'cOption2' },
        { key: 'Option 3', value: 'cOption3' }
    ]
    return (
        <Formik
            initialValues={initialVallues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik =>
                    <Form>
                        <FormikControl
                            control='input'
                            type='email'
                            label='E-mail'
                            name='email'
                        />
                        <FormikControl
                            control='textarea'
                            label='Description'
                            name='discription'
                        />
                        <FormikControl
                            control='select'
                            label='Select a Topic'
                            name='selectOption'
                            options={dropdownOptions}
                        />
                        <FormikControl
                            control='radio'
                            label='Pick One Option'
                            name='radioOption'
                            options={radioOptions}
                        />
                        <FormikControl
                            control='checkbox'
                            label='Select Your Options'
                            name='checkboxOption'
                            options={checkboxOptions}
                        />
                        <FormikControl
                            control='date'
                            label='Pick a date'
                            name='birthDate'
                        />
                        <button type='submit'>
                            submit
                        </button>
                    </Form>
            }
        </Formik>
    );
}

export default FormikContainer;