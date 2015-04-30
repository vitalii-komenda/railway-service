function ServiceSteps() {
    var that = this;
    var currStep = 0; 
    var finalParams = {
        params: {},
        error: ""
    };
    
    var next = function (params) {
        if (currStep >= that.steps.length) {
            return true;
        }
        that[that.steps[currStep++]](params);
        return params;
    };

    that.success = function (params) {        
        finalParams.params = next(params);
    };

    that.fail = function (msg) {
        finalParams.error = msg;
    };
    
    that.run = function (params) {
        that.success(params); 
        return finalParams;
    };

};


function RocketSendService() {
    var that = this;
    ServiceSteps.call(that);
    
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



var params = {
    rocket: {
        fuel: 0,
        main_module: {
            init: function () {throw new Error('cant init main module');
                return 'prhrhprphr';
            }
        }
    }
};
result = (new RocketSendService).run(params); 