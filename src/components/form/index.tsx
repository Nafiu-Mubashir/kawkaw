import React from 'react'

const Form = ({ classes, btn }: { classes: string; btn: string }) => {
  return (
    <div>
      <form className={`"w-full lg:w-[60%] ${classes} mx-auto"`}>
        <div className="mb-5">
          <input type="text" id="text" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-mine focus:border-mine focus:outline-mine block w-full p-2.5 focus:placeholder-white" placeholder="name*" required />
        </div>
        <div className="mb-5">
          <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-mine focus:border-mine focus:outline-mine block w-full p-2.5 focus:placeholder-white" placeholder="email*" required />
        </div>
        <div className="mb-5">
          <input type="text" id="text" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-mine focus:border-mine focus:outline-mine block w-full p-2.5 focus:placeholder-white" placeholder="website*" required />
        </div>
        <div className="mb-5">
          <textarea id="message" className="block h-[200px] p-2.5 w-full text-sm text-gray-900 bg-white rounded border border-gray-300 focus:ring-mine focus:border-mine focus:outline-mine focus:placeholder-white" placeholder="message*"></textarea>
        </div>

        <button type="submit" className={`${btn} "text-black font-bold bg-mine focus:ring-4 focus:outline-none focus:ring-blue-300 rounded text-sm px-5 py-3 text-center"`}>Submit Now</button>
      </form>
    </div>
  )
}

export default Form