import React from 'react'


import BookList from './BookList'
import BookNote from './BookNote'


const App = () => {


return (
<div className="ui container grid">

    <div className="ui row">
        <div className="column eight wide">
            <BookList />
        </div>
        <div className="column eight wide">
            <BookNote />
        </div>
    </div>


</div>


);


}

export default App;