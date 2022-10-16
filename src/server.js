const PORT = 8000;
const axios = require('axios');
const express = require('express')
const cors = require('cors');
const { response } = require('express');
require('dotenv').config();

 const app = express();

 app.use(cors())

 app.get('/flights', (req,res) => {
const options = {
    url: 'https://d12eebdb-1f07-442b-b55a-88841706d88d-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/flights/collections/departures?page-size=5',
    headers: {
  accept: 'application/json',
  'X-cassandra-token': 'AstraCS:LfXlXXjZGadQTNTkHYBAZchp:f2bc8b2d44222112125864bbc258687db7eace2f06c7a8c3bb8d6cf81506bb0f'
    }
}
axios.request(options).then(response => {
    console.log(response.data)
    res.send(response.data)
}).catch(error => {
    console.log(error)
})
 })

 app.listen(PORT, () => {
   console.log(`listening on port ${PORT}`);
 })