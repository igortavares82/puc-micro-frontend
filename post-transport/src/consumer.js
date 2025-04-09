import * as postRobot from 'post-robot';

const consumer = (messageType, callback) => {
  const listener = postRobot.on(messageType, (event) => {
    callback(event.data);
    return { status: 'Received successfully' };
  });

  // Return the listener for potential cancellation
  return listener;
};

export default consumer;