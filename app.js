import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') dotenv.config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import expressSession from 'express-session';

const app = express();

//middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


//routes
app.get('/', (req, res) => {
	res.send('Working well')
});


//port
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}`);
});
