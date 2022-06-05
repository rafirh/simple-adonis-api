'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with books
 */
const Book = use('App/Models/Book')

class BookController {
  async index ({ request, response, view }) {
    return response.status(200).json(await Book.all())
  }

  async store ({ request, response }) {
    const input = request.only(['title', 'year'])
    const book = await Book.create(input)
    return response.status(200).json(await book)
  }

  async show ({ params, request, response, view }) {
    return response.status(200).json(await Book.findBy('id', params.id))
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = BookController
