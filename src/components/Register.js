import styled from "styled-components"
import logo from "../assets/imgs/logoimg.png"
import UserSignIn from "./RegisterForm"
import {Link} from "react-router-dom"

export default function SignIn() {
    return (
        <ContainerRegister>
            <img src={logo} />
            <UserSignIn/>
            <Link data-test="login-link" to={`/`}>
                <h1>
                    {"Já tem uma conta? Faça login!"}
                </h1>
            </Link>
        </ContainerRegister>
    )
}

const ContainerRegister = styled.div`
width: 375px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
img{
    width: 180px;
    margin-top: 68px;
    margin-bottom: 33px;
}
h1{
    width: 232px;
    height: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
}
`