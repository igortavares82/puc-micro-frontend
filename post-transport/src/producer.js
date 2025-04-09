import * as postRobot from 'post-robot';

const producer = async (targetWindow, messageType, messageData) => {
  return postRobot
    .send(targetWindow, messageType, messageData)
    .then((response) =>
      console.log('Message sent successfully:', response.data)
    )
    .catch((error) => console.error('Error sending message:', error));
};

export default producer;