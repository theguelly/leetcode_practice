import ExecutionTimer from './utils/execution_timer';
/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 0403. Frog Jump
 * https://leetcode.com/problems/frog-jump/
 * ----------------------------------------------------------------------------------------------------------------------
 */
function canCross(stones: number[]): boolean {
    let frogLocation = 0, nextStone = 0, frogJumpDistance = 1, canFrogCross = true
    let possible = {}
    for (frogLocation = 0; frogLocation < stones.length - 1; frogLocation++) {
        possible[frogLocation] = []
        for (nextStone = frogLocation + 1; nextStone < stones.length ; nextStone++) {
            if (stones.indexOf(frogJumpDistance + stones[frogJumpDistance] + 1) !== -1) {
                console.log(stones.indexOf(frogJumpDistance + stones[frogJumpDistance] + 1), frogJumpDistance + stones[frogJumpDistance] + 1)
                frogJumpDistance = stones[nextStone] - stones[frogLocation] + 1
                possible[frogLocation].push(stones[nextStone])
                break
            }
            if (stones.indexOf(frogJumpDistance + stones[frogJumpDistance]) !== -1) {
                console.log(stones.indexOf(frogJumpDistance + stones[frogJumpDistance]), frogJumpDistance + stones[frogJumpDistance])
                frogJumpDistance = stones[nextStone] - stones[frogLocation] + 1
                possible[frogLocation].push(stones[nextStone])
                break
            }
            if (stones.indexOf(frogJumpDistance + stones[frogJumpDistance] - 1) !== -1) {
                console.log(stones.indexOf(frogJumpDistance + stones[frogJumpDistance] - 1), frogJumpDistance + stones[frogJumpDistance] - 1)
                frogJumpDistance = stones[nextStone] - stones[frogLocation] + 1
                possible[frogLocation].push(stones[nextStone])
                break
            }
            canFrogCross = false
        }
    }
    console.log(Object.values(possible).map((arr: number[]) => arr.join(',') ))

    return canFrogCross 
};

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * Running Section. Not part of the problem
 * ----------------------------------------------------------------------------------------------------------------------
 */
const timer = new ExecutionTimer();
timer.measureAndCompare(() => {
    const aTestCases = [
        [0,1,3,5,6,8,12,17], // true
        [0,1,2,3,4,8,9,11], // false
    ]

    aTestCases.forEach((value, index) => console.log(index, canCross(value)))
});
