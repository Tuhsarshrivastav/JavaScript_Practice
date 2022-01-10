const datas = [
  {
    name: "tushar",
    profression: "full stack enginner",
  },
  {
    name: "tanu",
    profression: "backend enginner",
  },
];
function getDats() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data) => {
      output += `<li>${data.name} ${data.profression}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newData);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("kuch shi nhi h ");
      }
    }, 2000);
  });
}
// createData({
//   name: "sushar",
//   profression: "frontend enginner",
// })
//   .then(getDats)
//   .catch((err) => alert(err));

async function start() {
  await createData({
    name: "sushar",
    profression: "frontend enginner",
  });
  getDats();
}
start();
