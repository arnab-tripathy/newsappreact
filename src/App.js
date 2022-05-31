import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import SelectCountry from './components/SelectCountry';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import NewsCard from './components/NewsCard';
import { Select } from '@mui/material';
import SelectCat from './components/SelectCat';



function App() {
  function catselect(cat){
setcategory(cat);
    console.log(cat)

  }

  console.log(process.env.REACT_APP_API_KEY);
  const [news,setnews]=useState([]);
 const [category,setcategory]=useState("");
  
const [country,setCountry]=useState("in");
const [isloading,setloading]=useState(false);
const url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`
const loadnews= async ()=>{
  setloading(true);
  Axios.get(url)
  .then(res=>{
    console.log(res.data.articles.length);
    setnews(res.data.articles);
    console.log(news);  
    setloading(false);
 
    //console.log(isloading);
  })
}


  const ChangeCountry=(val)=>{

console.log(val);
setCountry(val); 
setcategory("general"); 
  }
  useEffect(()=>{
    loadnews();

  },[country,category]);
  return (
    <>
 <NavBar/>
 <SelectCountry onSelect={ChangeCountry}/>
 <SelectCat onselect={catselect}/>
 <Box className='justify-center' sx={{ display: isloading?'flex':'none'}}>
      <CircularProgress />


    </Box>
    <div className='flex flex-wrap justify-center '>
    {!isloading?news.map((item)=>{
   console.log(item);
   return <NewsCard newsitem={item}/>
 }):<></>}
    </div>

    </>
   

  );
}

export default App;
