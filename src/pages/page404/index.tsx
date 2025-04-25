import styled from 'styled-components'
import pg404 from '../../assets/images/page404.png'
import { useNavigate } from 'react-router-dom'
import { pageurl } from '../../constants/pageurl'

const Page404 = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <img src={pg404} alt="page 404" />

      <p>Sorry for the inconvenience</p>

      <button onClick={() => navigate(pageurl.ABOUT)}>
        Back to about page
      </button>
    </Wrapper>
  )
}

export default Page404

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  img {
    max-width: 600px;
  }

  p {
    margin-bottom: 15px;
  }

  button {
    height: 56px;
    border: none;
    border-radius: 240px;
    font-size: 18px;
    font-family: Manrope_Bold;
    padding: 16px 56px;
    color: #0a2640;
    background: #65e4a3;
  }
`
