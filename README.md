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

Each section below details the usage of a particular type of API provided by Echo Nest. Many of the APIs have additional
query params called `bucket` that allow you to specify additional information to be returned in the response. In order
to use these buckets, you would pass a query param `bucket` to Ember-Data with an array of strings containing the names
 of each bucket to be included. In cases where you are modifying a `findAll` query, you will need to switch to `query`
 to be able to pass the extra parameters for the request.

### Artist

_Currently Unsupported_

### Genre

[Genre Docs](http://developer.echonest.com/docs/v4/genre.html)

Supported: `list`
Unsupported: `artists`, `profile`, `search`, `similar`

#### List

Returns a list of all available genres

`this.store.findAll('echonest-genre');`

Buckets:
`urls` - Include urls tied to the genre (generally wikipedia)
`description` - Include a text description of the genre

`this.store.query('echonest-genre', { bucket: ['urls', 'description'] });`

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
