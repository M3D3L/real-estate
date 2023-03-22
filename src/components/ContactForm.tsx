import React from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface IFormValues {
  name: string;
  email: string;
  message: string;
}

interface IProps {
  onSubmit: (values: IFormValues, actions: FormikHelpers<IFormValues>) => void;
}

const initialValues: IFormValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

const ContactForm: React.FC<IProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="bg-white p-8 rounded-lg grid content-center min-h-[500px]">
          <div className="mb-4">
            <label htmlFor="name" className="block text-teal-400 text-xl font-semibold mb-2">
              Name
            </label>
            <Field
              name="name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="name"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-teal-400 text-xl font-semibold mb-2">
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-teal-400 text-xl font-semibold mb-2"
            >
              Message
            </label>
            <Field
              name="message"
              as="textarea"
              rows={4}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name="message"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>

          <button
            type="submit"
            className="bg-teal-400 hover:bg-teal-500 hover:translate-y-[2px] transition-all duration-150 ease-in-out text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;