import { llenarGrafico } from "./llenar.js";

const consumirApi = async () => {
  const resp = await axios.get("https://ucamp-api.onrender.com/api/v1/scores");
  
  llenarGrafico(resp.data.data);
};

export { consumirApi };
