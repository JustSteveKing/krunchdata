import { Form, ActionPanel, Action, showToast } from "@raycast/api";

type Values = {
  textfield: string;
};

export default function Command() {
  function handleSubmit(values: Values) {
    console.log(values);
    showToast({ title: "Submitted form", message: "See logs for submitted values" });
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.Description text="Paste a link below to generate a Krunch link" />
      <Form.TextField id="textfield" title="Text field" placeholder="https://your-link.com/" />
    </Form>
  );
}
