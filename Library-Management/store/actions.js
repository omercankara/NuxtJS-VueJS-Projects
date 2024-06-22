
import bookActions from './actionModuls/bookActions';
import categoryActions from './actionModuls/categoryActions';
import personActions from "./actionModuls/personActions"
import personBookActions from './actionModuls/personBookActions';

export default {
  ...bookActions,
  ...categoryActions,
  ...personActions,
  ...personBookActions
}
