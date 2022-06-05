'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with books
 */
const Book = use('App/Models/Book')

class BookController {
  async index({ request, response, view }) {
    return response.status(200).json(await Book.all())
  }

  async store({ request, response }) {
    const book = await Book.create(request.only(['title', 'year']))
    return response.status(200).json(await book)
  }

  async show({ params, request, response, view }) {
    return response.status(200).json(await Book.findBy('id', params.id))
  }

  async update({ params, request, response }) {
    const id = request.input('id')
    const data = request.only(['title','year'])
    const book = await Book.query().where('id', id).update(data)
    if (book) {
      return response.status(200).json({
        message: "Data updated successfully where id = " + id,
        book: data
      })
    }
  }

  async destroy({ params, request, response }) {
    const id = request.input('id')
    const book = await Book.query().where('id', id).delete()
    if (book) {
      return response.status(200).json({
        message: "Data deleted successfully where id = " + id
      })
    }
  }
}

module.exports = BookController
