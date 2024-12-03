ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-74.118271, 4.585909, -74.031249, 4.652396]);
var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_PUNTOS_1 = new ol.format.GeoJSON();
var features_PUNTOS_1 = format_PUNTOS_1.readFeatures(json_PUNTOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PUNTOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOS_1.addFeatures(features_PUNTOS_1);
var lyr_PUNTOS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTOS_1, 
                style: style_PUNTOS_1,
                popuplayertitle: "PUNTOS",
                interactive: true,
                title: '<img src="styles/legend/PUNTOS_1.png" /> PUNTOS'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_PUNTOS_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_PUNTOS_1];
lyr_PUNTOS_1.set('fieldAliases', {'id': 'id', 'Entidad': 'Entidad', 'Descrip.': 'Descrip.', 'Coordenada': 'Coordenada', 'Altura': 'Altura', 'Hora': 'Hora', 'Expositor': 'Expositor', 'Tel.': 'Tel.', 'Actividad': 'Actividad', });
lyr_PUNTOS_1.set('fieldImages', {'id': 'TextEdit', 'Entidad': 'TextEdit', 'Descrip.': 'TextEdit', 'Coordenada': 'TextEdit', 'Altura': 'TextEdit', 'Hora': '', 'Expositor': '', 'Tel.': '', 'Actividad': '', });
lyr_PUNTOS_1.set('fieldLabels', {'id': 'no label', 'Entidad': 'inline label - visible with data', 'Descrip.': 'inline label - visible with data', 'Coordenada': 'inline label - visible with data', 'Altura': 'inline label - visible with data', 'Hora': 'inline label - visible with data', 'Expositor': 'inline label - visible with data', 'Tel.': 'inline label - visible with data', 'Actividad': 'inline label - visible with data', });
lyr_PUNTOS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});