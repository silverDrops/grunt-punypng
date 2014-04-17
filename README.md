# （临时入库,暂时不能使用，会尽快完善）
# grunt-punypng

> optimize images with punypng.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-punypng --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-punypng');
```

## The "punypng" task

### Overview
In your project's Gruntfile, add a section named `punypng` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  punypng: {
    options: {
      key: 'cd1e2670d3167db696ea56b8ck965fd3620a579cb'
    },

    test: {
        files: [{
            src: 'test/fixtures/*.png',
            dest: 'test/expected/'
        }]
    }
  },
});
```

### Options

#### options.key
Type: `key`
Default value: `',  '`

用于识别punypng账户的key，注册punypny账户后可以获得（http://www.punypng.com/profile）

#### options.lossy
Type: `lossy`
Default value: `'true'`

是否使用有损的压缩方式。推荐使用有损的压缩方式，有损的压缩是punypng的核心优势

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  punypng: {
    options: {
      // you can get key at http://www.punypng.com/profile
      key: 'cd1e2670d3167db696ea56b8c965fd3620a579cb'
    },

    test: {
        files: [{
            src: 'test/fixtures/*.png',
            dest: 'test/expected/'
        }]
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
