import * as fs from 'fs';

class ExecutionTimer {
    private lastExecutionTime: number;
    private maxDashes = 50;

    constructor() {
        this.lastExecutionTime = this.loadLastExecutionTime();
    }

    private loadLastExecutionTime(): number {
        try {
            const lastExecutionTimeString = fs.readFileSync('lastExecutionTime.txt', 'utf8');
            return parseFloat(lastExecutionTimeString) || 0;
        } catch (error) {
            console.error('Error reading lastExecutionTime.txt:', error.message);
            return 0;
        }
    }

    private saveCurrentExecutionTime(executionTime: number): void {
        fs.writeFileSync('lastExecutionTime.txt', executionTime.toString(), 'utf8');
    }

    measureAndCompare(callback: () => void): { timeDifference: number; lastExecutionTime: number; currentExecutionTime: number } {
        console.log('EXECUTION START'.padEnd(this.maxDashes / 1.5, '-').padStart(this.maxDashes, '-'));
        const startTime = process.hrtime();
        callback();
        const endTime = process.hrtime(startTime);
        const executionTime = (endTime[0] * 1e9 + endTime[1]) / 1e6; // Convert to milliseconds

        const timeDifference = executionTime - this.lastExecutionTime;
        this.saveCurrentExecutionTime(executionTime);

        console.log('EXECUTION END'.padEnd(this.maxDashes / 1.5, '-').padStart(this.maxDashes, '-'));
        console.log(`Last execution time: ${this.lastExecutionTime.toFixed(2)} ms`);
        console.log(`Current execution time: ${executionTime.toFixed(2)} ms`);
        console.log(`Time difference from last run: ${timeDifference.toFixed(2)} ms`);
        console.log('EXECUTION TIME'.padEnd(this.maxDashes / 1.5, '-').padStart(this.maxDashes, '-'));

        return { timeDifference, lastExecutionTime: this.lastExecutionTime, currentExecutionTime: executionTime };
    }
}

export default ExecutionTimer;
