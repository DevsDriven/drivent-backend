import activitiesRepository from "@/repositories/activities-repository";

async function getDays(userId: number) {
  const days = await activitiesRepository.findDays();
  return days;
}

async function getActivities(userId: number, day: string) {
  const activities = await activitiesRepository.findActivities(day);
  return activities;
}

const activitiesService = {
  getDays,
  getActivities,
};

export default activitiesService;
