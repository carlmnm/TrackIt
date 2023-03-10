import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ThreeDots } from 'react-loader-spinner'
import React, {useContext} from 'react'
import Context from "./Context"


export default function UserSignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [usage, setUsage] = useState(false)
    const [buttonText, setButtonText] = useState(<p>{"Cadastrar"}</p>)
    const navigate = useNavigate()

    function createAccount(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const body = { email, name, image, password }

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
        setUsage(true)


        const promise = axios.post(URL, body)
        promise.then(res => {
            navigate("/")
        })

        promise.catch((err) => {
            alert(err.response.data.message)
            setUsage(false)
            setButtonText(<p>{"Cadastrar"}</p>)
            
        })

    }

    return (
        <ContainerForm>
            <form onSubmit={createAccount}>
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

                <Input
                    data-test="user-name-input"
                    type="text"
                    placeholder="nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    disabled={usage}
                />

                <Input
                    data-test="user-image-input"
                    type="url"
                    placeholder="foto"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    required
                    disabled={usage}
                />

                <ButtonLogin data-test="signup-btn" type="submit" disabled={usage}>
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