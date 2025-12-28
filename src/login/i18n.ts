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
			// Override default Keycloak field label
			usernameOrEmail: "Membership number, social security number, or primary email address",
			// ScoutID help text
			"scoutid.help.toggle.show": "Need help logging in?",
			"scoutid.help.toggle.hide": "Hide help",
			"scoutid.help.reset.password": "Reset password",
			"scoutid.help.email.conflict": "If multiple members use the same primary email address, login will fail. Use your membership number or personal number (12 digits) instead.",
			"scoutid.help.about": "ScoutID consolidates scout logins behind the same password as Scoutnet. To use ScoutID, you need an account in Scoutnet. Most scouts have this automatically, but if you are a member through Equmenia, contact scoutnet@scouterna.se for help getting a ScoutID.",
			"scoutid.help.learn.more": "Learn more about ScoutID here.",
		},
		sv: {
			// Override default Keycloak field label
			usernameOrEmail: "Medlemsnummer, personnummer eller primär epostadress",
			// ScoutID help text
			"scoutid.help.toggle.show": "Behöver du hjälp att logga in?",
			"scoutid.help.toggle.hide": "Dölj hjälp",
			"scoutid.help.reset.password": "Återställ lösenord",
			"scoutid.help.email.conflict": "Om flera medlemmar använder samma primära epostadress så kommer inloggningen att misslyckas, använd då istället medlemsnummer eller personnummer (12 siffror).",
			"scoutid.help.about": "ScoutID samlar scoutinloggningar bakom samma lösenord som till Scoutnet. För att använda ScoutID så behöver du därför ha ett konto i Scoutnet. De flesta scouter har det automatiskt, men om du är medlem genom Equmenia kontakta scoutnet@scouterna.se för att få hjälp med att skaffa ett ScoutID.",
			"scoutid.help.learn.more": "Läs mer om ScoutID här.",
		},
	})
	.build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };