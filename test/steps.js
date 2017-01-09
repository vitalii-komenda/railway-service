const assert = require('assert');

const rocketService = new RailwayService();
rocketService.addStep((p) => {
    if (p.buttonPushed) {
        return { params: { fuel: 100 } };
    }
    return { error: "push the button" };
});
rocketService.addStep((p) => {
    if (p.fuel === 100) {
        return { params: "init lighter" };
    }
    return { error: "not enough fuel" };
});

const res = rocketService.run({buttonPushed: true});
assert.equal(res.succeeded, true, "should be true");


rocketService.addStep((p) => {
    return { error: "big badda boom" };
});
const res = rocketService.run({buttonPushed: true});
assert.equal(res.succeeded, false, "should be false");
assert.equal(res.error, "big badda boom", "should be false");
