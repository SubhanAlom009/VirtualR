import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import codeImg from '../assets/code.jpg'
import {checklistItems} from '../constants'

function Workflow() {
  return (
    <div  className='flex flex-col justify-center mt-20 border-b'>
        <h1  className='text-3xl tracking-wide text-center sm:5xl lg:6xl'>Accelerate Your <span className='text-transparent bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text'>Coding Workflow</span></h1>
        <div className='flex flex-wrap justify-center'>
            <div className='w-full p-2 lg:w-1/2'>
                <img src={codeImg} alt="code" />
            </div>
            <div className='w-full pt-12 lg:w-1/2'>
                {
                    checklistItems.map((item, index) => (
                        <div key={index} className='flex mb-12'>
                            <div key={index} className='flex items-center w-10 h-10 p-2 mx-6 text-green-400 rounded-full bg-neutral-900'>
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className='mb-2'>{item.title}</h5>
                                <p className='text-neutral-500'>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Workflow
