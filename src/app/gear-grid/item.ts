import {AffinityColor} from './affinity-color';

export class Item {

  constructor(public id: number, public name?: string,
              public topAffinity?: AffinityColor, public leftAffinity?: AffinityColor,
              public rightAffinity?: AffinityColor, public bottomAffinity?: AffinityColor) {

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
export class FulfilledAffinites {

  /**
   * Count of fulfilled blue affinities.
   */
  blue = 0;

  /**
   * Count of fulfilled green affinities.
   */
  green = 0;

  /**
   * Count of fulfilled red affinities.
   */
  red = 0;

}
