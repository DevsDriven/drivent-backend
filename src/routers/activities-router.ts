import { getActivitiesDays } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const activitiesRouter = Router();

activitiesRouter
  .all("/*", authenticateToken)
  .get("/", getActivitiesDays)
  .get("/:dayId");

export { activitiesRouter };
