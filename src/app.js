import './assets/my-bootstrap.less';
import jQuery from 'jquery';

window.jQuery = jQuery;
require('bootstrap/js/modal');

let foo = () => { console.log('hello'); };

foo();

console.log(Object.assign({ a: 1 }, { b: 2 }));
