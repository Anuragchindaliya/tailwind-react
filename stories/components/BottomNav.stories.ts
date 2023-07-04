import BottomNav from "@/components/common/BottomNav";
import { Meta, StoryObj } from "@storybook/react";

type BottomNavType = typeof BottomNav;

const BottomNavMeta: Meta<BottomNavType> = {
  title: "Components/BottomNav",
  component: BottomNav,
  tags: ["component", "footer"],
};
type Story = StoryObj<BottomNavType>;
export const BottomNavStory: Story = {
  args: {},
};
export default BottomNavMeta;
