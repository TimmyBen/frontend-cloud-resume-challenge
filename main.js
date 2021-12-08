var visitorsNo = document.getElementById("count");

const endpoint =
  "https://t25llbvtaf.execute-api.us-east-1.amazonaws.com/default/LambdaFunction001";

function getData() {
  var response = fetch(endpoint);
  response.then(doOnFetch);
}

function doOnFetch(someData) {
  var response = someData.json();
  response.then(doSomethingWithData);
}

function doSomethingWithData(data) {
  console.log(data);
  visitorsNo.innerHTML = `${data}`;
}

getData();
