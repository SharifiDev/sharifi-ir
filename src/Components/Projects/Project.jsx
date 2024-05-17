import React from 'react'

export default function Project({url, id, img, title, data,subtitle }) {

  return (
    <div>
      <div className="Blog flex sm:block gap-x-2.5   bg-white dark:bg-[#242A38] shadow rounded-2xl">
        <div className="Blog__img group relative w-[180px] shrink-0 h-[130px] sm:w-auto sm:h-auto rounded-2xl  overflow-hidden ">
          <img src={img} className="h-full object-cover sm:h-auto" />
        </div>
        <div className="flex flex-col p-2 mt-1 md:mt-2">
          <a href="#" className="text-zinc-700 dark:text-white mb-1 md:mb-2   font-danaBold text-lg/7 md:text-xl  line-clamp-2 pl-2">{title} </a>
          <a href="#" className="text-zinc-700 dark:text-white mb-2 md:mb-3  font-dana text-sm md:text-lg">{subtitle} </a>
          <div className='text-end w-full pl-2.5 mb-2 '>
          <a href={url} target='_blank' className=' bg-orange-200 dark:bg-gray-900 p-1 px-2 md:p-2 md:px-3 text-sm rounded-md dark:text-white cursor-pointer'>مشاهده پروژه</a>
          </div>
        </div>
      </div>
    </div>
  )
}
