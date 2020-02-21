import { Grommet, Form, FormField, TextInput, Button  } from 'grommet';
import { Qr } from 'grommet-icons';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Grommet plain>
      <Form onSubmit={({ value }) => console.log(value)}>
        <FormField type='password' name='password' label='password' required />
        <Button icon={<Qr />} primary type='submit' label='sign-in' />
      </Form>
    </Grommet>
  );
}