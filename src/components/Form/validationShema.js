import * as yup from 'yup'

export const validationSchema = yup.object({
    name: yup
        .string()
        .required('The field must be required')
        .matches(/[a-zA-Z]/, 'Only letters')
        .min(2, 'min 2')
        .max(10, 'max 10'),
     lastName: yup
        .string()
         .required('The field must be required')
         .matches(/[a-zA-Z]/, 'Only letters')
        .min(4, 'min 4')
        .max(15, 'max 15'),
    phone: yup
        .string()
        .required('The field must be required')
        .matches(/[0-9]/, 'Only numbers')
        .min(11, 'min 11')
        .max(11, 'max 11'),
    age: yup
        .string()
        .required('The field must be required')
        .matches(/[0-9]/, 'Only numbers'),
    address: yup
        .string()
        .required('The field must be required'), 
})