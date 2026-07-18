import {
	ScoutButton,
	ScoutCallout,
	ScoutCheckbox,
	ScoutField,
	ScoutInput,
} from "@scouterna/ui-react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { useScript } from "keycloakify/login/pages/Login.useScript";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { useState } from "react";
import type { I18n } from "../i18n";
import type { KcContext } from "../KcContext";

export default function Login(
	props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>,
) {
	const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

	const {
		social,
		realm,
		url,
		usernameHidden,
		login,
		auth,
		messagesPerField,
		enableWebAuthnConditionalUI,
		authenticators,
	} = kcContext;

	console.log(login);

	const { msg, msgStr } = i18n;

	const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);
	const webAuthnButtonId = "authenticateWebAuthnButton";

	useScript({
		webAuthnButtonId,
		kcContext,
		i18n,
	});

	const hasError = messagesPerField.existsError("username", "password");
	const [helpOpen, setHelpOpen] = useState(hasError);

	return (
		<Template
			kcContext={kcContext}
			i18n={i18n}
			doUseDefaultCss={doUseDefaultCss}
			classes={classes}
			displayMessage={!hasError}
			headerNode={
				<>
					<h1 className="text-[27px] font-bold tracking-[-0.01em] leading-[1.1] text-[#28354C] m-0">
						{msg("loginAccountTitle")}
					</h1>
					<p className="text-[15px] text-[#5C6678] mb-0">
						{msg("scoutid.login.subheadline")}
					</p>
				</>
			}
			displayInfo={false}
			socialProvidersNode={
				realm.password &&
				social?.providers !== undefined &&
				social.providers.length !== 0 ? (
					<div id="kc-social-providers">
						<hr className="border-0 border-t border-[#E7EAF0]" />
						<h2 className="text-[14.5px] font-bold text-[#283040] mt-4 mb-3">
							{msg("identity-provider-login-label")}
						</h2>
						<ul className="list-none p-0 m-0 flex flex-col gap-2">
							{social.providers.map((p) => (
								<li key={p.alias}>
									<ScoutButton
										id={`social-${p.alias}`}
										type="link"
										href={p.loginUrl}
										variant="outlined"
										style={{ display: "block", width: "100%" }}
									>
										{p.iconClasses && (
											<i className={p.iconClasses} aria-hidden="true" />
										)}
										<span
											dangerouslySetInnerHTML={{
												__html: kcSanitize(p.displayName),
											}}
										/>
									</ScoutButton>
								</li>
							))}
						</ul>
					</div>
				) : null
			}
		>
			{realm.password && (
				<form
					id="kc-form-login"
					className="flex flex-col gap-4.5"
					onSubmit={() => {
						setIsLoginButtonDisabled(true);
						return true;
					}}
					action={url.loginAction}
					method="post"
				>
					{hasError && (
						<ScoutCallout variant="error">
							<span
								aria-live="polite"
								dangerouslySetInnerHTML={{
									__html: kcSanitize(
										messagesPerField.getFirstError("username", "password"),
									),
								}}
							/>
						</ScoutCallout>
					)}

					{!usernameHidden && (
						<ScoutField
							label={
								!realm.loginWithEmailAllowed
									? msgStr("username")
									: !realm.registrationEmailAsUsername
										? msgStr("usernameOrEmail")
										: msgStr("email")
							}
							helpText={msgStr("usernameHelpText")}
						>
							<ScoutInput
								id="username"
								name="username"
								defaultValue={login.username ?? ""}
								type="text"
								autoFocus
								autocomplete="username"
							/>
						</ScoutField>
					)}

					<ScoutField label={msgStr("password")}>
						<ScoutInput
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
						/>
					</ScoutField>

					<div id="kc-form-options" className="flex items-center">
						{realm.rememberMe && !usernameHidden && (
							<ScoutCheckbox
								name="rememberMe"
								label={msgStr("rememberMe")}
								checked={!!login.rememberMe}
							/>
						)}

						<a
							href="https://www.scoutnet.se/request_password"
							className="ml-auto text-blue-700 text-[14.5px] font-semibold no-underline hover:underline whitespace-nowrap"
						>
							{msg("doForgotPassword")}
						</a>
					</div>

					<input
						type="hidden"
						id="id-hidden-input"
						name="credentialId"
						value={auth.selectedCredential}
					/>

					<ScoutButton
						type="submit"
						variant="primary"
						size="large"
						disabled={isLoginButtonDisabled}
						style={{ display: "block", width: "100%" }}
					>
						{msgStr("doLogIn")}
					</ScoutButton>

					<hr className="border-0 border-t border-[#E7EAF0]" />
					<div className="flex flex-col gap-2">
						<button
							type="button"
							onClick={() => setHelpOpen((o) => !o)}
							aria-expanded={helpOpen}
							aria-controls="scoutid-help-panel"
							className="flex items-center justify-between text-left text-[14.5px] font-bold text-[#283040] bg-transparent border-0 p-0 cursor-pointer w-full"
						>
							{msg("scoutid.help.title")}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden="true"
								className={`shrink-0 transition-transform duration-200 ${helpOpen ? "rotate-180" : ""}`}
							>
								<path d="M6 9l6 6 6-6" />
							</svg>
						</button>
						{helpOpen && (
							<div id="scoutid-help-panel" className="flex flex-col gap-4">
								<div className="flex flex-col gap-1">
									<p className="text-[13.5px] font-semibold text-[#283040] m-0">
										{msg("scoutid.help.email.heading")}
									</p>
									<p className="text-[13.5px] leading-normal text-[#5C6678] m-0">
										{msg("scoutid.help.email.body")}
									</p>
								</div>
								<div className="flex flex-col gap-1">
									<p className="text-[13.5px] font-semibold text-[#283040] m-0">
										{msg("scoutid.help.scoutid.heading")}
									</p>
									<p className="text-[13.5px] leading-normal text-[#5C6678] m-0">
										{msg("scoutid.help.scoutid.body")}{" "}
										<a
											href="mailto:scoutnet@scouterna.se"
											className="text-blue-700 font-semibold no-underline hover:underline"
										>
											scoutnet@scouterna.se
										</a>{" "}
										{msg("scoutid.help.scoutid.after")}
									</p>
								</div>
							</div>
						)}
					</div>
				</form>
			)}

			{enableWebAuthnConditionalUI && (
				<>
					<form id="webauth" action={url.loginAction} method="post">
						<input type="hidden" id="clientDataJSON" name="clientDataJSON" />
						<input
							type="hidden"
							id="authenticatorData"
							name="authenticatorData"
						/>
						<input type="hidden" id="signature" name="signature" />
						<input type="hidden" id="credentialId" name="credentialId" />
						<input type="hidden" id="userHandle" name="userHandle" />
						<input type="hidden" id="error" name="error" />
					</form>

					{authenticators !== undefined &&
						authenticators.authenticators.length !== 0 && (
							<form id="authn_select">
								{authenticators.authenticators.map((authenticator) => (
									<input
										key={authenticator.credentialId}
										type="hidden"
										name="authn_use_chk"
										readOnly
										value={authenticator.credentialId}
									/>
								))}
							</form>
						)}

					<ScoutButton
						id={webAuthnButtonId}
						type="button"
						variant="outlined"
						size="large"
						style={{ display: "block", width: "100%" }}
					>
						{msgStr("passkey-doAuthenticate")}
					</ScoutButton>
				</>
			)}
		</Template>
	);
}
