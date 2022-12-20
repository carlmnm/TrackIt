import axios from "axios"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom"
import React, { useContext } from 'react'
import Context from "./Context"

export default function UserLogin() {
    const { userInfo, setUserInfo, token, setToken, show, setSHow } = useContext(Context)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [usage, setUsage] = useState(false)
    const [buttonText, setButtonText] = useState(<p>{"Entrar"}</p>)
    const navigate = useNavigate()



    function Login(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const body = { email, password }
        setUsage(true)
        setButtonText(
            <ThreeDots
                height="80"
                width="51"
                radius="9"
                color="#ffffff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />)

        const promise = axios.post(URL, body)
        promise.then((res) => {
            setToken(res.data.token)
            setUserInfo(res.data)
            navigate("/habitos")

        })
        promise.catch((err) => {
            alert(err.response.data.message)
            setUsage(false)

        })

    }

    return (
        <ContainerForm>
            <form onSubmit={Login}>
                <Input
                    data-test="email-input"
                    type="email"
                    placeholder="e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={usage}
                />
                <Input
                    data-test="password-input"
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    disabled={usage}
                />
                <ButtonLogin disabled={usage} data-test="login-btn" type="submit">
                    {buttonText}
                </ButtonLogin>
            </form>
        </ContainerForm>
    )

}

{/*styled components*/ }

const Input = styled.input`
width: 303px;
height: 45px;
background: white;
border: 1px solid #d5d5d5;
border-radius: 5px;
padding-left: 11px;
margin-bottom: 6px;
::placeholder{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #dbdbdb;
}
`

const ButtonLogin = styled.button`
width: 318px;
height: 45px;
background: #52B6FF;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    text-align: center;
    color: #FFFFFF;
}
`

const ContainerForm = styled.div`
width: 318px;
display: flex;
justify-content: center;
align-items: center;
`