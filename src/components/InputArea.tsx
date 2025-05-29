import { Description, Field, Input, Label } from '@headlessui/react'

type InputAreaProps = {
  value: string;
  onChange: (value: string) => void;
};

export const InputArea: React.FC<InputAreaProps> = ({ value, onChange }) => (
  <Field>
  <Label>Name</Label>
  <Description>Use your real name so people will recognize you.</Description>
  <Input name="full_name" />
</Field>
);