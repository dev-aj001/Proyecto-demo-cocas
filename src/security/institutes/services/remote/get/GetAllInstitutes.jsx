import axios from "axios";

export function getAllInstitutes() {
  return new Promise((resolve, reject) => {
    axios.get(import.meta.env.VITE_REST_API_SECURITY_ECOMMERCE)
      .then((response) => {
        const data = response.data;

        if (!Array.isArray(data)) {
          console.error("Respuesta inesperada de <<getAllInstitutes>>", data);
          reject(data);
        } else {
          console.log("Institutos obtenidos:", data);
          resolve(data);
        }
      })
      .catch((error) => {
        console.error("Error en <<getAllInstitutes>>", error);
        reject(error);
      });
  });
}
