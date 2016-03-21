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
not yet been requested. Contributions especially welcome!

If you have not already, update your application to include the [BabelJS Polyfill](https://github.com/babel/ember-cli-babel#polyfill) for new ES6 features such as `includes`:

```javascript
//ember-cli-build.js
new EmberApp(defaults, {
    babel: {
      includePolyfill: true
    }
});
```

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

##### Buckets

Artist buckets are supported by the following methods: `extract`, `profile`, `search`, `similar`, `top_hottt`

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
this.store.queryRecord('echonest-artist', {
    method: 'profile',
    name: 'Calvin Harris',
    bucket: ['biographies', 'images', 'urls']
});
```

#### Biographies

Returns a list of artist biographies

```javascript
this.store.query('echonest-biography', {
    name: 'Weezer'
});
```

#### Blogs

Returns a list of blog articles related to an artist

```javascript
this.store.query('echonest-blog', {
    name: 'Deadmau5'
});
```

#### Extract

Extract artist names from text

```javascript
this.store.query('echonest-artist', {
    method: 'extract'
    text: 'I love Taylor Swift and Kanye West both, why do they keep fighting? I wish they would collab with Eminem!'
});
```

##### Options

*sort*: Categories to sort by - _familiarity-asc, hotttnesss-asc, familiarity-desc, hotttnesss-desc, artist_start_year-asc, artist_start_year-desc, artist_end_year-asc, artist_end_year-desc_

```javascript
this.store.query('echonest-artist', {
    method: 'extract',
    text: 'I love Taylor Swift and Kanye West both, why do they keep fighting? I wish they would collab with Eminem!',
    sort: 'hotttnesss-desc'
});
```

*max_familiarity*: The maximum familiarity for artists returned from the query _(0-1, Default: 1)_
*min_familiarity*: The minimum familiarity for artists returned from the query _(0-1, Default: 0)_
*max_hotttnesss*: The maximum hotttnesss for artists returned from the query _(0-1, Default: 1)_
*min_hotttnesss*: The minimum hotttnesss for artists returned from the query _(0-1, Default: 0)_

```javascript
this.store.query('echonest-artist', {
    method: 'extract',
    text: 'I love Taylor Swift and Kanye West both, why do they keep fighting? I wish they would collab with Eminem!',
    min_familiarity: .7
});
```

*results*: Number of desired results _(0-100, Default: 15)_

```javascript
this.store.query('echonest-artist', {
    method: 'extract',
    text: 'I love Taylor Swift and Kanye West both, why do they keep fighting? I wish they would collab with Eminem!',
    results: 75
});
```

#### Familiarity

Returns a numerical estimation of how familiar an artist is currently

```javascript
this.store.queryRecord('echonest-artist', {
    method: 'familiarity',
    name: 'Radiohead'
});
```

An artist `name` or `id` can be provided. For example:

```javascript
this.store.queryRecord('echonest-artist', {
    method: 'familiarity',
    id: 'ARH6W4X1187B99274F'
});
```

#### Hotttnesss

Returns a numerical description of how hottt an artist is currently

```javascript
this.store.queryRecord('echonest-artist', {
    method: 'hotttnesss',
    name: 'Taylor Swift'
});
```

An artist `name` or `id` can be provided. For example:

```javascript
this.store.queryRecord('echonest-artist', {
    method: 'hotttnesss',
    id: 'ARH6W4X1187B99274F'
});
```

*type*: Controls the type of hotttnesss that is used _(overall, social, reviews, mainstream, Default: overall)_

Note: As of yet we have been unable to ascertain the usefulness of this parameter. 
All tests of the API have returned the same results for an artist regardless of type.

```javascript
this.store.queryRecord('echonest-artist', {
    method: 'hotttnesss',
    name: 'Taylor Swift',
    type: 'mainstream'
});
```

#### Images

Returns a list of images related to an artist

```javascript
this.store.query('echonest-image', {
    name: 'Taylor Swift'
});
```

#### Profile

Returns basic profile information for an artist

```javascript
this.store.queryRecord('echonest-artist', {
    method: 'profile',
    name: 'Taylor Swift'
});
```

An artist `name` or `id` can be provided. For example:

```javascript
this.store.queryRecord('echonest-artist', {
    method: 'profile',
    id: 'ARH6W4X1187B99274F'
});
```

#### News

Returns a list of news articles related to an artist

```javascript
this.store.queryRecord('echonest-news', {
    name: 'Taylor Swift'
});
```

An artists `id` can be provided instead of `name`, as shown for other APIs.

##### Options

*high_relevance*:  Whether to only show highly relevant articles or all news mentioning the artist _(Default: false)_
*results*: Number of desired results _(0-100, Default: 15)_
*start*: Desired index of the first result returned _(0+, Default: 0)_

```javascript
this.store.queryRecord('echonest-news', {
    name: 'Taylor Swift',
    high_relevance: true,
    results: 50,
    start: 15
});
```

#### Reviews

Returns a list of album reviews related to an artist

```javascript
this.store.queryRecord('echonest-reviews', {
    name: 'Taylor Swift'
});
```

An artists `id` can be provided instead of `name`, as shown for other APIs.

##### Options

*results*: Number of desired results _(0-100, Default: 15)_
*start*: Desired index of the first result returned _(0+, Default: 0)_

```javascript
this.store.queryRecord('echonest-reviews', {
    name: 'Taylor Swift',
    results: 75,
    start: 10
});
```

#### Search

Returns a list of artists matching the provided `name` query

```javascript
this.store.query('echonest-artist', {
    name: 'Taylor Swift',
    method: 'search'
});
```

##### Options

*fuzzy_match*: Perform a fuzzy search on the query _(Default: false)_

```javascript
this.store.query('echonest-artist', {
    name: 'Taylor',
    method: 'search',
    fuzzy_match: true
});
```

*sort*: Categories to sort by - _familiarity-asc, hotttnesss-asc, familiarity-desc, hotttnesss-desc, artist_start_year-asc, artist_start_year-desc, artist_end_year-asc, artist_end_year-desc_

```javascript
this.store.query('echonest-artist', {
    name: 'Taylor',
    method: 'search',
    sort: 'hotttnesss-desc'
});
```

*description*: Match artists by `description`, such as `style` or `mood` (supports multiple)

```javascript
this.store.query('echonest-artist', {
    name: 'Taylor',
    method: 'search',
    description: ['romantic', '00s']
});
```

*style*: Match artists by `style` (supports multiple)

```javascript
this.store.query('echonest-artist', {
    name: 'Taylor',
    method: 'search',
    style: ['country pop', '00s']
});
```

*mood*: Match artists by `mood` (supports multiple)

```javascript
this.store.query('echonest-artist', {
    name: 'Taylor',
    method: 'search',
    mood: ['romantic', 'party music']
});
```

*rank_type*: For matching by `description`, `style`, or `mood`, 
match by query relevance or artist familiarity rank _(Default: relevance)_

```javascript
this.store.query('echonest-artist', {
    name: 'Taylor',
    method: 'search',
    mood: ['romantic'],
    rank_type: 'familiarity'
});
```

*genre*: Match artists by `genre` (supports multiple)

```javascript
this.store.query('echonest-artist', {
    name: 'Taylor',
    method: 'search',
    genre: ['country pop', 'bluegrass']
});
```

*artist_location*: A location of interest in relation to the `artist` query

Note: Location names can _optionally_ be qualified with a type specifier of `city`, `region` or `country`.

```javascript
this.store.query('echonest-artist', {
    name: 'Taylor',
    method: 'search',
    artist_location: 'city:Los Angeles+CA'
});
```

*max_familiarity*: The maximum familiarity for artists returned from the query _(0-1, Default: 1)_
*min_familiarity*: The minimum familiarity for artists returned from the query _(0-1, Default: 0)_
*max_hotttnesss*: The maximum hotttnesss for artists returned from the query _(0-1, Default: 1)_
*min_hotttnesss*: The minimum hotttnesss for artists returned from the query _(0-1, Default: 0)_

```javascript
this.store.query('echonest-artist', {
    name: 'Taylor',
    method: 'search',
    min_familiarity: .7
});
```

*artist_start_year_before*: Limit to artists whose first active year is before the provided year
*artist_start_year_after*: Limit to artists whose first active year is after the provided year
*artist_end_year_before*: Limit to artists whose last active year is before the provided year
*artist_end_year_after*: Limit to artists whose last active year is after the provided year

```javascript
this.store.query('echonest-artist', {
    name: 'Taylor',
    method: 'search',
    artist_start_year_before: 2000
});
```

*results*: Number of desired results _(0-100, Default: 15)_
*start*: Desired index of the first result returned _(0+, Default: 0)_

```javascript
this.store.query('echonest-artist', {
    name: 'Taylor',
    method: 'search',
    results: 75,
    start: 10
});
```

#### Suggest

Suggest artist names based on a partial query

```javascript
this.store.query('echonest-artist', {
    method: 'suggest',
    name: 'Tay'
});
```

##### Options 

*results*: Number of desired results _(0-100, Default: 15)_

```javascript
this.store.query('echonest-artist', {
    method: 'suggest',
    name: 'Taylor',
    results: 75
});
```

### Description

Descriptions of artists

#### Artist

[Artist Description Docs](http://developer.echonest.com/docs/v4/artist.html#terms)

Returns a list of the most relevant descriptions (along with their frequency and weight) for a given artist

```javascript
this.store.query('echonest-description', {
    method: 'artist',
    name: 'Taylor Swift'
});
```

##### Options

*sort*: Sort by weight or frequency _(Default: frequency)_

```javascript
this.store.query('echonest-description', {
    method: 'artist',
    name: 'Taylor Swift',
    sort: 'weight'
});
```

#### List

[List Docs](http://developer.echonest.com/docs/v4/artist.html#list-terms)

Returns a list of the best descriptive terms to use with search APIs. Allows two values for `type`:

* `mood` - A mood or feeling associated with the music (ie 'aggressive', 'dreamy', or 'epic')
* `style` - A genre or type of music (ie 'rock', 'classical', or '90s')

```javascript
this.store.query('echonest-description', {
    type: 'style'
});
```

#### Top

[List Docs](http://developer.echonest.com/docs/v4/artist.html#top-terms)

Returns a list of the most frequent descriptive terms to use with search APIs.

```javascript
this.store.query('echonest-description', {
    method: 'top'
});
```

##### Options

* `results` - Number of desired results _(0-1000, Default: 15)_

*Note: The docs list 0-100 as allowed ranges, but testing has 
revealed up to 1000 results can be returned without error.*

```javascript
this.store.query('echonest-description', {
    method: 'top',
    results: 385
});
```

### Genre

[Genre Docs](http://developer.echonest.com/docs/v4/genre.html)

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

##### Options

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

##### Options

*results*: Number of desired results _(0+, Default: 15)_

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

##### Options

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

```javascript
this.store.query('echonest-genre', {
    name: 'hard rock',
    method: 'similar',
    start: 10
});
```

### Song

[Song Docs](http://developer.echonest.com/docs/v4/song.html)

##### Buckets

Song buckets are supported by the following methods: `profile`, `search`

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

#### Artist

Returns a list of songs released by the provided artist

```javascript
this.store.query('echonest-song', {
    method: 'artist',
    name: 'Taylor Swift'
});
```

Artist `id` can be used in place of `name`

##### Options

*results*: Number of desired results _(0-100, Default: 15)_
*start*: Desired index of the first result returned _(0+, Default: 0)_

```javascript
this.store.query('echonest-song', {
    method: 'artist',
    name: 'Taylor Swift',
    results: 100,
    start: 15
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

##### Options

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

### Playlist

The Echo Nest API can be used to create playlists on the fly. To access it, simply query for a list of songs
using the various `playlist` methods.

##### Buckets

* `id:catalog-name`
* `tracks`

#### Basic

```javascript
this.store.query('echonest-song', {
    artist: 'Eminem',
    method: 'playlist/basic'
})
```

A number of different parameters can be used to seed the playlist: `artist_id`, `artist`, `song_id`, `genre`, `track_id`. 
Multiples of each are allowed, but only a maximum of five across all seed parameters.

*artist_id*: ID(s) of seed artist(s)

```javascript
this.store.query('echonest-song', {
    artist_id: 'ARH6W4X1187B99274F',
    method: 'playlist/basic'
})
```

*artist*: Name(s) of seed artist(s)

```javascript
this.store.query('echonest-song', {
    artist: 'Mariah Carey',
    method: 'playlist/basic'
})
```

*song_id*: ID(s) of seed song(s)

```javascript
this.store.query('echonest-song', {
    song_id: 'SOCZMFK12AC468668F',
    method: 'playlist/basic'
})
```

*genre*: Seed genre(s)

```javascript
this.store.query('echonest-song', {
    genre: 'rock',
    method: 'playlist/basic'
})
```

*track_id*: ID(s) of seed track(s)

```javascript
this.store.query('echonest-song', {
    track_id: 'TRTLKZV12E5AC92E11',
    method: 'playlist/basic'
})
```

*type*: The type of playlist to be generated _(artist-radio, song-radio , genre-radio, Default: artist-radio)_

* `artist-radio` - plays songs for the given artists and similar artists
* `song-radio` - plays songs similar to the song specified.
* `genre-radio` - plays songs from artists matching the given genre

```javascript
this.store.query('echonest-song', {
    type: 'genre-radio',
    genre: 'rock',
    method: 'playlist/basic'
})
```

*results*: Desired number of songs in the playlist _(0-100, Default: 15)_

```javascript
this.store.query('echonest-song', {
    artist: 'Eminem',
    method: 'playlist/basic',
    results: 50
})
```

*limited_interactivity*: Set rules for the playlist to conform to _(true, false, stylea, styleb, Default: false)_

When the limited_interactivity parameter is set to true, the playlist will conform to the following rules:
* no more than 2 songs in a row from the same album
* no more than 3 songs from an album in a 3 hour period
* no more than 3 different songs in a row by the same artist
* no more than 4 songs by the same artist in a 3 hour period
If limited_interactivity is set to true, skipped songs are not considered to have been played for 
limited interactivity conformance purposes. If limited_interactivity is set to `styleb`, skipped 
songs are considered to have been played for limited interactivity purposes.

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

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
