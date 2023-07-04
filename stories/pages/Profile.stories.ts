import { Meta, StoryObj } from "@storybook/react";
import Profile from "pages/profile";
type ProfileType = typeof Profile;
const ProfileStory: Meta<ProfileType> = {
  title: "Pages/Profile",
  component: Profile,
};
type Story = StoryObj<ProfileType>;
export const HomeStory: Story = {
  args: {},
};
export default ProfileStory;
