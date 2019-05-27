import React from 'react';
import { Accordion, AccordionPanel, Box, CheckBox, Text } from 'grommet';
import { Grommet } from 'grommet';
import { grommet } from "grommet/themes";
import { generate } from "grommet/themes/base";
import { deepMerge } from "grommet/utils";

const theme = deepMerge(generate(18), grommet);

export default () => (
  <Grommet theme={theme}>
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
  </Grommet>
);