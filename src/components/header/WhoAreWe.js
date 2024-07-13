import React from 'react';
import imgOne from '../../icons_assets/Mario and Adrian b.jpg';
import imgTwo from '../../icons_assets/restaurant chef B.jpg';

const WhoAreWe = () => {
  return (
    <div className='who-are-we'>
     <div>
        <h2>Little Lemon</h2>
        <p>Chicago</p>
        <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </span>
     </div>

     <div className='images'>
      <img src={imgOne}/>
      <img src={imgTwo}/>
     </div>

    </div>
  )
}

export default WhoAreWe