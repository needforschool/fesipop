import { faker } from "@faker-js/faker";
import { Event } from "./schema";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const main = async () => {


  const nonPoolingUrl = process.env.POSTGRES_URL?.replace(":6543", ":5432");
  const client = new Pool({
    connectionString: nonPoolingUrl,
  });
  const db = drizzle(client);

  const data: (typeof Event.$inferInsert)[] = [];

  for (let i = 0; i < 20; i++) {
    data.push({
      id: faker.string.uuid(),
      title: faker.lorem.words(),
      description: faker.lorem.paragraph(),
      startAt: faker.date.recent(),
      location_x: faker.location.longitude().toString(),
      location_y: faker.location.latitude().toString()
    });
  }

  console.log("Seed start");
  await db.insert(Event).values(data);
  console.log("Values", data)
  console.log("Seed done");
};

main();