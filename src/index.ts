import * as say from 'parrotsay-api';

import * as Raven from 'raven';

import { get, has } from 'config';

import { Cage } from './cage';
import { Telegram } from './telegram';
import { VersionControl } from './versionControl';

/**
 * Set up the raven logger if a DSN has been provided.
 */
if (has('raven') && get('raven') !== '') Raven.config(get('raven')).install();

/**
 * Start the application.
 */
const start = async () => {
  const cage = new Cage();
  const versionControl = new VersionControl(cage);
  await versionControl.update();
  const telegram = new Telegram(cage);

  /**
   * Get the party started!
   */
  console.log(await say('Party or die'));
};
start();
