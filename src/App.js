import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactPage from './Pages/ContactPage/Contact';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Pages/SharedComponents/Footer/Footer';
import Header from './Pages/SharedComponents/Header/Header';
import WhatWeDoPage from './Pages/WhatWeDoPage/WhatWeDoPage';
import WhoWeArePage from './Pages/WhoWeArePage/WhoWeArePage';
import WhyUsPage from './Pages/WhyUsPage/WhyUsPage';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/whoArea" element={<WhoWeArePage/>} />
              <Route path="/whatWeDo" element={<WhatWeDoPage/>} />
              <Route path="/whyUsPage" element={<WhyUsPage/>} />
              <Route path="/contactPage" element={<ContactPage/>} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
