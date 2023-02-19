// const insertCar =
// `
//     INSERT INTO carrinho(id_carrinho, id_usuario, pedido_realizado)
//     VALUES (gen_randon_uuid(), $1, $2) RETURNING id_carrinho;
// `;

// const listCar =
// `
//     SELECT carrinho.id_carrinho, id_usuario, produto.nome_produto
//     FROM carrinho
//     INNER JOIN produto_carrinho ON carrinho.id_carrinho=produto_carrinho.id_carrinho
//     INNER JOIN produto ON produto.codigo_barras=produto_carrinho.codigo_barras
//     ORDER BY nome_produto;
// `;

// const deleteCar =
// `
//     DELETE FROM produto_carrinho WHERE id_carrinho = $1;
//     DELETE FROM carrinho WHERE id_carrinho = $1;
// `;

// const sumQtdProducts =
// `
//     SELECT $1, COUNT($2) AS total_produtos
//     FROM produto_carrinho
//     GROUP BY id_carrinho
// `;

// const sumValues =
// `
//     SELECT produto_carrinho.id_carrinho, SUM(preco::numeric) AS total_preco
//     FROM produto_carrinho
//     INNER JOIN produto ON produto_carrinho.codigo_barras=produto.codigo_barras
//     GROUP BY produto_carrinho.id_carrinho
// `;

// const addProductCar =
// `
//     INSERT INTO produto_carrinho(codigo_barras, id_carrinho)
//     VALUES ($1, $2);
// `;


// module.exports = { listCar, insertCar, deleteCar, sumQtdProducts, sumValues, addProductCar };