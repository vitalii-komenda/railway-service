function Success(value) {
    this.value = value;
    this.isOk = true;
}

function Fail(value) {
    this.value = value;
    this.isOk = false;
}

function RailwayService() {
    var that = this;
    var currStep = 0;
    var result = new Success('start');

    var setSuccessResult = function (res) {
        if (result.isOk) {
            result = new Success(res);
        }
    };

    var next = function (params) {
        if (currStep >= that.steps.length) {
            return true;
        }
        that[that.steps[currStep++]](params);
        return params;
    };

    that.success = function (params) {
        setSuccessResult(next(params));
    };

    that.fail = function (msg) {
        result = new Fail(msg);
    };

    that.run = function (params) {
        that.success(params);
        return result;
    };

};


module.exports = RailwayService;