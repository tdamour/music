
import request from 'request';
import fs from 'fs';

export default function getImageTags(body, callback){
  const options = {
    url: 'https://api.projectoxford.ai/vision/v1.0/tag',
    headers: {
      "Ocp-Apim-Subscription-Key":"d2e47670144a454486d2348bad0940e1",
      "Content-Type":"application/octet-stream"
    },
    body: body
  }

  request.post(options, callback);
}

// const body = "{'url':'https://tse1.mm.bing.net/th?id=OIP.M7c57993de98d39cbb0196fd5e25eb6c1H0&pid=15.1'}"
// const body = fs.readFileSync('./th.jpg')
const body = fs.createReadStream('th.jpg')
const result = getImageTags(body, console.log);
