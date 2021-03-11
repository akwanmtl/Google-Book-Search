import React from 'react';
import BookContainer from '../components/BookContainer';
import Message from '../components/Message';

function NoMatch () {
  return (
    <BookContainer>
          <Message loading={false} message="Error 404 - No page found"/> :
    </BookContainer>
  )
}

export default NoMatch;