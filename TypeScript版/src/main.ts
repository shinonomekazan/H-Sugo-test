import * as system from "./systems";

function main(): void{
	system.openingScene.onLoad.add(() => {
		system.openingScene.append(system.ground0);
		system.showDisplay(system.openingScene);
		system.showRules(system.openingScene);
		system.openingScene.onPointDownCapture.add(() => {
			g.game.replaceScene(system.gameScene);
		});
	});

	g.game.pushScene(system.openingScene);

	system.gameScene.onLoad.add(() => {
		system.bgmConfig();

		// 地面生成
		system.gameScene.append(system.ground1);

		system.showDisplay(system.gameScene);

		// 虫生成
		system.numberingInsects();

		// 草生成
		// for (let i = 0; i < 7; i++) {
		// 	system.createGrass();
		// }

		// ステータス表示
		// system.statusDisplay();

		system.setGoal();

	});

};

export = main;
