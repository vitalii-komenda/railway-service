# railway-service
Implementation of railway oriented programming in javascript

## Usage
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
