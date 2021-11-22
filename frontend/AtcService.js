import axios from "axios";

const url = "api/atc";

class AtcService {
	static async getAtc() {
		try {
			const response = await axios.get(url);
			const data = response.data;
			return data;
		} catch (e) {
            console.log(e);
            throw e;
		}
	}
}

export default AtcService;
