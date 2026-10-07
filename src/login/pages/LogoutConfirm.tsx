import { ScoutButton } from "@scouterna/ui-react";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { I18n } from "../i18n";
import type { KcContext } from "../KcContext";

export default function LogoutConfirm(
	props: PageProps<Extract<KcContext, { pageId: "logout-confirm.ftl" }>, I18n>,
) {
	const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

	const { url, client, logoutConfirm } = kcContext;

	const { msg } = i18n;

	return (
		<Template
			kcContext={kcContext}
			i18n={i18n}
			doUseDefaultCss={doUseDefaultCss}
			classes={classes}
			headerNode={msg("logoutConfirmTitle")}
		>
			<p className="text-[14.5px] text-[#5C6678]">{msg("logoutConfirmHeader")}</p>

			<form action={url.logoutConfirmAction} method="POST">
				<input type="hidden" name="session_code" value={logoutConfirm.code} />
				<input type="hidden" name="confirmLogout" value="on" />
				<ScoutButton
					type="submit"
					variant="primary"
					size="large"
					style={{ display: "block", width: "100%" }}
				>
					{msg("doLogout")}
				</ScoutButton>
			</form>

			{!logoutConfirm.skipLink && !!client?.baseUrl && (
				<a
					href={client.baseUrl}
					className="text-blue-700 text-[13.5px] no-underline hover:underline text-center block"
				>
					{msg("backToApplication")}
				</a>
			)}
		</Template>
	);
}
