import {combineReducers} from 'redux'
//import { selectBook } from '../action'

const booksReducer = () => {

return[

{title: 'WEB601', notes:'sadasdas'},
{title: 'WEB602', notes:'Asadgrsfsdg'},
{title: 'V2', notes:'sdddddddd'},

]

}


const selectedBookReducer = (selectBook = null, action) => {

    if(action.type === 'BOOK_SELECTED'){

        return action.payload


    }
    return selectBook

}

export default combineReducers ({
    books: booksReducer,
    selectBook: selectedBookReducer
})