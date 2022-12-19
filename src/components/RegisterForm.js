import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function UserSignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate()

    function createAccount (e){
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const body = {email, name, image, password}

        const promise = axios.post(URL, body)
        promise.then(res => {
            alert("Cadastro realizado!")
            navigate("/")
        })

        promise.catch((err) => alert(err.response.data.message))

    }

    return (
        <ContainerForm onSubmit={createAccount}>
            <form>
                <Input 
                type="email" 
                placeholder="e-mail" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                />

                <Input 
                type="password" 
                placeholder="senha" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                />

                <Input 
                type="text" 
                placeholder="nome"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                />

                <Input 
                type="url" 
                placeholder="foto"
                value={image}
                onChange={e => setImage(e.target.value)}
                required
                />

                <ButtonLogin>
                    <p>
                        {"Cadastrar"}
                    </p>
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