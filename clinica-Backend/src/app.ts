import fastify from "fastify";
import { usersRouters } from "./http/controllers/users/routes";
import { ZodError } from "zod";
import { env } from "@/env";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import fastifyCors from "@fastify/cors";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: "refreshToken",
    signed: false,
  },
  sign: {
    expiresIn: "10m"
  }
});

app.register(fastifyCookie);

app.register(usersRouters);

app.register(fastifyCors, {
  origin: "*",
});

app.setErrorHandler((error, _request, reply)=>{
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: "Internal server error." });
});