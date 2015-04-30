# railway-service
Implementation of railway oriented programming in javascript

## Usage

* Create some service (for example RocketSendService)
* Include RailwayService into your service
```js
function RocketSendService() { 
    railwayService.call(this);
}
```
* Set order of steps in the service
```js
    that.steps = [
        'fillFuelTank',
        'initMainModule',
        'startEngine'
    ];   
```
* In every method in the service use fail or success helper functions that is included from RailwayService
```js
    this.sendEmail = function (params) {
        if (!params.email) {
            return that.fail('Email is not specified');
        }
        return that.success(params);
    };
```

```js
var params = {
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
result = (new RocketSendService).run(params); 
```

For more information about Railway Oriented Programming please refer to http://www.slideshare.net/ScottWlaschin/railway-oriented-programming
