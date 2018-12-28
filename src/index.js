import React from 'react';
import ReactDOM from 'react-dom';
import Quotes from '../src/quote.js';

import './app.css';

const quoteElement = <Quotes />;
// ReactDOM.render(quoteElement, document.getElementById('quote-container'));

// var c = document.getElementById('canvas-bg');
// var ctx = c.getContext("2d");
//
// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();

var canvas = document.getElementById('canvas-bg');
var context = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 75;
var startAngle = 1.1 * Math.PI;
var endAngle = 1.9 * Math.PI;
var counterClockwise = false;

context.beginPath();
context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
context.lineWidth = 15;

// line color
context.strokeStyle = 'black';
context.stroke();
