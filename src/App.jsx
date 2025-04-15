import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <>
      <header className='container'>
        <Header />
        <hr className='text-light'/>
      </header>
      <main className='container py-5'>
        <MainPage />
      </main>
      <footer>
      <hr className='text-light'/>
        <Footer />
      </footer>
    </>
  )
}

export default App