'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('/', 'BookController.index')
  Route.get('/:id', 'BookController.show')
  Route.post('/', 'BookController.store')
  Route.put('/', 'BookController.update')
  Route.delete('/', 'BookController.destroy')
}).prefix('/api/v1/books')

Route.group(() => {
  Route.get('/', 'AuthorController.index')
  Route.get('/:id', 'AuthorController.show')
  Route.post('/', 'AuthorController.store')
  Route.put('/', 'AuthorController.update')
  Route.delete('/', 'AuthorController.destroy')
}).prefix('/api/v1/authors')
