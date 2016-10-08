
require('cogserv-text-analytics')({key: 'cac8f4a6e0744d4bb6f41a4d719768fd'})
const { keyPhrases, sentiment } = require('cogserv-text-analytics')
 
const documents = [{
  id: '1234',
  language: 'en',
  text: 'If they are authentic, Friday’s late-afternoon dump of emails sent and received by Podesta offer a glimpse into the inner workings of the Clinton campaign as it weathered its formative stages and the Democratic primary. Podesta, a canny and top-level operator in the Clinton campaign who served in both former President Bill Clinton and President Obama’s White House, often had the final say on key campaign decisions.',
}, {
  id: '5678',
  language: 'en',
  text: 'From a young age, my parents impressed on me the values that you work hard for what you want in life: that your word is your bond and you do what you say and keep your promise; that you treat people with respect. They taught and showed me values and morals in their daily life.',
}] 

keyPhrases(documents, (err, res) => {
  console.log(err || JSON.parse(res))
})



keyPhrases(documents)
  .then(res => JSON.parse(res))
  .then(res => console.log(res.documents))
  .catch(err => console.error(err))

