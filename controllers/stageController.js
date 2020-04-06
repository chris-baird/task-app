const knex = require('../config/db');

class StageController {
  getAllStages(req, res) {
    knex
      .select()
      .table('stages')
      .where('user_id', req.params.user_id)
      .then(stages => {
        res.send(stages);
      });
  }
  getOneStage(req, res) {
    knex('stages')
      .where('stage_id', req.params.stage_id)
      .then(stage => {
        return res.send(stage);
      });
  }

  updateStage(req, res) {
    knex('stages')
      .where('stage_id', '=', req.params.stage_id)
      .update({
        stageName: req.body.stageName
      })
      .then(updatedPhase => {
        res.send(200);
      })
      .catch(err => console.log(err));
  }

  createStage(req, res) {
    knex('stages')
      .insert({
        stageName: req.body.stageName,
        phase_id: req.body.phase_id
      })
      .then(createdPhase => res.send(createdPhase));
  }

  deleteStage(req, res) {
    knex('stages')
      .delete()
      .where('stage_id', req.params.stage_id)
      .then(() => res.send('200'));
  }
}

const stageController = new StageController();

module.exports = stageController;
