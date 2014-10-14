function registerCallback(registrationId) {
  if (chrome.runtime.lastError) {
    alert("error");
    // When the registration fails, handle the error and retry the
    // registration later.
    return;
  }

  // Send the registration ID to your application server.
  sendRegistrationId(function(succeed) {
    alert("succeed");
    // Once the registration ID is received by your server,
    // set the flag such that register will not be invoked
    // next time when the app starts up.
    if (succeed)
      chrome.storage.local.set({registered: true});
  });
}

function sendRegistrationId(callback) {
    alert("send registration id");
  // Send the registration ID to your application server
  // in a secure way.
  console.log("send registrationId: " + registrationId);
  post("register", registrationId);
}

chrome.runtime.onStartup.addListener(function() {
  chrome.storage.local.get("registered", function(result) {
    // If already registered, bail out.
    if (result["registered"])
      return;

    var senderIds = 714176487735;
    chrome.gcm.register(senderIds, registerCallback);
  });
});