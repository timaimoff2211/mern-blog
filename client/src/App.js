import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, useHistory, Redirect, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage';
import Register from './pages/RegisterPage';
import Auth from './pages/AuthPage';
import Cabinet from './pages/CabinetPage';
import CreateArt from './pages/CreatePage';
import Icons from './components/Icons';
import NotFound from './components/NotFound';
import ArticlePage from './pages/ArticlePage';

const App = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  const [loggedUser, setLoggedUser] = useState(localStorage.getItem('user') || null);
  const [allArticles, setAllArticles] = useState(null);
  const [userArts, setUSerArts] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get('/articles/get-all')
        .then(({ data }) => {
            setAllArticles(data);
        })
        .catch(e => console.error('Error:', e.message));

    axios.get('/user/all')
        .then(({ data }) => {
          setUsers(data);
        })
        .catch(e => console.log(e.message));
  }, [])

  useEffect(() => {
    if(isLogin === true) {
      if(loggedUser !== null) {
        const userId = JSON.parse(loggedUser).id;
      
        axios.get(`/articles/get/${userId}`)
          .then(({ data }) => {
            setUSerArts(data);
          })
          .catch(e => console.log(e.message));
      }
    }
  }, [isLogin, loggedUser])
  
  useEffect(() => {
    if(localStorage.getItem('token') !== null) {
      setIsLogin(true);
    }
  }, [])


  const register = (name, email, login, password, btn) => {
    if(!name.trim()) alert('Введите имя');
    else if(!email.trim()) alert('Введите email');
    else if(!login.trim()) alert('Введите логин');
    else if(!password) alert('Введите пароль');

    else {
        const user = {
            name: name,
            email: email,
            login: login,
            password: password
        }
        btn.disabled = true;
        axios.post('/account/reg', user)
            .then(res => {
                alert(res.data.msg);
                history.push("/auth");
            })
            .catch(e => console.warn(e.message))
            .finally(() => btn.disabled = false);
    }
  }

  const login = (login, password, btn) => {
    if(!login.trim()) alert('Введите логин');
    else if(!password) alert('Введите пароль');

    else {      
        const user = {
            login,
            password
        };

        btn.disabled = true;
        axios.post('/account/auth', user)
            .then(({data}) => {
                if(!data.success) alert(data.msg);
                else {
                    alert('Вы успешно авторизовались');
                    localStorage.setItem('token', data.userToken);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    setIsLogin(true);
                    setLoggedUser(localStorage.getItem('user'));
                    history.push('/cabinet');
                }
            })
            .finally(() => btn.disabled = false)
            .catch(e => console.warn(e));
    }
  }

  const userLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLogin(false);
    history.push("/auth");
  }

  const addArticleHandler = (title, text, btn, catId) => {
    const authorId = JSON.parse(loggedUser).id;
    const article = {
      title,
      text,
      data: new Date().toLocaleString('ru', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      catId,
      authorId
    }

    btn.disabled = true;

    axios.post('/articles/add', article)
      .then(res => {
        alert(res.data.msg);
        setAllArticles([...allArticles, article]);
        setUSerArts([...userArts, article]);
      })
      .catch(e => {
        console.error(e);
      })
      .finally(() => {
        btn.disabled = false;
      });
  }


  return (
      <div className="App">
        <Icons />
        <Header isLogged={isLogin} logout={userLogout} />
        <Switch>
          <Route exact path="/">
            <Home
              articles={allArticles} 
              userArts={userArts} 
              isLogin={isLogin}
              users={users} 
            />
          </Route>
          <Route path="/reg">
            <Register regFunc={register} />
          </Route>
          <Route path="/auth">
            <Auth authFunc={login} />
          </Route>
          <Route path="/article/:id">
            <ArticlePage arts={allArticles} />
          </Route>
          {isLogin && (
            <>
            <Route path="/cabinet">
              <Cabinet />
            </Route>
            <Route path="/create">
              <CreateArt addArt={addArticleHandler} />
            </Route>
            </>
          )}
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer /> 
      </div>
  )
}

export default App;
