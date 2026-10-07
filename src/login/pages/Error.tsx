import { ScoutButton } from "@scouterna/ui-react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { I18n } from "../i18n";
import type { KcContext } from "../KcContext";

export default function Error(
	props: PageProps<Extract<KcContext, { pageId: "error.ftl" }>, I18n>,
) {
	const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

	const { message, client, skipLink, url } = kcContext;

	const { msg } = i18n;

	return (
		<Template
			kcContext={kcContext}
			i18n={i18n}
			doUseDefaultCss={doUseDefaultCss}
			classes={classes}
			displayMessage={false}
			headerNode={msg("errorTitle")}
		>
			<p className="text-[14.5px] text-[#5C6678]">
				<span dangerouslySetInnerHTML={{ __html: kcSanitize(message.summary) }} />
			</p>

			<ScoutButton
				type="link"
				href={url.loginRestartFlowUrl}
				variant="primary"
				size="large"
				style={{ display: "block", width: "100%" }}
			>
				{msg("scoutid.error.restart")}
			</ScoutButton>

			{!skipLink && !!client?.baseUrl && (
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
