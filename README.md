# awwwards-of-the-day

[![npm version](https://badge.fury.io/js/awwwards-of-the-day.svg)](https://badge.fury.io/js/awwwards-of-the-day)
[![Build Status](https://travis-ci.org/shgtkshruch/awwwards-of-the-day.svg?branch=master)](https://travis-ci.org/shgtkshruch/awwwards-of-the-day)

Get awwards of the day

## Install

```sh
$ npm i awwwrds-of-the-day
```

## Usage

```js
const awwwards = require('awwwrds-of-the-day');

awwwards().then(sites => {
  console.log(sites);
  /*
  [
    { index: 0,
      title: 'Beoplay H4 - UNFILTERED',
      img: 'https://assets.awwwards.com/awards/submissions/2017/02/589c419438eed.jpg',
      link: 'http://beoplay.com/h4',
      date: 'February 22, 2017'
    },
    { index: 1,
      title: 'A is for Albert',
      img: 'https://assets.awwwards.com/awards/submissions/2017/01/588a415536903.gif',
      link: 'http://www.aisforalbert.com/',
      date: 'February 21, 2017'
    },
    ...
  ];
   */
});
```

## License
MIT
