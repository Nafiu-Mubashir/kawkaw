import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function Registration() {
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
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register a new account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-s">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                <div className="mt-2">
                  <input id="username" name="username" type="text" autoComplete="email" placeholder='Username' required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-mine  focus:ring-1 focus:ring-inset focus:ring-mine  sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" name="email" type="email" autoComplete="email" placeholder='Email Address' required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                </div>
                <div className="mt-2">
                  <input id="password" name="password" type="password" placeholder='Password' autoComplete="current-password" required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="c_password" className="block text-sm font-medium leading-6 text-gray-900">Repeat Password</label>
                </div>
                <div className="mt-2">
                  <input id="c_password" name="c_password" type="password" placeholder='Repeat Password' autoComplete="current-password" required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-mine py-3 px-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-mine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mine">Sign in</button>
              </div>
            </form>

            <p className="mt-10 mb-10 text-center text-sm text-gray-500">
              Not a member?
              <a href="#" className="font-semibold leading-6 text-mine hover:text-mine"> Loginr now</a>
            </p>

            <p className="mt-10 mb-5 text-center text-sm text-gray-500">
              Wanna see how Student, Instructor, or Admin look?
              <a href="#" className="font-semibold leading-6 text-mine hover:text-mine"> Click here to access Demo Account</a>
            </p>
          </div>
        </div>
      </Modal>

      <button onClick={open} className='hover:text-[#FFB606] hover:underline'>Register</button>
    </>
  );
}