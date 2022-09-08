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

    const elementsContainingAuckland = document.evaluate(
      "*[contains(., 'Auckland')]",
      document,
      null,
      XPathResult.ANY_TYPE,
      null
    )
    const thisElement = elementsContainingAuckland.iterateNext()

    let AucklandCount = Array(3).fill(0)

    AucklandCount.forEach(() => {
      thisElement.innerHTML = thisElement.innerHTML.replace(
        "Auckland",
        "T&amacr;maki Makaurau"
      )
    })

    AucklandCount.forEach(() => {
      thisElement.innerHTML = thisElement.innerHTML.replace(
        "T&amacr;maki Makaurau",
        "T&amacr;maki Makaurau (Auckland)"
      )
    })

    // document.body.innerHTML = document.body.innerHTML.replace(
    //   'Christchurch',
    //   'Ōtautahi'
    // )
  })
}
