const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, "frontend", "build")));

// Route to serve the main index.html
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
