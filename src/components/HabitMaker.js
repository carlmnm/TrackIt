import styled from "styled-components"
import { useEffect, useState } from "react"
import Context from "./Context"
import React, { useContext } from 'react'
import axios from "axios"

export default function CreatingHabits() {
    const { show, setShow, token } = useContext(Context)
    const [usage, setUsage] = useState(false)
    const [idDays, setIdDays] = useState([])
    const [habitName, setHabitName] = useState("")
    const week = [
        { id: 0, name: "D" },
        { id: 1, name: "S" },
        { id: 2, name: "T" },
        { id: 3, name: "Q" },
        { id: 4, name: "Q" },
        { id: 5, name: "S" },
        { id: 6, name: "S" },
    ]

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const body = {
        name: habitName,
        days: idDays
    }


    function SelectDay(idDay) {
        const clicked = idDays.includes(idDay)
        if (!clicked) {
            setIdDays([...idDays, idDay])

        } else {
            setIdDays(idDays.filter(a => a !== idDay))
        }
    }

    function cancel() {
        setShow("false")
    }

    function saveHabit() {

        const promise = axios.post(URL, body, config)
        promise.then((res) => {
            console.log(res.data)
        })
        {/*promise.catch((err) => {
            console.log(err.message)
        })*/}
    }

    return (
        <HabitCreationWindow visibility={show}>
            <form onSubmit={saveHabit}>
                <Input
                    type="text"
                    placeholder="nome do hábito"
                    value={habitName}
                    onChange={e => setHabitName(e.target.value)}
                    required
                    disabled={usage}
                />
                <WeekList>
                    {week.map((item) =>
                        <div

                            className={`day-btn ${idDays.includes(item.id) ? "selected" : "not-selected"}`}
                            onClick={() => { SelectDay(item.id) }}
                        >
                            <p>{item.name}</p>
                        </div>
                    )}
                </WeekList>
                <SaveButton type="submit">
                    <p>
                        {"Salvar"}
                    </p>
                </SaveButton>
                <CancelButton onClick={cancel}>
                    <p>{"Cancelar"}</p>
                </CancelButton>

            </form>
        </HabitCreationWindow>
    )

}

{/*styled components*/ }

const HabitCreationWindow = styled.div`
width: 340px;
height: 180px;
margin-left: 17px;
margin-top: 0px;
display: ${props => props.visibility === "true" ? "flex" : "none"};

background: #FFFFFF;
border-radius: 5px;

justify-content: center;
`

const Input = styled.input`
width: 303px;
height: 45px;
background: white;
border: 1px solid #d5d5d5;
border-radius: 5px;
padding-left: 11px;
margin-top: 18px;
::placeholder{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #dbdbdb;
}
`

const WeekList = styled.div`
margin-top: 8px;
display: flex;
    .day-btn{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-right: 4px;
        p{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 25px;
        }
        &:hover{
            cursor: pointer;
        }
    }
    .selected{
        background-color: #CFCFCF;
        p{
            color:#FFFFFF;
        }
    }
    .not-selected{
        background-color: #FFFFFF;
        p{
            color:#DBDBDB;
        }
    }
`

const SaveButton = styled.button`
width: 84px;
height: 35px;

background: #52B6FF;
border-radius: 5px;
margin-top: 25px;
margin-left: 230px;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    text-align: center;
    color: #FFFFFF;
}
`

const CancelButton = styled.div`
width: 69px;
height: 20px;
margin-left: 140px;
margin-top: -27px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;

text-align: center;

color: #52B6FF;
`