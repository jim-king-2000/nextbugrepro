import React from 'react';
import { Accordion, AccordionPanel, Box, CheckBox, Text } from 'grommet';

export default () => (
  <Accordion>
    <AccordionPanel label="Panel 1">
      <Box gap="small" pad="medium" background="light-2">
        <CheckBox label="abc" />
        <CheckBox label="123" />
      </Box>
    </AccordionPanel>
    <AccordionPanel label="Panel 2">
      <Box pad="medium" background="light-2">
        <Text>Two</Text>
      </Box>
    </AccordionPanel>
  </Accordion>
);