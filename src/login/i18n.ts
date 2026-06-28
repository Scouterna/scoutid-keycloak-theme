/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/**
 * IMPORTANT: Translation duplication required for Keycloakify v11
 *
 * This file defines translations for Storybook development environment.
 * The same translations MUST also be maintained in messages_*.properties files
 * for the actual Keycloak deployment.
 *
 * When adding/modifying translations:
 * 1. Update this file for Storybook to work
 * 2. Update messages_en.properties and messages_sv.properties for deployment
 *
 * @see: https://docs.keycloakify.dev/features/i18n
 */
const { useI18n, ofTypeI18n } = i18nBuilder
	.withThemeName<ThemeName>()
	.withCustomTranslations({
		en: {
			// Override default Keycloak field labels
			loginAccountTitle: "Sign in",
			usernameOrEmail: "Username",
			username: "Username",
			// Additional UI texts
			usernameHelpText:
				"Membership number, personal identity number, or primary email address",
			// Login page
			"scoutid.login.subheadline": "Sign in with your ScoutID to continue.",
			// Help section
			"scoutid.help.title": "Need help signing in?",
			"scoutid.help.email.heading": "Having trouble signing in with email?",
			"scoutid.help.email.body":
				"If multiple members share the same email address in Scoutnet — for example if both a guardian and a child are members — signing in with email may fail. Use your membership number or personal identity number instead.",
			"scoutid.help.scoutid.heading": "Do I have a ScoutID?",
			"scoutid.help.scoutid.body":
				"To sign in you need an account in the member system Scoutnet. Most scouts have one automatically, but if you are a member through Equmenia contact",
			"scoutid.help.scoutid.after": "for help.",
		},
		sv: {
			// Override default Keycloak field labels
			loginAccountTitle: "Logga in",
			usernameOrEmail: "Användarnamn",
			username: "Användarnamn",
			// Additional UI texts
			usernameHelpText: "Medlemsnummer, personnummer eller primär epostadress",
			// Login page
			"scoutid.login.subheadline":
				"Logga in med ditt ScoutID för att fortsätta.",
			// Help section
			"scoutid.help.title": "Behöver du hjälp att logga in?",
			"scoutid.help.email.heading": "Problem med att logga in med e-post?",
			"scoutid.help.email.body":
				"Om flera medlemmar delar samma e-postadress i Scoutnet, till exempel om både vårdnadshavare och barn är medlemmar, kan inloggning med e-post misslyckas. Använd då istället medlemsnummer eller personnummer.",
			"scoutid.help.scoutid.heading": "Har jag ett ScoutID?",
			"scoutid.help.scoutid.body":
				"För att logga in behöver du en inloggning i medlemssystemet Scoutnet. De flesta scouter har det automatiskt, men om du är medlem genom Equmenia kontakta",
			"scoutid.help.scoutid.after": "för att få hjälp.",
		},
	})
	.build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
