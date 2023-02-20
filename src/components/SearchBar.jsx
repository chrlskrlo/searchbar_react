import React, { useState } from "react";

import '../components/SearchBar.css'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchBar = ({ placeholder, data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');

    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        })

        if (searchWord === '') {
            setFilteredData([])
        } else {
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([])
        setWordEntered('')
    }


    return (
        <div className="search">
            <div className="searchInputs">
                <Box sx={{ maxWidth: '100%', }}>
                    <TextField placeholder={placeholder} id="fullWidth" value={wordEntered} onChange={handleFilter} />
                </Box>
                <div className="searchIcon">
                    {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id='clearBtn' onClick={clearInput} />}

                </div>
            </div>

            <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return <a className="dataItem" href={value.link} target="_blank">
                        <p>{value.title}</p>
                    </a>
                })}
            </div>

        </div>
    )
}

export default SearchBar;