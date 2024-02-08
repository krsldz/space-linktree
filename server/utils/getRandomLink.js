const getRandomLink = (username) => {
  const name = username.split(' ');
  const randomNumber = Math.floor((Math.random() * 1000) + 1);
  return name[0].toLowerCase() + randomNumber;
};

module.exports = { getRandomLink };
