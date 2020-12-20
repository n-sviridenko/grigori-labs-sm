import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  color: Yup.object().required('This field is required'),
});

export default validationSchema;
