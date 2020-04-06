CREATE TABLE `projects`
(
  `project_id` int NOT NULL AUTO_INCREMENT,
  `projectName` varchar
(45) NOT NULL,
  `projectDesc` varchar
(45) NOT NULL,
  `dueDate` varchar
(45) NOT NULL,
  `currentPhase` varchar
(45) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY
(`project_id`)
);
