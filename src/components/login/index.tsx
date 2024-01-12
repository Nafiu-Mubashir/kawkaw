import Link from 'next/link';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function Login() {
  const [opened, { open, close }] = useDisclosure(false);

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
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" placeholder='Email Address' required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  <div className="text-sm">
                    <Link href="#" className="font-semibold text-hoverMine hover:text-mine">Forgot password?</Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" placeholder='Password' autoComplete="current-password" required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-hoverMine py-3 px-3 text-sm font-semibold leading-6 text-white shadow-sm bg-mine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hoverMine">Sign in</button>
              </div>
            </form>

            <p className="mt-10 mb-10 text-center text-sm text-gray-500">
              Not a member?
              <Link href="#" className="font-semibold leading-6 text-hoverMine hover:text-mine"> Register now</Link>
            </p>

            <p className="mt-10 mb-5 text-center text-sm text-gray-500">
              Wanna see how Student, Instructor, or Admin look?
              <Link href="#" className="font-semibold leading-6 text-hoverMine hover:text-mine"> Click here to access Demo Account</Link>
            </p>
          </div>
        </div>
      </Modal>

      <button onClick={open} className='hover:text-[#FFB606] hover:underline'>Login</button>
    </>
  );
}