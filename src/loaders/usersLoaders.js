import axios from "axios";
export const getUsers=async() => {
    const response = await axios.get("https://api.github.com/users");
    return response.data;
}

export const getUserDetails = async ({params}) => {
    const userId=params.id;
    const response = await axios.get( `https://api.github.com/users/${userId}`);
    return response.data;
}

export const searchUsers=async({request}) => {
    const url=new URL(request.url);
    const q=url.searchParams.get('q');

    const response = await axios.get(`https://api.github.com/search/users?q=${q}+in:login`);
    return response.data;
}
