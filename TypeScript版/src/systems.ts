import { Timeline } from "@akashic-extension/akashic-timeline";
import { FilledRect, Scene } from "@akashic/akashic-engine";
import * as tl from "@akashic-extension/akashic-timeline";


export const scene = new g.Scene({ game: g.game, assetIds: ['bgm', '成功', '失敗'] });

export const ground = new g.FilledRect({
	scene: scene,
	width: g.game.width,
	height: g.game.height,
	cssColor: "wheat"
});

export function bgmConfig(): void {
	const bgm = scene.assets['bgm'] as g.AudioAsset;
	const player = bgm.play();
	player.changeVolume(0.7);
}

const font = new g.DynamicFont({
	game: g.game,
	fontFamily: "sans-serif",
	size: 30
});

let targetIndex = Math.floor(g.game.random.generate() * 4);
const convenienceColors = ["blue", "yellow", "red", "glay"];
let targetColor = convenienceColors[targetIndex];

const textWindow = new g.FilledRect({
	scene: scene,
	cssColor: "black",
	width: 450,
	height: 100,
	x: 10,
	y: 15,
});

const mission = new g.Label({
	scene: scene,
	font: font,
	text: "Catch any " + targetColor + " insect!!",
	fontSize: 30,
	textColor: "white",
	x: 15,
	y: 20,
	anchorY: 0.3,
});

let count = 4;

const counter = new g.Label({
	scene: scene,
	font: font,
	text: "Target remaining : " + count,
	fontSize: 30,
	textColor: "white",
	x: 15,
	y: 70,
	anchorY: 0.5,
});

export function statusDisplay(): FilledRect {
	scene.append(textWindow);
	textWindow.append(mission);
	textWindow.append(counter);

	return textWindow;
}

export function createInsect(scene: Scene, colorIndex: number, bodySizeIndex: number, hornSizeIndex: number): FilledRect {
	const direction = [0, 90, 180, 270];
	const directionIndex = Math.floor(g.game.random.generate() * direction.length);
	const leg1X = Math.floor(g.game.random.generate() * g.game.width);
	const leg1Y = Math.floor(g.game.random.generate() * g.game.height);
	const bodySize = [1, 1.3];
	const hornSize = [0, 20];
	let isRotating = false;
	let leftRight = 0;

	const leg1 = new g.FilledRect({
		scene: scene,
		x: g.game.width / 2,
		y: 80,
		width: 60,
		height: 5,
		cssColor: "black",
		anchorX: 0.5,
	});

	const leg2 = new g.FilledRect({
		scene: scene,
		x: 0,
		y: 13,
		width: 60,
		height: 5,
		cssColor: "black",
		parent: leg1,
	});

	const leg3 = new g.FilledRect({
		scene: scene,
		x: 0,
		y: 26,
		width: 60,
		height: 5,
		cssColor: "black",
		parent: leg1,
	});

	const colors = ["darkcyan", "orange", "crimson", "darkslategray"];

	const body = new g.FilledRect({
		scene: scene,
		x: 10,
		y: -30,
		width: 40,
		height: 70,
		cssColor: colors[colorIndex],
		parent: leg1,
	});

	const segment = new g.FilledRect({
		scene: scene,
		x: 10,
		y: -10,
		width: 40,
		height: 5,
		cssColor: "maroon",
		parent: leg1,
	});

	const leftHorn = new g.FilledRect({
		scene: scene,
		x: 10,
		y: -50,
		width: 9,
		height: hornSize[hornSizeIndex],
		cssColor: "black",
		parent: leg1,
	});

	const rightHorn = new g.FilledRect({
		scene: scene,
		x: 41,
		y: -50,
		width: 9,
		height: hornSize[hornSizeIndex],
		cssColor: "black",
		parent: leg1,
	});

	leg1.angle = direction[directionIndex];
	leg1.x = leg1X;
	leg1.y = leg1Y;
	leg1.scaleX = bodySize[bodySizeIndex];
	leg1.scaleY = bodySize[bodySizeIndex];

	leg1.onUpdate.add(() => {
		[isRotating, leftRight] = moveInsect(leg1, isRotating, leftRight);
	});

	body.touchable = true;

	body.onPointDown.add(() => {
		if (colorIndex === targetIndex) {
			(scene.assets['成功'] as g.AudioAsset).play();
			updateStatus(leg1);
		} else if (colorIndex !== targetIndex) {
			(scene.assets['失敗'] as g.AudioAsset).play();
			missIndicate(scene, leg1.x, leg1.y);
		}
	});

	return leg1;
}

