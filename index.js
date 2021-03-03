require("dotenv").config();
const express = require("express");
const passport = require("passport");
const app = express();
const restrict = passport.authenticate("jwt", { session: false });
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routers/indexRoute"));
app.use("/auth", require("./routers/authRoute"));
app.use("/user", restrict, require("./routers/userRoute"));
app.use("/jobs", restrict, require("./routers/jobsRoute"));
app.use("/subscriptions", restrict, require("./routers/subscriptionsRoute"));
app.use("/categories", restrict, require("./routers/categoriesRoute"));

app.use(function (error, req, res, next) {
  res.send(error);
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});