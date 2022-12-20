import TopOfPage from "./Top";
import PageFooter from "./Footer"
import styled from "styled-components";
import React, { useContext } from 'react'
import Context from "./Context"
import { useEffect, useState } from "react"
import axios from "axios"
import CreatingHabits from "./HabitMaker"

export default function MyHabits() {
    const [createdHabits, setCreatedHabits] = useState([])
    const { token, show, setShow } = useContext(Context)
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    //const tok = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzYxMSwiaWF0IjoxNjcxNTU5NDY2fQ.t2vsvOYCbPoYlioL4Oeii7tVlXvImkUMPdgIC4lkjRU"
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promise = axios.get(URL, config)

        promise.then((res) => setCreatedHabits(res.data))
        console.log(token)


    }, [])

    function openCard() {
        if (show === "false") {
            setShow("true")
        } else if (show === "true") {
            setShow("false")
        }
        //console.log(show)
    }




    return (
        <ContainerHabits>
            <TopOfPage />
            <SubHeader>
                <p>
                    {"Meus hábitos"}
                </p>
                <button onClick={openCard}>
                    <p>
                        {"+"}
                    </p>
                </button>
            </SubHeader>
            <CreatingHabits />
            <HabitCard>
                {createdHabits.map((item) => 
                item.name
                )}
            </HabitCard>
            <InitialText>
                <p>
                    {"Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"}
                </p>
            </InitialText>
            <PageFooter />
        </ContainerHabits>
    )

}

{/*styled components*/ }

const ContainerHabits = styled.div`
height: 667px;
width: 375px;
background-color: #e5e5e5;
margin-top: 0px;
`

const SubHeader = styled.div`
width: 375px;
height: 60px;
margin-top: 70px;
display: flex;
justify-content: space-between;
align-items: center;

p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    color: #126BA5;
    margin-left: 17px;
}
button{
    width: 50px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    margin-right: 18px;
    display: flex;
    justify-content: center;
    position: relative;
    p{
        position: absolute;
        bottom: 0px;
        right: 14px;
        width: 16px;
        height: 34px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 27px;
        color: #FFFFFF;
    }

}
`

const InitialText = styled.div`
width: 338px;
height: 74px;
margin-top: 20px;
margin-left: 16px;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    color: #666666;
}

`

const HabitCard = styled.div`
width: 340px;
height: 91px;
background-color: #FFFFFF;
border-radius: 5px;
`

