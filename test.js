addEventListener('message', ({ data }) => {
  const response = `worker response to ${JSON.stringify(document)}`;
  console.log('##', window)
  postMessage(response);
});
