document.getElementById("startRecordingBtn").addEventListener("click", function () {
  chrome.runtime.sendMessage({ type: "start-recording-popup" });
  });
