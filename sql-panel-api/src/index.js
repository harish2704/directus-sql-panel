"use strict";

function register(router, { services, database, getSchema }) {
  router.get("/:id", async function (req, res) {
    const panelOpts = await database.raw(
      `SELECT "options", "id" FROM "directus_panels" WHERE "id" = ? `, [ req.params.id]
    );
    const data = await database.raw(panelOpts.rows[0].options.sql);
    res.json({ 
      items: data.rows,
      headers: data.fields.map( v => { return { text: v.name, value: v.name}})
    });
  });
}

module.exports = register;
