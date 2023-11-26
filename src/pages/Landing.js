import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Logo} from '../components';
import {Link} from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo/>
            </nav>
            <div className={'container page'}>
                <img src={main} alt='job hunt' className={'img main-img'}/>
                <div className={'info'}>
                    <h1>
                        job <span>searching</span> app
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci autem delectus
                        earum eligendi ex incidunt mollitia nesciunt odio, quidem repellat rerum saepe sint sit velit,
                        veritatis. Quasi, veniam?
                    </p>
                    <Link to='/register' className={'btn btn-hero'}>
                        Login/Register
                    </Link>
                </div>

            </div>
        </Wrapper>
    );
};

export default Landing;
