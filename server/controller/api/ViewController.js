const log = require('../../util/log');
const _ = require('../../util/utility');
const NController = require('../../arch/NController');
const ViewService = require('../../service/ViewService');

class ViewController extends NController {
  constructor(context, next) {
    super(context, next);
    this._service = new ViewService(this._uid, context);
  }

  * create() {
    log.debug(
      '[API.%s.create] create',
      this.constructor.name
    );
    let paramRule = {
      name: {},
      type: {required: true, isNumber: true},
      isArray: {isNumber: true, value: /^[01]$/},
      defaultValue: {},
      description: {},
      valExpression: {},
      genExpression: {}
    };
    paramRule.params = {isArray: true, rule: paramRule};
    let importRule = {
      id: {required: true, isNumber: true},
      vars: {
        isArray: true, rule: {
          id: {required: true, isNumber: true},
          isArray: {isNumber: true, value: /^[01]$/},
          type: {isNumber: true},
          description: {},
          defaultValue: {},
          valExpression: {},
          genExpression: {}
        }
      }
    };
    let rule = {
      name: {},
      path: {},
      tag: {},
      projectId: {required: true, isNumber: true},
      respoId: {required: true, isNumber: true},
      groupId: {required: true, isNumber: true},
      description: {},
      className: {},
      params: {isArray: true, rule: paramRule},
      imports: {isArray: true, rule: importRule},
      templateIds: {isArray: true, value: /^\d+$/},
      interfaceIds: {isArray: true, value: /^\d+$/}
    };
    let data = this.validate(rule, 'body');

    let ret = yield this._service.create(data);
    this.setModel(ret);

    yield this.next();
  }

  * tag() {
    log.debug(
      '[API.%s.tag] tag',
      this.constructor.name
    );

    let rule = {
      ids: {required: true, isArray: true, value: /^\d+$/},
      tags: {required: true, isArray: true}
    };
    let data = this.validate(rule, 'body');
    let ret = yield this._service.tag(data);
    this.setModel(ret);

    yield this.next();
  }

  * clone() {
    log.debug(
      '[API.%s.clone] clone',
      this.constructor.name
    );

    let copyRule = {
      id: {required: true, isNumber: true},
      name: {required: true}
    };
    let rule = {
      pid: {required: true, isNumber: true},
      gid: {required: true, isNumber: true},
      copys: {required: true, isArray: true, rule: copyRule},
      tag: {required: true}
    };
    let data = this.validate(rule, 'body');
    let ret = yield this._service.clone(data);
    this.setModel(ret);

    yield this.next();
  }

  * move() {
    log.debug(
      '[API.%s.move] move',
      this.constructor.name
    );

    let rule = {
      pid: {required: true, isNumber: true},
      gid: {required: true, isNumber: true},
      moves: {required: true, isArray: true},
      tag: {required: true}
    };
    let data = this.validate(rule, 'body');
    let ret = yield this._service.move(data);
    this.setModel(ret);

    yield this.next();
  }

  * updateBisGroupBatch() {
    log.debug(
      '[API.%s.updateBisGroupBatch] update bisgroup',
      this.constructor.name
    );

    let rule = {
      ids: {required: true, isArray: true, value: /^\d+$/},
      groupId: {required: true, isNumber: true}
    };
    let data = this.validate(rule, 'body');
    let ret = yield this._service.updateBisGroupBatch(data);
    this.setModel(ret);

    yield this.next();
  }

  * getListInProject() {
    log.debug(
      '[API.%s.getList] getList',
      this.constructor.name
    );
    let {pid} = this.validate({
      pid: {isNumber: true}
    });
    let ret = yield this._service.getListInProject(pid);
    this.setModel(ret);

    yield this.next();
  }

  * findDetailById() {
    log.debug(
      '[API.%s.getList] getList',
      this.constructor.name
    );

    let id = this._context._id;
    let ret = yield this._service.findDetailById(id);
    this.setModel(ret);

    yield this.next();
  }

  * update() {
    log.debug(
      '[API.%s.update] update',
      this.constructor.name
    );
    let id = this._context._id;
    let rule = {
      name: {},
      path: {},
      tag: {},
      respoId: {isNumber: true},
      groupId: {isNumber: true},
      className: {},
      description: {},
      templateIds: {isArray: true, value: /^\d+$/},
      interfaceIds: {isArray: true, value: /^\d+$/}
    };
    let data = this.validate(rule, 'body');
    data.id = id;
    let ret = yield this._service.update(data);
    this.setModel(ret);

    yield this.next();
  }

  * remove() {
    log.debug(
      '[API.%s.remove] remove',
      this.constructor.name
    );
    _.translateParams(this._query, ['ids']);

    let ret = yield this._service.removeBatch(this._query.ids);
    this.setModel(ret);

    yield this.next();
  }

  * watch() {
    log.debug(
      '[API.%s.watch] watch',
      this.constructor.name
    );

    let id = this._context._id;
    let rule = {
      v: {required: true, isNumber: true}
    };
    let data = this.validate(rule, 'body');
    let ret = yield this._service.watch(id, data.v);
    this.setModel(ret);

    yield this.next();
  }
}

module.exports = ViewController;
