// Initialize button with user's preferred color
let changeColor = document.getElementById('changeColor')

chrome.storage.sync.get('color', ({ color }) => {
  changeColor.style.backgroundColor = color
})

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setCityNamesToTeReo,
  })
})

// The body of this function will be executed as a content script inside the
// current page
function setCityNamesToTeReo() {
  chrome.storage.sync.get('color', ({ color }) => {
    document.body.style.backgroundColor = color

    const elementsContainingAuckland = document.evaluate(
      "*[contains(., 'Auckland')]",
      document,
      null,
      XPathResult.ANY_TYPE,
      null
    )
    const thisElement = elementsContainingAuckland.iterateNext()

    let AucklandCount = Array(2).fill(0)

    AucklandCount.forEach(() => {
      thisElement.innerHTML = thisElement.innerHTML.replace(
        'Auckland',
        'T&amacr;maki Makaurau'
      )
    })

    AucklandCount.forEach(() => {
      thisElement.innerHTML = thisElement.innerHTML.replace(
        'T&amacr;maki Makaurau',
        'T&amacr;maki Makaurau (Auckland)'
      )
    })

    // document.body.innerHTML = document.body.innerHTML.replace(
    //   'Christchurch',
    //   'Ōtautahi'
    // )
  })
}
