const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const Dist_Directory = path.join(__dirname, '../dist');
const HTML_File = path.join(Dist_Directory, 'index.html');

app.use(express.static(Dist_Directory))

app.get('/', (req, res, next) => {
    res.sendFile(HTML_File)
});

app.get('/api', (req, res, next)=>{
    console.log('get api data')
})


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})