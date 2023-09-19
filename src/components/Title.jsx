import React from 'react'

const Title = ({title2,title1,coloredTit,text,text2,center,
  start}) => {
  return (
    <div className={center&& "text-center"}>
        <h2 className='text-secondary text-4xl font-bold font-palanquin mb-5  text-[25px] md:text-[52px]    md:leading-[4.5rem] '>{title1} <span className='text-primary'>{coloredTit}</span> {title2}</h2>
        <p className='text-gray-400 text-[24px]  sm:w-full'>
            {text}
        </p>
        {text2 && <p className='text-gray-400 text-[18px]  mt-5 sm:w-full'>{text2}</p>}
    </div>
  )
}

export default Title