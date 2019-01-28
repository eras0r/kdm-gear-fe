import {FulfilledAffinites, Item} from './item';

/**
 * Represents a rectangular gear grid which holds gear items. The size represents the the eddge length of the grid.
 * The following grid has a size of 3 and shows the positions (starting with 0) of the items.
 *
 * +---+---+---+
 * | 0 | 1 | 2 |
 * +---+---+---+
 * | 3 | 4 | 5 |
 * +---+---+---+
 * | 6 | 7 | 8 |
 * +---+---+---+
 */
export class GearGrid {

  items: Item[] = [];

  constructor(public size: number) {

  }

  /**
   * Gets the item at the given position
   * @param position the position of the item to be retrieved.
   */
  getItem(position: number): Item {
    return this.items[position];
  }

  /**
   * Gets the maximum number of items the grid can hold.
   */
  getMaximumItemsCount(): number {
    return this.size * this.size;
  }

  /**
   * Gets the number of positions iin the grid which have an item selected.
   */
  getItemsCount(): number {
    return this.items.filter((i) => i !== undefined).length;
  }

  getTop(position: number): Item {
    if (position >= this.size) {
      return this.items[position - this.size];
    }
    return undefined;
  }

  getBottom(position: number): Item {
    if (position < this.getMaximumItemsCount() - this.size) {
      return this.items[position + this.size];
    }
    return undefined;
  }

  getLeft(position: number): Item {
    if (position % this.size > 0) {
      return this.items[position - 1];
    }
    return undefined;
  }

  getRight(position: number): Item {
    if (position % this.size < this.size - 1) {
      return this.items[position + 1];
    }
    return undefined;
  }

  /**
   * Calculates the fulfilled affinities for the given cell.
   * @param position the position of the cell.
   * @param calculateNeighbourAffinities whether to calculate the neighbour affinities or not.
   */
  calculateAffinitiesForCell(position: number, calculateNeighbourAffinities = true): FulfilledAffinites {
    let fulfilledAffinites: FulfilledAffinites;

    const self = this.getItem(position);

    // gear position contains an item
    if (self) {
      // initialize fulfilled affinities with self provided affinities if any
      fulfilledAffinites = self.providedAffinities || new FulfilledAffinites();

      if (calculateNeighbourAffinities) {
        const top = this.getTop(position);
        if (top && self.topAffinity === top.bottomAffinity) {
          fulfilledAffinites.incrementAffinity(self.topAffinity);
        }

        const left = this.getLeft(position);
        if (left && self.leftAffinity === left.rightAffinity) {
          fulfilledAffinites.incrementAffinity(self.leftAffinity);
        }

        const right = this.getRight(position);
        if (right && self.rightAffinity === right.leftAffinity) {
          fulfilledAffinites.incrementAffinity(self.rightAffinity);
        }

        const bottom = this.getBottom(position);
        if (bottom && self.bottomAffinity === bottom.topAffinity) {
          fulfilledAffinites.incrementAffinity(self.bottomAffinity);
        }
      }
    }

    return fulfilledAffinites;
  }

  /**
   * Gets the fulfilled affinities for the whole grid.
   */
  calculateAffinitiesForGrid(): FulfilledAffinites {
    const fulfilledAffinites = new FulfilledAffinites();

    this.items.map((item, position) => {
      const needsNeighboutAffinityCalculation = this.needsNeighbourAffinityCalculation(position);
      return this.calculateAffinitiesForCell(position, needsNeighboutAffinityCalculation);
    })
      .forEach((affinities) => fulfilledAffinites.add(affinities));

    return fulfilledAffinites;
  }

  /**
   * Determines whether the given position needs neigbour affinity calculation or not.
   * This is used when calculating the affinity for the whole grid.
   * @param position the position.
   */
  needsNeighbourAffinityCalculation(position: number): boolean {
    let needsNeighboutAffinityCalculation = false;

    if (this.size % 2 === 0) {
      // gear grid has an even size
      if (Math.floor(position / this.size) % 2 === 0) {
        // even row -> odd columns
        needsNeighboutAffinityCalculation = position % 2 === 1;
      } else {
        // odd row -> even columns
        needsNeighboutAffinityCalculation = position % 2 === 0;
      }
    } else {
      // gear grid has an odd size -> odd positions
      needsNeighboutAffinityCalculation = position % 2 === 1;
    }

    return needsNeighboutAffinityCalculation;
  }

}
