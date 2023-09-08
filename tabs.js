const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", changeTabFocus);

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
