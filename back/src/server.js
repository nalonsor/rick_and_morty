const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const PORT = 3001;
const router = require('./routes');

app.use(cors({origin: '*'}));
app.use(morgan('dev'));
app.use(express.json());
//app.get('/', (req, res) => res.status(200).json({ status: "Srv running on port "+PORT }));

app.use('/',router);
app.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});

