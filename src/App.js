
import './App.css';
import Quote from './components/Quote';
import {useState, useEffect} from 'react'
import { Spinner } from './components/Spinner';
const intialState = {
  text:'a',
  author:'bb' 

}

function App() {
  const [quote, setQuote] = useState(intialState)
  const [ loading, setLoading] = useState(false)
  const updateQuote = async()=>{
    setLoading(true)
    const url = 'https://www.breakingbadapi.com/api/quote/random'
    const res = await fetch(url)
    const [newQuote] = await res.json()
    //return data
    console.log(newQuote)
    const {quote : text, author} = newQuote 

    setQuote({
      text,
      author
    })
    setLoading(false)
  }


  useEffect(() => {
    updateQuote()
    }, [])

  

  return (
    <div className='app'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg" alt=''/>
    <button onClick={updateQuote}>Get Another</button>
    
    {loading ? <Spinner/> : <Quote quote={quote}/> }
    </div>
  );
}

export default App;
