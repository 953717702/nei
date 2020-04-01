// variable transform bewteen model and viewmodel
// viewmodel_field:model_field
const TRANSFORM = {
  // TODO
};
// variable validation
const VALIDATION = {
  // TODO
};

/**
 * Base View Model Class
 *
 * @extends ViewModel
 */
class Pat extends require('./ViewModel') {
  /**
   * Create a View Model
   *
   * @param  {Object} data - model data
   */
  constructor(data) {
    super(data);
    this._setValidation(VALIDATION);
    this._setTransform(TRANSFORM);
    this._set(data);
  }

  /**
   * get Model class bind with ViewModel
   * @return {Model} - Model class
   */
  getModel() {
    return require('../db/Pat');
  }
}

// export Pat class
module.exports = Pat;
