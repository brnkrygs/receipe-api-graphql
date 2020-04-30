const sleep = require( 'sleep-promise' );

function url( w, h, host ){
  return w && h ?
    `${host}{?w=${w}&h=${h}` :
    host;
}

const author1 = {
  id: '95c5e2a5-30dd-4348-8ab3-aa2da90cdc29',
  nickname: 'The Chef',
  website: 'https://www.ostusa.com',
  recipes: () => [recipe1,recipe2]
};

const author2 = {
  id: '895c5e2a5-30dd-4348-8ab3-aa2da90cdc29',
  nickname: 'The Other Chef',
  website: 'https://www.ostusa.com',
  recipes: () => []
};

const recipe2 = {
  id: '7efdaa71-90c5-4f13-9425-006bb68e2edf',
  title: 'Pulled Pork',
  url: args => url( args.w, args.h, 'https://www.ostusa.com/recipes/pulled-pork' ),
  author: () => author1
};

const recipe1 = {
  id: '6efdaa71-90c5-4f13-9425-006bb68e2edf',
  title: 'Brisket',
  name: 'old',
  url: args => url( args.w, args.h, 'https://www.ostusa.com/recipes/brisket' ),
  author: () => author1,
  notes: () => [note1, note2],
  steps: async ( args ) => {
    const result = [];

    await sleep( 1000 );
    result.push( recipeStep1 );

    if( args.first === true )
      return result;

    await sleep( 3000 );
    result.push( recipeStep2 );

    return result;
  }
};

// Recipe Notes
const note1 = {
  id: 'e86db7b8-e314-400d-bb75-fcbb3044526d',
  title: 'Note 1',
  body: 'This is a note',
  recipe: recipe1
};

const note2 = {
  id: 'e86db7b8-e314-400d-bb75-fcbb3044526c',
  title: 'Note 2',
  body: 'This is another note',
  recipe: recipe1
};

// Recipe Steps
const recipeStep1 = {
  id: '31e4b851-608e-48e6-a9f6-8e94b9cb1027',
  step: 1,
  instructions: 'Coat meat liberally with beef rub. When seasoned, wrap brisket in plastic wrap. Transfer wrapped brisket to the refrigerator and let sit for 12 to 24 hours.',
  recipe: () => recipe1
};

const recipeStep2 = {
  id: '31e4b851-608e-48e6-a9f6-8e94b9cb1027',
  step: 2,
  instructions: 'When ready to cook, set temperature to 225℉ and preheat, lid closed for 15 minutes.',
  recipe: () => recipe1
};

const drink1 = {
  __typename: 'Drink',
  id: 'dc57eaf0-b216-4bb5-8f0a-a734312b8310',
  name: 'Coffee',
  isCarbonated: false,
};

const drink2 = {
  __typename: 'Drink',
  id: 'cc57eaf0-b216-4bb5-8f0a-a734312b8310',
  name: 'Beer',
  isCarbonated: true,
};

const food1 = {
  __typename: 'Food',
  id: '5a59ee00-4680-4d53-97db-6e77f51f6ab2',
  title: 'Maple syrup'
};

const resolvers = {
  recipes: [recipe1,recipe2],
  recipe: () => recipe1,
  authors: [author1, author2],
  notes: [note1],
  ingredients: [drink1,drink2,food1]
};

module.exports = resolvers;