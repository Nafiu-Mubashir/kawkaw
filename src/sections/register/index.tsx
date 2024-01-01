import Countdown from "~/components/countdown"

const RegisterNow = () => {
  

  return (
    <div style={{
      backgroundImage: "url('/bg-slide-2.webp')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}
      className='p-2 lg:p-5 w-full'
    >
      <div className='w-full md:w-[90%] lg:w-[80%] m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center'>
          <div className=''>
            <div className='mb-3'>
              <p className='text-white'>GET 100 OF ONLINE COURSES FOR FREE</p>
              <h3 className='font-bold text-[25px] md:text-[30px] lg:text-[50px] text-white'>REGISTER NOW</h3>
            </div>

            <Countdown />

          </div>

          <div className='p-2 lg:p-4'>
            <div className='bg-white w-[90%] lg:w-[80%] m-auto '>
              <form className="" action="#" method="POST">
                <div className='bg-mine p-6 rounded-b-[50%] h-[35%] lg:h-[40%]'>
                  <h3 className='text-white font-bold text-center text-[16px] lg:text-[25px] mt-5 lg:mt-8'>Create your free account now and immediately get access to 100s of online courses.</h3>
                </div>
                <div className='mt-5 p-4 lg:p-10'>

                  <div className="mt-2">
                    <input id="text" name="text" type="text" autoComplete="text" placeholder='Your name*' required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                  </div>

                  <div className="mt-2">
                    <input id="email" name="email" type="email" placeholder='Email*' autoComplete="email" required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                  </div>

                  <div className="mt-2">
                    <input id="phone" name="phone" type="phone" placeholder='Phone*' autoComplete="phone" required className="block w-full border py-3 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 focus:ring-0 focus:ring-inset outline-none sm:text-sm sm:leading-6" />
                  </div>

                  <div className='mt-2 mb-'>
                    <button type="submit" className="uppercase flex w-full justify-center py-3 px-3 text-sm font-semibold leading-6 bg-black text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Get it now</button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div >
      </div >
    </div >
  )
}

export default RegisterNow