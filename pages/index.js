import { useState } from 'react';
import { Grommet, Button, Form, Select } from 'grommet';
import { Qr } from 'grommet-icons';

export default () => {
  const [a, setA] = useState();
  return (
    <Grommet plain>
      <Form>
        <Select
          name='some_name'
          options={['a', 'b', 'd']}
          value={a}
          onChange={({ option }) => setA(option)}
        />
        <Button
          icon={<Qr />}
          label='test'
          onClick={() => setA('a')}
        />
      </Form>
    </Grommet>
  );
}