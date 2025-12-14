import type { ClassKey } from "keycloakify/login";
import DefaultPage from "keycloakify/login/DefaultPage";
import { lazy, Suspense, useMemo } from "react";
import { useI18n } from "./i18n";
import type { KcContext } from "./KcContext";
import Template from "./Template";

const UserProfileFormFields = lazy(
	() => import("keycloakify/login/UserProfileFormFields"),
);
import "./main-common.css";

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
	const { kcContext } = props;

	const { i18n } = useI18n({ kcContext });

	useCustomCss(kcContext);

	return (
		<Suspense>
			{(() => {
				switch (kcContext.pageId) {
					default:
						return (
							<DefaultPage
								kcContext={kcContext}
								i18n={i18n}
								classes={classes}
								Template={Template}
								doUseDefaultCss={true}
								UserProfileFormFields={UserProfileFormFields}
								doMakeUserConfirmPassword={doMakeUserConfirmPassword}
							/>
						);
				}
			})()}
		</Suspense>
	);
}

const classes = {} satisfies { [key in ClassKey]?: string };

function useCustomCss(kcContext: KcContext) {
	useMemo(() => {
		switch (kcContext.themeName) {
			case "scoutid":
				import("./main-scoutid-default.css");
				break;
			default:
				import("./main-scoutid-default.css");
				break;
		}
	}, [kcContext.themeName]);
}
