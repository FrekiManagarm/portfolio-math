import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Link from 'next/link';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Bonjour, moi c'est<span className='text-[#5651e5]'> Mathieu Chambaud</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Développeur Full-Stack Web et Mobile</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            Je suis un développeur Full-Stack Web et Mobile en devenir (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/mathieu-chambaud-9b4106170/'
              target='_blank'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/FrekiManagarm' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <a href='https://www.facebook.com/mathieu.chambaud.9/' target="_blank">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFacebook />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main