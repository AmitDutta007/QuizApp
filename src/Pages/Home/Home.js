import { Button, MenuItem, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"
import Categories from '../../Data/Catagory'
import  ErrorMessage  from '../../components/ErrorMessage/ErrorMessage'

export const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("")
    const [difficulty, setdifficulty] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true)
            return
        } else {
            setError(false)
            fetchQuestions(category, difficulty)
            navigate("/quiz")
        }
    }

    return (
        <>
            <div className='content'>
                <div className='settings'>
                    <span style={{ fontSize: 25 }}>Quiz settings</span>
                    <div className="setting_select">

                        {error ? <ErrorMessage/> : ""}

                        <TextField
                            label='Enter Your Name'
                            variant='outlined'
                            style={{ marginBottom: '3%' }}
                            onChange={(e) => setName(e.target.value)}
                            // value={name}
                        />
                        <TextField
                            select
                            label='Select Category'
                            variant='outlined'
                            style={{ marginBottom: '4%' }}
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                        >
                            {
                                Categories.map((value) => (
                                    <MenuItem key={value.category} value={value.value}>
                                        {value.category}
                                    </MenuItem>
                                ))
                            }</TextField>

                        <TextField
                            select
                            label='Select Difficulty'
                            variant='outlined'
                            style={{ marginBottom: '4%' }}
                            onChange={(e) => setdifficulty(e.target.value)}
                            value={difficulty}
                        >
                            <MenuItem key='Easy' value='Easy'>Easy</MenuItem>
                            <MenuItem key='Medium' value='Medium'>Medium</MenuItem>
                            <MenuItem key='Hard' value='Hard'>Hard</MenuItem>
                        </TextField>
                        <Button onClick={handleSubmit} variant='contained' color='primary' size='large'>Start Quiz</Button>
                    </div>
                </div>
                <img src='/quiz.jpg' className='images' alt='quiz img'></img>
            </div>
        </>
    )
}
