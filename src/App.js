import { Route, Routes } from 'react-router-dom'
import ContextProvider from "./components/context/Context";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Countries } from './components/Country/Countries'
import { Home } from './components/Home/Home'
import { Records } from './components/Record/Records'

function App() {
  return (
    <div className="App">
      <ContextProvider>
      <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/countries' element={<Countries />} />
            <Route path='/records' element={<Records />} />
          </Routes>
      <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
