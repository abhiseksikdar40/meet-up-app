import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main className='container py-5'>
        <MainPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App