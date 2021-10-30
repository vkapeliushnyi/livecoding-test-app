import axios from 'axios';

const getUsers = async () => {
    try {
        const users = await axios.get("http://localhost:8000/users")
        return users;
    } catch (error) {
        console.error(error);
    }
}

export default getUsers;