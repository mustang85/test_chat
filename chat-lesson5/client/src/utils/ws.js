// при импорте этой функции куда-либо, она сразу будует вызвана
export default ((wsUrl) => {
  let ws;

  ws = new WebSocket(wsUrl);

  ws.onopen = () => {
    console.log('Ws open!');
  }

  ws.onmessage = (msg) => {
    console.log('request', msg.data);
    const messageObj = JSON.parse(msg.data);
    switch(messageObj.type) {
      case 'connected_new_user':
        break;
    }
  }

  // при вводе валидного username
  let countReconnect = 0;
  const emit = (message) => {
    if ( countReconnect > 5) return;

    if ( ws.readyState === ws.CONNECTING ) {
      setTimeout(() => {
        emit(message);
        countReconnect++;
      }, 500);
      return;
    }

    ws.send(message);
    countReconnect = 0;
  }

  return { emit};
  // как только создастся подключение, выводим в консоль ws open
})('ws://localhost:3000')
