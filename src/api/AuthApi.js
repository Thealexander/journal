import axios from 'axios'

const authApi= axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key:'AIzaSyBT5LUx1GrFeLv4pbEbrPYE0aWG72IwQc4'
    }
})

export default authApi