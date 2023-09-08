const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", changeTabFocus);

// for each tabs, run a function
// function in this case is to add an eventListener
tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

let tabFocus = 0;
function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  // change the tabindex of the current tab to -1
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
  }
  //if the right key is pushed, move to the next tab on the right
  if (e.keyCode === keydownRight) {
    tabFocus++;
    // if tabFocus becomes larger than 4, then set tabFocus back to 0
    if (tabFocus >= tabs.length) {
      tabFocus = 0;
    }
  }
  //if the left key is pushed, move to the next tab on the left
  if (e.keyCode === keydownLeft) {
    tabFocus--;
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
  }

  //Can be focused on, but doesn't set the focus immediately
  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
}

function changeTabPanel(e) {
  const targetTab = e.target;
  //   targetTab is returning the button
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-image");

  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  mainContainer
    .querySelectorAll('[role="tabpanel"]')
    .forEach((panel) => panel.setAttribute("hidden", true));

  mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");

  mainContainer
    .querySelectorAll("picture")
    .forEach((picture) => picture.setAttribute("hidden", true));

  mainContainer.querySelector([`#${targetImage}`]).removeAttribute("hidden");

  //   console.log(targetPanel);
}
