import { defineStore } from 'pinia'
import axios from 'axios'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    count: 9,
    next: '',
    previous: '',
    results: [],
  }),
  getters: {
    getResults: (state) => state.results,
  },
  actions: {
    async getSponsorList({ count, next, previous, results }) {
      return await axios
        .post('https://club.metsenat.uz/api/v1/sponsor-list/', {
          count,
          next,
          previous,
          results,
        })
        .then((res) => {
          console.log(res)
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
})
