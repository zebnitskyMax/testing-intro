const products = require('../../src/data/products');
const {
  filterByCategory
} = require('../../src/catalog');
console.log('All in process!!')
describe('filterByCategory', () => {
  test.todo("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test.todo("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test.todo("'electronics' возвращает товары с ID [1, 2]");
  test.todo("'books' возвращает товары с ID [3, 6]");
  test.todo("'home' возвращает товары с ID [4, 5]");
  test.todo("'clothes' возвращает пустой массив");
  test.todo("'toys' возвращает пустой массив");
  test.todo("'sports' возвращает пустой массив");
});

const getIds = (items) => items.map(item => item.id);

describe(() => {

  describe(() => {
    const allCategoriesTestCases = [{
        category: 'all',
        desc: "для строки 'all'"
      },
      {
        category: undefined,
        desc: "если категория не передана (undefined)"
      },
      {
        category: '',
        desc: "для пустой строки ('')"
      },
    ];


    allCategoriesTestCases.forEach(({
      category,
      desc
    }) => {
      test(`Возвращает все товары, ${desc}`, () => {
        const result = filterByCategory(products, category);
        expect(getIds(result)).toEqual([1, 2, 3, 4, 5, 6]);
      });
    });
  });

  describe(() => {
    const existingCategoriesTestCases = [{
        category: 'electronics',
        expectedIds: [1, 2]
      },
      {
        category: 'books',
        expectedIds: [3, 6]
      },
      {
        category: 'home',
        expectedIds: [4, 5]
      },
    ];

    existingCategoriesTestCases.forEach(({
      category,
      expectedIds
    }) => {
      test(`Для категории '${category}' возвращает ID [${expectedIds}]`, () => {
        const result = filterByCategory(products, category);
        expect(getIds(result)).toEqual(expectedIds);
      });
    });
  });

  describe(() => {
    const emptyCategories = ['clothes', 'toys', 'sports'];

    emptyCategories.forEach((category) => {
      test(`Для категории '${category}' возвращает пустой массив`, () => {
        const result = filterByCategory(products, category);
        expect(result).toEqual([]);
        expect(result).toHaveLength(0);
      });
    });
  });

});