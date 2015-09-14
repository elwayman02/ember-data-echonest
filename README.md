# Ember-Data-Echonest

[![Build Status](https://travis-ci.org/elwayman02/ember-data-echonest.svg)](https://travis-ci.org/elwayman02/ember-data-echonest)
[![Dependency Status](https://www.versioneye.com/user/projects/55f4f6ab3ed89400170002ef/badge.svg?style=flat)](https://www.versioneye.com/user/projects/55f4f6ab3ed89400170002ef)
[![Code Climate](https://codeclimate.com/github/elwayman02/ember-data-echonest/badges/gpa.svg)](https://codeclimate.com/github/elwayman02/ember-data-echonest)
[![Codacy Badge](https://api.codacy.com/project/badge/c02761bbd57647b9ab5efc83191a2ef2)](https://www.codacy.com/app/hawker-jordan/ember-data-echonest)

This addon provides an abstraction layer for accessing the 
[Echo Nest V4 APIs](http://developer.echonest.com/docs/v4/index.html) via [Ember-Data](http://emberjs.com/api/data/).

## Requirements

This project is intended to work with Ember-Data 2.x, so if you wish to use it with a previous version, please file an issue.
If there is enough interest, we can work on handling older versions as well. Better yet, we'd love you to submit a PR adding this functionality!

## Obtaining an Echo Nest API Key

In order to use this addon, you must register for an [Echo Nest API Key](http://developer.echonest.com/docs/v4/index.html#keys).
If you see three keys on your profile (API/Consumer/Shared Secret), you can ignore the other two (deprecated) and use the API Key.

Note: API Keys are intended for non-commercial use. If you intend to make more money than simply covering your hosting costs,
please contact Echo Nest for licensing. I also highly recommend reviewing their [API Ground Rules](http://developer.echonest.com/docs/v4/index.html#ground-rules).

## Installation

`ember install ember-data-echonest`

Once you have installed the addon, you need to add your API Key to the ENV config. We highly recommend using 
[ember-cli-dotenv](https://github.com/fivetanley/ember-cli-dotenv) to save your key to a `.env` file so that 
you don't have to upload it to your project repo. I've called mine `ECHONEST_KEY`, and you can view the 
[demo app's config](https://github.com/elwayman02/ember-data-echonest/blob/master/tests/dummy/config/environment.js#L21) 
to see how I've injected the key.

## Usage

The addon exposes a number of models, adapters, and serializers you can use to access data from the 
[Echo Nest API](http://developer.echonest.com/docs/v4/index.html). If a particular API is not supported, please 
review our [issue list](https://github.com/elwayman02/ember-data-echonest/issues) and create a new one if it has
not yet been requested. Contributions especially welcome, as well!

#### Methods

Each section below details the usage of a particular type of data provided by Echo Nest. Within these sections are 
specific methods used for retrieving that model type. In order to utilize these APIs, you must pass the name
of the method you wish to use for your request:

```javascript
this.store.query('echonest-genre', {
  method: 'list'
});
```

This parameter must be passed in order for Ember-Data-Echonest to know how to construct the proper request url.

#### Buckets

Many of the APIs have additional query params called buckets that allow you to specify additional information to be 
returned in the response. In order to use these buckets, you would pass a query param `bucket` to Ember-Data with 
an array of strings containing the names of each bucket to be included. Every model type has the same buckets available,
unless otherwise noted.

### Artist

_Currently Unsupported_

### Genre

[Genre Docs](http://developer.echonest.com/docs/v4/genre.html)

Supported: `list`, `profile`, `search`, `similar`

##### Buckets

`urls` - Include urls tied to the genre (generally wikipedia)
`description` - Include a text description of the genre

```javascript
this.store.query('echonest-genre', {
    method: 'something',
    bucket: ['urls', 'description'] 
});
```

#### List

Returns a list of all available genres

```javascript
this.store.query('echonest-genre', {
    method: 'list'
});
```

##### Optional

*Results*: Number of desired results _(0+, Default: 1000)_

```javascript
this.store.query('echonest-genre', {
    name: 'rock',
    method: 'search',
    results: 75
});
```

#### Profile

Returns the profile of a single genre (as a list w/ a single item)

```javascript
this.store.query('echonest-genre', {
    method: 'profile',
    name: 'rock'
});
```

#### Search

Returns a list of genres matching the provided `name` substring

```javascript
this.store.query('echonest-genre', {
    name: 'rock',
    method: 'search'
});
```

##### Optional

*Results*: Number of desired results _(0+, Default: 15)_

```javascript
this.store.query('echonest-genre', {
    name: 'rock',
    method: 'search',
    results: 75
});
```

Note: The [Search API Docs](http://developer.echonest.com/docs/v4/genre.html#search) indicate the default value for
`results` is _100_, but my testing indicates the actual default is _15_. Additionally, they document a max value of 100, 
but any value is respected.

*Start*: Desired index of the first result returned _(0+, Default: 0)_

Note: The docs indicate 0/15/30 as the only accepted indices, but again, any value seems to be allowed.

```javascript
this.store.query('echonest-genre', {
    name: 'rock',
    method: 'search',
    start: 15
});
```

### Song

_Currently Unsupported_

### Track

_Currently Unsupported_

### Playlisting

_Currently Unsupported_

### Taste Profile

_Currently Unsupported_

## Contributing

[CONTRIBUTING.md](https://github.com/elwayman02/ember-data-echonest/blob/master/CONTRIBUTING.md) details how to contribute to this project.

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
