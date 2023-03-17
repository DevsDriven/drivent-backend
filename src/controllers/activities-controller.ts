import { AuthenticatedRequest } from "@/middlewares";
import activitiesService from "@/services/activities-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getActivitiesDays(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const days = await activitiesService.getDays(Number(userId));
    return res.status(httpStatus.OK).send(days);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);  
  }
}

export async function getActivitiesFromDate(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { dayId } = req.params;
  try {
    const activities = "await activitiesService.getActivities(Number(userId), Number(dayId))";
    return res.status(httpStatus.OK).send(activities);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
