import { defineStore } from 'pinia'
import axios from 'axios'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: undefined,
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    async logIn({ username, password }) {
      return await axios
        .post('https://club.metsenat.uz/api/v1/auth/login/', {
          username,
          password,
        })
        .then((res) => {
          this.user = res.data
          localStorage.setItem('user', JSON.stringify(this.user))
          axios.defaults.headers.common['Authorization'] = `Bearer ${this.user.token}`
        })
        .catch((e) => {
          console.log(e)
        })
    },
    logOut() {
      this.user = undefined
      localStorage.removeItem('user')
      location.reload()
      console.log('log out')
    },
  },
})
