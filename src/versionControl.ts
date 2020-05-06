import nodeFetch from 'node-fetch';

import { createHash } from 'crypto';

import { Cage, Parrot } from './cage';

/**
 * Version control of the parrots.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class VersionControl {
  /**
   * Url to get a list of parrots from.
   */
  private parrotsUrl: string = 'https://cultofthepartyparrot.com/parrots.json';
  /**
   * Base url for the parrots images.
   */
  private parrotBaseUrl: string = 'https://cultofthepartyparrot.com/parrots/';
  /**
   * Reference to the cage.
   */
  private cage: Cage;

  /**
   * Initializes the version control.
   *
   * This also starts the autoupdate interval.
   *
   * @param cage Reference to the cage.
   */
  constructor (cage: Cage) {
    this.cage = cage;

    // Update every 24 hours.
    setInterval(this.update, 1440000);
  }

  /**
   * Update the party parrots.
   */
  public async update (): Promise<void> {
    const parrotsReq = await nodeFetch(this.parrotsUrl);
    if (parrotsReq.status !== 200) return Promise.reject('Parrot list server did not respond with 200 OK!');
    const parrots: Parrot[] = (await parrotsReq.json()).map(parrot => {
      return {
        hash: this.generateHash(parrot),
        name: parrot.name.toLowerCase(),
        tip: parrot.tip ? parrot.tip.toLowerCase() : '',
        gif: parrot.gif ? this.parrotBaseUrl + parrot.gif : undefined,
        hd: parrot.hd ? this.parrotBaseUrl + parrot.hd : undefined,
      };
    });
    this.cage.setParrots(parrots);
  }

  /**
   * Generate a hash from a parrot interface.
   *
   * Probably overkill, but oh well ¯\_(ツ)_/¯.
   *
   * @param parrot The parrot to calculate the hash for.
   * @return A hash bound to that parrot.
   */
  private generateHash (parrot: Parrot): string {
    return createHash('sha256').update(parrot.name + parrot.gif + parrot.hd).digest('base64');
  }
}
