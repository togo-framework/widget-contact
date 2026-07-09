import type { Meta, StoryObj } from "@storybook/react";
import { Contact } from "./index";

const meta = { title: "Widgets/Contact", component: Contact } satisfies Meta<typeof Contact>;
export default meta;

export const Default: StoryObj<typeof Contact> = {
  args: { settings: {}, setSettings: () => {}, editing: false },
};

export const Editing: StoryObj<typeof Contact> = {
  args: { settings: {}, setSettings: () => {}, editing: true },
};
