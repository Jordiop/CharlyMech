import { Container } from '@mui/material';
import { NavigationBar, Footer } from './components/components.js';
import { Home, Skills, About, Contact } from './pages/pages.js';
import "./styles/App.css";

function App() {

  return (
    <>
      <Container disableGutters maxWidth="true" className="App">
        <NavigationBar />
        <main className="main-content">
          <Home />
        </main>
        <Footer />
      </Container >

    </>
  )
}

export default App
