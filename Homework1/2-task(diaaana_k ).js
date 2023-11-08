const numOfDisks = 3;
const sourceRod = 'A';
const auxiliaryRod = 'C';
const targetRod = 'B';

function towersOfHanoi(numOfDisks, source, auxiliary, target) {
    if (numOfDisks === 1) {
        console.log(`Disk 1 from ${source} to ${target}`);
        return 1;
    }

    const step1 = towersOfHanoi(numOfDisks - 1, source, target, auxiliary);
    console.log(`Disk ${numOfDisks} from ${source} to ${target}`);
    const step2 = towersOfHanoi(numOfDisks - 1, auxiliary, source, target);

    return step1 + 1 + step2;
}

const countOfSteps = towersOfHanoi(numOfDisks, sourceRod, auxiliaryRod, targetRod);
console.log(`Minimal count of steps for this game: ${countOfSteps}`);