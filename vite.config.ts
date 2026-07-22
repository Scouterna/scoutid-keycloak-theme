import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		keycloakify({
			themeName: ["scoutid"],
			accountThemeImplementation: "none",
			groupId: "se.scouterna.keycloak",
			artifactId: "scoutid-keycloak-theme",
			// Expose these custom keys to Keycloak's realm-level Internationalization
			// overrides. Without this, only the theme's own value (from i18n.ts /
			// messages_*.properties) would ever be used - admins couldn't override
			// them per realm. The theme value still acts as the fallback when no
			// realm override is set.
			// @see: https://docs.keycloakify.dev/configuration-options/kccontextexclusionsftl
			kcContextExclusionsFtl: [
				'<@addToXKeycloakifyMessagesIfMessageKey str="scoutid.login.subheadline" />',
				'<@addToXKeycloakifyMessagesIfMessageKey str="scoutid.help.title" />',
				'<@addToXKeycloakifyMessagesIfMessageKey str="scoutid.help.email.heading" />',
				'<@addToXKeycloakifyMessagesIfMessageKey str="scoutid.help.email.body" />',
				'<@addToXKeycloakifyMessagesIfMessageKey str="scoutid.help.scoutid.heading" />',
				'<@addToXKeycloakifyMessagesIfMessageKey str="scoutid.help.scoutid.body" />',
				'<@addToXKeycloakifyMessagesIfMessageKey str="scoutid.help.scoutid.after" />',
			].join("\n"),
		}),
		tailwindcss(),
	],
});
