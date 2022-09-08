// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor")

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color
})

changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setCityNamesToTeReo,
  })
})

function setCityNamesToTeReo() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color
  })

  let pTags = document.querySelectorAll("p,h1,h2,h3,h4,h5")

  pTags.forEach((element) => {
    element.innerHTML = element.innerHTML.replace(
      "Auckland",
      "T&amacr;maki Makaurau (Auckland)"
    )
  })

  pTags.forEach((element) => {
    element.innerHTML = element.innerHTML.replace(
      "Christchurch",
      "`Otautahi (Christchurch)"
    )
  })

  pTags.forEach((element) => {
    element.innerHTML = element.innerHTML.replace(
      "Wellington",
      "`Te Whanganui-a-Tara (Wellington)"
    )
  })

  pTags.forEach((element) => {
    element.innerHTML = element.innerHTML.replace(
      "Christchurch",
      "`Otautahi (Christchurch)"
    )
  })

  pTags.forEach((element) => {
    element.innerHTML = element.innerHTML.replace(
      "Christchurch",
      "`Otautahi (Christchurch)"
    )
  })

  pTags.forEach((element) => {
    element.innerHTML = element.innerHTML.replace(
      "Christchurch",
      "`Otautahi (Christchurch)"
    )
  })

  pTags.forEach((element) => {
    element.innerHTML = element.innerHTML.replace(
      "Christchurch",
      "`Otautahi (Christchurch)"
    )
  })
}
