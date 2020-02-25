const express = require("express");

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "Swanson" }
  ];

  res.json(customers);
});

app.get("/api/queries", (req, res) => {
  const queries = [
    { id: 1, supplierName: "ACME", email: "acme@test.com" },
    { id: 2, supplierName: "TAQA", email: "taqa@test.com" },
    { id: 3, supplierName: "STEEL INC", email: "steel@test.com" }
  ];

  res.json(queries);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
