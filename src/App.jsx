import { Container } from '@mui/material';
import { NavigationBar, Footer } from './components/components.js';
import { Home, Skills, About, Contact } from './pages/pages.js';
import "./styles/App.css";

function App() {

  return (
    <>
      <Container className='App' disableGutters maxWidth='true'>
        <NavigationBar />
        <main>
          <Home />
        </main>
        <footer><Footer /></footer>
      </Container>
    </>
  )
}

export default App
