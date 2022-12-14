import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import OSM from 'ol/source/OSM';
import Group from 'ol/layer/Group';
import LayerSwitcher from 'ol-layerswitcher';

const federacoes = new TileLayer({
  title: 'Federações do Brasil',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/wms?request=GetCapabilities',
    params: { 'LAYERS': 'cite:br_uf_2020', 'TILED': true },
    serverType: 'geoserver',
    // Countries have transparency, so do not fade tiles:
    transition: 0,
  }),
});

const municipios = new TileLayer({
  title: 'Munícipios do Brasil',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/wms?request=GetCapabilities',
    params: { 'LAYERS': 'cite:br_municipios_2021', 'TILED': true },
    serverType: 'geoserver',
    // Countries have transparency, so do not fade tiles:
    transition: 0,
  }),
});

const areasurbanizadas = new TileLayer({
  title: 'Áreas Urbanizadas',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/wms?request=GetCapabilities',
    params: { 'LAYERS': 'cite:au_2022_areasurbanizadas2019_brasil', 'TILED': true },
    serverType: 'geoserver',
    // Countries have transparency, so do not fade tiles:
    transition: 0,
  }),
});

const rodovias = new TileLayer({
  title: 'Rodovias',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/wms?request=GetCapabilities',
    params: { 'LAYERS': 'cite:rodovia_2014', 'TILED': true },
    serverType: 'geoserver',
    // Countries have transparency, so do not fade tiles:
    transition: 0,
  }),
});

const aeroportos = new TileLayer({
  title: 'Aeroportos',
  source: new TileWMS({
    url: 'http://localhost:8080/geoserver/wms?request=GetCapabilities',
    params: { 'LAYERS': 'cite:aeroportos_2014', 'TILED': true },
    serverType: 'geoserver',
    // Countries have transparency, so do not fade tiles:
    transition: 0,
  }),
});

const osm = new TileLayer({
  source: new OSM(),
});

const layers = new Group({
  title: 'Camadas',
  layers: [osm, federacoes, areasurbanizadas, municipios, rodovias, aeroportos],

});

const map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 5,
  }),
});

//Seletor de Camadas
const layerSwitcher = new LayerSwitcher();
map.addControl(layerSwitcher);

