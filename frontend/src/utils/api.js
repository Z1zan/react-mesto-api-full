class Api {
  constructor({baseUrl}) {
    this.baseUrl = baseUrl;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.ok
        ? response.json()
        : Promise.reject(`Ошибка загрузки карточек: ${response.status}`))
  }

  createCardOne(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка создания карточки: ${res.status}`)
      )
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      credentials: 'include',
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка получения профиля: ${res.status}`)
      )
  }

  setUserInfo(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        about: data.about,
        avatar: data.avatar
      })
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка изменения профиля: ${res.status}`)
      )
  }

  setUserAvatar(link) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        avatar: link.avatar
      })
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка изменения профиля: ${res.status}`)
      )
  }

  removeCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка удаления картинки: ${res.status}`)
      )
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked == false) {
      return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      })
        .then((res) =>
          res.ok
            ? res.json()
            : Promise.reject(`Ошибка лайка карточки: ${res.status}`)
        )
    } else if (isLiked == true) {
      return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
        method: "DELETE",
        credentials: 'include',
      })
        .then((res) =>
          res.ok
            ? res.json()
            : Promise.reject(`Ошибка дизлайка карточки: ${res.status}`)
        )
    }
  }


  registration({email, password}) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({
        password,
        email
      })
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка: ${res.status}`) //сделать как в брифе;
      )
  }

  login({email, password}) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: 'include',
      body: JSON.stringify({
        password,
        email
      })
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка: ${res.status}`)
      )
      // .then((res) => console.log(res));
  }

  checkValidToken() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(`Ошибка: ${res.status}`)
      )
  }
}

const api = new Api({
  baseUrl: "https://api.ninhao.nomoredomains.icu",
  // baseUrl: "http://localhost:3001",
});

export default api;
