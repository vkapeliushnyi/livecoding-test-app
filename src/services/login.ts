import axios from 'axios';

const login = async (login= "test@test.test", password = "test") => {
    try {
        const response = await axios.post("https://geniusee-auth.herokuapp.com/auth/login", {
            login,
            password
        })
        return response;
    } catch (error) {
        console.error(error);
    }
}

export default login;