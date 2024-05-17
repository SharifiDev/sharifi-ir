import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className=' relative bg-white dark:bg-[#242A38] py-8 md:py-11  w-full flex justify-center'>
                <svg className=" rotate-180 hidden md:block absolute top-0 right-0 left-0 m-auto text-gray-100 dark:text-gray-900 w-[100px] h-[22px]">
                    <use href="#crve"></use>
                </svg>
                <div className="hidden md:flex -translate-y-2/4 absolute top-0 right-0 left-0 m-auto  items-center justify-center w-[30px] h-[30px] border-2  border-orange-300 rounded-full ">
                    <svg className="w-5 h-5 text-zinc-700 dark:text-white  rotate-90">
                        <use href="#chever-arow"></use>
                    </svg>
                </div>
                <div className=' sm:w-[94%] lg:w-[90%]  px-5 md:mx-0 '>
                    <div className=' flex justify-between flex-wrap flex-col md:flex-row mx-auto text-zinc-700 dark:text-white '>
                        <div className=''>
                            <h1 className='text-2xl mb-3 mt-[26px] font-danaMedium dark:text-white text-zinc-700'> در تماس باشیم</h1>
                            <div>
                                <div className='md:text-xl mb-6  md:mb-10 '>

                                    <div className='mb-2'>
                                        <svg class=" shrink-0 w-5 h-5 md-w-6 md:-h-6 dark:text-white text-zinc-900">
                                            <use href='#map-pin'></use>
                                        </svg>
                                        مشهد امام رضا دو  بلوار ساجدی ساجدی یک پلاک 135
                                    </div>

                                    <div className='flex flex-col flex-wrap  gap-y-4  text-xl'>
                                        <a href='mailto:sinasharifi@gmail.com' className='flex text-xl gap-x-2 md:gap-x-3 text-orange-300 '>
                                            <svg class="w-5 h-5 md-w-6 md:-h-6 ">
                                                <use href='#email'></use>
                                            </svg>
                                            ali.sharifi6487@gmail.com
                                        </a>
                                        <div className='flex items-center gap-x-2 md:gap-x-3 '>
                                            <svg class="w-5 h-5 md-w-6 md:-h-6">
                                                <use href='#phone'></use>
                                            </svg>
                                            <span dir='rtl' className=' inline-block'>09940256469</span>
                                            <span>09035420266</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div>
                            <h1 className='text-2xl mb-7 mt-[26px] font-danaMedium '> شبکه های اجتماعی</h1>
                            <div className='grid grid-cols-2 gap-y-2.5 gap-x-10 md:gap-x-16 md:gap-y-5 max-w-[350px] md:max-w-[500px]'>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    گیت هاب
                                </a>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    لینکدین
                                </a>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    انستاگرام
                                </a>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    تلگرام
                                </a>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    واتساب
                                </a>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    فیس بوک
                                </a>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    واتساب
                                </a>
                                <a href="#" className='text-base md:text-xl  hover:text-orange-300  '>
                                    <span className='w-2.5 h-1 ml-2.5 md:ml-3 bg-current bg-gray-300 inline-block rounded-full'></span>
                                    ایتا
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className='boot    border-t  border-t-black/10 dark:border-white/10  mt-11 dark:text-white text-zinc-700 gap-x-5 flex-wrap pt-11'>
                        <div className='flex  flex-col md:flex-row  md:justify-between  justify-center  items-center gap-y-3 '>

                            <p >تمام حقوق این رابط کاربری متعلق به <span className='text-orange-300'>علی شریفی</span> میباشد </p>
                            <p> Copyright © 2023 Ali Sharifi. All rights reserved.</p>
                        </div>
                        <div className='ltr-text text-left text-footer '></div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
