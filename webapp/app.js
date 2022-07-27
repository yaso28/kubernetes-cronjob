const express = require('express');
const { setTimeout } = require('timers/promises');

const app = express();

const log = (id, message) => {
  console.log(`${id} ${new Date().toLocaleTimeString()} ${message}`);
};

app.get('/wait/:seconds', async (req, res) => {
  const id = Math.random();

  try {
    const seconds = parseInt(req.params.seconds);
    log(id, 'begin');

    for (let i = 1; i <= seconds; i++) {
      await setTimeout(1000);
      log(id, `...${i}`);
    }

    log(id, 'end');

    res.json({
      id,
      seconds
    })
  } catch (err) {
    log(id, err);
    res.status(500).json({
      error: err.message
    });
  }
});

app.use((req, res, next) => {
  res.status(404).json({
    error: 'Not Found.'
  });
});

module.exports = app;
