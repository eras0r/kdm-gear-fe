import {AffinityColor} from './affinity-color';

export class Item {

  constructor(public id: number, public name?: string,
              public topAffinity?: AffinityColor, public leftAffinity?: AffinityColor,
              public rightAffinity?: AffinityColor, public bottomAffinity?: AffinityColor, public providedAffinities?: FulfilledAffinites) {

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
   *
   * @param blue Count of fulfilled blue affinities.
   * @param green Count of fulfilled green affinities.
   * @param red Count of fulfilled red affinities.
   */
  constructor(public blue = 0, public green = 0, public red = 0) {

  }

  /**
   * Increments the current affinity for the given color by 1.
   * @param color the color for which to increment the affinity.
   */
  incrementAffinity(color: AffinityColor): void {
    switch (color) {
      case AffinityColor.Blue:
        this.blue++;
        break;
      case AffinityColor.Green:
        this.green++;
        break;
      case AffinityColor.Red:
        this.red++;
        break;
    }
  }

  /**
   * Adds the given fulfilled affinities to this object.
   * @param other the fulfilled affinities to be added.
   */
  add(other: FulfilledAffinites): void {
    if (other) {
      this.blue += other.blue;
      this.green += other.green;
      this.red += other.red;
    }
  }

}
