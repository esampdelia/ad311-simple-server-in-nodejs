import http from "http";
import fs from "fs";

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Serve home.html
    fs.readFile("home.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server error");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

  } else if (req.url === "/about") {
    // About page
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the About Page!");

  } else {
    // 404 route
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
