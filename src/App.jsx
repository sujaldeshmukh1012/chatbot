import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import { ThemeContext } from './context/theme-context.ts';

function App() {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
const getDefaultTheme = () => {
  try{
  const localStorageTheme = localStorage.getItem('default-theme');
  const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
  return localStorageTheme || browserDefault;
  }catch(e){
    console.log(e)
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return browserDefault}
};
const [theme, setTheme] = useState(getDefaultTheme());
  const [count, setCount] = useState(0)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
     <div className={`theme-${theme}`}>
      <HomePage theme={theme}/>
      </div>
</ThemeContext.Provider>
  )
}

export default App
