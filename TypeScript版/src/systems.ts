import { FilledRect, Scene } from "@akashic/akashic-engine";
import * as tl from "@akashic-extension/akashic-timeline";
import al = require("@akashic-extension/akashic-label");

export const gameScene = new g.Scene({ game: g.game, assetIds: ["bgm", "成功", "失敗", "touch"] });
export const openingScene = new g.Scene({ game: g.game });

const timeline = new tl.Timeline(gameScene);

export function createGround(scene: Scene): void {
	const ground = new g.FilledRect({
		scene: scene,
		width: g.game.width,
		height: g.game.height,
		cssColor: "wheat"
	});

	scene.append(ground);
}

export function bgmConfig(): void {
	const bgm = gameScene.assets.bgm as g.AudioAsset;
	const player = bgm.play();
	player.changeVolume(0.7);
}

const monospace = new g.DynamicFont({
	game: g.game,
	fontFamily: "monospace",
	size: 30
});

const sansserif = new g.DynamicFont({
	game: g.game,
	fontFamily: "sans-serif",
	size: 30
});

export function showRules(openingScene: Scene): void {
	const back = new g.FilledRect({
		scene: openingScene,
		cssColor: "black",
		width: 450,
		height: 450,
		x: g.game.width / 2,
		y: g.game.height / 2,
		anchorX: 0.5,
		anchorY: 0.5,
	});

	const rules = new al.Label({
		scene: openingScene,
		font: monospace,
		text: `ムシとムシを交配させて
目標の形質を持った虫を作ろう！
\n
･目標と最初の親Aはランダムに選ばれるぞ
･親Aと交配させる親Bをクリックで選ぼう
･生まれたXはAとBの要素を遺伝しているぞ
･Xが目標の形質と完全一致ならクリア！
(完全一致でなければXが次の親Aとなる。
クリックでまた親Bを選ぼう)
\n
ヒント
遺伝要素は｢ツノの有無｣｢体の色｣｢大きさ｣だ。
XはAとBからどれかひとつずつを引き継ぐぞ。
残りひとつはランダムに決まるんだ。`,
		fontSize: 20,
		textColor: "white",
		x: g.game.width / 2,
		y: g.game.height / 2,
		anchorX: 0.5,
		anchorY: 0.5,
		width: 430,
	});

	openingScene.append(back);
	openingScene.append(rules);
}

let isTouchable = false;

const switchIsTouchable: () => void = () => {
	if (isTouchable === false) {
		isTouchable = true;
	} else if (isTouchable === true) {
		isTouchable = false;
	}
};

const sePlay: () => void = () => {
	(gameScene.assets["成功"] as g.AudioAsset).play();
};

class InsectRect extends g.FilledRect {
	gene: number[] = new Array(3);
	number: number;
}

