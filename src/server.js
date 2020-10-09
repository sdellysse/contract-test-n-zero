import createExpress from "express";
import createMorgan from "morgan";
import { fib } from "./utils";

const expressApp = createExpress();

expressApp.use(createMorgan("combined"));

expressApp.get("/fib/:n", (req, res) => {
  const n = parseInt(req.params.n, 10);
  res.send(`fib(${n}) is ${fib(n)}`);
  res.end();
});

expressApp.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
