import React from 'react'

export default function AboutMe() {
    return (
        <div className='mt-20' >
            <div className='container flex flex-col items-center lg:items-start lg:flex-row justify-center gap-12'>
                <div className=" lg:w-[40%] ">
                    <img src="./images/sharifi.png" className=' rounded-md shadow-xl' alt="" />
                </div>
                <div className="lg:w-1/2 dark:text-white"  >
                    <h1 className=' font-danaBold  text-2xl mb-3'>درباره من</h1>
                    <span className=' text-xl mb-4 inline-block'>من یک دانشجو مهندس کامپیوتر ، و توسعه دهنده وب هستم.</span>
                    <p className='w-full lg:max-w-[700px] text-base/[33px]  mb-5 text-zinc-700 dark:text-white'>    من یک توسعه‌دهنده فرانت‌اند با چندین سال تجربه در زمینه طراحی و توسعه وبسایت‌های پیچیده و مدرن هستم. تخصص من در استفاده از فناوری‌های مانند HTML، CSS و JavaScript است و توانایی کار با کتابخانه پرکاربرد  React   را دارم. تجربه کار با API‌های مختلف و ایجاد ارتباط بین بک‌اند و فرانت‌اند برای ایجاد وبسایت‌های تعاملی و پویا از دیگر قابلیت‌های من می‌باشد. از ابزارهای توسعه مانند Git و npm به خوبی استفاده می‌کنم و علاقه‌مند به پیشرفت و به‌روز بودن با تکنولوژی‌های جدید در زمینه توسعه وب هستم. با توانایی حل مسائل پیچیده و همکاری فعال با تیم‌های توسعه و طراحی، هدف من ایجاد وبسایت‌های بی‌نظیر و به‌روز با استفاده از بهترین استانداردهای صنعتی می‌باشد.
</p>
                    <div className='flex flex-col md:flex-row md:child:w-1/2 gap-y-6 flex-wrap justify-between border-t border-t-gray-200 dark:border-t-white/10 pt-5'>
                        <div className='flex  flex-col'>
                            <div className='flex  items-center gap-x-2'>
                                <div className='w-8 h-8 flex-center bg-white dark:bg-[#242A38] rounded-full'>
                                    <svg className='w-5 h-5 dark:text- '>
                                        <use href='#user'></use>
                                    </svg>
                                </div>
                                <span className='inline-block text-zinc-950 dark:text-white font-danaMedium'> نام من:</span>
                            </div>
                            <div className='flex mr-10 mt-2'>
                                <span className='text-zinc-700 dark:text-white'>علی شریفی</span>
                            </div>
                        </div>
                        <div className='flex  flex-col'>
                            <div className='flex  items-center gap-x-2'>
                                <div className='w-8 h-8 flex-center bg-white dark:bg-[#242A38] rounded-full'>
                                    <svg className='w-5 h-5 dark:text- '>
                                        <use href='#calendar'></use>
                                    </svg>
                                </div>
                                <span className='inline-block text-zinc-950 dark:text-white font-danaMedium'> تاریخ تولد:</span>
                            </div>
                            <div className='flex mr-10 mt-2'>
                                <span className='text-zinc-700 dark:text-white'>27 اردیبهشت1381</span>
                            </div>
                        </div>
                        <div className='flex  flex-col'>
                            <div className='flex  items-center gap-x-2'>
                                <div className='w-8 h-8 flex-center bg-white dark:bg-[#242A38] rounded-full'>
                                    <svg className='w-5 h-5 dark:text- '>
                                        <use href='#email'></use>
                                    </svg>
                                </div>
                                <span className='inline-block text-zinc-950 dark:text-white font-danaMedium'>ایمیل:</span>
                            </div>
                            <div className='flex mr-10 mt-2'>
                                <a href='mailto:ali.sharifi6487@gmail.com' className='text-zinc-700 dark:text-white'>ali.sharifi6487@gmail.com</a>
                            </div>
                        </div>
                        <div className='flex  flex-col'>
                            <div className='flex  items-center gap-x-2'>
                                <div className='w-8 h-8 flex-center bg-white dark:bg-[#242A38] rounded-full'>
                                    <svg className='w-5 h-5 dark:text- '>
                                        <use href='#map'></use>
                                    </svg>
                                </div>
                                <span className='inline-block text-zinc-950 dark:text-white font-danaMedium'> آدرس:</span>
                            </div>
                            <div className='flex mr-10 mt-2'>
                                <span className='text-zinc-700 dark:text-white'>  مشهد - بلوار ساجدی -ساجدی یک پلاک 135</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='text-center mt-10 '>
                <button className=' rounded-full  w-48 h-10 bg-white  dark:bg-[#242A38] dark:text-white hover:bg-gray-200 hover:dark:bg-zinc-500 transition-colors'>با من تماس بگیرید</button>
            </div>
        </div>
    )
}
