import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Coin from './Coin'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardColumns } from 'react-bootstrap';
import Header from './Header';

function Home() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    var request = {
      params: {
        id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      }
    }
    axios.get('https://jsonplaceholder.typicode.com/photos', request)
    .then(res => {
      setCoins(res.data)
      console.log(res.data)
    }).catch(error => alert('Gde to oshibka epta'))
  }, []);
  
  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    
    coin.title.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="coin-app">
        <Header />
      <div className="coin-search">
        <h1 className="coin-text"> Поиск🤩</h1>
        <form>
          <input type="text" placeholder="Найти" className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      <div className="post">
        <CardColumns style={{padding: 50, textAlign: 'center'}}>
      {filteredCoins.map(coin =>{
        return(
          <Coin key={coin.id} title={coin.title} url={coin.url}  />
        )
      })}
      </CardColumns>

      </div>
    </div>
  );
}

export default Home;
