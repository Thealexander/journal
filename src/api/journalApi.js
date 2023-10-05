import axios from 'axios'

const journalApi= axios.create({
    baseURL:'https://vue-projects-3a2b7-default-rtdb.firebaseio.com'
})

export default journalApi