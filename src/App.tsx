import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Contact from './components/Contact';
import { getSheetData } from './lib/sheets';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const sheetData = await getSheetData(
        import.meta.env.VITE_GOOGLE_SHEET_ID || '',
        'A1:D50'
      );
      setData(sheetData);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Netgear solution. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App