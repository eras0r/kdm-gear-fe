import {AffinityColor} from './affinity-color';

export class Item {

  name: string;

  topAffinity: AffinityColor;

  leftAffinity: AffinityColor;

  rightAffinity: AffinityColor;

  bottomAffinity: AffinityColor;

  constructor(public id: number) {

  }

}

/**
 * Defines an affinity restriction used by a gear item (as noted on the gear card).
 */
class Affinity {

  color: AffinityColor;

  /**
   * Whether the affinity needs to be fulfilled on the item itself (true) or not (false).
   */
  self: boolean;

}

/**
 * Defines the fulfilled affinities for a gear item or the gear grid itself.
 */
class FulfilledAffinites {

  /**
   * Count of fulfilled blue affinities.
   */
  blue: number;

  /**
   * Count of fulfilled green affinities.
   */
  green: number;

  /**
   * Count of fulfilled red affinities.
   */
  red: number;

}
