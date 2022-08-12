import {createContext, useContext} from "react"
import { useLocalStorage } from "../hooks/useLocalStorage";

const ContactContext=createContext();



export const ContactProvider=({children})=>{
    const [contacts,setContacts]=useLocalStorage("contacts",[]);
    const createContact=(id,name)=>{
        setContacts(prevContact=>{
            return [...prevContact,{id,name}]
        })
    }

    return <ContactContext.Provider value={{contacts,createContact}}>{children}</ContactContext.Provider>
}

export const useContacts=()=>{
    return useContext(ContactContext)
}