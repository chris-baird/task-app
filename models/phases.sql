CREATE TABLE `phases`
(
  `phase_id` int NOT NULL AUTO_INCREMENT,
  `phaseName` varchar
(45) NOT NULL,
  `phaseDesc` varchar
(45) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY
(`phase_id`)
);
