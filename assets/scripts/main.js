(function () {
  function renderApp() {
    var appRoot = document.getElementById("resume-app");
    var resumeData = window.ResumeApp && window.ResumeApp.data;
    var templates = window.ResumeApp && window.ResumeApp.templates;

    if (!appRoot || !resumeData || !templates || typeof templates.renderResume !== "function") {
      return;
    }

    appRoot.innerHTML = templates.renderResume(resumeData);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderApp);
    return;
  }

  renderApp();
})();