import axios from 'axios';

export async function getInstitutesAll() {
    try {
        let result = await axios.get(`${import.meta.env.VITE_REST_API_SECURITY_ECOMMERCE}`);

        console.log('<<AXIOS-INSTITUTOS>>: ', result.data);
        return result.data;
    } catch (error) {
        console.error('Error in Axios request:', error.response ? error.response.data : error.message);
        throw error;
    }
}