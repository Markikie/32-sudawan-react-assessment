import React from 'react'
import { Nav } from "./Nav";

function Owner() {
  return (
    <div>
        <Nav/>
        <main>
            <h2>Sudawan - Gen - F - 32</h2>
            <div>
                <div>
                    <img src="https://steamuserimages-a.akamaihd.net/ugc/2022709518835822445/39FD75A4AD433A655408C7377B4BE23F2D72D6DD/?imw=512&imh=530&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                     alt="owner profile"
                     className='object-cover h-full w-full' />
                </div>
                <h3>Short Biography</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime porro mollitia tempora, voluptatum 
                    velit architecto dignissimos exercitationem! Ipsam illum veritatis est voluptatem nulla quos error, recusandae iste, a itaque optio!</p>
            
            </div>
        </main>

    </div>
  );
}

export default Owner