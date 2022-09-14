import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Fresh <span>Farm</span> Products
          </h1>
          <p>
            We Sell Fresh Farm Products Collected Directly From Farmers and Deliver Them To Your Doorstep.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='Farm Items' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing