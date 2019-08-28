import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentCard from './CommentCard'
import CommentDetail from './CommentDetail'
import CommentCheck from './CommentCheck'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentCard>
                <CommentDetail author= "Sam" date="Today at 4:46pm" image={faker.image.avatar()} comment="Wow!" />
            </CommentCard>

            <CommentCard>
                <CommentCheck/>
            </CommentCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))