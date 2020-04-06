const knex = require('../config/db');

class PhaseController {
  getAllPhases(req, res) {
    knex
      .select()
      .table('phases')
      .where('user_id', req.params.user_id)
      .then(phases => {
        res.send(phases);
      });
  }
  getOnePhase(req, res) {
    knex('phases')
      .where('phase_id', req.params.phase_id)
      .then(phase => {
        return res.send(phase);
      });
  }

  updatePhase(req, res) {
    knex('phases')
      .where('phase_id', '=', req.params.phase_id)
      .update({
        phaseName: req.body.phaseName,
        phaseDesc: req.body.phaseDesc
      })
      .then(updatedPhase => {
        res.send(200);
      })
      .catch(err => console.log(err));
  }

  createPhase(req, res) {
    console.log('inside ');
    knex('phases')
      .insert({
        phaseName: req.body.phaseName,
        phaseDesc: req.body.phaseDesc,
        user_id: req.body.user_id
      })
      .then(createdPhase => res.send(createdPhase));
  }

  deletePhase(req, res) {
    knex('phases')
      .delete()
      .where('phase_id', req.params.phase_id)
      .then(() => res.send('200'));
  }
}

const phaseController = new PhaseController();

module.exports = phaseController;
