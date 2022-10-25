// serviceworker registration 

// check if serviceworker kan bruges i browser

if ("serviceWorker" in navigator) {

  navigator.serviceWorker.register("sw.js")
    .then(registration => {
      console.log("sw registered");


    }).catch(error => {
      console.log("sw reg fail");
      console.log(error);

    })

} else {

  //browser understytter ikke service worker
  alert("serviceworker not supported");
  // do non pwa stuff here

} 
