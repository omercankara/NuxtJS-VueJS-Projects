import bookMutations from './mutationModuls/bookMutations';
import categoryMutations from './mutationModuls/categoryMutations';
import personBookMutations from './mutationModuls/personBookMutations';
import personMutations from './mutationModuls/personMutations';

export default {
    ...bookMutations,
    ...categoryMutations,
    ...personMutations,
    ...personBookMutations
}


