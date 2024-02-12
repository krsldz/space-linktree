/**
 * Creates a random link to save in DB for new user
 * @param {string} username - new user's name
 * @returns {string}
 */
const getRandomLink = (username) => {
  const name = username.split(' ');
  const randomNumber = Math.floor((Math.random() * 1000) + 1);
  const personalLink = name[0].toLowerCase() + randomNumber;
  return `http://localhost:3000/${personalLink}`;
};

module.exports = { getRandomLink };
