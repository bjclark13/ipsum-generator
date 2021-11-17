import axios, { AxiosResponse } from 'axios';

function getIpsum(paragrahs: number): Promise<string[]> {
	return axios
		.get(
			`https://baconipsum.com/api/?type=all-meat&paras=${paragrahs}&start-with-lorem=1`
		)
		.then((response: AxiosResponse) => {
			return response.data;
		});
}

export default getIpsum;
