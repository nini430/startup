import {createContext, useContext} from "react"
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useContacts } from "./ContactProvider";

const ConversationContext=createContext();



export const ConversationProvider=({children})=>{
    const {contacts}=useContacts();
    const [conversations,setConversations]=useLocalStorage("conversations",[]);
    
    const createConversation=(recipients)=>{
            setConversations(prevConversation=>{
                return [...prevConversation,{recipients,messages:[]}]
            })
    }


    const formattedConversations=conversations.map(conversation=>{
        const recipients=conversation.recipients.map(recipient=>{
            const contact=contacts.find(contact=>contact.id===recipient);
            const name=(contact && contact.name) || recipient;
            return {id:recipient,name}
        })

        return {...conversation,recipients}
    })


    const value={
        createConversation,
        conversations:formattedConversations,
    }

    return <ConversationContext.Provider value={value}>{children}</ConversationContext.Provider>
}

export const useConversations=()=>{
    return useContext(ConversationContext)
}