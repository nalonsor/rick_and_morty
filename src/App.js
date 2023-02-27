import { useState, useEffect } from "react";
import Layout from "./template/layout/Layout";
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import NotFound from "./components/notfound/NotFound";
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites';

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {

  const [characters, setCharacters] = useState([]);
  const [erroLogin, setErrorLogin] = useState('');
  const location = useLocation();
  const token = localStorage.getItem('token');

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'mail@gmail.com';
  const password = 'Secret33';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      localStorage.setItem('token', 'rickAndMortyToken');
      setAccess(true);
      navigate('/home');
    }else{
      setErrorLogin('* User or password incorrect');
    }
  }

  const onDelete = (id) => {
    setCharacters((oldChars) => oldChars.filter(character => character.id!== parseInt(id)));
  }

  useEffect(() => {
    if(token === 'rickAndMortyToken'){
      setAccess(true);
      navigate('/home');
    }

    !access && navigate('/');
    // eslint-disable-next-line
  }, [token,access]);

  return (
    <Layout>
        {
          //location.pathname !== '/' && <Nav onSearch={ onSearch } />
          location.pathname !== '/' && <Nav />
        }
      <Routes>

        <Route path="/" element={<Form login={ login } errorLogin={erroLogin} />} />
        <Route path="/home" element={<Cards characters={ characters } onDelete={ onDelete } />} />
        <Route path="/characters" element={<Cards characters={ characters } onDelete={ onDelete } />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path='*' element={<NotFound />}/>

      </Routes>
    </Layout>
  );
}

export default App;
