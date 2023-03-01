import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";
import { exampleValidation } from "./exampleValidation";

export default {
  title: "DesignSystem/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (
  args: ComponentMeta<typeof Input>
) => <Input validation={{ checker: exampleValidation }} {...args} />;

export const Default = Template.bind({});
