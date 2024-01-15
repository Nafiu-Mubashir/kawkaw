import * as  yup from "yup";

import { Loader, Modal } from '@mantine/core';
import { useDispatch, useSelector } from "react-redux";

import { FormValues } from "~/type";
import Link from 'next/link';
import { LoginAction } from "~/lib/action";
import { RootState } from "~/lib/store";
import { useDisclosure } from '@mantine/hooks';
import { useFormik } from 'formik';

export function Login() {
  const [opened, { open, close }] = useDisclosure(false);
  const users = useSelector((state: RootState) => state.auth.error);
  const dispatch = useDispatch<any>()
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
      username: ""
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {

      alert("Holla")
      console.log(values);
      dispatch(values)
      
      resetForm();
    },
    // validationSchema: yup.object({
    //   username: yup.string().required('This field is required'),
    //   password: yup.string().required('This field is required'),
    // }),
  });
  const holla = () => {
    // alert("button")
  }

  const { dirty, handleBlur, errors, touched, handleChange, handleSubmit, values, setSubmitting, isSubmitting } = formik
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
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login with your site account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" onChange={handleChange} value={values.email} onBlur={handleBlur} type="email" autoComplete="email" placeholder='Email Address' required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                </div>
                {/* {errors.username && touched.username ? (
                  <div className='text-red-500 mt-[-20px] text-sm'>{errors.username}</div>
                ) : (null)} */}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  <div className="text-sm">
                    <Link href="#" className="font-semibold text-hoverMine text-mine">Forgot password?</Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input id="password" name="password" onChange={handleChange} value={values.password} onBlur={handleBlur} type="password" placeholder='Password' autoComplete="current-password" required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-hoverMine py-3 px-3 text-sm font-semibold leading-6 text-white shadow-sm bg-mine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hoverMine" onClick={holla}>{isSubmitting ? <Loader color="white" /> : 'Sign in'}</button>
              </div>
              <button type="submit" onClick={holla}>Holla</button>
            </form>

            <p className="mt-10 mb-10 text-center text-sm text-gray-500">
              Not a member?
              <Link href="#" className="font-semibold leading-6 text-hoverMine text-mine"> Register now</Link>
            </p>

            <p className="mt-10 mb-5 text-center text-sm text-gray-500">
              Wanna see how Student, Instructor, or Admin look?
              <Link href="#" className="font-semibold leading-6 text-hoverMine text-mine"> Click here to access Demo Account</Link>
            </p>
          </div>
        </div>
      </Modal>

      <button onClick={open} className='hover:text-[#FFB606] hover:underline'>Login</button>
    </>
  );
}