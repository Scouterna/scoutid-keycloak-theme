<div>
  <img align="right" height="40" src="./docs/scoutid.png" alt="ScoutID Logo">

  <h1>ScoutID Keycloak Theme</h1>
</div>

> [!TIP]
> This repo is part of a family:
> - [scoutid-keycloak](https://github.com/Scouterna/scoutid-keycloak)
> - [scoutid-keycloak-provider](https://github.com/Scouterna/scoutid-keycloak-provider)
> - [scoutid-keycloak-theme](https://github.com/Scouterna/scoutid-keycloak-theme) (this repo)
> - [scoutid-keycloak-infra](https://github.com/Scouterna/scoutid-keycloak-infra) (private)

This repository contains a custom theme for Keycloak used by ScoutID, the Guides
and Scouts of Sweden's membership system.


<p align="center">
    <i>🚀 <a href="https://keycloakify.dev">Keycloakify</a> v11 starter 🚀</i>
    <br/>
    <br/>
</p>

# Quick start

Make sure you have PNPM installed. If you don't, follow the instructions
[here](https://pnpm.io/installation).

```bash
git clone https://github.com/Scouterna/scoutid-keycloak-theme
cd scoutid-keycloak-theme
pnpm install
```

# Testing the theme locally
To test layout in interactive mode using storybook, run:
```bash
pnpm run storybook
```
Read more here: [Documentation](https://docs.keycloakify.dev/testing-your-theme)


If you want to try the full flow including scoutnet login, follow instructions in [scoutid-keycloak-provider](https://github.com/Scouterna/scoutid-keycloak-provider).

# Accessibility

Storybook includes [@storybook/addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y), which runs
axe-core against the currently rendered story. When testing a change, open the **Accessibility** tab in the
addon panel for each story you touched (including error/expanded states — axe only scans what's actually in
the DOM, so collapsed content or unselected stories won't be checked).

This is a manual check, not run in CI — remember to look at it yourself before opening a PR. Automated axe
checks don't catch everything either (e.g. missing `aria-expanded` on custom toggles, keyboard-only
navigation, or screen reader announcements), so for any new interactive component also do a quick manual
keyboard pass (Tab/Enter/Space) and, ideally, a screen reader spot check.

# How to customize the theme

[Documentation](https://docs.keycloakify.dev/customization-strategies)

# Building the theme

You need to have [Maven](https://maven.apache.org/) installed to build the theme (Maven >= 3.1.1, Java >= 7).  
The `mvn` command must be in the $PATH.

-   On macOS: `brew install maven`
-   On Debian/Ubuntu: `sudo apt-get install maven`
-   On Windows: `choco install openjdk` and `choco install maven` (Or download from [here](https://maven.apache.org/download.cgi))

```bash
pnpm run build-keycloak-theme
```

Note that by default Keycloakify generates multiple .jar files for different versions of Keycloak.  
You can customize this behavior, see documentation [here](https://docs.keycloakify.dev/features/compiler-options/keycloakversiontargets).

# GitHub Actions

The starter comes with a generic GitHub Actions workflow that builds the theme and publishes
the jars [as GitHub releases artifacts](https://github.com/keycloakify/keycloakify-starter/releases/tag/v10.0.0).  
To release a new version **just update the `package.json` version and push**.

To enable the workflow go to your fork of this repository on GitHub then navigate to:
`Settings` > `Actions` > `Workflow permissions`, select `Read and write permissions`.
