import * as system from "./systems";

function main(): void {
	system.openingScene.onLoad.add(() => {
		system.createGround(system.openingScene);
		system.showDisplay(system.openingScene);
		system.showRules(system.openingScene);
		system.openingScene.onPointDownCapture.add(() => {
			g.game.replaceScene(system.gameScene);
		});
	});

	g.game.pushScene(system.openingScene);

	system.gameScene.onLoad.add(() => {
		//音量調整
		system.bgmConfig();

		//地面生成
		system.createGround(system.gameScene);

		//虫生成
		system.numberingInsects();

		//ディスプレイ表示
		system.showDisplay(system.gameScene);

		//目標の形質と最初の親の設定
		system.setGoal();

	});

};

export = main;
