import styled from "styled-components"
import { useEffect, useState } from "react"
import Context from "./Context"
import React, { useContext } from 'react'

export default function CreatingHabits() {
    const { userInfo, setUserInfo, token, setToken, show, setShow } = useContext(Context)
    const week = [
        {id: 0, name: "D"},
        {id: 1, name: "S"},
        {id: 2, name: "T"},
        {id: 3, name: "Q"},
        {id: 4, name: "Q"},
        {id: 5, name: "S"},
        {id: 6, name: "S"},
    ]
    const [idDays, setIdDays] = useState([])

    {/*function Selected(idDays) {
        const clicked = idDays.includes(idDay)
        if (!clicked){
            setDays([...idDays, idDay])

        } else{
            setIdDays(idDays.filter)
        }
    }*/}
    return(
        <HabitCreationWindow>

        </HabitCreationWindow>
    )

}

{/*styled components*/}

const HabitCreationWindow = styled.div`
width: 340px;
height: 180px;
margin-left: 17px;
margin-top: 0px;
display: ${props => props.visibility ? "flex" : "none"};

background: #FFFFFF;
border-radius: 5px;
`