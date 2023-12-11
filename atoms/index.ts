import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import { shoppingCartItemProps, BookProps, PAGE_SIZE } from "const";

export const homePageBookSumState = atom({
  key: "homePageBookSumState",
  default: 0,
});

export const shoppingCartState = atom<shoppingCartItemProps[]>({
  key: "shoppingCartState",
  default: [],
});

export const bookTypeListState = atom<string[]>({
  key: "bookTypeListState",
  default: [
    "LSP",
    "Completion",
    "AI",
    "Markdown and LaTeX",
    "Language",
    "Syntax",
    "Snippet",
    "Register",
    "Marks",
    "Search",
    "File Explorer",
    "Project",
    "Colorscheme",
    "Tree-sitter Supported Colorscheme",
    "Lua Colorscheme",
    "Colorscheme Creation",
    "Colorscheme Switchers",
    "Bars and Lines",
    "Statusline",
    "Cursorline",
    "Icon",
    "Media",
    "Note Taking",
    "Utility",
    "Terminal Integration",
    "Debugging",
    "Quickfix",
    "Deployment",
    "Test",
    "Code Runner",
    "Fennel",
    "Dependency Management",
    "Motion",
    "Keybinding",
    "Mouse",
    "Scrolling",
    "Scrollbar",
    "Editing Support",
    "Comment",
    "Formatting",
    "Indent",
    "Command Line",
    "Session",
    "Split and Window",
  ],
});

export const homePageQueryState = atom({
  key: "homePageQueryState",
  default: { page: 1, type: "", sort: "", size: PAGE_SIZE },
});

export const bookDetailsIdState = atom({
  key: "bookDetailsIdState",
  default: "",
});

export const currentUserIdState = atom({
  key: "currentUserIdState",
  default: "1",
});
