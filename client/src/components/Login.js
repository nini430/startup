import React,{useRef} from 'react'
import {Container,Form,Button,ButtonGroup} from "react-bootstrap"
import {v4 as randomId} from "uuid"

export const Login = ({setId}) => {
    const idRef=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        setId(idRef.current.value);

    }

    const generateId=()=>{
        setId(randomId)
    }

    
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
        <Form className="flex-grow-1" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Enter Your Id:</Form.Label>
                <Form.Control ref={idRef} type="text" required ></Form.Control>
            </Form.Group>
            <ButtonGroup className="flex gap-3 mt-2">
            <Button  type="submit">Log in</Button>
            <Button onClick={generateId}  type="button" variant="secondary">Create Id</Button>
            </ButtonGroup>
           

        </Form>
    </Container>
  )
}
