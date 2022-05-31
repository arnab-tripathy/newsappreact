import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function SelectCountry(props) {
const [country, setcountry] = useState("in");

    const handleChange=(event)=>{ 
        
        
        props.onSelect(event.target.value);
        setcountry(event.target.value)
      
    }
       
    
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl sx={{m:1,minWidth:120}}>
      <InputLabel id="demo-simple-select-label">Country</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
    value={country}
        label="Country"
        onChange={handleChange}
      >
        <MenuItem value={"in"}>India</MenuItem>
        <MenuItem value={"us"}>United States</MenuItem>
        <MenuItem value={"uk"}>United Kingdom</MenuItem>
      </Select>
    </FormControl>
  </Box>
  )
}
