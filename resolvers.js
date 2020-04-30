const sleep = require( 'sleep-promise' );

function url( w, h ){
  return w && h ?
    `https://www.ostusa.com/?w=${w}&h=${h}` :
    'https://www.ostusa.com/';
}

const author1 = {
  id: '95c5e2a5-30dd-4348-8ab3-aa2da90cdc29',
  name: 'First Author',
  website: 'https://www.ostusa.com',
  recipes: () => [recipe1]
};

const recipe1 = {
  id: '6efdaa71-90c5-4f13-9425-006bb68e2edf',
  title: 'Ribs',
  name: 'old',
  url: args => url( args.w, args.h ),
  author: () => author1,
  notes: () => [note1],
  steps: async () => {
    await sleep( 5000 );
    return [recipeStep1];
  }
};

const note1 = {
  id: 'e86db7b8-e314-400d-bb75-fcbb3044526d',
  title: 'Note 1',
  body: 'This is a note',
  recipe: recipe1
};

const recipeStep1 = {
  id: '31e4b851-608e-48e6-a9f6-8e94b9cb1027',
  step: 1,
  instructions: 'Boil the water',
  recipe: () => recipe1
};

const resolvers = {
  recipes: [recipe1],
  recipe: args => recipe1,
  authors: [author1],
  notes: [note1]
};

module.exports = resolvers;