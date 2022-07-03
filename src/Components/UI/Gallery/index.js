import React, {useState} from 'react'
import './Gallery.css'
import Modal from 'react-modal'

Modal.setAppElement('#root');

function Gallery(props) {
    const[modalIsOpen,setModalIsOpen]=useState(false);
    return (
        <div className="gallery min-vh-100">
            <div className="container-lg">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            <div className="col">
             <img src={props.img1} onClick={() => setModalIsOpen(true)} className="gallery-item" alt={props.alt1} />
            </div>
            <div className="col">
            <img src={props.img2} onClick={() => setModalIsOpen(true)} className="gallery-item" alt={props.alt2} />
           </div>
           <div className="col">
           <img src={props.img3} onClick={() => setModalIsOpen(true)} className="gallery-item" alt={props.alt3} />
          </div>
          <div className="col">
          <img src={props.img4} onClick={() => setModalIsOpen(true)} className="gallery-item" alt={props.alt4} />
         </div>
         <div className="col">
         <img src={props.img5} onClick={() => setModalIsOpen(true)} className="gallery-item" alt={props.alt5} />
        </div>
        <div className="col">
        <img src={props.img6} onClick={() => setModalIsOpen(true)} className="gallery-item" alt={props.alt6} />
       </div>
       <Modal className={props.Modalclass}
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={()=>setModalIsOpen(false)}
            onRequestClose={()=>setModalIsOpen(false)}
            style={{
                overlay: {
                    position: 'fixed',
                    top: '20%',
                    left: '20%',
                    right: '20%',
                    bottom: '20%',
                    backgroundColor: '#fff',
                    border: '3px solid #853535',
                    boxShadow:'3px 3px black'
                  },
                  content: {
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    right: '20px',
                    bottom: '20px',
                    background: '#fff',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '10px'
                  }
              }}
            >
            <div className="col">
            <img className={props.Modalimgclass} src={props.modalimg} />
            </div>
            <p className={props.closebuttonclass} onClick={()=>setModalIsOpen(false)}>+</p>   
            </Modal>
            </div>
            </div>
        </div>
    )
}

export default Gallery
