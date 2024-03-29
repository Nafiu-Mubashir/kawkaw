import * as  yup from "yup";

import { FormValues } from '~/type';
import Link from 'next/link';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

export function Registration() {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch()
  const formik = useFormik<FormValues>({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      
      // Check if password matches confirm password before submitting
      if (values.password !== values.confirmPassword) {
        // Handle the case where passwords don't match
        console.log('Passwords do not match');
        return;
      }

      // Your submit logic goes here

      // Reset the form after submission
      formik.resetForm();
    },
    validationSchema: yup.object({
      email: yup.string().required('This field is required'),
      username: yup.string().required('This field is required'),
      password: yup.string().required('This field is required'),
      confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
    }),
  });
  const { dirty, handleBlur, errors, handleChange, handleSubmit, values, setSubmitting, isSubmitting } = formik
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title=""
        centered
        className='cursor-crosshair caret-white'
        size={"lg"}
        withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0.9,
        }}>
        <div className="w-[80%] m-auto">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register a new account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-s">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                <div className="mt-2">
                  <input id="username" name="username" onChange={handleChange} value={values.username} onBlur={handleBlur} type="text" autoComplete="email" placeholder='Username' required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-mine  focus:ring-1 focus:ring-inset focus:ring-mine  sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" onChange={handleChange} value={values.email} onBlur={handleBlur} type="email" autoComplete="email" placeholder='Email Address' required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                </div>
                <div className="mt-2">
                  <input id="password" name="password" onChange={handleChange} value={values.password} onBlur={handleBlur} type="password" placeholder='Password' autoComplete="current-password" required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                </div>
                <div className="mt-2">
                  <input id="confirmPassword" name="confirmPassword" onChange={handleChange} value={values.confirmPassword} onBlur={handleBlur} type="password" placeholder='Repeat Password' autoComplete="current-password" required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-mine py-3 px-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-mine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mine">Sign in</button>
              </div>
            </form>

            <p className="mt-4 mb-5 text-center text-sm text-gray-500">
              Not a member?
              <Link href="#" className="font-semibold leading-4 text-mine hover:text-mine"> Login now</Link>
            </p>

            <p className="mt-5 mb-5 text-center text-sm text-gray-500">
              Wanna see how Student, Instructor, or Admin look?
              <Link href="#" className="font-semibold leading-4 text-mine hover:text-mine"> Click here to access Demo Account</Link>
            </p>
          </div>
        </div>
      </Modal>

      <button onClick={open} className='hover:text-[#FFB606] hover:underline'>Register</button>
    </>
  );
}