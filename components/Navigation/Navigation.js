import { Link } from 'react-scroll';
import { content } from '../../content';

const Navigation = () => {
  return (
    <div
        style={{
            background: '#091C29'
        }}
        className="fixed top-0 w-screen z-40"
    >
        <div className='flex items-center w-10/12 mx-auto py-3' data-aos="fade-up" data-aos-delay="500">
            <Link
                to={"header"}
                smooth
                className='text-3xl font-bold text-white flex-1 cursor-pointer'
            >
                <h1>
                    {content.nav.logo}
                    <span className='h-3 w-3 bg-red-400 inline-block ml-2 rounded-full'></span>
                </h1>
            </Link>

            <div className='text-white text-xl'>
                {content.nav.links.map((link, index) => {
                    return (
                        <Link to={link.to} smooth>
                            <span className='mr-4 cursor-pointer' key={index}>
                                {link.text}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Navigation