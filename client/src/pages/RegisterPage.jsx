import React, {useState} from 'react';

import Input from '../components/Input';

const Register = ({regFunc}) => {  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="container pt-5 pb-5">
            <div className="jumbotron">
                <h1>Регистрация</h1>
            </div>
            <form className="pt-3 pb-3" onSubmit={(e) => {
                e.preventDefault();
                const regFormBtn = e.target.querySelector('button'); 
                regFunc(name, email, login, password, regFormBtn);
            }}>
                <Input 
                    type="text" 
                    func={e => setName(e.target.value)} 
                    value={name} 
                    placeholder={'Введите имя'} 
                />
                <Input 
                    type="text" 
                    func={e => setEmail(e.target.value)} 
                    value={email} 
                    placeholder="Введите E-mail"
                />
                <Input 
                    type="text" 
                    func={e => setLogin(e.target.value)} 
                    value={login} 
                    placeholder="Введите логин"
                />
                <Input 
                    type="password" 
                    func={e => setPassword(e.target.value)} 
                    value={password} 
                    placeholder="Введите пароль"
                />
                <button 
                    className="btn btn-primary" 
                    type="submit">
                    Зарегистрироваться
                </button>
            </form>
        </div>
    )
}

export default Register;
