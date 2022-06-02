import React from 'react';
import Tilt from 'react-tilt';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import GitHubCalendar from 'react-github-calendar';

export default function Work() {
  return (
      <>
        <div id="mywork" className="min-h-screen flex-wrap bg-gray-400 flex space-x-20 justify-center items-center">
        <div>
        <Tilt>
            <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col justify-between w-96 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer rounded-2xl" style={{ backgroundImage: `url('https://i.imgur.com/BYRU2ft.jpg')`}}>
            <div className="flex justify-between items-center ml-4 pr-8">
                <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Plus d'informations</div>
            </div>
            <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                <h3 className="text-xl font-bold pb-2">HardShop_Next</h3>
                <p className="truncate text-gray-500 text-sm">Retrouvez mon application HardShop en public sur GitHub développé cette fois-ci avec NextJS le fameux framework orienté SEO.</p>
                <div className="flex justify-between items-center">
                <span className="text-gray-400 text-xs">Cette année, en cours ...</span>
                </div>
            </div>
            </div>
        </Tilt>
        </div>
        <div>
        <Tilt>
            <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col justify-between w-96 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer rounded-2xl" style={{ backgroundImage: `url('https://i.imgur.com/qYqyFPM.jpg')`}}>
            <div className="flex justify-between items-center ml-4 pr-8">
                <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Plus d'informations</div>
            </div>
            <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                <h3 className="text-xl font-bold pb-2">APIHardShop</h3>
                <p className="truncate text-gray-500 text-sm">Retrouvez sur mon GitHub l'API de mon application HardShop qui tourne autour des composants informatique.</p>
                <div className="flex justify-between items-center">
                <span className="text-gray-400 text-xs">Cette année, en cours ...</span>
                </div>
            </div>
            </div>
        </Tilt>
        </div>
        <div>
        <Tilt>
            <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col justify-between w-96 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer rounded-2xl" style={{ backgroundImage: `url('https://i.imgur.com/cWbL6CW.jpg')`}}>
            <div className="flex justify-between items-center ml-4 pr-8">
                <div className="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Plus d'informations</div>
            </div>
            <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                <h3 className="text-xl font-bold pb-2">Application "JeMeSouris"</h3>
                <p className="truncate text-gray-500 text-sm">Une application entièrement dédiée à la psychologie, à l'écoute et la recentration sur soi.</p>
                <div className="flex justify-between items-center">
                <span className="text-gray-400 text-xs">Cette année, en cours ...</span>
                </div>
            </div>
            </div>
        </Tilt>
        </div>
    </div>
    {/* <div className='flex flex-col justify-center bg-gray-400 p-10'>
        <h3>Mes contributions</h3>
        <GitHubCalendar username='FrekiManagarm' year={new Date().getFullYear()} loading  />
    </div> */}
  </>
  );
}