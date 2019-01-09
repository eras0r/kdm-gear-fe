import {GearGrid} from './gear-grid';
import {FulfilledAffinites, Item} from './item';
import {AffinityColor} from './affinity-color';

describe('Gear Grid', () => {

  let gearGrid: GearGrid;

  describe('3 by 3 grid', () => {

    beforeEach(() => {
      gearGrid = new GearGrid(3);
    });

    describe('completely filled with items', () => {

      beforeEach(() => {
        for (let i = 0; i < gearGrid.getMaximumItemsCount(); i++) {
          gearGrid.items.push(new Item(i));
        }
      });

      describe('getItem()', () => {
        it('should retrieve the proper items', () => {
          for (let i = 0; i < gearGrid.getMaximumItemsCount(); i++) {
            const item = gearGrid.getItem(i);
            expect(item).toBeDefined();
            expect(item.id).toEqual(i);
          }
        });
      });

      describe('getTop()', () => {

        describe('top row', () => {

          it('should return undefined', () => {
            expect(gearGrid.getTop(0)).toBeUndefined();
            expect(gearGrid.getTop(1)).toBeUndefined();
            expect(gearGrid.getTop(2)).toBeUndefined();
          });

        });

        describe('middle row', () => {

          it('should return the corresponding item from the top row', () => {
            const left = gearGrid.getTop(3);
            expect(left).toBeDefined();
            expect(left.id).toBe(0);

            const center = gearGrid.getTop(4);
            expect(center).toBeDefined();
            expect(center.id).toBe(1);

            const right = gearGrid.getTop(5);
            expect(right).toBeDefined();
            expect(right.id).toBe(2);
          });

        });

        describe('bottom row', () => {

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

          it('should return the corresponding item from the middle row', () => {
            const left = gearGrid.getBottom(0);
            expect(left).toBeDefined();
            expect(left.id).toBe(3);

            const center = gearGrid.getBottom(1);
            expect(center).toBeDefined();
            expect(center.id).toBe(4);

            const right = gearGrid.getBottom(2);
            expect(right).toBeDefined();
            expect(right.id).toBe(5);
          });

        });

        describe('middle row', () => {

          it('should return the corresponding item from the top row', () => {
            const left = gearGrid.getBottom(3);
            expect(left).toBeDefined();
            expect(left.id).toBe(6);

            const center = gearGrid.getBottom(4);
            expect(center).toBeDefined();
            expect(center.id).toBe(7);

            const right = gearGrid.getBottom(5);
            expect(right).toBeDefined();
            expect(right.id).toBe(8);
          });

        });

        describe('bottom row', () => {

          it('should return undefined', () => {
            expect(gearGrid.getBottom(6)).toBeUndefined();
            expect(gearGrid.getBottom(7)).toBeUndefined();
            expect(gearGrid.getBottom(8)).toBeUndefined();
          });

        });

      });

      describe('getLeft()', () => {

        describe('left column', () => {

          it('should return undefined', () => {
            expect(gearGrid.getLeft(0)).toBeUndefined();
            expect(gearGrid.getLeft(3)).toBeUndefined();
            expect(gearGrid.getLeft(6)).toBeUndefined();
          });

        });

        describe('center column', () => {

          it('should return the corresponding item from the left column', () => {
            const left = gearGrid.getLeft(1);
            expect(left).toBeDefined();
            expect(left.id).toBe(0);

            const center = gearGrid.getLeft(4);
            expect(center).toBeDefined();
            expect(center.id).toBe(3);

            const right = gearGrid.getLeft(7);
            expect(right).toBeDefined();
            expect(right.id).toBe(6);
          });

        });

        describe('right column', () => {

          it('should return the corresponding item from the center column', () => {
            const left = gearGrid.getLeft(2);
            expect(left).toBeDefined();
            expect(left.id).toBe(1);

            const center = gearGrid.getLeft(5);
            expect(center).toBeDefined();
            expect(center.id).toBe(4);

            const right = gearGrid.getLeft(8);
            expect(right).toBeDefined();
            expect(right.id).toBe(7);
          });

        });

      });

      describe('getRight()', () => {

        describe('left column', () => {

          it('should return the corresponding item from the center column', () => {
            const left = gearGrid.getRight(0);
            expect(left).toBeDefined();
            expect(left.id).toBe(1);

            const center = gearGrid.getRight(3);
            expect(center).toBeDefined();
            expect(center.id).toBe(4);

            const right = gearGrid.getRight(6);
            expect(right).toBeDefined();
            expect(right.id).toBe(7);
          });

        });

        describe('center column', () => {

          it('should return the corresponding item from the right column', () => {
            const left = gearGrid.getRight(1);
            expect(left).toBeDefined();
            expect(left.id).toBe(2);

            const center = gearGrid.getRight(4);
            expect(center).toBeDefined();
            expect(center.id).toBe(5);

            const right = gearGrid.getRight(7);
            expect(right).toBeDefined();
            expect(right.id).toBe(8);
          });

        });

        describe('right column', () => {

          it('should return undefined', () => {
            expect(gearGrid.getRight(2)).toBeUndefined();
            expect(gearGrid.getRight(5)).toBeUndefined();
            expect(gearGrid.getRight(8)).toBeUndefined();
          });

        });

      });

      describe('getItemsCount()', () => {

        it('should return the items count if all items are filled', () => {
          expect(gearGrid.getItemsCount()).toEqual(9);
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

      describe('getAllRelevantCellsForNeighbourAffinity()', () => {

        it('should return all items which are relevant for the affinity calculation', () => {
          const relevantCells = gearGrid.getAllRelevantCellsForNeighbourAffinity();

          expect(relevantCells.length).toEqual(4);
          expect(relevantCells[0]).toBe(gearGrid.items[1]);
          expect(relevantCells[1]).toBe(gearGrid.items[3]);
          expect(relevantCells[2]).toBe(gearGrid.items[5]);
          expect(relevantCells[3]).toBe(gearGrid.items[7]);
        });

      });

    });

    describe('getMaximumItemsCount()', () => {

      it('should return 9', () => {
        expect(gearGrid.getMaximumItemsCount()).toEqual(9);
      });

    });

    describe('getItemsCount()', () => {

      it('should return 0', () => {
        expect(gearGrid.getItemsCount()).toEqual(0);
      });

    });

  });

  describe('4 by 4 grid', () => {

    beforeEach(() => {
      gearGrid = new GearGrid(4);
    });

    describe('completely filled with items', () => {

      beforeEach(() => {
        for (let i = 0; i < gearGrid.getMaximumItemsCount(); i++) {
          gearGrid.items.push(new Item(i));
        }
      });

      describe('getItemsCount()', () => {

        it('should return the items count if all items are filled', () => {
          expect(gearGrid.getItemsCount()).toEqual(16);
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

      describe('getAllRelevantCellsForNeighbourAffinity()', () => {

        it('should return all items which are relevant for the affinity calculation', () => {
          const relevantCells = gearGrid.getAllRelevantCellsForNeighbourAffinity();

          expect(relevantCells.length).toEqual(8);
          expect(relevantCells[0]).toBe(gearGrid.items[1]);
          expect(relevantCells[1]).toBe(gearGrid.items[3]);
          expect(relevantCells[2]).toBe(gearGrid.items[4]);
          expect(relevantCells[3]).toBe(gearGrid.items[6]);
          expect(relevantCells[4]).toBe(gearGrid.items[9]);
          expect(relevantCells[5]).toBe(gearGrid.items[11]);
          expect(relevantCells[6]).toBe(gearGrid.items[12]);
          expect(relevantCells[7]).toBe(gearGrid.items[14]);
        });

      });

    });

    describe('getMaximumItemsCount()', () => {

      it('should return 16', () => {
        expect(gearGrid.getMaximumItemsCount()).toEqual(16);
      });

    });

    describe('getItemsCount()', () => {

      it('should return 0', () => {
        expect(gearGrid.getItemsCount()).toEqual(0);
      });

    });

  });

  /**
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
   * |         |   r r   |         |
   * |         |         |         |
   * +---------+---------+---------+
   */
  describe('affinity calculations', () => {

    let affinities: FulfilledAffinites;

    beforeEach(() => {

      gearGrid = new GearGrid(3);
      gearGrid.items[1] = new Item(1, '1', undefined, undefined, undefined, AffinityColor.Red);
      gearGrid.items[2] = new Item(2, '2', undefined, undefined, undefined, AffinityColor.Blue);
      gearGrid.items[3] = new Item(3, '3', undefined, undefined, AffinityColor.Red, AffinityColor.Green);
      gearGrid.items[4] = new Item(4, '4', AffinityColor.Red, AffinityColor.Red, AffinityColor.Blue, AffinityColor.Green);
      gearGrid.items[5] = new Item(5, '5', AffinityColor.Red, AffinityColor.Blue, undefined, undefined,
        new FulfilledAffinites(1));
      gearGrid.items[6] = new Item(6, '6', AffinityColor.Red, undefined, AffinityColor.Green);
      gearGrid.items[7] = new Item(7, '7', AffinityColor.Green, AffinityColor.Green, AffinityColor.Green, undefined,
        new FulfilledAffinites(0, 0, 2));
      gearGrid.items[8] = new Item(8, '8', AffinityColor.Red, AffinityColor.Green);

    });

    describe('empty gear positions', () => {

      it('should return undefined', () => {
        expect(gearGrid.getAffinitiesForCell(0)).toBeUndefined();
      });

    });

    describe('north item', () => {

      beforeEach(() => {
        affinities = gearGrid.getAffinitiesForCell(1);
      });

      it('should return correct affinities', () => {
        expect(affinities).toBeDefined();
        expect(affinities.blue).toEqual(0);
        expect(affinities.green).toEqual(0);
        expect(affinities.red).toEqual(1);
      });

    });

    describe('north east item', () => {

      beforeEach(() => {
        affinities = gearGrid.getAffinitiesForCell(2);
      });

      it('should return correct affinities', () => {
        expect(affinities).toBeDefined();
        expect(affinities.blue).toEqual(0);
        expect(affinities.green).toEqual(0);
        expect(affinities.red).toEqual(0);
      });

    });

    describe('west item', () => {

      beforeEach(() => {
        affinities = gearGrid.getAffinitiesForCell(3);
      });

      it('should return correct affinities', () => {
        expect(affinities).toBeDefined();
        expect(affinities.blue).toEqual(0);
        expect(affinities.green).toEqual(0);
        expect(affinities.red).toEqual(1);
      });

    });

    describe('east item', () => {

      beforeEach(() => {
        affinities = gearGrid.getAffinitiesForCell(5);
      });

      it('should return correct affinities', () => {
        expect(affinities).toBeDefined();
        expect(affinities.blue).toEqual(2);
        expect(affinities.green).toEqual(0);
        expect(affinities.red).toEqual(0);
      });

    });

    describe('center item', () => {

      beforeEach(() => {
        affinities = gearGrid.getAffinitiesForCell(4);
      });

      it('should return correct affinities', () => {
        expect(affinities).toBeDefined();
        expect(affinities.blue).toEqual(1);
        expect(affinities.green).toEqual(1);
        expect(affinities.red).toEqual(2);
      });

    });

    describe('south west item', () => {

      beforeEach(() => {
        affinities = gearGrid.getAffinitiesForCell(6);
      });

      it('should return correct affinities', () => {
        expect(affinities).toBeDefined();
        expect(affinities.blue).toEqual(0);
        expect(affinities.green).toEqual(1);
        expect(affinities.red).toEqual(0);
      });

    });

    describe('south item', () => {

      beforeEach(() => {
        affinities = gearGrid.getAffinitiesForCell(7);
      });

      it('should return correct affinities', () => {
        expect(affinities).toBeDefined();
        expect(affinities.blue).toEqual(0);
        expect(affinities.green).toEqual(3);
        expect(affinities.red).toEqual(2);
      });

    });

    describe('south east item', () => {

      beforeEach(() => {
        affinities = gearGrid.getAffinitiesForCell(8);
      });

      it('should return correct affinities', () => {
        expect(affinities).toBeDefined();
        expect(affinities.blue).toEqual(0);
        expect(affinities.green).toEqual(1);
        expect(affinities.red).toEqual(0);
      });

    });

  });

});
