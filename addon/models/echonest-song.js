import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
    artistDiscovery: attr('number'),
    artistDiscoveryRank: attr('number'),
    artistFamiliarity: attr('number'),
    artistFamiliarityRank: attr('number'),
    artistHotttnesss: attr('number'),
    artistHotttnesssRank: attr('number'),
    artistId: attr('string'),
    artistLocation: attr(),
    artistName: attr('string'),
    audioSummary: attr(),
    songCurrency: attr('number'),
    songCurrencyRank: attr('number'),
    songDiscovery: attr('number'),
    songDiscoveryRank: attr('number'),
    songHotttnesss: attr('number'),
    songHotttnesssRank: attr('number'),
    songType: attr(),
    title: attr('string')
});
