import axios from 'axios'

export default function WithTokenn(token){

let tokens=token
const instance = axios.create({
    headers: {
        'Authorization': `Bearer ${tokens}`,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, X-Requested-With, Authorization, Accept',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With' : 'XMLHttpRequest',
        'ApiKey' : `${process.env.NEXT_PUBLIC_BASE_API_KEY}`,
    },
    // withCredentials: true
})


return (
    instance
)
}
