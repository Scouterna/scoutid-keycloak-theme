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
git clone https://github.com/keycloakify/keycloakify-starter
cd keycloakify-starter
pnpm install
```

# Testing the theme locally

[Documentation](https://docs.keycloakify.dev/testing-your-theme)

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

# Initializing the account theme

```bash
pnpm exec keycloakify initialize-account-theme
```

# Initializing the email theme

```bash
pnpm exec keycloakify initialize-email-theme
```

# GitHub Actions

The starter comes with a generic GitHub Actions workflow that builds the theme and publishes
the jars [as GitHub releases artifacts](https://github.com/keycloakify/keycloakify-starter/releases/tag/v10.0.0).  
To release a new version **just update the `package.json` version and push**.

To enable the workflow go to your fork of this repository on GitHub then navigate to:
`Settings` > `Actions` > `Workflow permissions`, select `Read and write permissions`.
