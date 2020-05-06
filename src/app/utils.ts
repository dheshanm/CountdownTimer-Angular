let _BASE_URL = "https://countdowntimer-angular.web.app/";

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    // console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    // console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}

export function copyTextToClipboard(text): void {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    // console.log("Async: Copying to clipboard was successful!");
  }, function(err) {
    // console.error("Async: Could not copy text: ", err);
  });
}

// Reference : https://stackoverflow.com/questions/16149431/make-function-wait-until-element-exists
export function waitForElemTrigger(elemID: string, handlerFunction): void{

  // set up the mutation observer
  var observer = new MutationObserver(function (mutation, me) {
    // `mutations` is an array of mutations that occurred
    // `me` is the MutationObserver instance
    var element = document.getElementById(elemID);
    if (element) {
      handlerFunction(elemID);
      me.disconnect(); // stop observing
      return;
    }
  });

  // start observing
  observer.observe(document, {
    childList: true,
    subtree: true
  });
}

export function incrementCount0(afs, data): void {
  afs.incrementCount(data);
  // console.log("Incrementing");

  let id = data.id;
  // console.log(id)

  function handleError(id){
    let element = document.getElementById(id);
    if (element.classList.contains("active")){
      // console.log("Replace Sucessful");
    } else {
      // console.log(element.classList);
      setTimeout(() => { handleError(id); }, 100);
      element.classList.add("active");
    }
  }

  // Reference : https://stackoverflow.com/questions/16149431/make-function-wait-until-element-exists
  function handleElement(id): void {
    let element = document.getElementById(id);
    setTimeout(() => { handleError(id); }, 100);
    element.classList.add("active");
  }

  // set up the mutation observer
  var observer = new MutationObserver(function (mutation, me) {
    // `mutations` is an array of mutations that occurred
    // `me` is the MutationObserver instance
    var element = document.getElementById(id);
    if (element) {
      handleElement(id);
      me.disconnect(); // stop observing
      return;
    }
  });

  // start observing
  observer.observe(document, {
    childList: true,
    subtree: true
  });
}

export function incrementCount(afs, data): void {
  let id = "init-card";
  try {
    id = document.getElementsByClassName("active")[0].id;
  }
  catch {
    // continue regardless of error
  }
  afs.incrementCount(data);
  // console.log("Incrementing");

  waitForElemTrigger(id, (elemID) => {
    let element = document.getElementById(elemID);
    setTimeout(() => { element.classList.add("active"); }, 100);
  });
}

export function copyID(id:string): void {
  _BASE_URL = window.location.origin;
  copyTextToClipboard(_BASE_URL + "/events/" + id);
}
