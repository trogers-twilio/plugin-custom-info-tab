import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import CustomTaskInfo from "./components/CustomTaskInfo";

const PLUGIN_NAME = 'CustomInfoTabPlugin';

export default class CustomInfoTabPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
  * This code is run when your plugin is being started
  * Use this to modify any UI components or attach to the actions framework
  *
  * @param flex { typeof import('@twilio/flex-ui') }
  * @param manager { import('@twilio/flex-ui').Manager }
  */
  async init(flex, manager) {

    flex.TaskInfoPanel.Content.replace(<CustomTaskInfo key="custom--task-info" />);
    flex.Supervisor.TaskInfoPanel.Content.replace(<CustomTaskInfo key="custom-supervisor-task-info" />);
  }



}
