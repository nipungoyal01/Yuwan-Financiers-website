import React,{useState,useEffect} from 'react'
import './feedback.css'
import { Container, Col, Row } from 'react-bootstrap'
import ContactInfoList from '../../Components/UI/ContactInfoList'
import { useDispatch, useSelector } from 'react-redux'
import { queryAction } from '../../actions/query.action'
import { toastr } from 'react-redux-toastr'
import Modal from 'react-modal'

Modal.setAppElement('#root');

function Feedback() {
    const[modalIsOpen,setModalIsOpen]=useState(false);
    const dispatch = useDispatch();
    const query = useSelector(state => state.query)
  
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');
    const [message, setMessage] = useState('');
  
    const querySubmit = (e) => {
      e.preventDefault();
  
      const details = { name, phone, email, service, message }
      dispatch(queryAction(details));
    }
  
    useEffect(() => {
      if (query.loading) {
        toastr.info("Loading...")
        query.loading = "";
      }
  
      if (query.message) {
        toastr.success("Success", query.message)
        query.message = "";
      } else if (query.error) {
        toastr.error("Error", query.error)
        query.error = "";
      }
    }, [query, query.loading, query.message, query.error])

    return (
        <div className="feedback-button">
        <button onClick={() => setModalIsOpen(true)}>Get a Call Back <i class="fas fa-phone"></i></button>       
        <div className="parent-modal-class">
        <Modal
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
              <div className="feedback-form">
              <div className="feedback_form_area">
              <form onSubmit={querySubmit}>
              <div className="contact-form form-style">
             <Row>
             <Col lg={6} xs={12}>
             <input className="form-control" type="text" placeholder="Your Name" id="contactName" name="contactName" value={name} onChange={e => setName(e.target.value)} required />
                 <p></p>
                 </Col>
               <Col className="col" lg={6}>
               <input className="form-control" type="number" placeholder="Phone (10 Digits without country code)" id="contactNumber" name="contactNumber" value={phone} onChange={e => setPhone(e.target.value)} />
               <p></p>
               </Col>
               <Col lg={6} xs={12}>
               <input className="form-control" type="email" placeholder="Your Email" id="contactEmail" name="contactEmail" value={email} onChange={e => setEmail(e.target.value)} required />
               <p></p>
               </Col>
               <Col className="col" lg={6}>
               <select className="form-control" name="contactSubject" value={service} onChange={e => setService(e.target.value)} required>
               <option defaultValue disabled value="">Select Service </option>
               <option value="Loan">Vehicle Loan </option>
               <option value="Loan">Mortage Loan</option>
               <option value="Loan">Gold loan</option>
               <option value="Loan">Personal loan</option>
               <option value="Insurance">Insurance</option>
               </select>
                 <p></p>
                 </Col>
                 <Col xs={12} sm={12} >
                 <textarea className="contact-textarea form-control" placeholder="Message (upto 500 words)" name="contactDesc" minLength="20" spellCheck="false" style={{ marginTop: "0px", marginBottom: "0px", height: "149px" }} value={message} onChange={e => setMessage(e.target.value)} required />
                 <p></p>
                 </Col>
                 <Col xs={3}>
                 <button type="submit" className="btn-theme">
                 Submit
                 </button>
               </Col>
               </Row>

               </div>
         </form>
         </div>
           </div>
           
           <p className="close_button" onClick={()=>setModalIsOpen(false)}>+</p>
           
           </Modal>
           </div>    
              
           
        </div>
    )
}
export default Feedback;

