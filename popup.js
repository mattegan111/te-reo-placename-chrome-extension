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

    let AucklandCount = document.body.innerHTML.match(/Auckland/g)

    AucklandCount.forEach(() => {
      document.body.innerHTML = document.body.innerHTML.replace(
        'Auckland',
        'T&amacr;maki Makaurau'
      )
    })

    AucklandCount.forEach(() => {
      document.body.innerHTML = document.body.innerHTML.replace(
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
