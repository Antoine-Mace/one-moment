# One moment
Import moment.js dynamically into your node project.

## Quick start

Install onto your node project using `yarn` or `npm`:

```
yarn add one-moment
```

```
npm install one-moment
```

To use:

Import moment.js from ```https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js```
```
'use strict'

const oneMomentLoad = require('one-moment')

oneMomentLoad(function (err, ref) {
  if (err) {
    console.log(err)
  } else {
      console.log('Moment.js as been imported', ref)
  }
})

```

In case you want to load the library into your build you can use the js file stored here ```/lib/moment.min.js```
then in your webpack config or equivalent add the following
```
new CopyWebpackPlugin([{
    {
      from: '../node_modules/one-moment/lib/moment.min.js',
      to: 'moment.min.js'
    }])
```
and include in your index page ```<script src="moment.min.js"></script>```

## License

This project is [MIT licensed](./LICENSE). By contributing you agree that your contributions will be licensed under its
MIT license.