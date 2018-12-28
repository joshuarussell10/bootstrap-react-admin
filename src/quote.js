import React from 'react';

export default class Quote extends React.Component {
    constructor(){
        super();
        this.state = {
          quoteData: 'yolo'
        };
    }

    componentDidMount(){
      fetch('../src/quotes.json').then(response => {
        return response.json();
      }).then(
        data => {
          console.log(data);
          this.setState({
            quoteData: data
          });
        }
      )
    }

    render(){
      return (
        <div className="quote-float">
          <div className="quote">{this.state.quoteData.quote}</div>
          <div className="author">-- {this.state.quoteData.author}</div>
        </div>
      );
    }
  }
