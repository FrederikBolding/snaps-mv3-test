const sandbox = document.getElementById("sandbox");

sandbox.onload = () => {
  console.log("Posting...");
  sandbox.contentWindow.postMessage({ request: 40 }, "*");
};

window.addEventListener("message", (e) => {
  const data = e.data;
  if (data.result) {
    console.log("Sandbox replied with:", data.result);
  }
});
