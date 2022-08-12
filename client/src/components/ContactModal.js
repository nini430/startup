import React,{useRef} from 'react'
import { Modal,Form,Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactProvider';

export const ContactModal = ({onClose}) => {
    const {createContact}=useContacts()
    const idRef=useRef();
    const nameRef=useRef();



    const handleSubmit=(e)=>{
        e.preventDefault();
        createContact(idRef.current.value,nameRef.current.value)
        onClose();

    }
  return (
    <>
    <Modal.Header closeButton>
        Create Contact
    </Modal.Header>
    <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Enter Id</Form.Label>
                <Form.Control ref={idRef} required type="text"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Enter name</Form.Label>
                <Form.Control ref={nameRef} required type="text"></Form.Control>
            </Form.Group>
            <Button type="submit"  className="mt-2">Create</Button>
        </Form>
    </Modal.Body>
    </>
  )
}
