import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log(`API está ligada na porta ${port}.`);
  console.log(`CRTL + Clique em http://localhost:${port}.`);
});
