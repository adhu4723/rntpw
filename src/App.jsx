import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './layout/Navbar'
import Carousel from './component/Carousel'
import BlogCard from './component/BlogCard'
import { Blogdata } from './assets/Data/BlogData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <Carousel/>
       <div>

       </div>
       <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
        {Blogdata.map(itms=>(
       <BlogCard data={itms}/>
        ))

        }
       </div>
    </>
  )
}

export default App
