const db = require('../../common').db;

class ParamInterfaceResDao extends require('./ParamInterfaceDao') {
  constructor(sqlOpt) {
    super(db.PAM_TYP_OUTPUT, sqlOpt);
  }
}

ParamInterfaceResDao['__history'] = {
  addText: '添加响应结果 %s %s 到 HTTP 接口 %s',
  delText: '从 HTTP 接口 %s 删除响应结果 %s %s',
  updateText: {
    name: {
      text: '更新 HTTP 接口 %s 响应结果 %s %s 名称为 %s，旧值是 %s'
    },
    description: {
      text: '更新 HTTP 接口 %s 响应结果 %s %s 描述为 %s，旧值是 %s',
    },
    type: {
      text: '更新 HTTP 接口 %s 响应结果 %s %s 类型为 %s，旧值是 %s',
    },
    genExpression: {
      text: '更新 HTTP 接口 %s 响应结果 %s %s 生成规则为 %s，旧值是 %s'
    },
    defaultValue: {
      text: '更新 HTTP 接口 %s 响应结果 %s %s 默认值为 %s，旧值是 %s'
    },
    position: {
      text: '更新 HTTP 接口 %s 响应结果的参数位置'
    },
    ignored: {
      text: '更新 HTTP 接口 %s 响应结果 %s %s 的可见性为 %s'
    }
  },
  'imp0rt': {
    addText: '导入数据模型 %s 到 %s 响应结果中',
    delText: '从 HTTP 接口 %s 响应结果中删除导入的数据模型 %s',
    _rel: {
      parent: {
        dao: 'InterfaceDao',
      },
      child: {
        dao: 'DataTypeDao'
      }
    }
  },
  _rel: {
    parent: {
      dao: 'InterfaceDao',
    },
    child: {
      dao: 'ParameterDao'
    }
  },
  resType: db.RES_TYP_INTERFACE
};


module.exports = ParamInterfaceResDao;
