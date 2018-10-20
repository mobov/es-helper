const assert = require('assert');
const util = require('../lib/index.cjs');
const a = {
  a: [1, 2, 3, 4, 5],
  b: {
    b1: [3, 2, 1],
    b2: {
      b21: {
        b211: [3, 3, 4, 5, {
          x: 'zz',
          l: {
            qq: 'zzzz'
          }
        }]
      }
    }
  }
}
const db = [
  {
    "attributes": {
      "id": "766812ef71d6418a8409ab1d9efd4507",
      "parentId": "0",
      "remark": "eee",
      "stype": "lvsuoguanli",
      "name": "律所管理",
      "norder": 1,
      "code": "lvsuoguanli",
      "url": "/lawFirmManage"
    },
    "checked": false,
    "child": [],
    "iconCls": "",
    "id": "766812ef71d6418a8409ab1d9efd4507",
    "state": "open",
    "text": "律所管理"
  },
  {
    "attributes": {
      "id": "171600a0d46a44b1a8c78552794229ad",
      "parentId": "0",
      "remark": "5",
      "stype": "lvshiguanli",
      "name": "律师管理",
      "norder": 2,
      "code": "lvshiguanli",
      "url": "/lawyerManage"
    },
    "checked": false,
    "child": [],
    "iconCls": "",
    "id": "171600a0d46a44b1a8c78552794229ad",
    "state": "open",
    "text": "律师管理"
  },
  {
    "attributes": {
      "id": "a7c1de5cd7a44961af798567451308d3",
      "parentId": "0",
      "remark": "999\n",
      "stype": "peixunguanli",
      "name": "培训管理",
      "norder": 3,
      "code": "peixunguanli",
      "url": "/trainManage/offlineTrain"
    },
    "checked": false,
    "child": [],
    "iconCls": "",
    "id": "a7c1de5cd7a44961af798567451308d3",
    "state": "open",
    "text": "培训管理"
  },
  {
    "attributes": {
      "id": "e30445cf7cad48daa1f3ca80ac1c39f5",
      "parentId": "0",
      "remark": "",
      "stype": "shipinxuexi",
      "name": "视频学习",
      "norder": 4,
      "code": "shipinxuexi",
      "url": "/video"
    },
    "checked": false,
    "child": [],
    "iconCls": "",
    "id": "e30445cf7cad48daa1f3ca80ac1c39f5",
    "state": "open",
    "text": "视频学习"
  },
  {
    "attributes": {
      "id": "b28b5c430be24b49a625676cd86436f3",
      "parentId": "0",
      "remark": "",
      "stype": "xitongguanli",
      "name": "系统管理",
      "norder": 5,
      "code": "xitongguanli",
      "url": "/systemManage"
    },
    "checked": false,
    "child": [
      {
        "attributes": {
          "id": "4a3cdf4df2484d29ab6e5f0e01e2d858",
          "parentId": "b28b5c430be24b49a625676cd86436f3",
          "remark": "",
          "stype": "jueseguanli",
          "name": "角色管理",
          "norder": 1,
          "code": "jueseguanli",
          "url": "/systemManage/sysRole"
        },
        "checked": false,
        "child": [],
        "iconCls": "",
        "id": "4a3cdf4df2484d29ab6e5f0e01e2d858",
        "state": "open",
        "text": "角色管理"
      },
      {
        "attributes": {
          "id": "29645c6ccd0d4f74a399c59172a3aea1",
          "parentId": "b28b5c430be24b49a625676cd86436f3",
          "remark": "",
          "stype": "quanxianguanli",
          "name": "权限管理",
          "norder": 2,
          "code": "quanxianguanli",
          "url": "/systemManage/sysPermission"
        },
        "checked": false,
        "child": [{
          id: 'zzzz',
          child: [
            {
              id: 'very_deep',
              str: 'its deep'
            }
          ]
        }],
        "iconCls": "",
        "id": "29645c6ccd0d4f74a399c59172a3aea1",
        "state": "open",
        "text": "权限管理"
      }
    ],
    "iconCls": "",
    "id": "b28b5c430be24b49a625676cd86436f3",
    "state": "closed",
    "text": "系统管理"
  }
]

describe('util测试', function () {
  describe('util测试', function () {
    it('深拷贝测试', function () {
      assert.equal(JSON.stringify(util.deepCopy(a)), JSON.stringify(a));
    });
    it('数组去重', function () {
      const arr = [1, 2, 3, 4, 1, 2, 3, 1, 3, 31, 1, 13, 31, 'z', 'x', 'z', 'z', 'z', 'z']
      assert.deepEqual(util.arrayUnique(arr), [1, 2, 3, 4, 13, 31, 'x', 'z']);
    });
    it('数组根据字段去重', function () {
      const arr = [{ id: 1 }, { id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }]
      assert.deepEqual(util.uniqueArrayByField(arr), [{ id: 1 }, { id: 2 }, { id: 3 }]);
    });
    it('JSON深度对比', function () {
      const a = {
        a: [1, 2, 3, 4, 5],
        b: {
          b1: [3, 2, 1],
          b2: {
            b21: {
              b211: [3, 3, 4, 5, {
                x: 'zz',
                l: {
                  qq: 'zzzz'
                }
              }]
            }
          }
        }
      }
      const b = {
        a: [1, 2, 3, 4, 5],
        b: {
          b1: [3, 2, 1],
          b2: {
            b21: {
              b211: [3, 3, 4, 5, {
                x: 'zz',
                l: {
                  qq: 'zzzz'
                }
              }]
            }
          }
        }
      }
      const c = {
        a: [1, 2, 3, 4, 5],
        b: {
          b1: [3, 2, 1],
          b2: {
            b21: {
              b211: [3, 3, 4, 5, {
                x: 'zz',
                l: {
                  qq: 'zzzzx'
                }
              }]
            }
          }
        }
      }
      assert.equal(util.deepEqual(a, b), true);
      assert.equal(util.deepEqual(a, c), false);
    });
    it('节点查找', () => {
      const node = util.findNode({
        data: db,
        key: 'very_deep',
        childField: 'child'
      });
      console.log(node)
      assert.deepEqual(node, {
        id: 'very_deep',
        str: 'its deep'
      });
    })
  });
});