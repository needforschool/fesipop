import type { TRPCRouterRecord } from "@trpc/server";
import { z } from "zod";

import { desc, eq } from "@acme/db";
import { CreateEventSchema, Event } from "@acme/db/schema";

import { protectedProcedure, publicProcedure } from "../trpc";

export const eventRouter = {
  all: publicProcedure.query(({ ctx }) => {
    // return ctx.db.select().from(schema.post).orderBy(desc(schema.post.id));
    return ctx.db.query.Event.findMany({
      orderBy: desc(Event.id),
      limit: 10,
    });
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      // return ctx.db
      //   .select()
      //   .from(schema.post)
      //   .where(eq(schema.post.id, input.id));

      return ctx.db.query.Event.findFirst({
        where: eq(Event.id, input.id),
      });
    }),

  create: protectedProcedure
    .input(CreateEventSchema)
    .mutation(({ ctx, input }) => {
      const { location_x, location_y, ...otherFields } = input;
      return ctx.db.insert(Event).values({
        ...otherFields,
        location_x: location_x.toString(),
        location_y: location_y.toString(),
      });
    }),

  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.db.delete(Event).where(eq(Event.id, input));
  }),
} satisfies TRPCRouterRecord;
