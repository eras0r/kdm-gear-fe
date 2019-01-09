import {FulfilledAffinites, Item} from './item';
import {AffinityColor} from './affinity-color';

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
   * Calculates the fulfilled affinites for the given cell.
   * @param position the position of the cell.
   */
  getAffinitiesForCell(position: number): FulfilledAffinites {
    let fulfilledAffinites: FulfilledAffinites;

    const self = this.getItem(position);

    // gear position contains an item
    if (self) {
      // initialize fulfilled affinities with self provided affinities if any
      fulfilledAffinites = self.providedAffinities || new FulfilledAffinites();

      const top = this.getTop(position);
      if (top && self.topAffinity === top.bottomAffinity) {
        this.incrementAffinity(fulfilledAffinites, self.topAffinity);
      }

      const left = this.getLeft(position);
      if (left && self.leftAffinity === left.rightAffinity) {
        this.incrementAffinity(fulfilledAffinites, self.leftAffinity);
      }

      const right = this.getRight(position);
      if (right && self.rightAffinity === right.leftAffinity) {
        this.incrementAffinity(fulfilledAffinites, self.rightAffinity);
      }

      const bottom = this.getBottom(position);
      if (bottom && self.bottomAffinity === bottom.topAffinity) {
        this.incrementAffinity(fulfilledAffinites, self.bottomAffinity);
      }
    }

    return fulfilledAffinites;
  }

  private incrementAffinity(fulfilledAffinites: FulfilledAffinites, color: AffinityColor): void {
    switch (color) {
      case AffinityColor.Blue:
        fulfilledAffinites.blue++;
        break;
      case AffinityColor.Green:
        fulfilledAffinites.green++;
        break;
      case AffinityColor.Red:
        fulfilledAffinites.red++;
        break;
    }
  }

  getAllRelevantCellPositionsForNeighbourAffinity(): number[] {
    let relevantPositions: number[] = [];

    if (this.size % 2 === 0) {
      // gear grid has an even size
      for (let index = 0; index < this.getMaximumItemsCount(); index++) {

        if (Math.floor(index / this.size) % 2 === 0) {
          // even row -> add all odd columns
          if (index % 2 === 1) {
            relevantPositions.push(index);
          }
        } else {
          // odd row -> add all even columns
          if (index % 2 === 0) {
            relevantPositions.push(index);
          }
        }

      }
    } else {
      // gear grid has an odd size -> use odd positions
      relevantPositions = [];
      for (let index = 0; index < this.getMaximumItemsCount(); index++) {
        if (index % 2 === 1) {
          relevantPositions.push(index);
        }
      }
    }

    return relevantPositions;
  }

  getAllRelevantCellsForNeighbourAffinity(): Item[] {
    return this.getAllRelevantCellPositionsForNeighbourAffinity()
      .map((position) => this.getItem(position));
  }

}
