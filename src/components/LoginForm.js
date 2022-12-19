import styled from "styled-components"

export default function UserLogin() {
    return (
        <ContainerForm>
            <form>
                <Input type="email" placeholder="e-mail" />
                <Input type="password" placeholder="senha" />
                <ButtonLogin>
                    <p>
                        {"Entrar"}
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