# Purps colorscheme

This is a simple colorscheme I made from a wallpaper that can be found in the repo. Credit to Nikolai Lockertsen for making the wallpaper.

This project was made with [themer.dev](https://themer.dev/)
The unique project ID is [here](https://themer.dev/?activeColorSet=dark&colors.dark.shade7=%23dedede&colors.dark.shade0=%231f132a&colors.dark.accent0=%23f53054&colors.dark.accent1=%23eca1b4&colors.dark.accent3=%23b03454&colors.dark.accent2=%23b58ddb&colors.dark.accent4=%23312684&colors.dark.accent5=%233f37b3&colors.dark.accent6=%234c2ca4&colors.dark.accent7=%239c7ade&colors.dark.shade6=%23dedede&calculateIntermediaryShades.dark=true).

PR's welcome! I need more programs that themer doesn't cover.

# Installation instructions

### Alacritty

1. Paste the contents of `Alacritty/Themer.yml` into your Alacritty config file.
2. Select the desired theme by setting the `colors` config key to reference the scheme's anchor (i.e., `colors: *light` or `colors: *dark`).

### Atom Syntax

Use the `apm link` command to install the generated theme package to Atom:

    apm link 'Atom Syntax/purps-syntax'

Then open/reload Atom and select the desired theme in the list of available syntax themes.

### Atom UI

Use the `apm link` command to install the generated theme package to Atom:

    apm link 'Atom UI/purps-ui'

Then open/reload Atom and select the desired theme in the list of available UI themes.

### Brave

1. Launch Brave and go to `brave://extensions`.
2. Check the "Developer mode" checkbox at the top.
3. Click the "Load unpacked extension..." button and choose the desired theme directory (`Brave/Purps`).

(To reset or remove the theme, visit `brave://settings` and click "Reset to Default" in the "Appearance" section.)

### Chrome

1. Launch Chrome and go to `chrome://extensions`.
2. Check the "Developer mode" checkbox at the top.
3. Click the "Load unpacked extension..." button and choose the desired theme directory (`Chrome/Purps`).

(To reset or remove the theme, visit `chrome://settings` and click "Reset to Default" in the "Appearance" section.)

### CMD

Simply double-click the desired theme file to add the color keys to the registry:

* `CMD/purps.reg`

The scheme of CMD can then be configured with the `color` command. For example, use `color 07` to set the background and foreground to your color set's default.

### ConEmu

1. Open the ConEmu settings and navigate to Features > Colors. Take note of the location of `ConEmu.xml` for later.
2. Create a new color scheme by typing a name in the "Schemes" field and clicking Save.
3. Close ConEmu.
4. Open `ConEmu.xml` and locate the color scheme name you typed in step 2.
5. Replace the `<value>` elements `ColorTable00` through `ColorTable31` with the contents of your themer-generated XML (`ConEmu/themer-dark.xml`). Be sure to leave the others, like `ExtendColors`, etc. intact.
6. Open ConEmu and select your theme again in settings.

### CSS

Import the generated theme file into your stylesheet via `@import()`, or into your HTML markup via `<link>`.

`hex.css` provides the theme colors in hex format; `rgb.css` and `hsl.css` in RGB and HSL formats respectively along with individual channel values for further manipulation if desired.

Generated files:

* `CSS/hex.css`
* `CSS/rgb.css`
* `CSS/hsl.css`

### Doom-emacs
Add the `doom-purps-theme.el` to your custom theme load directory and in `~/.doom.d/config.el`, add `(require 'doom-themes)` and `(load-theme 'doom-purps t)`

### Emacs

Copy (or symlink) the generated theme file into `~/.emacs.d/`:

    cp 'Emacs/themer-dark-theme.el' ~/.emacs.d/

Then load the desired theme in `init.el`:

    (load-theme 'themer-dark t)

### Firefox Add-on

To use the generated extension package, the code will need to be packaged up and signed by Mozilla.

To package the code in preparation for submission, the `web-ext` tool can be used:

    npx web-ext build --source-dir 'Firefox Add-on/Purps'

Then the package can be submitted to Mozilla for review in the [Add-on Developer Hub](https://addons.mozilla.org/en-US/developers/addon/submit/distribution).

Learn more about Firefox themes from [extensionworkshop.com](https://extensionworkshop.com/documentation/themes/)

To theme Firefox without the need to create a developer account and go through the extension review process, see themer's integration with [Firefox Color](https://color.firefox.com).

### Firefox Color

The Firefox Color add-on allows for simple theming without the need for a developer account or package review process by Mozilla.

1. Install the [Firefox Color add-on](https://addons.mozilla.org/en-US/firefox/addon/firefox-color/).
2. Open 'Firefox Color/purps.url' directly with Firefox.
3. Click "Yep" when prompted to apply the custom theme.

For a more fully featured Firefox theme, see themer's Firefox theme add-on generator.

### Hyper

First, copy (or symlink) the outputted package directory to the Hyper local plugins directory:

    cp -R 'Hyper/purps-hyper-dark' ~/.hyper_plugins/local/

Then edit `~/.hyper.js` and add the package to the `localPlugins` array:

    ...
    localPlugins: [
      'purps-hyper-dark'
    ],
    ...

### iTerm

1. Launch iTerm
2. Press `command`-`I` to open the iTerm preferences
3. Choose Colors > Color Presets... > Import... and choose the generated theme file (`iTerm/purps-iterm-dark.itermcolors`)

### kitty

In the kitty configuration file (usually `~/.config/kitty/kitty.conf`), `include` the generated theme file:

    include kitty/purps.conf

### Konsole

Copy (or symlink) the generated files to `~/.local/share/konsole/`:

    cp 'Konsole/purps.colorscheme' ~/.local/share/konsole/

Then choose the desired theme in Konsole > Settings > Edit Current Profile > Appearance.

### Sketch

Load the generated theme file into Sketch through the [sketch-palettes](https://github.com/andrewfiorillo/sketch-palettes) plugin.

* `Sketch/purps-sketch-palettes-dark.sketchpalette`

## Sublime Text

1. Copy (or symlink) the generated theme files (`Sublime Text/themer-sublime-text-dark.tmTheme`) to the `User/` packages folder (you can see where this folder is located by choosing the "Browse Packages..." menu option in Sublime Text).
2. Choose the theme from the list of available color themes.

### Terminator

Copy the contents of `Terminator/themer-terminator-dark.txt` to the Terminator's config file.

The config file is usually located at `~/.config/terminator/config`.

You can paste it as a new profile, or copy the contents into your existing profile.

Finally, restart Terminator to see the new theme.

### Vim

Copy or symlink `Vim/ThemerVim.vim` to `~/.vim/colors/`.

Then set the colorscheme in `.vimrc`:

    " The background option must be set before running this command.
    colo ThemerVim

### Visual Studio

1. Select Tools > Import and Export Settings...
2. Choose the "Import selected environment settings" option
3. Choose whether or not to save a backup of current settings
4. Click "Browse..." and choose the generated theme file ('Visual Studio/purps.vssettings')
5. Click "Finish"

### VScode

Copy (or symlink) the generated package directory into the VS Code extensions directory:

    cp -R 'VS Code/theme-purps' ~/.vscode/extensions/

Then reload or restart VS Code. The generated theme package should be in the list of installed extensions, and "Themer Dark" will be available in the list of themes.

### Windows Terminal

1. Open the Windows Terminal settings (`Ctrl`-`,`)
2. Add the contents of 'Windows Terminal/themer-dark.json' to the `schemes` array in `profile.json`
3. Set the `colorScheme` property to the desired scheme name ("Themer Dark") in the profiles section of `profile.json`, e.g.:
```
    "profiles": {
      "defaults": {
        "colorScheme": "purps"
      }
    }
```
### Xcode

Copy (or symlink) the generated theme file to Xcode's themes directory:

    mkdir -p ~/Library/Developer/Xcode/UserData/FontAndColorThemes
    cp 'Xcode/Themer Dark.dvtcolortheme' ~/Library/Developer/Xcode/UserData/FontAndColorThemes/

Then restart Xcode. The theme will be available in Preferences > Fonts and Colors.# Purps-Colorscheme
