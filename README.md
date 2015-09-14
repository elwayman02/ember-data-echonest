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

[Artist Docs](http://developer.echonest.com/docs/v4/artist.html)

Supported: `biographies`, `blogs`, `familiarity`

##### Buckets

- `biographies` - Returns up to the 15 most recent biographies found on the web related to the artist
- `blogs` - Returns up to the 15 most recent blogs found on the web related to the artist
- `discovery` - Returns the discovery score for the artist. This is a measure of how unexpectedly popular the artist is
- `discovery_rank` - Returns the discovery rank for the artist
- `doc_counts` - Returns document counts for each of the various artist document types
- `familiarity`	- Returns the familiarity for the artist
- `familiarity_rank` -	Returns the familiarity rank for the artist
- `genre` -	Returns all genres for an artist
- `hotttnesss` - Returns the hotttnesss for the artist
- `hotttnesss_rank` -	Returns the hotttnesss rank for the artist
- `images` -	Returns up to the 15 most recent images found on the web related to the artist
- `artist_location`	- Returns information about the location of origin for the artist
- `news` -	Returns up to the 15 most recent news articles found on the web related to the artist
- `reviews` -	Returns up to the 15 most recent reviews found on the web related to the artist
- `songs` -	Returns up to the 15 hotttest songs for the artist
- `urls` -	Returns links to this artist's pages on various sites
- `video` -	Returns up to the 15 most recent videos found on the web related to the artist
- `years_active` -	Returns years active information for the artist

```javascript
this.store.query('echonest-artist', {
    method: 'profile',
    bucket: ['biographies', 'images', 'urls']
});
```

#### Biographies

Returns a list of artist biographies

```javascript
this.store.query('echonest-biography', {
    method: 'biographies',
    name: 'Weezer'
});
```

#### Blogs

Returns a list of blog articles related to an artist

```javascript
return this.store.query('echonest-blog', {
    method: 'blogs',
    name: 'Deadmau5'
});
```

#### Familiarity

Returns a numerical estimation of how familiar an artist currently is to the world

```javascript
return this.store.query('echonest-artist', {
    method: 'familiarity',
    name: 'Radiohead'
});
```

#### List Terms

_Currently Unsupported_

### Genre

[Genre Docs](http://developer.echonest.com/docs/v4/genre.html)

Supported: `list`, `profile`, `search`, `similar`

##### Buckets

* `urls` - Include urls tied to the genre (generally wikipedia)
* `description` - Include a text description of the genre

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
    start: 25
});
```

#### Similar

Returns a list of genres similar to the provided genre `name`. An exact genre name must be provided to receive results.

```javascript
this.store.query('echonest-genre', {
    name: 'hard rock',
    method: 'similar'
});
```

##### Optional

*results*: Number of desired results _(0+, Default: 15)_

```javascript
this.store.query('echonest-genre', {
    name: 'hard rock',
    method: 'similar',
    results: 75
});
```

Note: The [Similar API Docs](http://developer.echonest.com/docs/v4/genre.html#similar) indicate the default value for
`results` is _100_, but my testing indicates the actual default is _15_. Additionally, they document a max value of 100,
but any value is respected.

*start*: Desired index of the first result returned _(0+, Default: 0)_

Note: The docs indicate 0/15/30 as the only accepted indices, but again, any value seems to be allowed.

```javascript
this.store.query('echonest-genre', {
    name: 'hard rock',
    method: 'similar',
    start: 10
});
```

### Song

[Song Docs](http://developer.echonest.com/docs/v4/song.html)

Supported: `search`, `profile`

##### Buckets

* `audio_summary` - returns summary audio parameters for the song
* `artist_discovery` - returns the discovery score for the song's artist. This is a measure of how unexpectedly popular the artist is.
* `artist_discovery_rank` - returns the discovery rank for the song's artist
* `artist_familiarity` - returns the familiarity for the song's artist
* `artist_familiarity_rank` - returns the familiarity rank for the song's artist
* `artist_hotttnesss` - returns the hotttnesss for the song's artist
* `artist_hotttnesss_rank` - returns the hotttnesss rank for the song's artist
* `artist_location` - returns information about the location of origin for the song's artist
* `song_currency` - returns the currency score of the song. This is a measure of how recently popular the song is.
* `song_currency_rank` - returns the currency rank of the song.
* `song_discovery` - returns the discovery score of the song. This is a measure of how unexpectedly popular the song is.
* `song_discovery_rank` - returns the discovery rank of the song.
* `song_hotttnesss` - returns the hotttnesss of the song
* `song_hotttnesss_rank` - returns the hotttnesss rank of the song
* `song_type` - returns a list of song types for the song. Possible song types returned are: 'christmas', 'live' 'studio', 'acoustic', and 'electric'
* `tracks` - returns detailed track information for the song. You must also specify a Rosetta id space such as 7digital-US.
* `id:rosetta-catalog` - returns catalog specific information about the song for the given catalog. See Project Rosetta Stone for details.
* `id:Personal-Catalog-ID` - returns personal catalog specific information about the song for the given catalog. See Project Rosetta Stone for details.

```javascript
this.store.query('echonest-song', {
    method: 'search',
    title: 'the lion sleeps tonight',
    bucket: ['song_currency', 'song_discovery', 'song_hotttnesss', 'song_type']
});
```

#### Profile

Returns a list of songs matching the provided song ID(s)

```javascript
this.store.query('echonest-song', {
    method: 'profile',
    id: 'SOYOUXP14DAE470D22'
});
```

Multiple IDs:

```javascript
this.store.query('echonest-song', {
    method: 'profile',
    id: ['SOYOUXP14DAE470D22', 'SOORVLT13ADC025EF9']
});
```

Alternatively, one or more `track_id` can be provided instead of the song `id`:

```javascript
this.store.query('echonest-song', {
    method: 'profile',
    id: 'TRTLKZV12E5AC92E11'
});
```

#### Search

Returns a list of songs matching the provided query parameters

```javascript
this.store.query('echonest-song', {
    method: 'search',
    title: 'bohemian rhapsody'
});
```

##### Optional

The parameters below can be used individually or in combination to refine the results:

*title*: The title of the song

```javascript
this.store.query('echonest-song', {
    method: 'search',
    title: 'boom boom pow'
});
```

*artist*: The name of the primary artist

```javascript
this.store.query('echonest-song', {
    method: 'search',
    artist: 'justin timberlake'
});
```

*combined*: Query both the artist and title fields with the same string

```javascript
this.store.query('echonest-song', {
    method: 'search',
    combined: 'nirvana'
});
```

*description*: A description of the artist

```javascript
this.store.query('echonest-song', {
    method: 'search',
    description: 'emo'
});
```

Multiple descriptions:

```javascript
this.store.query('echonest-song', {
    method: 'search',
    description: ['emo', 'alt-rock']
});
```

*style*: A musical style or genre

See [List Terms](#list-terms) for more information about available styles.

```javascript
this.store.query('echonest-song', {
    method: 'search',
    style: 'jazz'
});
```

Multiple styles:

```javascript
this.store.query('echonest-song', {
    method: 'search',
    style: ['jazz', 'funky']
});
```

*mood*: A song's mood

See [List Terms](#list-terms) for more information about available moods.

```javascript
this.store.query('echonest-song', {
    method: 'search',
    mood: 'happy'
});
```

Multiple moods:

```javascript
this.store.query('echonest-song', {
    method: 'search',
    mood: ['happy', 'sad']
});
```

*artist_id*: An Echo Nest or Rosetta artist ID

```javascript
this.store.query('echonest-song', {
    method: 'search',
    artist_id: 'ARH6W4X1187B99274F'
});
```

*song_type*: Restrict results to a specific type of song _('acoustic', 'christmas', 'electric', 'live', 'studio')_

```javascript
this.store.query('echonest-song', {
    method: 'search',
    title: 'boom boom pow',
    song_type: 'live'
});
```

Multiple song types:

```javascript
this.store.query('echonest-song', {
    method: 'search',
    title: 'boom boom pow',
    song_type: ['live', 'electric']
});
```

Song types can be modified with a state dictating whether to include or exclude that type:

* `true` - Include the type in results (Default)
* `false` - Exclude the type from results

```javascript
this.store.query('echonest-song', {
    method: 'search',
    title: 'boom boom pow',
    song_type: ['live', 'electric:true', 'christmas: false']
});
```

The above query would return songs that are both `live` and `electric`, but not `christmas`.

*results*: Number of desired results _(0-100, Default: 15)_

```javascript
this.store.query('echonest-song', {
    method: 'search',
    title: 'boom boom pow',
    results: 100
});
```

*start*: Desired index of the first result returned _(0+, Default: 0)_

Note: The docs indicate 0/15/30 as the only accepted indices, but any value seems to be allowed.

```javascript
this.store.query('echonest-song', {
    method: 'search',
    title: 'boom boom pow',
    start: 20
});
```

*sort*: Indicates how results should be ordered

```javascript
this.store.query('echonest-song', {
    method: 'search',
    title: 'boom boom pow',
    sort: 'song_hotttnesss-desc'
});
```

Sort Options: Add `-asc` or `-desc` to indicate sort direction

* `tempo`
* `duration`
* `loudness`
* `speechiness`
* `acousticness`
* `liveness`
* `artist_familiarity`
* `artist_hotttnesss`
* `artist_start_year`
* `artist_end_year`
* `song_hotttnesss`
* `latitude`
* `longitude`
* `mode`
* `key`
* `energy`
* `danceability`

For more available search parameters, visit the [Song Search API Docs](http://developer.echonest.com/docs/v4/song.html#search)

### Track

Supported: `profile`

##### Buckets

* `audio_summary` - returns summary audio parameters for the track

```javascript
this.store.queryRecord('echonest-track', {
    method: 'profile',
    id: 'TRTLKZV12E5AC92E11',
    bucket: ['audio_summary']
});
```

#### Profile

```javascript
this.store.queryRecord('echonest-track', {
    method: 'profile',
    id: 'TRTLKZV12E5AC92E11'
});
```

Alternatively, you may lookup tracks by their `md5` hash:

```javascript
this.store.queryRecord('echonest-track', {
    method: 'profile',
    md5: '881f4e47e88e8b570e34a3b49c8262ac'
});
```

#### Upload

_Currently Unsupported_

### Playlisting

_Currently Unsupported_

### Taste Profile

_Currently Unsupported_

## Contributing

[CONTRIBUTING.md](https://github.com/elwayman02/ember-data-echonest/blob/master/CONTRIBUTING.md) details how to contribute to this project.

### Installation

* `git clone git@github.com:elwayman02/ember-data-echonest.git`
* `cd ember-data-echonest`
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
