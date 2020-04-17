import React, {useState} from 'react';
import Input from '../components/Input';

const Auth = ({authFunc}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container pt-5 pb-5">
            <div className="jumbotron">
                <h1>Авторизация</h1>
            </div>
            <form className="pt-3 pb-3" onSubmit={(e) => {
                e.preventDefault();
                const authFormBtn = e.target.querySelector('button'); 
                authFunc(login, password, authFormBtn);
            }}>
                <Input 
                    type="text" 
                    func={e => setLogin(e.target.value)} 
                    value={login} 
                    placeholder={'Введите логин'} 
                />
                <Input 
                    type="password" 
                    func={e => setPassword(e.target.value)} 
                    value={password} 
                    placeholder="Введите пароль"
                />
                <button 
                    className="btn btn-success" 
                    type="submit">
                    Войти в кабинет
                </button>
            </form>
        </div>
    )
}

export default Auth;
