import './App.css'
import Anchors from './components/anchors'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  let variable = 'Hola Mundo'


  return (
    <section className="App">
      <h1>mi primera app en React</h1>
      <Anchors href={"https://vite.dev"}/>
      <h2>{variable}</h2>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </section>
  )
}

export default App
