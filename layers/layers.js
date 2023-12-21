var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Photos_1 = new ol.format.GeoJSON();
var features_Photos_1 = format_Photos_1.readFeatures(json_Photos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_1.addFeatures(features_Photos_1);
var lyr_Photos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Photos_1, 
                style: style_Photos_1,
                interactive: true,
                title: '<img src="styles/legend/Photos_1.png" /> Photos'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Photos_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Photos_1];
lyr_Photos_1.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_Photos_1.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', });
lyr_Photos_1.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_Photos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});