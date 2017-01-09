# Railway Service
Implementation of railway oriented programming in javascript.
Long story short what it does is executes all defined steps if there is no error.
Otherwise it will stop executing steps right after failed step.

JS has Promises, so it's just for fun :)

## Installation

* It can be done using npm
```js
npm install railway-service
```

## Usage

* Create a service (for example RocketService)
```js
const rocketService = new RailwayService();
```

* Add a step
* Each step must return either {error: ...} or {params: ...}
```js
rocketService.addStep((p) => {
    if (p.buttonPushed) {
        return { params: { fuel: 100 } };
    }
    return { error: "push the button" };
});
```

* Steps get params from previous step
```js
rocketService.addStep((p) => {
    if (p.fuel === 100) {
        return { params: "init lighter" };
    }
    return { error: "not enough fuel" };
});
```

* Finally run the service
```js
const res = rocketService.run({buttonPushed: true});
```
* It will return boolean succeeded property or error if occurred 

For more information about Railway Oriented Programming please refer to http://www.slideshare.net/ScottWlaschin/railway-oriented-programming
