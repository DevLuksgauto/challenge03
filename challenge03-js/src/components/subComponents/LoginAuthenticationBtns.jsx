import { FacebookAuth, GoogleAuth } from '../../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';


import kkk from '../../assets/cryingCat404.jpg';
import facebook from '../../assets/FacebookAuth.png';
import google from '../../assets/GoogleAuth.png';
import classes from './LoginAuthenticationBtns.module.css';

const LoginAuthenticationBtns = () => {

    const navigate = useNavigate();

        async function facebookLoginHandler (e) {
            e.preventDefault()
            const user = await FacebookAuth();
            navigate('/home');
        };

        async function googleLoginHandler (e) {
            e.preventDefault()
            const user = await GoogleAuth();
            navigate('/home')
        };

    return(
        <div className={classes.container}>
        <button className={classes.socialMedia}><img className={classes.kkk} src={kkk} alt="kkk" /></button>
        <button className={classes.socialMedia} onClick={facebookLoginHandler}><img src={facebook} alt="Facebook logo" /></button>
        <button className={classes.socialMedia} onClick={googleLoginHandler}><img src={google} alt="Google kkk" /></button>
    </div>
    )
};

export default LoginAuthenticationBtns