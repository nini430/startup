import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { ContactProvider } from './contexts/ContactProvider';
import { ConversationProvider } from './contexts/ConversationProvider';

function App() {
  const [id,setId]=useLocalStorage("id","")
  return (
    <div className="App">
     {id? 
    
      <ContactProvider> <ConversationProvider><Dashboard/></ConversationProvider></ContactProvider>:<Login setId={setId}/>}
     
     
    </div>
  );
}

export default App;
