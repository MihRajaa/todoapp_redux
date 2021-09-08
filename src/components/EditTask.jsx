import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/Actions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const EditTask = ({task}) => {
    const dispatch = useDispatch()
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [old, setOld] = useState(task.action)
    const handleSubmit = (e) => {

      e.preventDefault();
      dispatch(editTask(task.id, old));
      closeModal()
    }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
    return (
        <div>
            <button onClick={openModal}>Edit</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit} >
                    <label>Editing Task:</label>
                    <input type="text" value={old} onChange={(e)=>setOld(e.target.value)} />
                    <button type="submit" >Complete</button>
                    <button onClick={closeModal} >Cancel</button>
                </form>
            </Modal>
        </div>
    )
}

export default EditTask
