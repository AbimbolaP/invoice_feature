import React from 'react'

const CreateNewInvoice = () => {
  return (
    <div>
          <h1 className=' font-semibold dark:text-white text-3xl'>
                 Invoice
                </h1>

                <div className=' overflow-y-scroll scrollbar-hide my-14'>
                    <h1 className=' text-[#7c5dfa] mb-4 font-medium'>
                        Seller Name
                    </h1>

                    <div className=' grid grid-cols-3 mx-1  space-y-4 '>

                        <div className=' flex flex-col col-span-3'>
                            <label className=' text-gray-400 font-light'>
                                Street Address
                            </label>
                            <input id='senderStreet'type='text' className={`dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400 border-gray-300 focus:outline-none  dark:border-gray-800`} />
                        </div>

                        <div className=' flex flex-col mr-4 col-span-1'>
                            <label className=' text-gray-400 font-light'>
                                City
                            </label>
                            <input type='text' className={`dark:bg-[#1e2139] py-2 px-4 border-[.2px] focus:outline-none  rounded-lg  focus:outline-purple-400 border-gray-300  dark:border-gray-800`} />
                        </div>
                        <div className=' flex flex-col mr-4 col-span-1'>
                            <label className=' text-gray-400 font-light'>
                                Post Code
                            </label>
                            <input type='text' className={` dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg focus:outline-none  focus:outline-purple-400 border-gray-300  dark:border-gray-800`} />
                        </div>
                        <div className=' flex flex-col col-span-1'>
                            <label className=' text-gray-400 font-light'>
                                Country
                            </label>
                            <input type='text' className={` dark:bg-[#1e2139] py-2 px-4 border-[.2px] focus:outline-none  rounded-lg  focus:outline-purple-400  border-gray-300 dark:border-gray-800`} />
                        </div>


                    </div>

                    {/* Customer info Section */}

                    <h1 className=' text-[#7c5dfa] my-4 mt-10 font-medium'>
                        Bill To
                    </h1>

                    <div className=' grid grid-cols-3 mx-1   space-y-4 '>
                        <div className=' flex flex-col col-span-3'>
                            <label className=' text-gray-400 font-light'>
                                Client Name
                            </label>
                            <input type='text'  className={` dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400 border-gray-300 focus:outline-none    dark:border-gray-800`} />
                        </div>

                        <div className=' flex flex-col   col-span-3'>
                            <label className=' text-gray-400 font-light'>
                                Client Email
                            </label>
                            <input type='text' className={` dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400 border-gray-300 focus:outline-none  dark:border-gray-800`} />
                        </div>

                        <div className=' flex flex-col col-span-3'>
                            <label className=' text-gray-400 font-light'>
                                Street Address
                            </label>
                            <input type='text'  className={` dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400 border-gray-300 focus:outline-none  dark:border-gray-800`} />
                        </div>

                        <div className=' flex flex-col mr-4 col-span-1'>
                            <label className=' text-gray-400 font-light'>
                                City
                            </label>
                            <input type='text' className={` dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400 border-gray-300 focus:outline-none   dark:border-gray-800`} />
                        </div>
                        <div className=' flex flex-col mr-4 col-span-1'>
                            <label className=' text-gray-400 font-light'>
                                Post Code
                            </label>
                            <input type='text'
                                className={` dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400 border-gray-300 focus:outline-none   dark:border-gray-800`}
                            />
                        </div>
                        <div className=' flex flex-col col-span-1'>
                            <label className=' text-gray-400 font-light'>
                                Country
                            </label>
                            <input type='text'
                                className={` dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400 border-gray-300 focus:outline-none  dark:border-gray-800`} />
                        </div>


                    </div>

                    <div className=' grid mx-1 grid-cols-4 mt-8 '>
                        <div className=' flex flex-col '>
                            <label className=' text-gray-400 font-light'>
                                Invoice Date
                            </label>
                            <input type='date'  className=' dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400 border-gray-300 focus:outline-none  dark:border-gray-800 dark:text-white  mr-4' />
                        </div>

                        <div className=' flex flex-col '>
                            <label className=' text-gray-400 font-light'>
                                Invoice Due
                            </label>
                            <input type='date'  className=' dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg  focus:outline-purple-400 border-gray-300 focus:outline-none  dark:border-gray-800 dark:text-white  mr-4' />
                        </div>

                        <div className=' mx-auto w-full'>
                            <label className=' text-gray-400 font-light'>
                                Payment Terms
                            </label>
                            <select className=' appearance-none w-full py-2 px-4 border-[.2px] rounded-lg focus:outline-none  dark:bg-[#1e2139] dark:text-white dark:border-gray-800  focus:outline-purple-400 border-gray-300 select-status' >
                            </select>
                        </div>

                        <div className=' mx-auto w-full'>
                            <label className=' text-gray-400 font-light'>
                                Payment Method
                            </label>
                            <select className=' appearance-none w-full py-2 px-4 border-[.2px] rounded-lg focus:outline-none  dark:bg-[#1e2139] dark:text-white dark:border-gray-800  focus:outline-purple-400 border-gray-300 select-status' >
                            </select>
                        </div>


                    </div>

                    <div className=' mx-1 mt-4 flex flex-col '>
                        <label className=' text-gray-400 font-light'>
                           Transaction Description
                        </label>
                        <input type='text' className=' dark:bg-[#1e2139] py-2 px-4 border-[.2px] rounded-lg focus:outline-none   focus:outline-purple-400 border-gray-300 dark:border-gray-800 dark:text-white' />
                    </div>

                    {/* Item List Section */}

                    <h2 className=' text-2xl text-gray-500 mt-10 '>
                        Item List
                    </h2>

                    <button
                        className=' bg-gray-200  hover:opacity-80 mx-auto py-2 items-center dark:text-white dark:bg-[#252945] justify-center rounded-xl  w-full mt-6'>
                        + Add New Item
                    </button>

                </div>

                <div className=' flex  justify-between'>
                    <div>
                        <button
                            className=' bg-gray-200  hover:opacity-80 mx-auto py-4 items-center dark:text-white  dark:bg-[#252945] justify-center  px-8 rounded-full '>
                            Discard
                        </button>
                    </div>

                    <div>
                        <button
                            className=' bg-gray-200  hover:opacity-80 mx-auto py-4 items-center dark:text-white  dark:bg-[#252845] justify-center  px-8 rounded-full '>
                            Save As Draft
                        </button>
                    </div>

                    <div>
                        <button className=' text-white  hover:opacity-80 mx-auto py-4 items-center bg-[#7c5dfa] justify-center  px-8 rounded-full ' 
                        >
                            Save & Send
                        </button>
                    </div>
                </div>

        </div>
  )
}

export default CreateNewInvoice
