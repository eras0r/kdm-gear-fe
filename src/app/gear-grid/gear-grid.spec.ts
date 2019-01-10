import {GearGrid} from './gear-grid';
import {FulfilledAffinites, Item} from './item';
import {AffinityColor} from './affinity-color';

describe('Gear Grid', () => {

  let gearGrid: GearGrid;

  describe('3 by 3 grid', () => {

    beforeEach(() => {
      gearGrid = getEmptyTestGrid(3);
    });

    describe('empty', () => {

      describe('getItemsCount()', () => {

        it('should return 0', () => {
          expect(gearGrid.getItemsCount()).toEqual(0);
        });

      });

      describe('getItem()', () => {
        it('should return undefined for all positions', () => {
          for (let pos = 0; pos < gearGrid.getMaximumItemsCount(); pos++) {
            const item = gearGrid.getItem(pos);
            expect(item).toBeUndefined();
          }
        });
      });

      describe('getTop()', () => {
        it('should return undefined for all positions', () => {
          for (let pos = 0; pos < gearGrid.getMaximumItemsCount(); pos++) {
            expect(gearGrid.getTop(pos)).toBeUndefined();
          }
        });
      });

      describe('getBottom()', () => {
        it('should return undefined for all positions', () => {
          for (let pos = 0; pos < gearGrid.getMaximumItemsCount(); pos++) {
            expect(gearGrid.getBottom(pos)).toBeUndefined();
          }
        });
      });

      describe('getLeft()', () => {
        it('should return undefined for all positions', () => {
          for (let pos = 0; pos < gearGrid.getMaximumItemsCount(); pos++) {
            expect(gearGrid.getLeft(pos)).toBeUndefined();
          }
        });
      });

      describe('getRight()', () => {
        it('should return undefined for all positions', () => {
          for (let pos = 0; pos < gearGrid.getMaximumItemsCount(); pos++) {
            expect(gearGrid.getRight(pos)).toBeUndefined();
          }
        });
      });

    });

    describe('completely filled with fake items', () => {

      beforeEach(() => {
        for (let pos = 0; pos < gearGrid.getMaximumItemsCount(); pos++) {
          gearGrid.items.push(new Item(pos));
        }
      });

      describe('getItemsCount()', () => {

        it('should return 9', () => {
          expect(gearGrid.getItemsCount()).toEqual(9);
        });

      });

      describe('getItem()', () => {
        it('should retrieve the proper items', () => {
          for (let pos = 0; pos < gearGrid.getMaximumItemsCount(); pos++) {
            const item = gearGrid.getItem(pos);
            expect(item).toBeDefined();
            expect(item.id).toEqual(pos);
          }
        });
      });

      describe('getTop()', () => {

        describe('top row', () => {

          describe('left column', () => {
            it('should return undefined', () => {
              expect(gearGrid.getTop(0)).toBeUndefined();
            });
          });

          describe('center column', () => {
            it('should return undefined', () => {
              expect(gearGrid.getTop(1)).toBeUndefined();
            });
          });

          describe('right column', () => {
            it('should return undefined', () => {
              expect(gearGrid.getTop(2)).toBeUndefined();
            });
          });

        });

        describe('middle row', () => {

          describe('left column', () => {
            it('should return neighbour from the top row', () => {
              const left = gearGrid.getTop(3);
              expect(left).toBeDefined();
              expect(left.id).toBe(0);
            });
          });

          describe('center column', () => {
            it('should return neighbour from the top row', () => {
              const center = gearGrid.getTop(4);
              expect(center).toBeDefined();
              expect(center.id).toBe(1);
            });
          });

          describe('right column', () => {
            it('should return neighbour from the top row', () => {
              const right = gearGrid.getTop(5);
              expect(right).toBeDefined();
              expect(right.id).toBe(2);

            });
          });

        });

        describe('bottom row', () => {

          describe('left column', () => {
            it('should return neighbour from the middle row', () => {
              const left = gearGrid.getTop(6);
              expect(left).toBeDefined();
              expect(left.id).toBe(3);
            });
          });

          describe('center column', () => {
            it('should return neighbour from the middle row', () => {
              const left = gearGrid.getTop(7);
              expect(left).toBeDefined();
              expect(left.id).toBe(4);
            });
          });

          describe('right column', () => {
            it('should return neighbour from the middle row', () => {
              const left = gearGrid.getTop(8);
              expect(left).toBeDefined();
              expect(left.id).toBe(5);
            });
          });

          it('should return the corresponding item from the top row', () => {
            const left = gearGrid.getTop(6);
            expect(left).toBeDefined();
            expect(left.id).toBe(3);

            const center = gearGrid.getTop(7);
            expect(center).toBeDefined();
            expect(center.id).toBe(4);

            const right = gearGrid.getTop(8);
            expect(right).toBeDefined();
            expect(right.id).toBe(5);
          });

        });

      });

      describe('getBottom()', () => {

        describe('top row', () => {

          describe('left column', () => {
            it('should return neighbour from the middle row', () => {
              const left = gearGrid.getBottom(0);
              expect(left).toBeDefined();
              expect(left.id).toBe(3);
            });
          });

          describe('center column', () => {
            it('should return neighbour from the middle row', () => {
              const left = gearGrid.getBottom(1);
              expect(left).toBeDefined();
              expect(left.id).toBe(4);
            });
          });

          describe('right column', () => {
            it('should return neighbour from the middle row', () => {
              const left = gearGrid.getBottom(2);
              expect(left).toBeDefined();
              expect(left.id).toBe(5);
            });
          });

        });

        describe('middle row', () => {

          describe('left column', () => {
            it('should return neighbour from the bottom row', () => {
              const left = gearGrid.getBottom(3);
              expect(left).toBeDefined();
              expect(left.id).toBe(6);
            });
          });

          describe('center column', () => {
            it('should return neighbour from the bottom row', () => {
              const left = gearGrid.getBottom(4);
              expect(left).toBeDefined();
              expect(left.id).toBe(7);
            });
          });

          describe('right column', () => {
            it('should return neighbour from the bottom row', () => {
              const left = gearGrid.getBottom(5);
              expect(left).toBeDefined();
              expect(left.id).toBe(8);
            });
          });

        });

        describe('bottom row', () => {

          describe('left column', () => {
            it('should return undefined', () => {
              expect(gearGrid.getBottom(6)).toBeUndefined();
            });
          });

          describe('center column', () => {
            it('should return undefined', () => {
              expect(gearGrid.getBottom(7)).toBeUndefined();
            });
          });

          describe('right column', () => {
            it('should return undefined', () => {
              expect(gearGrid.getBottom(8)).toBeUndefined();
            });
          });

        });

      });

      describe('getLeft()', () => {

        describe('left column', () => {

          describe('top row', () => {
            it('should return undefined', () => {
              expect(gearGrid.getLeft(0)).toBeUndefined();
            });
          });

          describe('middle row', () => {
            it('should return undefined', () => {
              expect(gearGrid.getLeft(3)).toBeUndefined();

            });
          });

          describe('bottom row', () => {
            it('should return undefined', () => {
              expect(gearGrid.getLeft(6)).toBeUndefined();

            });
          });

        });

        describe('center column', () => {

          describe('top row', () => {
            it('should return the neighbour from the left column', () => {
              const left = gearGrid.getLeft(1);
              expect(left).toBeDefined();
              expect(left.id).toBe(0);
            });
          });

          describe('middle row', () => {
            it('should return the neighbour from the left column', () => {
              const center = gearGrid.getLeft(4);
              expect(center).toBeDefined();
              expect(center.id).toBe(3);
            });
          });

          describe('bottom row', () => {
            it('should return the neighbour from the left column', () => {
              const right = gearGrid.getLeft(7);
              expect(right).toBeDefined();
              expect(right.id).toBe(6);
            });
          });

        });

        describe('right column', () => {

          describe('top row', () => {
            it('should return the neighbour from the center column', () => {
              const left = gearGrid.getLeft(2);
              expect(left).toBeDefined();
              expect(left.id).toBe(1);
            });
          });

          describe('middle row', () => {
            it('should return the neighbour from the center column', () => {
              const center = gearGrid.getLeft(5);
              expect(center).toBeDefined();
              expect(center.id).toBe(4);
            });
          });

          describe('bottom row', () => {
            it('should return the neighbour from the center column', () => {
              const right = gearGrid.getLeft(8);
              expect(right).toBeDefined();
              expect(right.id).toBe(7);
            });
          });

        });

      });

      describe('getRight()', () => {

        describe('left column', () => {

          describe('top row', () => {
            it('should return the neighbour from the center column', () => {
              const left = gearGrid.getRight(0);
              expect(left).toBeDefined();
              expect(left.id).toBe(1);
            });
          });

          describe('middle row', () => {
            it('should return the neighbour from the center column', () => {
              const center = gearGrid.getRight(3);
              expect(center).toBeDefined();
              expect(center.id).toBe(4);
            });
          });

          describe('bottom row', () => {
            it('should return the neighbour from the center column', () => {
              const right = gearGrid.getRight(6);
              expect(right).toBeDefined();
              expect(right.id).toBe(7);
            });
          });

        });

        describe('center column', () => {

          describe('top row', () => {
            it('should return the neighbour from the right column', () => {
              const left = gearGrid.getRight(1);
              expect(left).toBeDefined();
              expect(left.id).toBe(2);
            });
          });

          describe('middle row', () => {
            it('should return the neighbour from the right column', () => {
              const center = gearGrid.getRight(4);
              expect(center).toBeDefined();
              expect(center.id).toBe(5);
            });
          });

          describe('bottom row', () => {
            it('should return the neighbour from the right column', () => {
              const right = gearGrid.getRight(7);
              expect(right).toBeDefined();
              expect(right.id).toBe(8);
            });
          });

        });

        describe('right column', () => {

          describe('top row', () => {
            it('should return undefined', () => {
              expect(gearGrid.getRight(2)).toBeUndefined();
            });
          });

          describe('middle row', () => {
            it('should return undefined', () => {
              expect(gearGrid.getRight(5)).toBeUndefined();
            });
          });

          describe('bottom row', () => {
            it('should return undefined', () => {
              expect(gearGrid.getRight(8)).toBeUndefined();
            });
          });

        });

      });

    });

    describe('filled with some dummy items', () => {

      beforeEach(() => {
        gearGrid = getTestGridWithItems();
      });

      describe('calculateAffinitiesForCell()', () => {

        describe('empty gear positions', () => {

          it('should return undefined', () => {
            expect(gearGrid.calculateAffinitiesForCell(0)).toBeUndefined();
          });

        });

        describe('north item', () => {

          it('should return correct affinities', () => {
            const affinities = gearGrid.calculateAffinitiesForCell(1);
            expect(affinities).toBeDefined();
            expect(affinities.blue).toEqual(0);
            expect(affinities.green).toEqual(0);
            expect(affinities.red).toEqual(1);
          });

        });

        describe('north east item', () => {

          it('should return correct affinities', () => {
            const affinities = gearGrid.calculateAffinitiesForCell(2);
            expect(affinities).toBeDefined();
            expect(affinities.blue).toEqual(0);
            expect(affinities.green).toEqual(0);
            expect(affinities.red).toEqual(0);
          });

        });

        describe('west item', () => {

          it('should return correct affinities', () => {
            const affinities = gearGrid.calculateAffinitiesForCell(3);
            expect(affinities).toBeDefined();
            expect(affinities.blue).toEqual(0);
            expect(affinities.green).toEqual(0);
            expect(affinities.red).toEqual(1);
          });

        });

        describe('east item', () => {

          it('should return correct affinities', () => {
            const affinities = gearGrid.calculateAffinitiesForCell(5);
            expect(affinities).toBeDefined();
            expect(affinities.blue).toEqual(2);
            expect(affinities.green).toEqual(0);
            expect(affinities.red).toEqual(0);
          });

        });

        describe('center item', () => {

          it('should return correct affinities', () => {
            const affinities = gearGrid.calculateAffinitiesForCell(4);
            expect(affinities).toBeDefined();
            expect(affinities.blue).toEqual(1);
            expect(affinities.green).toEqual(1);
            expect(affinities.red).toEqual(2);
          });

        });

        describe('south west item', () => {

          it('should return correct affinities', () => {
            const affinities = gearGrid.calculateAffinitiesForCell(6);
            expect(affinities).toBeDefined();
            expect(affinities.blue).toEqual(0);
            expect(affinities.green).toEqual(1);
            expect(affinities.red).toEqual(0);
          });

        });

        describe('south item', () => {

          it('should return correct affinities', () => {
            const affinities = gearGrid.calculateAffinitiesForCell(7);
            expect(affinities).toBeDefined();
            expect(affinities.blue).toEqual(0);
            expect(affinities.green).toEqual(3);
            expect(affinities.red).toEqual(2);
          });

        });

        describe('south east item', () => {

          it('should return correct affinities', () => {
            const affinities = gearGrid.calculateAffinitiesForCell(8);
            expect(affinities).toBeDefined();
            expect(affinities.blue).toEqual(0);
            expect(affinities.green).toEqual(1);
            expect(affinities.red).toEqual(1);
          });

        });

      });

      describe('calculateAffinitiesForGrid()', () => {

        it('should have the proper affinities', () => {
          const gridAffinities = gearGrid.calculateAffinitiesForGrid();
          expect(gridAffinities.blue).toEqual(2);
          expect(gridAffinities.green).toEqual(3);
          expect(gridAffinities.red).toEqual(5);
        });

      });

    });

    describe('getMaximumItemsCount()', () => {

      it('should return 9', () => {
        expect(gearGrid.getMaximumItemsCount()).toEqual(9);
      });

    });

    describe('getAllRelevantCellPositionsForNeighbourAffinity()', () => {

      it('should return all positions which are relevant for the affinity neighbour calculation', () => {
        const relevantCellIds = gearGrid.getAllRelevantCellPositionsForNeighbourAffinity();

        expect(relevantCellIds.length).toEqual(4);
        expect(relevantCellIds[0]).toBe(1);
        expect(relevantCellIds[1]).toBe(3);
        expect(relevantCellIds[2]).toBe(5);
        expect(relevantCellIds[3]).toBe(7);
      });

    });

    describe('getAllNonRelevantCellPositionsForNeighbourAffinity()', () => {

      it('should return all positions which are not relevant for the affinity neighbour calculation', () => {
        const relevantCellIds = gearGrid.getAllNonRelevantCellPositionsForNeighbourAffinity();

        expect(relevantCellIds.length).toEqual(5);
        expect(relevantCellIds[0]).toBe(0);
        expect(relevantCellIds[1]).toBe(2);
        expect(relevantCellIds[2]).toBe(4);
        expect(relevantCellIds[3]).toBe(6);
        expect(relevantCellIds[4]).toBe(8);
      });

    });

  });

  describe('4 by 4 grid', () => {

    beforeEach(() => {
      gearGrid = getEmptyTestGrid(4);
    });

    describe('empty', () => {

      describe('getItemsCount()', () => {

        it('should return 0', () => {
          expect(gearGrid.getItemsCount()).toEqual(0);
        });

      });

    });

    describe('completely filled with fake items', () => {

      beforeEach(() => {
        for (let pos = 0; pos < gearGrid.getMaximumItemsCount(); pos++) {
          gearGrid.items.push(new Item(pos));
        }
      });

      describe('getItemsCount()', () => {

        it('should return 16', () => {
          expect(gearGrid.getItemsCount()).toEqual(16);
        });

      });

    });

    describe('getMaximumItemsCount()', () => {

      it('should return 16', () => {
        expect(gearGrid.getMaximumItemsCount()).toEqual(16);
      });

    });

    describe('getAllRelevantCellsForNeighbourAffinity()', () => {

      it('should return all positions which are relevant for the affinity neighbour calculation', () => {
        const relevantCellIds = gearGrid.getAllRelevantCellPositionsForNeighbourAffinity();

        expect(relevantCellIds.length).toEqual(8);
        expect(relevantCellIds[0]).toBe(1);
        expect(relevantCellIds[1]).toBe(3);
        expect(relevantCellIds[2]).toBe(4);
        expect(relevantCellIds[3]).toBe(6);
        expect(relevantCellIds[4]).toBe(9);
        expect(relevantCellIds[5]).toBe(11);
        expect(relevantCellIds[6]).toBe(12);
        expect(relevantCellIds[7]).toBe(14);
      });

    });

    describe('getAllNonRelevantCellPositionsForNeighbourAffinity()', () => {

      it('should return all positions which are not relevant for the affinity neighbour calculation', () => {
        const relevantCellIds = gearGrid.getAllNonRelevantCellPositionsForNeighbourAffinity();

        expect(relevantCellIds.length).toEqual(8);

        expect(relevantCellIds[0]).toBe(0);
        expect(relevantCellIds[1]).toBe(2);
        expect(relevantCellIds[2]).toBe(5);
        expect(relevantCellIds[3]).toBe(7);
        expect(relevantCellIds[4]).toBe(8);
        expect(relevantCellIds[5]).toBe(10);
        expect(relevantCellIds[6]).toBe(13);
        expect(relevantCellIds[7]).toBe(15);
      });

    });

  });

})
;

