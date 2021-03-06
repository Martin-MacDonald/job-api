const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.get('/jobs', async (req, res) => {
  res.send(JSON.stringify(jobs));
});

app.listen(port, () => {
  console.log(`started on port ${port}`);
});

const jobs = [
	{
		ref: "J0001",
		status: "In Review"
	},
	{
		ref: "J0002",
		status: "Done"
	},
		{
		ref: "J0003",
		status: "In Progress"
	},
	{
		ref: "J0004",
		status: "In Review"
	},
	{
		ref: "J0005",
		status: "Done"
	},
		{
		ref: "J0006",
		status: "In Progress"
	},
		{
		ref: "J0007",
		status: "In Review"
	},
		{
		ref: "J0008",
		status: "Done"
	},
	{
		ref: "J0009",
		status: "In Progress"
	},
	{
		ref: "J0010",
		status: "In Review"
	}
]