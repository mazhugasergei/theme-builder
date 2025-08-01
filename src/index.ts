import fs from "fs"
import path from "path"

const background = "#161616"
const foreground = "#cccccc"
const primary = "#66b49b"
const secondary = "#9d9c9d"
const strings = "#7b8aa7"
const comment = "#707070"

const theme = {
  name: "The Theme",

  colors: {
    "activityBar.background": background,
    "activityBar.foreground": foreground + "99",
    "activityBarBadge.background": "#ffffff",
    "activityBarBadge.foreground": "#000000",
    "badge.background": "#ffffff",
    "badge.foreground": background,
    "breadcrumb.activeSelectionForeground": "#FFFFFF",
    "breadcrumb.background": background,
    "breadcrumb.foreground": foreground + "99",
    "breadcrumbPicker.background": background,
    "button.background": "#3a3a3a",
    "button.foreground": "#b0b0b0",
    "button.hoverBackground": "#505050",
    "button.secondaryBackground": "#2e2e2e",
    "button.secondaryForeground": "#a0a0a0",
    "button.secondaryHoverBackground": "#444444",
    "debugExceptionWidget.background": "#505050",
    "debugExceptionWidget.border": background,
    "debugToolBar.background": "#1A1A1A",
    "diffEditor.insertedTextBackground": "#FFFFFF22",
    "diffEditor.removedTextBackground": "#FFFFFF22",
    "dropdown.background": "#1a1a1a",
    "dropdown.border": "#2A2A2A",
    "dropdown.foreground": "#FFFFFF",
    "editor.background": background,
    "editor.foreground": secondary,
    "editor.findMatchBackground": "#ffffff66",
    "editor.findMatchHighlightBackground": "#ffffff44",
    "editor.findRangeHighlightBackground": "#FFFFFF33",
    "editor.hoverHighlightBackground": "#292929",
    "editor.inactiveSelectionBackground": "#40404077",
    "editor.lineHighlightBackground": "#292929",
    "editor.lineHighlightBorder": "#292929",
    "editor.rangeHighlightBackground": "#40404052",
    "editor.selectionBackground": "#40404099",
    "editor.selectionHighlightBackground": "#404040CC",
    "editor.snippetFinalTabstopHighlightBorder": foreground,
    "editor.snippetTabstopHighlightBackground": foreground + "55",
    "editor.wordHighlightBackground": "#ffffff21",
    "editor.wordHighlightStrongBackground": "#ffffff2d",
    "editorBracketMatch.background": background + "00",
    "editorBracketMatch.border": "#FFFFFF55",
    "editorCodeLens.foreground": "#505050",
    "editorCursor.foreground": "#FFFFFF",
    "editorError.border": "#BF616A00",
    "editorError.foreground": "#BF616A",
    "editorGroup.border": "#ffffff0d",
    "editorGroup.dropBackground": "#2A2A2A99",
    "editorGroup.emptyBackground": background,
    "editorGroupHeader.noTabsBackground": background,
    "editorGroupHeader.tabsBackground": background,
    "editorGroupHeader.tabsBorder": "#FFFFFF0D",
    "editorGutter.addedBackground": "#A3BE8C",
    "editorGutter.background": background,
    "editorGutter.deletedBackground": "#BF616A",
    "editorGutter.modifiedBackground": "#EBCB8B",
    "editorHoverWidget.background": "#1A1A1A",
    "editorHoverWidget.border": "#2A2A2A",
    "editorIndentGuide.activeBackground": "#505050",
    "editorIndentGuide.background": "#404040B3",
    "editorInlayHint.background": "#00000000",
    "editorInlayHint.foreground": "#505050",
    "editorInlayHint.parameterBackground": "#00000000",
    "editorInlayHint.parameterForeground": "#505050",
    "editorInlayHint.typeBackground": "#00000000",
    "editorInlayHint.typeForeground": "#505050",
    "editorLineNumber.activeForeground": "#FFFFFF",
    "editorLineNumber.foreground": "#505050",
    "editorLink.activeForeground": "#FFFFFF",
    "editorMarkerNavigation.background": "#ffffff70",
    "editorMarkerNavigationError.background": "#BF616AC0",
    "editorMarkerNavigationWarning.background": foreground,
    "editorOverviewRuler.border": "#00000000",
    "editorRuler.foreground": "#494949",
    "editorSuggestWidget.background": background,
    "editorSuggestWidget.border": "#2A2A2A",
    "editorSuggestWidget.foreground": "#FFFFFF",
    "editorSuggestWidget.highlightForeground": "#FFFFFF",
    "editorSuggestWidget.selectedBackground": "#404040",
    "editorWarning.border": foreground + "00",
    "editorWarning.foreground": "#EBCB8B",
    "editorWhitespace.foreground": "#505050B3",
    "editorWidget.background": background,
    "editorWidget.resizeBorder": "#FFFFFF",
    errorForeground: "#bf616a",
    "extensionButton.prominentBackground": "#565656",
    "extensionButton.prominentForeground": "#FFFFFF",
    "extensionButton.prominentHoverBackground": "#767676",
    focusBorder: "#30373a",
    foreground: foreground + "dd",
    "gitDecoration.addedResourceForeground": "#A3BE8C",
    "gitDecoration.deletedResourceForeground": "#BF616A",
    "gitDecoration.ignoredResourceForeground": "#505050",
    "gitDecoration.modifiedResourceForeground": "#EBCB8B",
    "gitDecoration.untrackedResourceForeground": primary,
    "gitlens.trailingLineForegroundColor": foreground + "99",
    "input.background": "#2A2A2A55",
    "input.border": "#2A2A2A",
    "input.foreground": "#FFFFFF",
    "input.placeholderForeground": "#FFFFFF99",
    "inputOption.activeBorder": "#FFFFFF",
    "inputValidation.errorBackground": "#BF616A",
    "inputValidation.errorBorder": "#BF616A",
    "inputValidation.infoBackground": "#ffffff",
    "inputValidation.infoBorder": "#ffffff",
    "inputValidation.infoForeground": background,
    "inputValidation.warningBackground": "#EBCB8B",
    "inputValidation.warningBorder": "#EBCB8B",
    "list.activeSelectionBackground": "#ffffff1d",
    "list.activeSelectionForeground": "#FFFFFF",
    "list.inactiveSelectionBackground": "#ffffff10",
    "list.inactiveSelectionForeground": "#ffffffd7",
    "list.deemphasizedForeground": foreground,
    "list.dropBackground": "#FFFFFF99",
    "list.errorForeground": "#BF616A",
    "list.focusBackground": "#434C5E",
    "list.focusForeground": "#ECEFF4",
    "list.highlightForeground": "#ffffff",
    "list.hoverBackground": "#2A2A2A99",
    "list.hoverForeground": "#FFFFFF",
    "list.invalidItemForeground": foreground,
    "list.warningForeground": "#EBCB8B",
    "menu.background": background,
    "menu.foreground": foreground,
    "menu.separatorBackground": foreground,
    "menubar.selectionBackground": foreground + "33",
    "merge.border": "#2A2A2A00",
    "merge.currentContentBackground": "#ffffff4D",
    "merge.currentHeaderBackground": "#ffffff66",
    "merge.incomingContentBackground": "#A3BE8C4D",
    "merge.incomingHeaderBackground": "#A3BE8C66",
    "notificationLink.foreground": "#ffffff",
    "notifications.background": background,
    "notifications.foreground": "#FFFFFF",
    "panel.background": background,
    "panel.border": "#FFFFFF0D",
    "panelTitle.activeBorder": "#FFFFFF00",
    "panelTitle.activeForeground": "#FFFFFF",
    "panelTitle.inactiveForeground": foreground + "99",
    "peekView.border": "#505050",
    "peekViewEditor.background": background,
    "peekViewEditor.matchHighlightBackground": "#FFFFFF66",
    "peekViewEditorGutter.background": background,
    "peekViewResult.background": background,
    "peekViewResult.fileForeground": "#FFFFFF",
    "peekViewResult.lineForeground": "#FFFFFF66",
    "peekViewResult.matchHighlightBackground": "#FFFFFF66",
    "peekViewResult.selectionBackground": "#404040",
    "peekViewResult.selectionForeground": "#FFFFFF",
    "peekViewTitle.background": "#2A2A2A",
    "peekViewTitleDescription.foreground": "#FFFFFF",
    "peekViewTitleLabel.foreground": "#FFFFFF",
    "pickerGroup.border": "#2A2A2A00",
    "pickerGroup.foreground": "#FFFFFF",
    "progressBar.background": "#ffffff",
    "scrollbar.shadow": "#00000000",
    "scrollbarSlider.activeBackground": "#60606055",
    "scrollbarSlider.background": "#40404055",
    "scrollbarSlider.hoverBackground": "#40404055",
    "selection.background": "#FFFFFF33",
    "sideBar.background": background,
    "sideBar.border": "#FFFFFF0D",
    "sideBar.foreground": foreground + "99",
    "sideBarSectionHeader.background": background,
    "sideBarSectionHeader.foreground": "#505050",
    "sideBarTitle.foreground": foreground,
    "statusBar.foreground": foreground + "82",
    "statusBar.background": background,
    "statusBar.border": "#FFFFFF0D",
    "statusBar.debuggingBackground": "#434C5E",
    "statusBar.debuggingForeground": "#D8DEE9",
    "statusBar.noFolderBackground": background,
    "statusBar.noFolderForeground": "#FFFFFF",
    "statusBarItem.remoteBackground": "#232323",
    "statusBarItem.remoteForeground": "#FFFFFF",
    "statusBarItem.activeBackground": "#505050",
    "statusBarItem.hoverBackground": "#404040",
    "statusBarItem.prominentBackground": "#2A2A2A",
    "statusBarItem.prominentHoverBackground": "#404040",
    "tab.activeBackground": "#1a1a1a",
    "tab.activeBorder": "#1a1a1a",
    "tab.activeBorderTop": "#FFFFFF00",
    "tab.activeForeground": "#FFFFFF",
    "tab.border": "#FFFFFF0D",
    "tab.hoverBackground": "#FFFFFF00",
    "tab.inactiveBackground": background,
    "tab.inactiveForeground": "#505050",
    "tab.unfocusedActiveBorder": "#ffffff00",
    "tab.unfocusedActiveForeground": "#FFFFFF99",
    "tab.unfocusedHoverBackground": "#2A2A2AB3",
    "tab.unfocusedHoverBorder": "#ffffff00",
    "tab.unfocusedInactiveForeground": "#FFFFFF66",
    "terminal.ansiBlack": "#2A2A2A",
    "terminal.ansiBlue": "#81A1C1",
    "terminal.ansiBrightBlack": "#505050",
    "terminal.ansiBrightBlue": "#81A1C1",
    "terminal.ansiBrightCyan": "#ffffff",
    "terminal.ansiBrightGreen": "#A3BE8C",
    "terminal.ansiBrightMagenta": "#B48EAD",
    "terminal.ansiBrightRed": "#BF616A",
    "terminal.ansiBrightWhite": "#FFFFFF",
    "terminal.ansiBrightYellow": "#EBCB8B",
    "terminal.ansiCyan": "#ffffff",
    "terminal.ansiGreen": "#A3BE8C",
    "terminal.ansiMagenta": "#B48EAD",
    "terminal.ansiRed": "#BF616A",
    "terminal.ansiWhite": "#FFFFFF",
    "terminal.ansiYellow": "#EBCB8B",
    "terminal.background": background,
    "terminal.foreground": "#FFFFFFcc",
    "terminal.selectionBackground": "#636262dd",
    "terminalCursor.background": "#FFFFFF22",
    "terminalCursor.foreground": "#FFFFFF",
    "textLink.activeForeground": "#4c9df3",
    "textLink.foreground": "#4c9df3",
    "textPreformat.foreground": "#ffffff",
    "textSeparator.foreground": "#ffffff",
    "titleBar.activeBackground": background,
    "titleBar.activeForeground": foreground + "82",
    "titleBar.border": "#FFFFFF0D",
    "titleBar.inactiveBackground": background,
    "titleBar.inactiveForeground": foreground + "60",
    "tree.indentGuidesStroke": foreground + "55",
    "walkThrough.embeddedEditorBackground": background,
    "widget.shadow": "#00000066",
    "minimapGutter.addedBackground": "#15ac91",
    "minimapGutter.modifiedBackground": "#e5b95c",
    "minimapGutter.deletedBackground": "#f14c4c",
    "minimap.findMatchHighlight": "#15ac9170",
    "minimap.selectionHighlight": "#363636",
    "minimap.errorHighlight": "#f14c4c",
    "minimap.warningHighlight": "#ea7620",
    "minimap.background": "#181818",
  },

  tokenColors: [
    {
      scope: [
        "variable", // global scope for variables names
        "constant", // true, false, null, or user-defined consts
        "support.type.primitive", // number, string, boolean, etc.
        "support.function.special", // built-ins like `setTimeout`, `require`
        "punctuation.definition",
        "meta.brace",
      ],
      settings: { foreground: foreground },
    },
    {
      scope: [
        "string", // "hello" in `"hello"`
        "constant.numeric", // 123 in `const a = 123;`
        "entity.name.function", // foo in `function foo() {}`
        "entity.name.method", // bar in `obj.bar`
        "entity.name.tag", // div in `<div></div>`
        "support.class.component", // MyComponent in `<MyComponent />`
        "entity.name.class", // Foo in `class Foo {}`
        "entity.name.type", // MyType in `const a: MyType = ...`
      ],
      settings: { foreground: primary },
    },
    {
      scope: [
        "keyword.operator", // +, -, *, &&, ||, etc.

        "support.type.property-name", // object property name
        "meta.object-literal.key", // id in `{ id: value }`
        "meta.object-literal.key string", // "my-key" in `{ "my-key": value }`
        "meta.object-literal.key.ts string", // "my-key" in `{ "my-key": value }`
        "variable.other.property", // name in `obj.name`

        "variable.object.property", // id in `type Test = { id: number }`

        "variable.object.property", // id in `interface Test { id: string }`
        "meta.field.declaration string", // "my-key" in `interface Test { "my-key": string }`

        "storage.type.js", // var, let, const (JavaScript)
        "storage.type.ts", // interface, type, enum, etc. (TypeScript)
        "keyword", // if, else, return, function, etc.
        "keyword.declaration", // const, let, function (overlap with storage.type.*)
        "entity.other.attribute-name", // class in `<div class="foo">`
        "meta.type.parameters.ts string.quoted.double.ts", // "id" in Omit<MyType, "id">
      ],
      settings: { foreground: secondary },
    },
    {
      scope: ["constant.language"],
      settings: { foreground: strings },
    },
    {
      scope: [
        "comment", // => // comment or /* comment */
        "punctuation.definition.comment", // => /* */ in {/* */}
      ],
      settings: { foreground: comment, fontStyle: "italic" },
    },
  ],
}

const themePath = path.resolve(__dirname, "../themes")
fs.mkdirSync(themePath, { recursive: true })
fs.writeFileSync(path.join(themePath, "theme.json"), JSON.stringify(theme, null, 2), "utf8")
