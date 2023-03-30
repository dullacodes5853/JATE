const btnins = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
  btnins.classList.toggle("hidden", false);
});

btnins.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  btnins.classList.toggle("hidden", true);
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
