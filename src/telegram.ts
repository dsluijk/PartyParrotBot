// tslint:disable-next-line:no-require-imports no-var-requires
const TelegramBot = require('node-telegram-bot-api');

import { get, has } from 'config';
import { Cage, Parrot } from './cage';

/**
 * Telegram API connection manager.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Telegram {
  /**
   * Telegram api connection.
   */
  private connection: any;
  /**
   * Telegram authentication token.
   */
  private authToken: string;
  /**
   * the cage with the parrots.
   */
  private cage: Cage;

  /**
   * Set the initial variables and create the telegram connection.
   */
  constructor (cage: Cage) {
    this.authToken = has('telegramAuth') ? get('telegramAuth') : '';
    this.cage = cage;
    this.connection = new TelegramBot(this.authToken, {
      polling: true
    });

    this.connection.on('inline_query', (query) => this.onQuery(query));
  }

  /**
   * Gets fired when an inline query has been received.
   *
   * @param query The query received.
   */
  private onQuery (query: TelegramQuery): void {
    const foundParrots = this.cage.findParrots(query.query.toLowerCase().trim()).map(parrot => this.formatParrot(parrot));
    this.connection.answerInlineQuery(query.id, foundParrots.splice(0, 50));
  }

  /**
   * Format a parrot into a format Telegram accepts.
   *
   * @param parrot Parrot to convert.
   * @return Parrot in a form Telegram understands.
   */
  private formatParrot (parrot: Parrot): TelegramQueryResponse {
    return {
      id: parrot.hash,
      type: 'gif',
      caption: parrot.name,
      gif_url: parrot.hd || parrot.gif,
      thumb_url: parrot.gif || parrot.hd,
    };
  }
}

/**
 * Telegram query object.
 *
 * Importing telegram typings does not work at the moment, and this types the query.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
interface TelegramQuery {
  id: string;
  query: string;
  offset: string;

  from: {
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
  };
}

/**
 * Telegram query response.
 *
 * Importing telegram typings does not work at the moment, and this types the query response.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
interface TelegramQueryResponse {
  id: string;
  type: string;
  caption: string;
  gif_url: string;
  thumb_url: string;
}
