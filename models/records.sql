CREATE TABLE `records` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `project_id` int NOT NULL,
  `phase_id` int NOT NULL,
  `stageComplete` int NOT NULL,
  `user_id` int NOT NULL,
  `stage_id` int NOT NULL,
  PRIMARY KEY (`record_id`)
);