/**
 * Gets en empty gear grid with a size 3 by 3.
 */
function getEmptyTestGrid(size: number): GearGrid {
  return new GearGrid(size);
}

/**
 * Gets the following gear grid filled with some items.
 *
 * +---------+---------+---------+
 * |         |         |         |
 * |         |         |         |
 * |    0    |    1    |    2    |
 * |         |         |         |
 * |         |    r    |    b    |
 * +---------+---------+---------+
 * |         |    r    |    r    |
 * |         |         |         |
 * |    3   r|r   4   b|b   5    |
 * |         |         |    b    |
 * |    g    |    g    |         |
 * +---------+---------+---------+
 * |    r    |    g    |    r    |
 * |         |         |         |
 * |    6   g|g   7   g|g   8    |
 * |         |   r r   |    r    |
 * |         |         |         |
 * +---------+---------+---------+
 */
function getTestGridWithItems(): GearGrid {
  const gearGrid = getEmptyTestGrid(3);

  gearGrid.items[1] = new Item(1, '1', undefined, undefined, undefined, AffinityColor.Red);
  gearGrid.items[2] = new Item(2, '2', undefined, undefined, undefined, AffinityColor.Blue);
  gearGrid.items[3] = new Item(3, '3', undefined, undefined, AffinityColor.Red, AffinityColor.Green);
  gearGrid.items[4] = new Item(4, '4', AffinityColor.Red, AffinityColor.Red, AffinityColor.Blue, AffinityColor.Green);
  gearGrid.items[5] = new Item(5, '5', AffinityColor.Red, AffinityColor.Blue, undefined, undefined,
    new FulfilledAffinites(1));
  gearGrid.items[6] = new Item(6, '6', AffinityColor.Red, undefined, AffinityColor.Green);
  gearGrid.items[7] = new Item(7, '7', AffinityColor.Green, AffinityColor.Green, AffinityColor.Green, undefined,
    new FulfilledAffinites(0, 0, 2));
  gearGrid.items[8] = new Item(8, '8', AffinityColor.Red, AffinityColor.Green, undefined, undefined,
    new FulfilledAffinites(0, 0, 1));

  return gearGrid;
}
