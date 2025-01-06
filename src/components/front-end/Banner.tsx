import React from 'react'

const Banner = () => {
  return (
    <div className='container mt-32'>
        <div className="grid lg:grid-cols-[66%,34%] gap-4 pr-[15px]">
            <div className="h-[200px] md:h-[260px] bg-[url(https://www.colmi.info/cdn/shop/files/COLMi_C81_Smartwatch_banner_01_pc_5e182dd4-b341-411a-a78c-f9c50d881a61.jpg?v=1683619723&width=3840)] bg-cover bg-center rounded-xl p-8 md:p-16">
                <p className="text-topHeadingSecondary text-xl font-medium">
                    Sale 20% off all store
                </p>
                <h2 className="text-topHeadingPrimary font-bold text-xl sm:text-3xl max-w-[240px]">
                    Smartwatch COOL MI 2025
                </h2>
                <a href="#" className='inline-block m-6 hover:text-accent text-topHeadingSecondary font-medium'>
                    Shop Now
                </a>
            </div>
            <div className="h-[260px] bg-[url(https://image-cdn-flare.qdm.cloud/q626562e5556dc/image/data/2022/01/19/ae43ff546d43bb36dda738809d3df26c.jpg)] bg-right rounded-xl hidden lg:block"></div>
        </div>
    </div>
  )
}

export default Banner