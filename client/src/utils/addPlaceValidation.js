import { string } from 'yup';

const requiredStringSchema = message =>
  string().required(`${message} is required'`);

export default requiredStringSchema;
