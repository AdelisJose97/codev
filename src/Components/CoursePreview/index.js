import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./index.css";
import arrow from '../../Assets/arrow.svg'
import { Col, Row } from "react-bootstrap";
import LessonModal from '../LessonModal'
import data from '../../Assets/data/classes-javascript.json'
/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

export default function CoursePreview() {
  return (
    <div className="body-preview">
      <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 30 }}>
          {data.map((item, index) => (
            <Item data={item} key={index} index={index} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  );
}

function Item({ data, key, index }) {
  const { title, lessons } = data
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout initial={{ borderRadius: 15 }}>
      <div className="module-header" onClick={toggleOpen}>
        <motion.div className="avatar" layout >
          <h4 style={{ color: 'white', margin: 0, fontWeight: 'bold' }}>{index + 1}</h4>
        </motion.div>
        <motion.span className="module-title" layout>{title}</motion.span>
        <motion.div className="progress-container" layout>
          <motion.div className="progress-course hide-element" layout></motion.div>
          <motion.span className="progress-text" layout>
            6/9 Lecciones
				</motion.span>
        </motion.div>
        <motion.div style={{ marginLeft: 'auto' }} layout animate={{ rotate: isOpen ? 180 : 0 }}>
          <motion.img src={arrow}></motion.img>
        </motion.div>

      </div>

      <AnimatePresence>{isOpen && (<Content lessons={lessons} />)}</AnimatePresence>

    </motion.li>
  );
}

function Content({ lessons }) {
  const [selectedId, setSelectedId] = useState(null)

  return (

    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimateSharedLayout type="crossfade">
        <Row>
          {lessons.map((item, index) => (
            <>
              <Col xs={12} sm={12} md={6}>
                <motion.div
                  className="courses-container"
                  initial={{ y: 100, borderRadius: 15, scale: 0.9 }}
                  animate={{ y: 0 }}
                  exit={{ y: -100 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5, delay: 0.2 }} layoutId={index + 1} >
                  <motion.div className="course">
                    {/* <div class="course-preview">
                      <h6>Course</h6>
                      <h2>JavaScript Fundamentals</h2>
                      <a href="#">View all chapters <i class="fas fa-chevron-right"></i></a>
                    </div> */}
                    <motion.div className="course-info">

                      <motion.h6>Leccion {index + 1}</motion.h6>
                      <motion.h2>{item.title}</motion.h2>
                      <button className="btn-course " onClick={() => setSelectedId(index + 1)}>Siguiente</button>
                    </motion.div>
                  </motion.div>
                </motion.div>




                {/* <motion.div
                  className="section"
                  initial={{ y: 100, borderRadius: 15, scale: 0.9 }}
                  animate={{ y: 0 }}
                  exit={{ y: -100, borderRadius: 150 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5, delay: 0.2 }} layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                  <motion.h1>{item.titulo}</motion.h1>
                  <motion.h2>{item.subtitulo}</motion.h2>
                </motion.div> */}

              </Col>
            </>

          ))}
        </Row>
        <AnimatePresence >
          {selectedId && (
            <LessonModal selectedId={selectedId} setSelectedId={setSelectedId} key={selectedId} />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </motion.div >

  );

}

/* const items = [0, 1, 2, 3];
const items2 = [{ titulo: 'titulo obj1', subtitulo: 'subtitulo obj1', id: 1 },
{ titulo: 'titulo obj2', subtitulo: 'subtitulo obj2', id: 2 },
{ titulo: 'titulo obj2', subtitulo: 'subtitulo obj2', id: 3 },
{ titulo: 'titulo obj2', subtitulo: 'subtitulo obj2', id: 4 }] */
