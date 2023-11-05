import axios from "axios";


const requests = axios.create({
    baseURL:"/cdjforum",
    timeout:5000
})

export default requests;