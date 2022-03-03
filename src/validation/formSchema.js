import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('name is required')
    .min(2, 'name must be at least 2 characters'),
  size: yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'pick a size'),
  olives: yup.boolean(),
  mushrooms: yup.boolean(),
  onions: yup.boolean(),
  pinapple: yup.boolean(),
  instructions: yup
  .string()
})

export default formSchema;