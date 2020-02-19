import { Grommet, Form, FormField, TextInput, Button  } from 'grommet';

export default () => (
  <Grommet plain>
    <Form onSubmit={({ value }) => console.log(value)}>
      <FormField name='password' label='password' required>
        <TextInput name='password' type='password' />
      </FormField>
      <Button primary type='submit' label='sign-in' />
    </Form>
  </Grommet>
);
