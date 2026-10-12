var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_WorldImagery_1 = new ol.layer.Tile({
            'title': 'World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleTerrainHybrid_2 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelitHybrid_3 = new ol.layer.Tile({
            'title': 'Google Satelit Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelit_4 = new ol.layer.Tile({
            'title': 'Google Satelit',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Irigasi_5 = new ol.format.GeoJSON();
var features_Irigasi_5 = format_Irigasi_5.readFeatures(json_Irigasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irigasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irigasi_5.addFeatures(features_Irigasi_5);
var lyr_Irigasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Irigasi_5, 
                style: style_Irigasi_5,
                popuplayertitle: 'Irigasi',
                interactive: false,
                title: '<img src="styles/legend/Irigasi_5.png" /> Irigasi'
            });
var format_Jalan_6 = new ol.format.GeoJSON();
var features_Jalan_6 = format_Jalan_6.readFeatures(json_Jalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_6.addFeatures(features_Jalan_6);
var lyr_Jalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_6, 
                style: style_Jalan_6,
                popuplayertitle: 'Jalan',
                interactive: false,
                title: '<img src="styles/legend/Jalan_6.png" /> Jalan'
            });
var format_AreaLuar_7 = new ol.format.GeoJSON();
var features_AreaLuar_7 = format_AreaLuar_7.readFeatures(json_AreaLuar_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaLuar_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaLuar_7.addFeatures(features_AreaLuar_7);
var lyr_AreaLuar_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaLuar_7, 
                style: style_AreaLuar_7,
                popuplayertitle: 'Area Luar',
                interactive: false,
                title: '<img src="styles/legend/AreaLuar_7.png" /> Area Luar'
            });
var format_BatasWilayahPondok_8 = new ol.format.GeoJSON();
var features_BatasWilayahPondok_8 = format_BatasWilayahPondok_8.readFeatures(json_BatasWilayahPondok_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahPondok_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahPondok_8.addFeatures(features_BatasWilayahPondok_8);
var lyr_BatasWilayahPondok_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahPondok_8, 
                style: style_BatasWilayahPondok_8,
                popuplayertitle: 'Batas Wilayah Pondok',
                interactive: false,
                title: '<img src="styles/legend/BatasWilayahPondok_8.png" /> Batas Wilayah Pondok'
            });
var format_BatasAsalTanahWakaf_9 = new ol.format.GeoJSON();
var features_BatasAsalTanahWakaf_9 = format_BatasAsalTanahWakaf_9.readFeatures(json_BatasAsalTanahWakaf_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAsalTanahWakaf_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAsalTanahWakaf_9.addFeatures(features_BatasAsalTanahWakaf_9);
var lyr_BatasAsalTanahWakaf_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAsalTanahWakaf_9, 
                style: style_BatasAsalTanahWakaf_9,
                popuplayertitle: 'Batas Asal Tanah Wakaf',
                interactive: false,
                title: '<img src="styles/legend/BatasAsalTanahWakaf_9.png" /> Batas Asal Tanah Wakaf'
            });
var format_BatasDesa_10 = new ol.format.GeoJSON();
var features_BatasDesa_10 = format_BatasDesa_10.readFeatures(json_BatasDesa_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_10.addFeatures(features_BatasDesa_10);
var lyr_BatasDesa_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_10, 
                style: style_BatasDesa_10,
                popuplayertitle: 'Batas Desa',
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_10.png" /> Batas Desa'
            });
var format_BatasKecamatan_11 = new ol.format.GeoJSON();
var features_BatasKecamatan_11 = format_BatasKecamatan_11.readFeatures(json_BatasKecamatan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_11.addFeatures(features_BatasKecamatan_11);
var lyr_BatasKecamatan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_11, 
                style: style_BatasKecamatan_11,
                popuplayertitle: 'Batas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_11.png" /> Batas Kecamatan'
            });
var format_BatasKabupaten_12 = new ol.format.GeoJSON();
var features_BatasKabupaten_12 = format_BatasKabupaten_12.readFeatures(json_BatasKabupaten_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_12.addFeatures(features_BatasKabupaten_12);
var lyr_BatasKabupaten_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupaten_12, 
                style: style_BatasKabupaten_12,
                popuplayertitle: 'Batas Kabupaten',
                interactive: false,
                title: '<img src="styles/legend/BatasKabupaten_12.png" /> Batas Kabupaten'
            });
var format_BatasProvinsi_13 = new ol.format.GeoJSON();
var features_BatasProvinsi_13 = format_BatasProvinsi_13.readFeatures(json_BatasProvinsi_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasProvinsi_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasProvinsi_13.addFeatures(features_BatasProvinsi_13);
var lyr_BatasProvinsi_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasProvinsi_13, 
                style: style_BatasProvinsi_13,
                popuplayertitle: 'Batas Provinsi',
                interactive: false,
                title: '<img src="styles/legend/BatasProvinsi_13.png" /> Batas Provinsi'
            });
