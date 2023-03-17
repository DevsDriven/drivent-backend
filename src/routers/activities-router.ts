import { getActivitiesDays, getActivitiesFromDate } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const activitiesRouter = Router();

activitiesRouter
  .all("/*", authenticateToken)
  .get("/", getActivitiesDays)
  .get("/:day", getActivitiesFromDate);

export { activitiesRouter };
