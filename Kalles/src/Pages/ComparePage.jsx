import React from 'react'

export const ComparePage = () => {
  return (
    <div className='compare-container'>
      <div
        style={{
          backgroundImage: `url('/images/women/bg-heading.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '150px',
          width: '100%',
        }} className='bg-header flex items-center justify-center'>
        <h1 className='text-[#fff] z-10 text-xl medium'>Collection</h1>
      </div>
      <div className="compare-table  flex items-center justify-center py-30 px-20">
        <table className='border border-[#ddd]'>
          <tr className='border border-[#ddd]'  >
            <th className='border border-[#ddd] p-20'>R1C1</th>
            <td className='border border-[#ddd]'>
              <div className='flex gap-3 flex-col items-center justify-center px-40 py-8'>
                <span className='text-xs'>Remove <i className="bi bi-x-lg"></i></span>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <img src="/images/men/pro-1.webp" className='w-[150px] h-auto' alt="" />
                  <span className='text-sm medium'>Product name</span>
                  <span className='text-[#95bf46] text-sm'>$20</span>
                </div>
                <div className='flex flex-col gap-3 items-center justify-center'>
                  <button className="relative w-30 h-10 px-6 text-sm rounded-full border border-[#56cfe1] text-[#56cfe1] hover:bg-[#56cfe1] overflow-hidden cursor-pointer group transition-all duration-300">
                    <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-8">
                      Quick View
                    </span>
                    <i className="bi bi-eye absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 transition-all duration-300 text-lg group-hover:text-[#fff] group-hover:translate-y-0 group-hover:opacity-100"></i>
                  </button>
                  <button className="relative w-30 h-10 px-6 text-sm rounded-full border bg-[#56cfe1] text-[#fff] hover:bg-[#000] overflow-hidden cursor-pointer group transition-all duration-300">
                    <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-8">
                      Quick View
                    </span>
                    <i className="bi bi-cart absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 transition-all duration-300 text-lg group-hover:text-[#fff] group-hover:translate-y-0 group-hover:opacity-100"></i>
                  </button>
                </div>
              </div>
            </td>
            <td className='border border-[#ddd]'>
              <div className='flex gap-3 flex-col items-center justify-center px-40 py-8'>
                <span className='text-xs'>Remove <i className="bi bi-x-lg"></i></span>
                <div className='flex flex-col gap-2 items-center justify-center'>
                  <img src="/images/men/pro-1.webp" className='w-[150px] h-auto' alt="" />
                  <span className='text-sm medium'>Product name</span>
                  <span className='text-[#95bf46] text-sm'>$20</span>
                </div>
                <div className='flex flex-col gap-3 items-center justify-center'>
                  <button className="relative w-30 h-10 px-6 text-sm rounded-full border border-[#56cfe1] text-[#56cfe1] hover:bg-[#56cfe1] overflow-hidden cursor-pointer group transition-all duration-300">
                    <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-8">
                      Quick View
                    </span>
                    <i className="bi bi-eye absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 transition-all duration-300 text-lg group-hover:text-[#fff] group-hover:translate-y-0 group-hover:opacity-100"></i>
                  </button>
                  <button className="relative w-30 h-10 px-6 text-sm rounded-full border bg-[#56cfe1] text-[#fff] hover:bg-[#000] overflow-hidden cursor-pointer group transition-all duration-300">
                    <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-8">
                      Quick View
                    </span>
                    <i className="bi bi-cart absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 transition-all duration-300 text-lg group-hover:text-[#fff] group-hover:translate-y-0 group-hover:opacity-100"></i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr className=' bg-[#F4F4F4]'>
            <td className='border-x border-[#ddd] medium p-4 text-center'>Availability</td>
            <td className='border-x border-[#ddd] text-sm p-4 text-center medium text-[#95bf46]'>In Stock</td>
            <td className='border-x border-[#ddd] text-sm p-4 text-center medium text-[#95bf46]'>In Stock</td>
          </tr>
          <tr className=''>
            <td className='border-x border-[#ddd] medium p-4 text-center'>Vendor</td>
            <td className='border-x border-[#ddd] text-sm p-4 text-center'>Kalles</td>
            <td className='border-x border-[#ddd] text-sm p-4 text-center'>Kalles</td>
          </tr>
          <tr className='bg-[#F4F4F4]'>
            <td className='border-x border-[#ddd] medium p-4 text-center'>Color</td>
            <td className='border-x border-[#ddd] text-sm p-4 text-center'>-</td>
            <td className='border-x border-[#ddd] text-sm p-4 text-center'>-</td>
          </tr>
        </table>

      </div>
    </div>
  )
}
