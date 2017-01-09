function RailwayService(steps = []) {
    this.steps = Array.isArray(steps) ? steps : [steps];
    this.addStep = (step) => {
        this.steps.push(step);
    };

    this.run = function (params) {
        let res = {params};
        for (const step of this.steps) {
            if (res.error) {
                return res;
            }
            res = step(res.params);
        };
        return res.error ? res : {succeeded: true};
    };
};

module.exports = RailwayService;
