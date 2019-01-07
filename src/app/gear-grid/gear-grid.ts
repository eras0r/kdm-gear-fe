import {Item} from './item';

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

  getAllRelevantCellsForAffinity(): Item[] {
    let relevantItems: Item[] = [];

    if (this.size % 2 === 0) {
      // gear grid has an even size
      this.items.forEach((item, index) => {

        if (Math.floor(index / this.size) % 2 === 0) {
          // odd row

          // add all odd columns
          if (index % 2 === 1) {
            relevantItems.push(item);
          }
        } else {
          // even row

          // add all even columns
          if (index % 2 === 0) {
            relevantItems.push(item);
          }
        }

      });
    } else {
      // gear grid has an odd size
      relevantItems = this.items.filter((item, index) => index % 2 === 1);
    }

    return relevantItems;
  }

}
