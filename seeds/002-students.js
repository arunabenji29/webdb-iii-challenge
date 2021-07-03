
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Nick',cohort_id:1},
        {name: 'Mark',cohort_id:2},
        {name: 'Kate',cohort_id:3},
        {name:'Harry',cohort_id:4},
        {name:'Will',cohort_id:5}
      ]);
    });
};
