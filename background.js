chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: 'Test context menu',
    id: 'testcontextmenu1',
    contexts: ['page', 'selection'],
  });

  chrome.contextMenus.onClicked.addListener((event) => {
    chrome.tabs.create({
      url: `https://www.imdb.com/find/?q=${event.selectionText}&ref_=nv_sr_sm`,
    });
  });

  chrome.contextMenus.create({
    title: 'Test context menu 1',
    id: 'testcontextmenu2',
    parentId: 'testcontextmenu1',
    contexts: ['page', 'selection'],
  });

  chrome.contextMenus.create({
    title: 'Test context menu 2',
    id: 'testcontextmenu3',
    parentId: 'testcontextmenu1',
    contexts: ['page', 'selection'],
  });

  chrome.contextMenus.create({
    title: 'Test context menu 3',
    id: 'testcontextmenu4',
    parentId: 'testcontextmenu1',
    contexts: ['page', 'selection'],
  });
});

console.log('Background script running');
