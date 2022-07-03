
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import styled from 'styled-components'

Modal.setAppElement('#root');

/**
* @author
* @function SerGrid
**/

const SerGrid = (props) => {
    const[modalIsOpen,setModalIsOpen]=useState(false);
    return (
        <>
            <div className={props.imageclass}>
            <img className={props.image_imgclass} src={props.img} alt={props.alt}/>
            <div className={props.contentclass}>
            <div className={props.nameclass}>{props.name}</div>
            <p className={props.descriptionclass}>{props.description}</p>
            <button className={props.buttonclass} onClick={() => setModalIsOpen(true)}>Know More</button>

            <div className={props.ParentModalclass}>
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
            <div className="row">
            <div className={props.Modalimgclass}>
            <img className="img-fluid" src={props.modalimg} />
            </div>
            <div className={props.Modalcontentclass}>
            <h3>Modal Title</h3>
            <h4>Modal Body</h4>
            <div className={props.Modalpara}>
            <p>Hi there!</p>
            </div>
            </div>
            <p className={props.closebuttonclass} onClick={()=>setModalIsOpen(false)}>+</p>   
            </div>
            </Modal>
            </div>
            </div>
            </div>
            </>
            )
}


export default SerGrid