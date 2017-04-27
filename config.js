// Configure
const config = {

    // Provide a comma seperated list of stream_ids
    // Search: http://gettwitterid.com/
    // DallasPoGo, PoGoWhiteRock, Pogo Alerts Northpark, Pogo Alerts Preson Hollow
    stream_ids: '776568166562476032, 777626186591637509, 839559590182326278, 840322504430350336, 68259245',

    // Provide a comma seperated  list of keywords
    // Note: keyword search is NOT case-sensative
    // See keywords-list.md for examples
    keywords: [
        "Porygon",
        "Dragonair", "Dragonite",
        'Larvitar', 'Pupitar', 'Tyranitar',
        'Mareep', 'Flaaffy', 'Ampharos',
        'Snubbull', 'Granbull',
        'Swinub', 'Piloswine',
        'Houndour', 'Houndoom',
        'Tyrogue', 'Hitmontop',
        'Unown',
        "Delibird",
        "Smeargle"
    ]

};

module.exports = config;