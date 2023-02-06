import React from 'react'

const NoticeCard = ({title,message}) => {
  return (
    <div className=" bg-lightGreen w-full mb-4 p-4 rounded-md flex flex-col gap-3 shadow hover:shadow-md cursor-pointer">
      <h3 className="text-xl font-medium ">{title}</h3>
      <h2 className="text-sm font-medium">{message}</h2>
    </div>
  )
}

export default NoticeCard