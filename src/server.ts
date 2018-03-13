/**
 * Main entry point for the Digital Citizenship proxy.
 */

import * as dotenv from "dotenv";
import * as http from "http";
import * as winston from "winston";
import app from "./app";

dotenv.config();

const port = process.env.PORT || 80;

const server = http.createServer(app).listen(port, () => {
  winston.log("info", "Listening on port %d", server.address().port);
});