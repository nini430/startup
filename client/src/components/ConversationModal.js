import React,{useState} from 'react'
import {Modal,Button,Form} from "react-bootstrap"
import { useContacts } from '../contexts/ContactProvider'
import { useConversations } from '../contexts/ConversationProvider'


export const ConversationModal = () => {
    const {createConversation}=useConversations()
    const {contacts}=useContacts();
    const [selectedIds,setSelectedIds]=useState([]);
    const handleCheckboxChange=(contactId)=>{
        if(selectedIds.includes(contactId)) {
            setSelectedIds(prevSelectedIds=>{
                return prevSelectedIds.filter(selectedId=>selectedId!==contactId);
            })
        }else{
            setSelectedIds(prevSelectedIds=>{
                return [prevSelectedIds,contactId]
            })
        }
    }
  return (
    <>
    <Modal.Header closeButton>Create Conversation</Modal.Header>
    <Modal.Body>
        <Form>
            {contacts.map(contact=>(
                <Form.Group key={contact.id}>
                <Form.Check
                 type="checkbox"
                 
                 value={selectedIds.includes(contact.id)}
                 label={contact.name}
                 onChange={()=>handleCheckboxChange(contact.id)}
                 ></Form.Check>
            </Form.Group>
            ))}
            <Button onClick={()=>createConversation(selectedIds)}>Create</Button>
        </Form>
    </Modal.Body>
    </>
  )
}
