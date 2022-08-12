import React from 'react'
import { useContacts } from '../contexts/ContactProvider'
import {ListGroup, ListGroupItem} from "react-bootstrap"

export const Contacts = () => {
  const {contacts}=useContacts();
  return (
    <ListGroup variant="flush">
    
      {contacts.map(contact=>{
        return <ListGroupItem className="" key={contact.id}>{contact.name}</ListGroupItem>
      })}
    </ListGroup>
  )
}
