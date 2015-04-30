var RocketSendService = require('./helper');
var assert = require('assert');

var rocketSendService = new RocketSendService();
var params1 = {
    rocket: {
        fuel: 0,
        main_module: {
            init: function () {
                throw new Error('cant init main module');
                return 'prhrhprphr';
            }
        }
    }
};

var failResult = rocketSendService.run(params1);
assert.equal(failResult.isOk, false, 'should be false with fail params');



var params2 = {
    rocket: {
        fuel: 0,
        main_module: {
            init: function () {
                return 'prhrhprphr';
            }
        }
    }
};
var rocketSendService = new RocketSendService();
var successResult = rocketSendService.run(params2);
assert.equal(successResult.isOk, true, 'should be true with success params');
assert.equal(typeof successResult.value, 'object', 'should have value');
assert.equal(successResult.value.rocket.fuel, 100, 'should have 100');