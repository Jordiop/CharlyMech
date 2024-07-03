import { NavigationBar, Footer } from './components/components.js';
import { Home, Skills, About, Contact } from './pages/pages.js';
import "./App.css";

function App() {

  return (
    <>
      <div className='App'>
        <nav><NavigationBar /></nav>
        <main>
          <Home />
        </main>
        <footer><Footer /></footer>
      </div>
    </>
  )
}

export default App
