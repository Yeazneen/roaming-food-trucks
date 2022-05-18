import './App.css';
import HomePage from '../HomePage/HomePage';
import * as FoodtruckAPI from '../../utilities/foodTruck-api'
import FoodTruckDetailPage from '../FoodTruckDetailPage/FoodTruckDetailPage';
import {useState, useEffect} from 'react'

function App() {
  const [foodTrucks, setFoodTrucks] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const data = await FoodtruckAPI.getAll()
        setFoodTrucks(data)
      } catch(e) {
        console.log(e)
      }
    })()
  }, [])


  return (
    <div className="App">
   <HomePage foodTrucks={foodTrucks} />
   <FoodTruckDetailPage />
    </div>
  );
}

export default App;
