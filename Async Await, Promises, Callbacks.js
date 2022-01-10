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

function createData(newData, callback) {
  setTimeout(() => {
    datas.push(newData);
    callback();
  }, 2000);
}
createData(
  {
    name: "sushar",
    profression: "frontend enginner",
  },
  getDats
);
