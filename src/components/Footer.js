import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import styled from 'styled-components'

export default function PageFooter() {
    const taxa = 63
    const porcentagem = "Hoje"
    return (
        <ContainerFooter data-test="menu">
            <p>
                {"Hábitos"}
            </p>
            <Rodape>
                <CircularProgressbar
                    className='progress'
                    value={taxa}
                    text={`${porcentagem}`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#ffffff",
                        pathColor: "#ffffff",
                        trailColor: "transparent",


                    })}
                />
            </Rodape>
            <p>
                {"Histórico"}
            </p>
        </ContainerFooter>
    )
}

{/*styled components*/ }

const Rodape = styled.div`
width: 375px;
position: absolute;
bottom: 23px;
left: 142px;
.progress{
    width: 91px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;

}
`

const ContainerFooter = styled.div`
width: 375px;
height: 70px;
background: #FFFFFF;
display: flex;
align-items: center;
justify-content: space-around;
position: fixed;
bottom: 0px;
z-index: 2;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    color: #52B6FF;
}
`