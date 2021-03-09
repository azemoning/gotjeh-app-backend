require("dotenv").config();
const express = require("express");
const passport = require("passport");
const app = express();
const restrict = passport.authenticate("jwt", { session: false });
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routers/indexRoute"));
app.use("/api/auth", require("./routers/authRoute"));
app.use("/api/users", require("./routers/userRoute"));
app.use("/api/jobs", require("./routers/jobsRoute"));
app.use("/api/subscriptions", require("./routers/subscriptionsRoute"));
app.use("/api/categories", require("./routers/categoriesRoute"));
app.use("/api/courses", require("./routers/courseRoute"));

app.use(function (error, req, res, next) {
  res.send(error);
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
