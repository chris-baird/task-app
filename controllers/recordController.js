const knex = require('../config/db');

class RecordController {
  getAllRecords(req, res) {
    knex
      .select()
      .table('records')
      .where('user_id', req.params.user_id)
      .then((records) => {
        res.send(records);
      });
  }
  getOneRecord(req, res) {
    knex('records')
      .where('record_id', req.params.record_id)
      .then((record) => {
        return res.send(record);
      });
  }

  updateRecord(req, res) {
    knex('records')
      .where('record_id', '=', req.params.record_id)
      .update({
        project_id: req.body.project_id,
        phase_id: req.body.phase_id,
        stageComplete: req.body.stageComplete,
        user_id: req.body.user_id,
        stage_id: req.body.stage_id,
      })
      .then((updatedRecord) => {
        res.send(200);
      })
      .catch((err) => console.log(err));
  }

  createRecord(req, res) {
    knex('records')
      .insert({
        project_id: req.body.project_id,
        phase_id: req.body.phase_id,
        stageComplete: req.body.stageComplete,
        user_id: req.body.user_id,
        stage_id: req.body.stage_id,
      })
      .then((createdRecord) => res.send(createdRecord));
  }

  deleteRecord(req, res) {
    knex('records')
      .delete()
      .where('record_id', req.params.record_id)
      .then(() => res.send('200'));
  }
}

const recordController = new RecordController();

module.exports = recordController;
