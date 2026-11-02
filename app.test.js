const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("./index");

test("Homepage displays Hello World", async () => {
  const server = app.listen(0);

  try {
    const port = server.address().port;
    const response = await fetch(`http://localhost:${port}`);
    const text = await response.text();

    assert.equal(text, "Hello World!");
  } finally {
    server.close();
  }
});