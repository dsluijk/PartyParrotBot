/**
 * Parrot manager.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Cage {
  /**
   * The parrots inside the cage.
   */
  private parrots: Parrot[];

  /**
   * Replace the parrots in the cage.
   *
   * @param parrots A list of parrots to add.
   */
  public setParrots (parrots: Parrot[]): void {
    this.parrots = parrots;
  }

  /**
   * Find parrots in the cage.
   *
   * @param query Query to search by.
   * @return An array of parrots.
   */
  public findParrots (query: string): Parrot[] {
    return this.parrots.filter(parrot => {
      if (parrot.name.indexOf(query) > -1) return true;
      if (parrot.tip.indexOf(query) > -1) return true;

      return false;
    });
  }
}

/**
 * Parrot interface.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export interface Parrot {
  /**
   * Hash of the parrot.
   */
  hash: string;
  /**
   * Name of the parrot.
   */
  name: string;
  /**
   * Tip for the parrot.
   */
  tip: string;
  /**
   * Url to the parrot LQ gif.
   */
  gif: string;
  /**
   * Url to the HD gif of the parrot.
   */
  hd?: string;
}
