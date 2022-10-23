import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import headerInfo from './headerInfo';
import aboutUs from './aboutUs';
import plan from './plan';
import prices from './prices';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    headerInfo,
    aboutUs,
    plan,
    prices
  ]),
})
