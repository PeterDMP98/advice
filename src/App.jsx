import { useState } from 'react'
import useFetch from './hooks/useFetch'
import './App.css'
import Phrase from './components/Phrase'


function App() {

  // const [advice, setAvice] = useState()
  const [change, setChange] = useState(0)

  // useEffect(() => {
  //   const url = `https://api.adviceslip.com/advice`;
  //   axios.get(url)
  //     .then(res => setAvice(res.data))
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [change])

  const advice = useFetch(`https://api.adviceslip.com/advice`, change)

  const changeSubmit = () => {
    change == 0 ? setChange(1) : setChange(0)
    console.log("clik");
  }

  console.log(change);
  return (
    <div className="App">
      {
        advice
          ? <div>
            <Phrase advice={advice} />
            <button id='submit' onClick={changeSubmit}><i className="fa-solid fa-dice"></i></button>

            <footer>
              <div className='name'>
              <p>Pedro Luis Caraballo Banquez</p>
              </div>
              <div className='content__a'>
                <a href="https://www.linkedin.com/in/pedro-luis-caraballo-banquez-5b1119b0/" target='_blank'>My Linkedin</a>
                <a href="https://pedrocaraballodmp.netlify.app/" target='_blank'>My Porfolio</a>
              </div>
            </footer>
          </div>
          : <h2>Loading...</h2>
      }

    </div>
  )
}

export default App
