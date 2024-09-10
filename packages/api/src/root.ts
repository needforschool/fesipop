import { authRouter } from "./router/auth";
import { eventRouter } from "./router/event";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  event: eventRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
