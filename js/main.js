window.onload = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => {
        console.log("Server Worker registered successfully", reg);
      })
      .catch((err) => {
        console.warn("Error while registering Service Worker", err);
      });
  }
};
