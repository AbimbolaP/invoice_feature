import React from 'react'
import { useSelector } from 'react-redux'
import InvoiceCard from './InvoiceCard'

function Center() {

    const invoices = useSelector((state) => state.invoices.allInvoice)


    return (
        <div>
            <div className='dark:bg-[#141625] scrollbar-hide duration-300 min-h-screen bg-[#f8f8fb] py-[34px] px-2 md:px-8 lg:px-12 lg:py-[72px]  '>
                    {/* Center Header */}

                    <div className=' min-w-full max-h-[64px] flex items-center justify-between'>
                        <div>
                            <h1 className=' lg:text-4xl md:text-2xl  text-xl  dark:text-white tracking-wide font-semibold'>Invoices</h1>
                            <p className=' text-gray-500 font-light'>There are {invoices.length} total invoices.</p>
                        </div>

                        <div className=' flex  max-h-full  items-center '>
                            <div className=' flex items-center'>
                                <input type='text' id='small-input' placeholder='Search Invoice' className=' hidden md:block dark:text-white font-medium'/>
                                <input type='text' id='small-input' placeholder='Search' className=' md:hidden dark:text-white font-medium'/>
                                    

                            <button  className=' hover:opacity-80 ml-4 md:ml-10 flex items-center py-2 px-2 md:space-x-3 space-x-2 bg-black rounded-full'>
                                <p className=' md:block hidden  text-white font-semibold text-lg'> Create New invoice</p>
                                <p className=' md:hidden block  text-white font-semibold text-base'>New</p>
                            </button>
                            </div>

                        </div>
                    </div>

                    {/* Invoice Cards */}

                    <div className=' space-y-4 mt-10'>
                        { invoices.map( (invoice , index)=> {
                                return(
                                    <div>
                                        <InvoiceCard invoice={invoice}/>
                                    </div>
                                )
                                
                                
                            })
                        }
                    </div>

            </div>
        </div>
    )
};

export default Center