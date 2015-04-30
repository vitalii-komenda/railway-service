var railwayService = require('../lib/railway_service.js');

function RocketSendService() {
    var that = this;
    railwayService.call(that);
    
    that.steps = [
        'fillFuelTank',
        'initMainModule',
        'startEngine'
    ];    
    
    that.fillFuelTank = function (params) {
        if (!params.rocket) {
            return that.fail('Need rocket');
        }
        params.rocket['fuel'] = 100;
        return that.success(params);
    };

    that.initMainModule = function (params) {
        try {
            params.rocket['main_module'].init();
        } catch (e) {
            return that.fail(e.message);
        }
        return that.success(params);
    };

    that.startEngine = function (params) {
        return that.success(params);
    };
}; 
 

module.exports = RocketSendService;