var format_TitikPenting_14 = new ol.format.GeoJSON();
var features_TitikPenting_14 = format_TitikPenting_14.readFeatures(json_TitikPenting_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPenting_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPenting_14.addFeatures(features_TitikPenting_14);
var lyr_TitikPenting_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPenting_14, 
                style: style_TitikPenting_14,
                popuplayertitle: 'Titik Penting',
                interactive: true,
    title: 'Titik Penting<br />\
    <img src="styles/legend/TitikPenting_14_0.png" /> Area Sekolah<br />\
    <img src="styles/legend/TitikPenting_14_1.png" /> Asrama Santri Putra<br />\
    <img src="styles/legend/TitikPenting_14_2.png" /> Asrama Santri Putri<br />\
    <img src="styles/legend/TitikPenting_14_3.png" /> Aula<br />\
    <img src="styles/legend/TitikPenting_14_4.png" /> DH Mart<br />\
    <img src="styles/legend/TitikPenting_14_5.png" /> Kantor Administrasi Keuangan<br />\
    <img src="styles/legend/TitikPenting_14_6.png" /> Kantor Pengasuhan Santri<br />\
    <img src="styles/legend/TitikPenting_14_7.png" /> Kantor Pimpinan Pondok<br />\
    <img src="styles/legend/TitikPenting_14_8.png" /> Lapangan Kegiatan dan Olahraga<br />\
    <img src="styles/legend/TitikPenting_14_9.png" /> Masjid Nurul Anshar Darul Hijrah<br />\
    <img src="styles/legend/TitikPenting_14_10.png" /> Ruang Kesehatan<br />\
    <img src="styles/legend/TitikPenting_14_11.png" /> Wisma Darul Hijrah<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_WorldImagery_1.setVisible(true);lyr_GoogleTerrainHybrid_2.setVisible(true);lyr_GoogleSatelitHybrid_3.setVisible(true);lyr_GoogleSatelit_4.setVisible(true);lyr_Irigasi_5.setVisible(true);lyr_Jalan_6.setVisible(true);lyr_AreaLuar_7.setVisible(true);lyr_BatasWilayahPondok_8.setVisible(true);lyr_BatasAsalTanahWakaf_9.setVisible(true);lyr_BatasDesa_10.setVisible(true);lyr_BatasKecamatan_11.setVisible(true);lyr_BatasKabupaten_12.setVisible(true);lyr_BatasProvinsi_13.setVisible(true);lyr_TitikPenting_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WorldImagery_1,lyr_GoogleTerrainHybrid_2,lyr_GoogleSatelitHybrid_3,lyr_GoogleSatelit_4,lyr_Irigasi_5,lyr_Jalan_6,lyr_AreaLuar_7,lyr_BatasWilayahPondok_8,lyr_BatasAsalTanahWakaf_9,lyr_BatasDesa_10,lyr_BatasKecamatan_11,lyr_BatasKabupaten_12,lyr_BatasProvinsi_13,lyr_TitikPenting_14];
lyr_Irigasi_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'bridge': 'bridge', 'width': 'width', 'highway': 'highway', 'waterway': 'waterway', 'usage': 'usage', 'name': 'name', 'intermittent': 'intermittent', });
lyr_Jalan_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'bridge': 'bridge', 'width': 'width', 'highway': 'highway', 'waterway': 'waterway', 'usage': 'usage', 'name': 'name', 'intermittent': 'intermittent', });
lyr_AreaLuar_7.set('fieldAliases', {'fid': 'fid', });
lyr_BatasWilayahPondok_8.set('fieldAliases', {'fid': 'fid', });
lyr_BatasAsalTanahWakaf_9.set('fieldAliases', {'fid': 'fid', });
lyr_BatasDesa_10.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'METADATA': 'METADATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', });
lyr_BatasKecamatan_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_BatasKabupaten_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_BatasProvinsi_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_TitikPenting_14.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Foto': 'Foto', });
lyr_Irigasi_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'layer': '', 'bridge': '', 'width': '', 'highway': '', 'waterway': '', 'usage': '', 'name': '', 'intermittent': '', });
lyr_Jalan_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'layer': '', 'bridge': '', 'width': '', 'highway': '', 'waterway': '', 'usage': '', 'name': '', 'intermittent': '', });
lyr_AreaLuar_7.set('fieldImages', {'fid': '', });
lyr_BatasWilayahPondok_8.set('fieldImages', {'fid': '', });
lyr_BatasAsalTanahWakaf_9.set('fieldImages', {'fid': '', });
lyr_BatasDesa_10.set('fieldImages', {'fid': '', 'NAMOBJ': '', 'METADATA': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'UUPP': '', });
lyr_BatasKecamatan_11.set('fieldImages', {'fid': '', 'OBJECTID': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', });
lyr_BatasKabupaten_12.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_BatasProvinsi_13.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_TitikPenting_14.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Irigasi_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'bridge': 'no label', 'width': 'no label', 'highway': 'no label', 'waterway': 'no label', 'usage': 'no label', 'name': 'no label', 'intermittent': 'no label', });
lyr_Jalan_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'bridge': 'no label', 'width': 'no label', 'highway': 'no label', 'waterway': 'no label', 'usage': 'no label', 'name': 'no label', 'intermittent': 'no label', });
lyr_AreaLuar_7.set('fieldLabels', {'fid': 'no label', });
lyr_BatasWilayahPondok_8.set('fieldLabels', {'fid': 'no label', });
lyr_BatasAsalTanahWakaf_9.set('fieldLabels', {'fid': 'hidden field', });
lyr_BatasDesa_10.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'hidden field', 'METADATA': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'UUPP': 'hidden field', });
lyr_BatasKecamatan_11.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_BatasKabupaten_12.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_BatasProvinsi_13.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_TitikPenting_14.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'inline label - visible with data', 'Foto': 'inline label - visible with data', });
lyr_TitikPenting_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});