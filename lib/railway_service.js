function RailwayService(steps = []) {
    this.steps = Array.isArray(steps) ? steps : [steps];
    this.addStep = (step) => {
        this.steps.push(step);
    };

    this.run = function (params) {
        const res = { succeeded: true, params };
        for (const step of this.steps) {
            Object.assign(res, step(res.params));
            if (res.error) {
                res.succeeded = false;
                return res;
            }
        };
        return res;
    };
};

module.exports = RailwayService;
