/*
MIT License

Copyright (c) 2020 Imagineee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


/*

template function: 

(function (ele) {
    'use strict';
    return function
})

*/
//DOM Traversal
const doc = {
    doc: (function (ele) {
        'use strict';
        return document
    }),
    //getElementById
    byid: (function (ele) {
        'use strict';
        return document.getElementById(ele)
    }),
    //getElementsByClassName
    byclass: (function (ele) {
        'use strict';
        return document.getElementsByClassName(ele)
    }),
    //getElementsByName
    byname: (function (ele) {
        'use strict';
        return document.getElementsByName(ele)
    }),
    //getElementsByTagName
    bytagname: (function (ele) {
        'use strict';
        return document.getElementsByTagName(ele)
    }),
    //querySelector
    quesel: (function (ele) {
        'use strict';
        return document.querySelector(ele)
    }),
    body: (function (ele) {
        'use strict';
        return document.body
    })
}
const byid = (function (ele) {
    'use strict';
    return document.getElementById(ele)
})
const byclass = (function (ele) {
    'use strict';
    return document.getElementsByClassName(ele)
})
const win = (function () {
    'use strict';
    var txr = window
    return txr
})
const selec = (function (ele) {
    'use strict';
    return document.querySelector(ele)
})
const selecall = (function (ele) {
    'use strict';
    return document.querySelectorAll(ele)
})



//DOM manupilation
const append = (function (ele, html) {
    'use strict';
    ele.append(html)
})
const prepend = (function (ele, html) {
    'use strict';
    ele.prepend(html)
})


const fadeout = (function (ele) {
    'use strict';
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            ele.style.display = 'none';
        }
        ele.style.opacity = op;
        ele.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
})
const fadein = (function (ele) {
    'use strict';
    var op = 0.1;  // initial opacity
    ele.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        ele.style.opacity = op;
        ele.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
})

const fadeinspeed = (function (ele, speed) {
    'use strict';
    var op = 0.1;  // initial opacity
    ele.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        ele.style.opacity = op;
        ele.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, speed);
})
const fadeoutspeed = (function (ele, speed) {
    'use strict';
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            ele.style.display = 'none';
        }
        ele.style.opacity = op;
        ele.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, speed);
})
//eventlistenrs
const evelis = (function (ele, type, callback) {
    'use strict';
    ele.addEventListener(type, callback)
})
const remevelis = (function (ele, type, callback) {
    'use strict';
    ele.removeEventListener(type, callback)
})



//Console
const con = {
    log: (function (txt) {
        'use strict';
        return console.log(txt)
    }),
    error: (function (txt) {
        'use strict';
        return console.error(txt)
    }),
    cls: (function (txt) {
        'use strict';
        return console.clear(txt)
    }),
    debug: (function (txt) {
        'use strict';
        return console.debug(txt)
    }),
    dir: (function (txt) {
        'use strict';
        return console.dir(txt)
    }),
    dirxml: (function (txt) {
        'use strict';
        return console.dirxml(txt)
    }),
    assert: (function (txt) {
        'use strict';
        return console.assert(txt)
    }),
    tabel: (function (txt) {
        'use strict';
        return console.table(txt)
    }),
    time: {
        start: (function (txt) {
            'use strict';
            return console.time(txt)
        }),
        end: (function (txt) {
            'use strict';
            return console.timeEnd(txt)
        }),
        log: (function (txt) {
            'use strict';
            return console.timeLog(txt)
        }),
        stamp: (function (txt) {
            'use strict';
            return console.timeStamp(txt)
        })
    },
    trace: (function (txt) {
        'use strict';
        return console.trace(txt)
    }),
    warn: (function (txt) {
        'use strict';
        return console.warn(txt)
    }),
    info: (function (txt) {
        'use strict';
        return console.info(txt)
    })
}
const conlog = (function (txt) {
    'use strict';
    return console.log(txt)
})
const concls = (function (txt) {
    'use strict';
    return console.clear(txt)
})