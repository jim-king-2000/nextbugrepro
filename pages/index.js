import { useState } from 'react';
import { Grommet, Button, Form, Select } from 'grommet';
import { Qr } from 'grommet-icons';

export default () => {
  const [a, setA] =
  useState();
  return (
    <Grommet plain>
      <Form>
        <Select
          name='token_endpoint_auth_method'
          options={['none', 'client_secret_basic', 'client_secret_post']}
          value={a}
          onChange={({ option }) => setA(option)}
        />
        <Button
          icon={<Qr />}
          label='test'
          onClick={() => setA('none')}
        />
      </Form>
    </Grommet>
  );
}