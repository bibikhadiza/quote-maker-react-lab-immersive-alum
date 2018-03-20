import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_QUOTE':
      let id = uuid();
      action.quote.id = id;
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':

      return state.filter( e => e.id !== action.quoteId );

    case 'UPVOTE_QUOTE':
      const upvoteCopy = state.splice(0);
      const upquote = upvoteCopy.find(quote => quote.id === action.quoteId);
      upquote.votes++
      return upvoteCopy

    case 'DOWNVOTE_QUOTE':
      const downvoteCopy = state.splice(0);
      const downquote = downvoteCopy.find(quote => quote.id === action.quoteId);
      downquote.votes > 0 ? downquote.votes -= 1 : null
      return downvoteCopy

    default:
      return state;
  }
}
