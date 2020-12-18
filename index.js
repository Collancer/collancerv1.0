const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`Server started at port ${PORT}`);
});