const util = require("./queen");
describe("util", () => {
	describe("putAtPossion", () => {
		it("should return correct data", () => {
			var arr = [
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0]
			];
			var expedted = [
				["x", 1, 1],
				[1, 1, 0],
				[1, 0, 1]
			];
			expect(util.putAtPos(arr,0,0)).toEqual(expedted);

			arr = [
				[0, 0, 0],
				[0, 0, 0],
				[0, 0, 0]
			];
			expedted = [
				[1, "x", 1],
				[1, 1, 1],
				[0, 1, 0]
			];
			expect(util.putAtPos(arr,0,1)).toEqual(expedted);

			arr = [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			];
			expedted = [
				[1, "x", 1, 1],
				[1, 1, 1, 0],
				[0, 1, 0, 1],
				[0, 1, 0, 0]
			];
			expect(util.putAtPos(arr,0,1)).toEqual(expedted);
			arr = [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			];
			expedted = [
				[1, 1, "x", 1],
				[0, 1, 1, 1],
				[1, 0, 1, 0],
				[0, 0, 1, 0]
			];
			expect(util.putAtPos(arr,0,2)).toEqual(expedted);
		});
	});
	describe("putAtPossion", () => {
		it("should return correct data", () => {
			expect(util.main()).toBe(92);
		});
	});
});