'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Author extends Model {
    book(){
        return this.hasMany('app/Models/Book')
    }
}

module.exports = Author
