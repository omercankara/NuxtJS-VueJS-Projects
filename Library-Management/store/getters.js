
import bookGetters from './gettersModuls/bookGetters';
import categoryGetters from './gettersModuls/categoryGetters';
import personGetters from './gettersModuls/personGetters';
import personBookGetters from './gettersModuls/personBookGetters';
export default {
    ...bookGetters,
    ...categoryGetters,
    ...personGetters,
    ...personBookGetters
}