import { NavigationBar, Footer } from './components/components.js';
import pages from './pages/pages'
import useNavigationStore from './stores/navigationStore.js';
import "./App.css";

function App() {
  const { page } = useNavigationStore();
  const CurrentPage = pages[page];

  return (
    <>
      <div className='App'>
        <nav><NavigationBar /></nav>
        <main>
          <CurrentPage />
        </main>
        <footer><Footer /></footer>
      </div>
    </>
  )
}

export default App
