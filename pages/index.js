import { Grommet, Button  } from 'grommet';
import { Qr } from 'grommet-icons';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Grommet plain>
      <Button icon={<Qr />} label="Qr" />
    </Grommet>
  );
}