export function createInsect(scene: Scene, colorIndex: number, bodySizeIndex: number, hornSizeIndex: number): InsectRect {
	const direction = [0, 90, 180, 270];
	const directionIndex = Math.floor(g.game.random.generate() * direction.length);
	const leg1X = Math.floor(g.game.random.generate() * g.game.width);
	const leg1Y = Math.floor(g.game.random.generate() * g.game.height);
	const bodySize = [1, 1.3];
	const hornSize = [0, 20];
	let isRotating = false;
	let leftRight = 0;

	const leg1 = new InsectRect({
		scene: scene,
		x: g.game.width / 2,
		y: 80,
		width: 60,
		height: 5,
		cssColor: "black",
		anchorX: 0.5,
		anchorY: 0.5,
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

	// フラグ管理に使う
	leg1.tag = true;

	leg1.gene = [colorIndex, bodySizeIndex, hornSizeIndex];

	leg1.onUpdate.add(() => {
		if (leg1.tag !== true) {
			return;
		}
		[isRotating, leftRight] = moveInsect(leg1, isRotating, leftRight);
	});

	body.touchable = true;

	body.onPointDown.add(() => {
		if (isTouchable === true && leg1.tag === true) {
			scene.append(leg1);
			(scene.assets["失敗"] as g.AudioAsset).play();
			leg1.tag = false;
			parentIndexB = leg1.number;
			const parent = timeline.create(leg1);
			parent.call(switchIsTouchable)
				.moveTo(g.game.width - 100, 260, 3000)
				.con()
				.rotateTo(0, 3000)
				.call(sePlay);

			scene.setTimeout(() => {
				generateChild();
			}, 4500);
		}
	});

	return leg1;
}

let insects: InsectRect[] = new Array(15);
let numberingCounter = 0;

export function numberingInsects(): void {

	for (let colorIdx = 0; colorIdx < 4; colorIdx++) {
		for (let sizeIdx = 0; sizeIdx < 2; sizeIdx++) {
			for (let hornSizeIdx = 0; hornSizeIdx < 2; hornSizeIdx++) {
				insects[numberingCounter] = createInsect(gameScene, colorIdx, sizeIdx, hornSizeIdx);
				insects[numberingCounter].number = numberingCounter;
				gameScene.append(insects[numberingCounter]);
				numberingCounter++;
			}
		}
	}
}

function generateChild(): void {
	const geneA = insects[parentIndexA].gene;
	const geneB = insects[parentIndexB].gene;

	let geneticElementIndexA = Math.floor(g.game.random.generate() * geneA.length);
	let geneticElementIndexB: number;

	do {
		geneticElementIndexB = Math.floor(g.game.random.generate() * geneB.length);
	} while (geneticElementIndexB === geneticElementIndexA);

	const newGene: number[] = [null, null, null];
	newGene[geneticElementIndexA] = geneA[geneticElementIndexA];
	newGene[geneticElementIndexB] = geneB[geneticElementIndexB];

	if (geneticElementIndexA + geneticElementIndexB === 3) {
		newGene[0] = Math.floor(g.game.random.generate() * 3);
	} else if (geneticElementIndexA + geneticElementIndexB === 2) {
		newGene[1] = Math.floor(g.game.random.generate() * 1);
	} else if (geneticElementIndexA + geneticElementIndexB === 1) {
		newGene[2] = Math.floor(g.game.random.generate() * 1);
	}

	insects[numberingCounter] = createInsect(gameScene, newGene[0], newGene[1], newGene[2]);
	insects[numberingCounter].x = g.game.width - 100;
	insects[numberingCounter].y = 420;
	insects[numberingCounter].tag = false;
	insects[numberingCounter].angle = 0;
	gameScene.append(insects[numberingCounter]);
	sePlay();
	checkClear();
}

function checkClear(): void {
	if (insects[targetIndex].gene[0] === insects[numberingCounter].gene[0] &&
		insects[targetIndex].gene[1] === insects[numberingCounter].gene[1] &&
		insects[targetIndex].gene[2] === insects[numberingCounter].gene[2]) {
		clearStage();
	} else {
		const parentA = timeline.create(insects[parentIndexA]);
		const parentB = timeline.create(insects[parentIndexB]);
		const child = timeline.create(insects[numberingCounter]);

		gameScene.setTimeout(() => {
			parentA.rotateBy(1800, 1000)
				.con()
				.moveBy(Math.floor(g.game.random.generate() * (100 - -100 + 1)) + -100, 600, 1000)
				.call(insects[parentIndexA].destroy);

			parentB.rotateBy(1800, 1000)
				.con()
				.moveBy(Math.floor(g.game.random.generate() * (100 - -100 + 1)) + -100, 600, 1000, tl.Easing.easeOutSine)
				.call(insects[parentIndexB].destroy);

			child.wait(2000)
				.moveTo(g.game.width - 100, 100, 1500)
				.call(switchIsTouchable);
		}, 2000);

		parentIndexA = numberingCounter;
		numberingCounter++;
	}
}

export function showDisplay(scene: Scene): void {
	const frame0 = new g.FilledRect({
		scene: scene,
		x: 100,
		y: 30,
		width: 80 * 1.3,
		height: 100 * 1.3,
		cssColor: "white",
		anchorX: 0.5,
	});

	const frame1 = new g.FilledRect({
		scene: scene,
		x: gameScene.game.width - 100,
		y: 30,
		width: 80 * 1.3,
		height: 100 * 1.3,
		cssColor: "white",
		anchorX: 0.5,
	});

	const frame2 = new g.FilledRect({
		scene: scene,
		x: gameScene.game.width - 100,
		y: 190,
		width: 80 * 1.3,
		height: 100 * 1.3,
		cssColor: "white",
		anchorX: 0.5,
	});

	const frame3 = new g.FilledRect({
		scene: scene,
		x: gameScene.game.width - 100,
		y: 350,
		width: 80 * 1.3,
		height: 100 * 1.3,
		cssColor: "white",
		anchorX: 0.5,
	});

	const multiply = new al.Label({
		scene: scene,
		font: sansserif,
		text: `*`,
		fontSize: 50,
		textColor: "red",
		x: g.game.width - 92,
		y: 170,
		anchorX: 0.5,
		anchorY: 0.5,
		width: 50,
	})

	const arrow = new al.Label({
		scene: scene,
		font: sansserif,
		text: `↓`,
		fontSize: 50,
		textColor: "red",
		x: g.game.width - 102,
		y: 323,
		anchorX: 0.5,
		anchorY: 0.5,
		width: 50,
	})

	const A = new al.Label({
		scene: scene,
		font: sansserif,
		text: `A`,
		fontSize: 70,
		textColor: "red",
		x: g.game.width - 75,
		y: 50,
		anchorX: 0.5,
		width: 100,
	})

	const B = new al.Label({
		scene: scene,
		font: sansserif,
		text: `B`,
		fontSize: 70,
		textColor: "red",
		x: g.game.width - 75,
		y: 210,
		anchorX: 0.5,
		width: 100,
	})

	const X = new al.Label({
		scene: scene,
		font: sansserif,
		text: `X`,
		fontSize: 70,
		textColor: "red",
		x: g.game.width - 75,
		y: 370,
		anchorX: 0.5,
		width: 100,
	})

	const goal = new al.Label({
		scene: scene,
		font: monospace,
		text: `目
標`,
		fontSize: 50,
		textColor: "red",
		x: 125,
		y: 35,
		anchorX: 0.5,
		width: 100,
	})

	scene.append(multiply);
	scene.append(arrow);
	scene.append(frame0);
	scene.append(frame1);
	scene.append(frame2);
	scene.append(frame3);
	scene.append(A);
	scene.append(B);
	scene.append(X);
	scene.append(goal);
}

export function announce(text: string, size: number): Promise<void> {
	return new Promise<void>((resolve) => {
		(gameScene.assets["touch"] as g.AudioAsset).play();

		const back = new g.FilledRect({
			scene: gameScene,
			cssColor: "black",
			width: 300,
			height: 100,
			x: g.game.width / 2,
			y: g.game.height / 2,
			anchorX: 0.5,
			anchorY: 0.5,
		});

		const message = new al.Label({
			scene: gameScene,
			font: sansserif,
			text: text,
			fontSize: size,
			textColor: "white",
			x: g.game.width / 2,
			y: g.game.height / 2,
			anchorX: 0.5,
			anchorY: 0.5,
			width: g.game.width,
			textAlign: "center",

		});

		gameScene.setTimeout(() => {
			gameScene.append(back);
			gameScene.append(message);

			gameScene.setTimeout(() => {
				back.destroy();
				message.destroy();
				resolve();
			}, 3300);
		}, 200);
	});
}

let parentIndexA: number;
let parentIndexB: number;
const targetIndex = Math.floor(g.game.random.generate() * insects.length);

export function setGoal(): void {
	announce("目標決定", 50).then(() => {
		insects[targetIndex].tag = false;
		gameScene.append(insects[targetIndex]);
		const theGoal = timeline.create(insects[targetIndex]);
		insects[targetIndex].angle = 0;
		theGoal
			.moveTo(100, 100, 2000)
			.con()
			.rotateBy(2160, 2000)
			.call(sePlay);

		do {
			parentIndexA = Math.floor(g.game.random.generate() * insects.length);
		} while (parentIndexA === targetIndex);

		gameScene.setTimeout(() => {
			announce("親Aを決定", 50).then(() => {
				insects[parentIndexA].tag = false;
				gameScene.append(insects[parentIndexA]);

				const theFirst = timeline.create(insects[parentIndexA]);
				insects[parentIndexA].angle = 0;
				theFirst
					.moveTo(g.game.width - 100, 100, 2000)
					.con()
					.rotateBy(2160, 2000)
					.call(sePlay);
			});

			gameScene.setTimeout(() => {
				announce("ゲームスタート！\n親Bを選ぼう", 30).then(() => {
					switchIsTouchable();
				})
			}, 6000);
		}, 4000);

	});
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

	const back = new g.FilledRect({
		scene: gameScene,
		cssColor: "black",
		width: 450,
		height: 100,
		x: g.game.width / 2,
		y: g.game.height / 2,
		anchorX: 0.5,
		anchorY: 0.5,
	});

	const clearMessage = new al.Label({
		scene: gameScene,
		font: sansserif,
		text: "Complete!!!",
		fontSize: 50,
		textColor: "white",
		x: g.game.width / 2,
		y: g.game.height / 2,
		anchorX: 0.5,
		anchorY: 0.5,
		width: 500,
		textAlign: "center",
	});

	gameScene.append(back);
	gameScene.append(clearMessage);
}
