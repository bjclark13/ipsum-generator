// this is our service
// we are going to export functions
// that allow us to interact with our api

import axios from 'axios';

// "children": [
//     {
//     "kind": "t3",
//     "data": {
//     "approved_at_utc": null,
//     "subreddit": "aww",
//     "selftext": "",
//     "author_fullname": "t2_43xhb",
//     "saved": false,
//     "mod_reason_title": null,
//     "gilded": 1,

//
// [
// {
//     title:
//     thumbnail
// }
// ]

function getIpsum(numberOfParagraphs: number): Promise<string[]> {
	return axios
		.get<string[]>(`https://baconipsum.com/api/?type=meat-and-filler&paras=${numberOfParagraphs}`)
		.then(response => response.data)
			// manipulate data here
			// adjust what we get in to match what the rest of the app is expecting
}

export default getIpsum;
