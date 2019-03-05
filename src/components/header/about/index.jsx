import React from 'react';

export default function() {
  return (
    <div className='d-flex justify-content-center p-4 border-bottom'>
      <div className='mr-10'>Foto</div>
      <div>
        <div className='d-flex'>
          <span className='mr-3'>dani_absurd</span>
          <button className='mr-3'>Edit Profile</button>
          <button>Settings</button>
        </div>
        <div className='d-flex'>
          <span className='mr-3'>Posts</span>
          <button className='mr-3'>Followes</button>
          <button>Following</button>
        </div>
      </div>
    </div>
  )
}