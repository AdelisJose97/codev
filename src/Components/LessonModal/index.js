import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import closemodal from '../../Assets/close-modal.svg'
import { createPortal } from 'react-dom';
import './index.css'
import { ProgressBar } from 'react-bootstrap';

const LessonModal = ({ selectedId, setSelectedId }) => {
  const [progress, setprogress] = useState(100)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '15px'
    return () => {
      document.body.style = ''
      console.log('desmontado');

    }
  }, [selectedId])
  return (
    createPortal(
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, borderRadius: 0 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 80,
        }}
        style={{
          position: "fixed",
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          backgroundColor: 'rgba(255, 255, 255)',
          /* justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255', 0),
          zIndex: '12123' */
          zIndex: 10
        }}
        layoutId={selectedId} >
        <motion.div className="lesson-container">
          <div className="lesson-header">
            <motion.div></motion.div>
            <motion.div className="lesson-header-center" >
              <motion.h2>Objetos y Arreglos</motion.h2>
              <motion.div>
                <ProgressBar now={progress} label={`${progress}%`} />
              </motion.div>


            </motion.div>

            <motion.button className="button-modal" onClick={() => setSelectedId(null)}> <img src={closemodal} alt="" /> </motion.button>

          </div>
          <div className="lesson-content">
            <div className="lesson-content-container">
              <motion.div className>
                <h5>Objetos</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, quisquam? Voluptatibus id dolores ducimus cumque quaerat? Officia vero adipisci eligendi dicta corporisasdasd repellendus necessitatibus, mollitia odit, fuga placeat omnis hic!</p>
              </motion.div>
              <div>
                <h5>Arreglos</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vitae reprehenderit quo, quos nobis cupiditate, sint nemo quia, cum dolor porro expedita debitis tempore quidem assumenda sunt quis quaerat fugiat!</p>

              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, debitis. Optio harum reprehenderit itaque voluptas necessitatibus. Dignissimos totam blanditiis, nostrum quaerat, atque, distinctio nihil suscipit tempore impedit facilis adipisci inventore?</p>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, debitis. Optio harum reprehenderit itaque voluptas necessitatibus. Dignissimos totam blanditiis, nostrum quaerat, atque, distinctio nihil suscipit tempore impedit facilis adipisci inventore?</p>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, debitis. Optio harum reprehenderit itaque voluptas necessitatibus. Dignissimos totam blanditiis, nostrum quaerat, atque, distinctio nihil suscipit tempore impedit facilis adipisci inventore?</p>


              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, debitis. Optio harum reprehenderit itaque voluptas necessitatibus. Dignissimos totam blanditiis, nostrum quaerat, atque, distinctio nihil suscipit tempore impedit facilis adipisci inventore?</p>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, debitis. Optio harum reprehenderit itaque voluptas necessitatibus. Dignissimos totam blanditiis, nostrum quaerat, atque, distinctio nihil suscipit tempore impedit facilis adipisci inventore?</p>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, debitis. Optio harum reprehenderit itaque voluptas necessitatibus. Dignissimos totam blanditiis, nostrum quaerat, atque, distinctio nihil suscipit tempore impedit facilis adipisci inventore?</p>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, debitis. Optio harum reprehenderit itaque voluptas necessitatibus. Dignissimos totam blanditiis, nostrum quaerat, atque, distinctio nihil suscipit tempore impedit facilis adipisci inventore?</p>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, debitis. Optio harum reprehenderit itaque voluptas necessitatibus. Dignissimos totam blanditiis, nostrum quaerat, atque, distinctio nihil suscipit tempore impedit facilis adipisci inventore?</p>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, debitis. Optio harum reprehenderit itaque voluptas necessitatibus. Dignissimos totam blanditiis, nostrum quaerat, atque, distinctio nihil suscipit tempore impedit facilis adipisci inventore?</p>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, debitis. Optio harum reprehenderit itaque voluptas necessitatibus. Dignissimos totam blanditiis, nostrum quaerat, atque, distinctio nihil suscipit tempore impedit facilis adipisci inventore?</p>

            </div>
          </div>
          <div className="lesson-footer">
            <div className="lesson-footer-container">
              <button className="lesson-footer-button">Siguiente</button>
            </div>

          </div>

        </motion.div>
        {/* <motion.h5>asdasd</motion.h5>
        <motion.h2>12</motion.h2>
        <motion.button className="button-modal" onClick={() => setSelectedId(null)}> <img src={closemodal} alt="" /> </motion.button> */}
      </motion.div >,
      document.body
    )

  )
}


export default LessonModal
