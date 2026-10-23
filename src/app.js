import express from "express";

const app = express();

app.get("/", (_request, response) => {
  response.send("Hello, GitHub Actions!");
});

if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

export default app;