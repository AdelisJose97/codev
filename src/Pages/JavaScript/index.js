import React from 'react'

import CoursePreview from '../../Components/CoursePreview'
import wave from '../../Assets/wave8.svg'
import './index.css'




export const JsHome = () => {
  return (
    <>
      <div className="borde">
        <div style={{ backgroundImage: `url(${wave})`, minHeight: '100vh', backgroundRepeat: 'no-repeat', /* backgroundPositionY: 50, */ /* backgroundSize: 'cover'  */ }} className="wave">
          <div className="titulo">
            <h1>Javascript</h1>
          </div>
        </div>
      </div>
      <div className="body">

        <CoursePreview></CoursePreview>


      </div>
    </>

  )
}

