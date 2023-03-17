import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function findDays() {
  const dates: string[][] = await prisma.$queryRaw`
  SELECT ARRAY_AGG(DISTINCT date_trunc('day', "startsAt")) 
  AS date 
  FROM "Activities"`;
  return Object.values(dates[0]).map((item) => item[0]);
}

async function findActivities(day: string) {
  const queryString = "2023-03-17";
  try {
    const activities = await prisma.$queryRaw(Prisma.sql`
    SELECT * FROM "Activities"
    WHERE date_trunc('day', "startsAt") = to_date(${queryString}, 'YYYY-MM-DD')`);
    return activities;
  } catch (error) {
    console.log(error);
  }
  console.log("ok");
}

const activitiesRepository = {
  findDays,
  findActivities,
};

export default activitiesRepository;
