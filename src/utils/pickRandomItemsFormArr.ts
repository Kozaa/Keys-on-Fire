const pickRandomItemsFormArr = (arr: any[], amount: number) => {
  let helperArr: any[] = [];

  for (let i = 0; i < amount; i++) {
    let randomIdx = Math.floor(Math.random() * (arr.length - 1));
    let item = arr[randomIdx];

    if (item.includes(" ")) {
      item = item.split(" ")[0];
    }

    helperArr.push(item);
  }
  return helperArr;
};

export default pickRandomItemsFormArr;
