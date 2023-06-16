import {React, useState}  from 'react'
import classes from './hero.module.css';
import {AiOutlineSearch} from 'react-icons/ai';

const Hero = () => {
  const [type, setType] = useState('beach')
  const [place, setPlace]= useState('Bhurigaun')
  const [priceRange, setPriceRange] = useState('0')

  const handleSearch = () => {
    
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Let me find your dream place right now</h2>
        <h5>Search the best selection of luxury real estate</h5>
        <div className={classes.options}>
          
          <select onChange={(e)=> setType(e.target.value)}>
            <option disabled>Select type</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="village">Village</option>
          </select>
          <select onChange={(e)=> setPriceRange(e.target.value)}>
            <option disabled>Select Price Range</option>
            <option value="0">0-100,000</option>
            <option value="1">100,000-200,000</option>
            <option value="2">200,000-300,000</option>
            <option value="3">300,000-400,000</option>
          </select>
          <select onChange={(e)=> setPlace(e.target.value)}>
            <option disabled>Select Place</option>
            <option value="0">Bhurigaun</option>
            <option value="1">Koholpur</option>
            <option value="2">Nepalgunj</option>
            <option value="3">Karnali</option>
            <option value="4">Thakurdwara</option>
            <option value="5">Bawanpur</option>
          </select>
          <AiOutlineSearch className={classes.searchIcon}/>
        </div>
      </div>
    </div>
  )
}

export default Hero