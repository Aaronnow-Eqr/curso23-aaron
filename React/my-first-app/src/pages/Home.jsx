import { FormSection, Hero, Products } from "../components/Home/HomeSections"
import { useContext } from "react"
import { ThemeContext } from "../context/themeContext.jsx"

function Home() {
  const { theme, toggleTheme }  = useContext(ThemeContext);
  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}>
      <Hero></Hero>
      <Products></Products>
      <FormSection></FormSection>
      <p>el tema es {theme}</p>
      <button onClick={toggleTheme}>cambia el tema</button>
    </div>
  )
}

export { Home }

1.14,25