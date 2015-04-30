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
    this.steps = [
        'fillFuelTank',
        'initMainModule',
        'startEngine'
    ];   
```
* In every method in the service use fail or success helper functions that were included from RailwayService
```js
    this.sendEmail = function (params) {
        if (!params.email) {
            return this.fail('Email is not specified');
        }
        return this.success(params);
    };
```
* Argument of this.success method will be passed to the next method according to this.steps array
* Finally the service can be used like: 
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
