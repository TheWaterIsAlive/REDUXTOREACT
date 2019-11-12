import React from 'react'
import {connect} from 'react-redux'


const BookNote = (( book ) => {
if(!book){

return <div>Select a book</div>

}

return(
<div>
    <h3>Notes for:</h3>
    <p>
    Title: {book.title}
    <br />
    Notes: {book.notes}

    </p>
</div>

);




    
})
const mapStateToProps = (state) =>{
    return {book: state.selectedBook}
    
    
    }

    export default connect(mapStateToProps)(BookNote)