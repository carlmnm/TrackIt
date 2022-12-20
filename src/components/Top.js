import styled from "styled-components"
import React, { useContext } from 'react'
import Context from "./Context"
import logoname from "../assets/imgs/logoname.png"

export default function TopOfPage() {
    const { userInfo, setUserInfo, token, setToken } = useContext(Context)

    return (
        <>
            <Header data-test="header">
                <img className="logo" src={logoname} />
                <img className="user-img" src={userInfo.image} />
            </Header>
        </>
    )

}

{/* styled components*/ }

const Header = styled.div`
width: 375px;
height: 70px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
top: 0px;
z-index: 2;
.logo{
    width: 97px;
    margin-left: 18px;
}
.user-img{
    width: 51px;
    height: 51px;
    border-radius: 98px;
    margin-right: 18px;
    object-fit: cover;
}
`