import { prisma } from "@/config";

async function findDays() {
  const dates: string[][] = await prisma.$queryRaw`
  SELECT ARRAY_AGG(DISTINCT date_trunc('day', "startsAt")) 
  AS date 
  FROM "Activities"`;
  return Object.values(dates[0]).map((item) => item[0]);
}

async function findActivities() {
  return;
}

const activitiesRepository = {
  findDays,
  findActivities,
};

export default activitiesRepository;
