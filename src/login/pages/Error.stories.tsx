import type { Meta, StoryObj } from "@storybook/react-vite";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "error.ftl" });

const meta = {
	title: "login/error.ftl",
	component: KcPageStory,
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => <KcPageStory />,
};

export const AlreadyLoggedInAsAnotherUser: Story = {
	render: () => (
		<KcPageStory
			kcContext={{
				message: {
					type: "error",
					summary:
						"Du är redan autentiserad som en annan användare '9876543@scoutnet' i den här sessionen. Vänligen logga ut först.",
				},
			}}
		/>
	),
};
