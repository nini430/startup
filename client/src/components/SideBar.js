import React, { useState } from 'react'
import {Nav, Tab,Button, Modal} from "react-bootstrap"
import { ContactModal } from './ContactModal';
import { Contacts } from './Contacts';
import { ConversationModal } from './ConversationModal';
import { Conversations } from './Conversations';


const CONVERSATION_KEY="CONVERSATION_KEY";
const CONTACT_KEY="CONTACT_KEY";

export const SideBar = () => {
    const [active,setActive]=useState(CONVERSATION_KEY)
    const [modalOpen,setModalOpen]=useState(false)
    const conversationOpen=active===CONVERSATION_KEY;
    const onClose=()=>{
        setModalOpen(false);
    }
  return (
    <div className="w-250 d-flex flex-column">
        <Tab.Container activeKey={active} onSelect={setActive}>
            <Nav variant="tabs">
                <Nav.Item>
                    <Nav.Link eventKey={CONVERSATION_KEY} >Conversations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={CONTACT_KEY}>Contacts</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content  style={{flexGrow:"1",overflow:"auto",borderRight:"1px solid #eee"}}>
                <Tab.Pane eventKey={CONVERSATION_KEY}>
                    <Conversations/>
                </Tab.Pane>
                <Tab.Pane eventKey={CONTACT_KEY}>
                    <Contacts/>
                </Tab.Pane>
            </Tab.Content>
            <Button onClick={()=>setModalOpen(true)} className="rounded-0">{conversationOpen? "Create Conversation":"Create Contact"}</Button>
        </Tab.Container>
        <Modal show={modalOpen} onHide={()=>setModalOpen(false)}>
            {conversationOpen?<ConversationModal onClose={onClose}/>:<ContactModal onClose={onClose}/>}
        </Modal>
    </div>
  )
}
