let visitorsNo = document.getElementById("count");

const endpoint =
  "https://t25llbvtaf.execute-api.us-east-1.amazonaws.com/default/LambdaFunction001";

const getEndpoint = async () => {
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
      visitorsNo.innerHTML = `${jsonResponse}`;
      return;
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
};

getEndpoint();
