import React from 'react'
import { User,Calendar  } from 'lucide-react';

function BlogCard({data}) {
  return (
    <div className=' space-y-2'>
      <img src="https://images.unsplash.com/photo-1570799650082-f3eb7207f588?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNwaXJpdHVhbCUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHwy" alt="" />
      <h1 className='text-lg font-bold hover:underline cursor-pointer'>{data.title}</h1>
      <p className=''>{data.discription}</p>
      <div className='flex gap-2 flex-wrap'>
       <div className='flex gap-1 items-center'>
       <User color='gray' />
       <p className='text-gray-600'>Rajesh Navaneetham</p>
       </div>
       <div className='flex gap-1'>
       <Calendar color='gray' />
       <p className='text-gray-600'>{data.dat}</p>
       </div>
      </div>
    </div>
  )
}

export default BlogCard
