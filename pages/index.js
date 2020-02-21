import { Grommet, Text  } from 'grommet';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Grommet plain>
      <Text>test next.js</Text>
    </Grommet>
  );
}