export function numberingInsects(): FilledRect[] {
	let insects: FilledRect[] = new Array(15);
	let numberingCounter = 0

	for (let colorIdx = 0; colorIdx < 4; colorIdx++) {
		for (let sizeIdx = 0; sizeIdx < 2; sizeIdx++) {
			for (let hornSizeIdx = 0; hornSizeIdx < 2; hornSizeIdx++) {
				insects[numberingCounter] = createInsect(scene, colorIdx, sizeIdx, hornSizeIdx);
				scene.append(insects[numberingCounter]);
				numberingCounter++;
			}
		}
	}

	return insects;
}

export function setGoal(insects: FilledRect[], arrayLength: number): void {
	const targetNumber = Math.floor(g.game.random.generate() * arrayLength);
	insects[targetNumber].onUpdate.removeAll;

	const timeline = new tl.Timeline(scene);
	const theGoal = timeline.create(insects[targetNumber])
	theGoal.moveTo(scene.game.width - 100, 100, 3000);
}

export function createGrass(): void {
	const grassX = Math.floor(g.game.random.generate() * g.game.width);
	const grassY = Math.floor(g.game.random.generate() * g.game.height);

	const grass = new g.E({ scene: scene });

	const partA = new g.FilledRect({
		scene: scene,
		x: grassX,
		y: grassY,
		width: 180,
		height: 90,
		cssColor: "green",
		parent: grass,
		anchorX: 0.5,
		anchorY: 0.5,
	});

	const partB = new g.FilledRect({
		scene: scene,
		x: grassX,
		y: grassY,
		width: 90,
		height: 180,
		cssColor: "green",
		parent: grass,
		anchorX: 0.5,
		anchorY: 0.5,
	});

	scene.append(grass);
}

function moveInsect(insect: FilledRect, isRotating: boolean, leftRight: number): [boolean, number] {
	if (isRotating === false && insect.x > 0 && insect.x < g.game.width && insect.y > 0 && insect.y < g.game.height) {
		let random = Math.floor(g.game.random.generate() * 100);

		if (random === 0) {
			leftRight = Math.floor(g.game.random.generate() * 2);
			isRotating = true;
		}
	}

	if (isRotating === true && leftRight === 0) {
		if (insect.angle === 0) {
			insect.angle = 360;
		}
		insect.angle -= 2;
	} else if (isRotating === true && leftRight === 1) {
		insect.angle += 2;
	}

	if (insect.angle === 360) {
		insect.angle = 0;
	}

	if (insect.angle === 0) {
		insect.y -= 3;
		isRotating = false;
	}

	if (insect.angle === 90) {
		insect.x += 3;
		isRotating = false;
	}

	if (insect.angle === 180) {
		insect.y += 3;
		isRotating = false;
	}

	if (insect.angle === 270) {
		insect.x -= 3;
		isRotating = false;
	}

	if (insect.x <= 0 || insect.x >= g.game.width || insect.y <= 0 || insect.y >= g.game.height) {
		if (insect.angle === 0 || insect.angle === 90) {
			insect.angle += 180;
		} else if (insect.angle === 180 || insect.angle === 270) {
			insect.angle -= 180;
		}
	}

	insect.modified();

	return [isRotating, leftRight];
}

export function clearStage(): void {
	textWindow.destroy();

	const back = new g.FilledRect({
		scene: scene,
		cssColor: "black",
		width: 450,
		height: 100,
		x: g.game.width / 2,
		y: g.game.height / 2,
		anchorX: 0.5,
		anchorY: 0.5,
	});

	const clearMessage = new g.Label({
		scene: scene,
		font: font,
		text: "Complete!!!",
		fontSize: 50,
		textColor: "white",
		x: g.game.width / 2,
		y: g.game.height / 2,
		anchorX: 0.5,
		anchorY: 0.5,
	});

	scene.append(back);
	scene.append(clearMessage);
}

export function updateStatus(leg1: FilledRect): void {
	count--;

	if (count === 0) {
		clearStage();
	} else {
		counter.text = "Target remaining : " + count;
		counter.invalidate();
		leg1.destroy();
		targetIndex = Math.floor(g.game.random.generate() * 4);
		targetColor = convenienceColors[targetIndex];
		mission.text = "Catch any " + targetColor + " insect!!";
		mission.invalidate();
	}
}

export function missIndicate(scene: Scene, x: number, y: number): void {
	const miss = new g.Label({
		scene: scene,
		font: font,
		text: "miss",
		fontSize: 30,
		textColor: "red",
		x: x,
		y: y,
	});

	scene.setTimeout(() => {
		miss.destroy();
	}, 1000);

	scene.append(miss);
}