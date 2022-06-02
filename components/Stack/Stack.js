import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { content } from '../../content';

const Stack = () => {
  return (
    <div
        className="min-h-screen flex items-center justify-center flex-col"x
        style={{
        background: '#eee',
        }}
        id="mystack"
    >
        <h1 data-aos="fade-down" data-aos-delay="500" className='text-5xl font-bold mb-10'> Mon environnement</h1>
        <div>
            <div className='flex flex-wrap justify-center'>
                {content.stack.tech.map((stack, index) => {
                    return (
                        <span
                            data-aos="fade-up top-bottom"
                            data-aos-delay="1000"
                            key={index}
                            className={` h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${
                                index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
                              }`}
                        >
                            <LazyLoadImage effect='blur' src={stack.img} alt={stack.alt} />
                        </span>
                    )
                })}
            </div>
        </div>
        <p data-aos="fade-up" data-aos-delay="1500" className='mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl'>
            {content.stack.desc}
        </p>
    </div>
  )
}

export default Stack