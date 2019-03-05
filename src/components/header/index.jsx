import React from 'react';
import About from './about';

export default function() {
  return (
    <React.Fragment>
      <div className='d-flex justify-content-between p-4 border-bottom'>
        <div>LOGO</div>
        <input type='text' />
        <div>
          <button>Theme</button>
          <button>Language</button>
        </div>
      </div>
      <About />
    </React.Fragment>
  )
}