function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "1047417717155-bemqqbbpfp43l59u90369o74b26vpdup.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "dark", size: "large" } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
};
