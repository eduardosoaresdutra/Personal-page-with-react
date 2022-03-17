import styled from 'styled-components'

export const CardTemplate = styled.div`
    @media (min-width: 523px) {
        margin: 0 30px;
    }

    @media (max-width: 768px) {
        width: 100%
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #2b2c34;

    border-radius: 25px;
    width: 520px;
    padding: 0 20px;

    h1 {
        font-size: 2.5rem;
        padding-top: 50px;
    }
`