import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect, useHistory} from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import api from '../utils/api';

import Login from './Login';
import Register from './Register';
import InfoToolOk from './InfoToolOk';
import InfoToolNope from './InfoToolNope';
import ProtectedRoute from './ProtectedRoute';

import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const [isInfoToolOkPopupOpen, setIsInfoToolOkPopupOpen] = useState(false);
  const [isInfoToolNopePopupOpen, setIsInfoToolNopePopupOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');


  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handelInfoToolOk() {
    setIsInfoToolOkPopupOpen(true);
  }

  function handleInfoToolNope() {
    setIsInfoToolNopePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsInfoToolOkPopupOpen(false);
    setIsInfoToolNopePopupOpen(false);
  }


  const avatarPopupOpen = `${isEditAvatarPopupOpen ? 'popup_opened' : ''}`;
  const editPopupOpen = `${isEditProfilePopupOpen ? 'popup_opened' : ''}`;
  const addPopupOpen = `${isAddPlacePopupOpen ? 'popup_opened' : ''}`;
  const imgPopupOpen = `${isImagePopupOpen ? 'popup_opened' : ''}`;
  const infoToolOkPopupOpen = `${isInfoToolOkPopupOpen ? 'popup_opened' : ''}`;
  const infoToolNopePopupOpen = `${isInfoToolNopePopupOpen ? 'popup_opened' : ''}`;

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);


  const history = useHistory();

  function handleRegister(item) {
    api
      .registration(item)
      .then((data) => {
        handelInfoToolOk();
        setTimeout(() => {
          history.push("./signin");
          closeAllPopups();
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        handleInfoToolNope();
      })
  }


  function handleLogin(item) {
    api
      .login(item)
      .then(() => {
        handelInfoToolOk();
        localStorage.setItem("loggedIn", "true");
        setUserEmail(item.email)
        setLoggedIn(true);
        setTimeout(() => {
          history.push("./main");
          closeAllPopups();
        }, 1500);
      })
      .then(() => {
        api
          .getUserInfo()
          .then((data) => {
            setCurrentUser(data);
          })
          .catch((err) => console.log(err))
      })
      .then(() => {
        api
          .getInitialCards()
          .then((cards) => {
            setCards(cards.data);
          })
          .catch(err => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        handleInfoToolNope();
      })
  }

  function handleSignOut() {
    setLoggedIn(false);
    localStorage.setItem("loggedIn", "false");
    setUserEmail('');
    history.push("./signin")
  }

  useEffect(() => {
    if (localStorage.loggedIn === "true") {
      api
        .checkValidToken()
        .then((item) => {
          setLoggedIn(true);
          setUserEmail(item.email);
          history.push("./main")
        })
        .then(() => {
          api
            .getUserInfo()
            .then((data) => {
              setCurrentUser(data);
            })
            .catch((err) => console.log(err))
        })
        .then(() => {
          api
            .getInitialCards()
            .then((cards) => {
              setCards(cards.data);
            })
            .catch(err => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [])


  function handleUpdateUser(item) {
    api
      .setUserInfo(item)
      .then((data) => {
        setCurrentUser(data);
      })
      .then(() => {
        api
          .getUserInfo()
          .then((data) => {
            setCurrentUser(data);
          })
          .catch((err) => console.log(err))
      })
      .then(() => {
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleUpdateAvatar(item) {
    api
      .setUserAvatar(item)
      .then((data) => {
        setCurrentUser(data);
      })
      .then(() => {
        closeAllPopups();
      })
      .then(() => {
        api
          .getUserInfo()
          .then((data) => {
            setCurrentUser(data);
          })
          .catch((err) => console.log(err))
      })
      .catch(err => console.log(err));
  }


  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i === currentUser._id);

    api
      .changeLikeCardStatus(card._id, isLiked)
      .then(({data}) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => c._id === card._id ? data : c);

        // Обновляем стейт
        setCards(newCards);
      })
      .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        const newCards = cards.filter(c => c._id !== card._id);
        // Обновляем стейт
        setCards(newCards);
      })
      .catch(err => console.log(err));
  }


  function handleAddPlaceSubmit(card) {
    console.log('card', card);
    api
      .createCardOne(card)
      .then(card => {
        console.log('inside', card);
        setCards([card.data, ...cards]);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>

          <ProtectedRoute
            path="/main"
            loggedIn={loggedIn}
            component={Main}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onImgCard={handleCardClick}
            cards={cards}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
            handleUpdateAvatar={handleUpdateAvatar}
            avatarPopupOpen={avatarPopupOpen}
            closeAllPopups={closeAllPopups}
            handleUpdateUser={handleUpdateUser}
            editPopupOpen={editPopupOpen}
            handleAddPlaceSubmit={handleAddPlaceSubmit}
            addPopupOpen={addPopupOpen}
            selectedCard={selectedCard}
            imgPopupOpen={imgPopupOpen}
            userEmail={userEmail}
            onClick={handleSignOut}
            text={'Выйти'}
          />

          <Route path="/signin">
            <Header url="/signup" text="Зарегистрироваться"/>
            <Login onLogin={handleLogin}/>
            <InfoToolOk isOpen={infoToolOkPopupOpen} onClose={closeAllPopups} text={'Авторизировались'}/>
            <InfoToolNope isOpen={infoToolNopePopupOpen} onClose={closeAllPopups}/>
          </Route>

          <Route path="/signup">
            <Header url="/signin" text="Войти"/>
            <Register onRegister={handleRegister}/>
            <InfoToolOk isOpen={infoToolOkPopupOpen} onClose={closeAllPopups} text={'Зарегистрировались'}/>
            <InfoToolNope isOpen={infoToolNopePopupOpen} onClose={closeAllPopups}/>
          </Route>

          <Route exact path="/">
            {loggedIn ? <Redirect to="/main"/> : <Redirect to="/signin"/>}
          </Route>

        </Switch>

        <Footer/>

      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
