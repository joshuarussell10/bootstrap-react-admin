import React from 'react';
export default class slides extends React.Component {
  handleScroll(event) {
    var test = document.getElementById('scroll-container');
    var a = document.getElementsByClassName('a')[0];

    var intElemScrollTop = test.scrollTop;

    console.log(a.scrollHeight);
    console.log(intElemScrollTop);
    // if (test2.scrollHeight == intElemScrollTop) {
    //   console.log('match');
    // }
    // console.log(test2.style);

    // background-image: url(./src/a.jpg);
    // background-repeat: no-repeat;
    a.style.background = 'url(./src/blue3.svg) ' + intElemScrollTop * -0.01 + 'px ' + intElemScrollTop + 'px repeat-x';
    a.style.backgroundSize = 'cover';
    // 'url(./src/a.jpg) ' +
    // intElemScrollTop * -2.5 +
    // 'px ' +
    // intElemScrollTop * -2.5 +
    // 'px no-repeat';
  }

  render() {
    var names = ['a', 'b', 'c'];
    var namesList = names.map(function(name) {
      return (
        <div className={name + ' slide'} key={name}>
          {name}
        </div>
      );
    });

    return (
      <div className="slide-inner" id="scroll-container" onScroll={this.handleScroll}>
        {namesList}
      </div>
    );
  }
}
