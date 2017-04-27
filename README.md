# Oh my errors!

Simple node module to handle multiple server-side errors with solution strategies.

## How to use it

```javascript
const errorHandler = require('oh-my-errors')

const error404 = errorHandler.createNotFoundError404({
  origin: 'PLACE in your application where this error was originated',
  message: 'Resource not found'
})
```

## API methods

| Method   |      Parameters      |
|----------|:-------------------:|
| createNotImplementedError501 |  ```{String=} data.origin, {String=} data.message```  |
| createBadRequest400 |  ```{String=} data.origin,  {String=} data.message```  |
| createUnauthorizedError401 |  ```{String=} data.origin,  {String=} data.message```  |
| createForbiddenError403 |  ```{String=} data.origin,  {String=} data.message```  |
| createNotFoundError404 |  ```{String=} data.origin,  {String=} data.message```  |
| createInternalError500 |  ```{String=} data.origin,  {String=} data.message```  |

## Possible errors

We support the most commun errors from [HTTP Status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#5xx_Server_error)

* 400 -> BadRequest (any params or whatever is bad)
* 401 -> UnauthorizedError (like 403, but in cases when you need to login)
* 404 -> NotFound (Resource not found. For example: user in the database, items, pages, etc...)
* 501 -> NotImplementedError

## Contribute!

* Bugs, Pull Requests or feature requests? Go here! [avatar-me Github repository](https://github.com/ferreiro/avatar-me/issues)
* Or... Send me an email jorge [AT] ferreiro [DOT] me
