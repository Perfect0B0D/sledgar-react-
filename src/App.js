import { useEffect, useState } from 'react';
import { Header, CoinSlider, CompanySlider, Footer, HeroSection, ImgInfoVideo, IntroAbout } from './components';
import './css/custom.css';

const App = () => {

  const [themeToggling, setThemeToggling] = useState(false);


  useEffect(() =>
    themeToggling
      ? window.document.body.classList.add('dark')
      : window.document.body.classList.remove('dark'),
    [themeToggling]
  )

  return (

    <main className='overflow-hidden'>
      <Header themeToggling={themeToggling} setThemeToggling={setThemeToggling} />
      <HeroSection themeToggling={themeToggling}/>
      <IntroAbout />
      <CoinSlider />
      <ImgInfoVideo />
      {/* https://www.youtube.com/watch?v=dgjZ2fHg4y4 */}
      <CompanySlider themeToggling={themeToggling} />
      <Footer />
    </main>

  )
}

export default App