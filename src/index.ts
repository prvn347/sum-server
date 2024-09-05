import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 4000;
app.get("/health", (req: Request, res: Response) => {
  res.send("Server is running.");
});
app.get("/sum", (req: Request, res: Response) => {
  try {
    const a = parseInt(req.query.a as string);
    const b = parseInt(req.query.b as string);
    const sum = a + b;

    res.status(201).json({
      sum: sum,
    });
  } catch (error) {
    console.error("error while doing sum" + error);
    res.status(403).json({
      error: error,
    });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on PORT" + PORT);
});
