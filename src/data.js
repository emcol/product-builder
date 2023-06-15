import { CarModel, Color, Accessory, UserSelection } from './models';

const carModels = [
  new CarModel(
    'i3',
    'BMW i3',
    42400,
    [new Color('white', 0), new Color('mineral grey', 550), new Color('orange metallic', 550)],
    [new Accessory('BMW Charging Station', 1080), new Accessory('BMW Maintenance Program Upgrade', 1895), new Accessory('1 Year BMW Maintenance Program Upgrade', 975)]
  ),
  new CarModel(
    'i8',
    'BMW i8',
    140700,
    [new Color('grey metallic', 0), new Color('white perl metallic', 1800)],
    [new Accessory('BMW Laserlight', 6300), new Accessory('BMW Charging Station', 1080), new Accessory('BMW Maintenance Program Upgrade', 1895), new Accessory('1 Year BMW Maintenance Program Upgrade', 975)]
  ),
];

const userSelection = new UserSelection();

export { carModels, userSelection };
