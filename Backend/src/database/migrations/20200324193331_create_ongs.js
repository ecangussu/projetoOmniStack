//responsável pela criação da tabela (o que acontece quando se executa essa migration)
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

//quando é necessário desfazer o que foi feito
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');  
};
