
import '../../src/css/Modal.css';

import {AiFillCloseCircle} from "react-icons/ai";


const Modal = ({children, isOpen,closeModal}) =>{

const hadleModalContainerClick = (e) => e.stopPropagation();

    return (
      <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className='modal-container' onClick={hadleModalContainerClick}>
          <button className=' btn btn-default modal-close' onClick={closeModal}><AiFillCloseCircle size={25}/></button>
          {children}
        </div>
      </article>

    )
}

export default Modal