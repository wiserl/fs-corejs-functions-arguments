import Test from 'ava';
import Calculator from '../src';

Test.beforeEach(t => {
  t.context = new Calculator();
});

Test(`Calculator is export properly`, t => t.truthy(Calculator));

Test(`#add() sums 2 arguments`, t => t.is(t.context.add(1, 2), 3));

Test(`#add() sums 5 arguments`, t => t.is(t.context.add(1, 1, 1, 1, 1), 5));

Test(`#introspect() returns arguments`, t => t.deepEqual(t.context.introspect(1, 2, 3), { '0': 1, '1': 2, '2': 3 }));
