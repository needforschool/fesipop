CREATE TABLE IF NOT EXISTS "event" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"start_at" timestamp NOT NULL,
	"location_x" numeric NOT NULL,
	"location_y" numeric NOT NULL
);
--> statement-breakpoint
DROP TABLE "post";--> statement-breakpoint
DROP TABLE "events";