import React from 'react'

const InvoiceCard = ({invoice}) => {
  return (
    <div>
      {/* Large screen */}
      <div className='hidden md:flex duration-100 ease-in-out hover:border-gray-300 cursor-pointer duration-100 border-transparent py-4 shadow-sm px-6 rounded-lg items-center justify-between'>
                <div className='flex items-center'>
                    <h2 >
                        <span
                        className='text-[#7e88c3]'>
                            #
                        </span>
                        {invoice.id}
                    </h2>
                    <h2 className='text-sm font-light ml-6'>
                        Invoice Due {invoice.invoice.dueAt}
                    </h2>

                    <h2 className='text-sm font light ml-10'>
                        {invoice.client.name}
                    </h2>
                </div>

                <div className='flex items-center'>
                    <h1 className='text-xl mr-8'>
                        € {invoice.invoice.items.total}
                    </h1>
                </div>
      </div>

      {/* Small Screen */}

        <div className='md:hidden flex cursor-pointer py-4 shadow-sm px-6 items-center justify-between'>
            <div className='flex flex-col'>
                <h2>
                    <span className='text-[#7e88c3'>
                            #
                    </span>
                    {invoice.id}
                </h2>
                <h2 className='text-sm font-light mt-3'>
                    Invoice Due {invoice.invoice.dueAt}
                </h2>
                <h1 className='text-xl'>
                     € {invoice.invoice.items.total}
                </h1>
            </div>
        </div>
    </div>
  )
}

export default InvoiceCard
