import activitiesRepository from "@/repositories/activities-repository";

async function getDays(userId: number) {
  const days = await activitiesRepository.findDays();
  return days;
}

async function getActivities(userId: number, dayId: number) {
  const activities = await activitiesRepository.findActivities();
  return activities;
}

const activitiesService = {
  getDays,
  getActivities,
};

export default activitiesService;
