import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { bindActionCreators } from 'redux';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';


class Quotes extends Component {
  constructor(){
    super();
    this.handleRemoveQuote = this.handleRemoveQuote.bind(this);
    this.handleUpvoteQuote = this.handleUpvoteQuote.bind(this);
    this.handleDownvoteQuote = this.handleDownvoteQuote.bind(this);
  }

  handleRemoveQuote(ev, id) {
    this.props.removeQuote(id);
  }

  handleUpvoteQuote(ev, id) {
    this.props.upvoteQuote(id);
  }

  handleDownvoteQuote(ev, id){
     this.props.downvoteQuote(id);
  }

  render() {
     const quotes = this.props.quotes.map( quote => <QuoteCard quote={quote}
       removeQuote={event => this.handleRemoveQuote(event, quote.id)}
       upvoteQuote={event => this.handleUpvoteQuote(event, quote.id)}
       downvoteQuote={event => this.handleDownvoteQuote(event, quote.id)}
       />)

     return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeQuote,
    upvoteQuote,
    downvoteQuote
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
