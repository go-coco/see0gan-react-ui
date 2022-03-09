import axios from "axios";
const SPACE_API_BASE_URL = "http://localhost:8080/api/v1/spaces";

class SpaceService{

    saveSapce(space){
        return axios.post(SPACE_API_BASE_URL, space);
    }

    getAllSpace(){
        return axios.get(SPACE_API_BASE_URL);
    }

}

export default new SpaceService();