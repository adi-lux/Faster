import Model from './modules/model';
import Controller from './modules/controller';
import View from './modules/view';
import './style.scss';

const main = () => {
  const model = Model();
  const controller = Controller(model);
  View(controller);
};

main();
