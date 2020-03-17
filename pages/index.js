import { Grommet, List, Menu } from 'grommet';
import { More } from 'grommet-icons';

export default () => {
  return (
    <Grommet plain>
      <List
        primaryKey="name"
        data={[
          { name: 'Alan', percent: 20 },
          { name: 'Bryan', percent: 30 },
          { name: 'Chris', percent: 40 },
          { name: 'Eric', percent: 80 },
        ]}
        action={d => <Menu icon={<More />} hoverIndicator items={[{ label: "one" }]} />}
      />
    </Grommet>
  );
}