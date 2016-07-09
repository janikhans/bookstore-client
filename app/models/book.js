// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo } from 'ember-data/relationships';
// import { hasMany } from 'ember-data/relationships';

import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  author: DS.belongsTo('author', { async: true, inverse: 'books' }),
  publisher: DS.belongsTo('publisher', { polymorphic: true, async: true, inverse: 'published' })
});
