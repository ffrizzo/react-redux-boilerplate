import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
/* eslint-enable import/no-extraneous-dependencies */

/* eslint function-paren-newline: ["error", "always"] */
export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
  >
    <LogMonitor />
  </DockMonitor>,
);
