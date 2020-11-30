

const getRandomGameID = (): string => {
  const characters = "ABCDEFGHIJKLMNOUPRSTQWXYZ0123456789";
  let helperStr = "";

  for (let i = 0; i < 5; i++) {
    let randomIdx = Math.floor(Math.random() * (characters.length - 1));

    if (i === 0 && randomIdx > 24) {
      helperStr += characters[0];
    } else {
      helperStr += characters[randomIdx];
    }
  }
  return helperStr;
};

export default getRandomGameID;
