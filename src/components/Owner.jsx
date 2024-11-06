import React from 'react'
import { Nav } from "./Nav";

function Owner() {
  return (
    <div className='min-h-screen bg-gray-300'>
        <Nav/>
        <main className='flex flex-col items-center justify-center mt-16 px-4'>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Sudawan - Gen - F - 32</h2>
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 max-w-screen-lg">
                <div className="w-64 h-64 flex items-center justify-center mb-4 overflow-hidden rounded-full">
                    <img src="https://steamuserimages-a.akamaihd.net/ugc/2022709518835822445/39FD75A4AD433A655408C7377B4BE23F2D72D6DD/?imw=512&imh=530&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                     alt="owner profile"
                     className='object-cover h-full w-full' />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Short Biography</h3>
                <p className="text-center text-gray-600 leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime porro mollitia tempora, voluptatum 
                    velit architecto dignissimos exercitationem! Ipsam illum veritatis est voluptatem nulla quos error, recusandae iste, a itaque optio!</p>
            
            </div>
        </main>

    </div>
  );
}

export default Owner