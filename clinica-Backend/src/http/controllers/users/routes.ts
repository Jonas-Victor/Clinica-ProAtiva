import { FastifyInstance } from "fastify";
import { authenticate } from "@/http/controllers/users/authenticate";
import { profile } from "@/http/controllers/users/profile";
import { register } from "@/http/controllers/users/register";
import { verifyJwt } from "@/http/middleware/verify-jwt";
import { refresh } from "./refresh";
import { appointment } from "./appointment";

export async function usersRouters(app: FastifyInstance) {
  app.post("/users", register);
  app.post("/sessions", authenticate);
  app.patch("/token/refresh", refresh);
  app.post("/appointments", appointment);
  
  app.get("/me", {onRequest: [verifyJwt]}, profile);
}