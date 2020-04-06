const knex = require('../config/db');

class ProjectController {
  getAllProjects(req, res) {
    knex
      .select()
      .table('projects')
      .where('user_id', req.params.user_id)
      .then(projects => {
        res.send(projects);
      });
  }
  getOneProject(req, res) {
    knex('projects')
      .where('project_id', req.params.project_id)
      .then(project => {
        return res.send(project);
      });
  }

  updateProject(req, res) {
    knex('projects')
      .where('project_id', '=', req.params.project_id)
      .update({
        projectName: req.body.projectName,
        projectDesc: req.body.projectDesc
      })
      .then(updatedProject => {
        res.send(200);
      })
      .catch(err => console.log(err));
  }

  createProject(req, res) {
    knex('projects')
      .insert({
        projectName: req.body.projectName,
        projectDesc: req.body.projectDesc,
        dueDate: req.body.dueDate,
        currentPhase: req.body.currentPhase,
        user_id: req.body.user_id
      })
      .then(createdProject => res.send(createdProject));
  }

  deleteProject(req, res) {
    knex('projects')
      .delete()
      .where('project_id', req.params.project_id)
      .then(() => res.send('200'));
  }
}

const projectController = new ProjectController();

module.exports = projectController;
