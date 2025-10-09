/*
This stub page is not included by the manifest
*/

// https://developer.chrome.com/docs/extensions/mv3/messaging/#external-webpage

document.onreadystatechange = () => {
  // console.log(document.readyState, 'b');
  if (document.readyState === "complete") {
    console.log(document.readyState);
    const epv = document.querySelector<HTMLDivElement>(".extension-promo-vp");
    if (epv) {
      epv.classList.add("installed");
      console.log(epv);
    } else {
      console.log("no epv");
    }
  }
};
