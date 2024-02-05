// Import the express module
const exprss = require("express");
// Create an instance of the express application
const app = exprss();

// Import the 'people' data from the data module
const { people } = require("./data");

// Serve static files from the 'methods-public' directory
app.use(exprss.static("./methods-public"));

// Parse incoming request data with urlencoded payloads
app.use(exprss.urlencoded({ extended: false }));

// Pase json data
app.use(exprss.json());

// Handle GET request for the root path
app.get('/api/people', (req, res) => {
    // Send the 'people' data as JSON
    res.status(200).json({ success: true, data: people });
});

// Handle Post request for the root path
app.post('/api/people', (req, res) => {
    // Extract the 'name' field from the request body
    const { name } = req.body;
    if (name) {
        // Send a welcome message with the provided name
        res.status(201).json({ success: true, person: name });
    } else {
        // Send an error message if no name is provided
        res.status(401).json({ success: false, msg: "Name field is required" });
    }
});


app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
  
    const person = people.find((person) => person.id === Number(id))
  
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name
      }
      return person
    })
    res.status(200).json({ success: true, data: newPeople })
  })
  
  app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
  })

// Handle POST request for the '/login' path
app.post('/login', (req, res) => {
    // Extract the 'name' field from the request body
    const { name } = req.body;
    if (name) {
        // Send a welcome message with the provided name
        res.status(200).send(`Welcome ${name}`);
    } else {
        // Send an error message if no name is provided
        res.status(401).send("Please provide credentials");
    }
});

// Start the server and listen on port 5000
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});