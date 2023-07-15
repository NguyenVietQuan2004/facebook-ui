import { GoogleIcon, LogoIcon } from '~/assets/icons/icons';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { Button } from '~/components/Button';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserLogin } from '~/components/redux/actions';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    const [inputNameValue, setInputNameValue] = useState('');
    const [inputPassValue, setInputPassValue] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/users/');
                const users = await response.json();
                const user = users.find(
                    (user) => user.nameLogin === inputNameValue && user.password === +inputPassValue,
                );
                if (user) {
                    dispatch(addUserLogin(user));
                    navigate('/');
                }
            } catch (error) {
                console.error('Error: API user is not defined');
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmit]);

    const handleSubmib = (e) => {
        e.preventDefault();
        setIsSubmit(!isSubmit);
    };

    return (
        <div className={cx('wrapper')}>
            <form className={cx('form')}>
                <div className={cx('header')}>
                    <LogoIcon className={cx('iconSnow')}></LogoIcon>
                    <span>babon</span>
                </div>
                <input
                    placeholder="User Name"
                    value={inputNameValue}
                    onChange={(e) => setInputNameValue(e.target.value)}
                />
                <input
                    placeholder="Password"
                    value={inputPassValue}
                    onChange={(e) => setInputPassValue(e.target.value)}
                />
                <Button onClick={(e) => handleSubmib(e)} className={cx('btn-login')}>
                    Log in
                </Button>
                <div> Forgot pdivssword?</div>
                <button className={cx('SignInGoogle')}>
                    <GoogleIcon className={cx('GoogleIcon')} />
                    Sign in with Google
                </button>
                <Button>Create new account</Button>
            </form>
        </div>
    );
}

export default Login;
