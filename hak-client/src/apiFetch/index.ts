import axios from 'axios'

export const apiFetch = async (url: string) => axios.get(url).then((res) => res.data).catch(e => console.log(e))