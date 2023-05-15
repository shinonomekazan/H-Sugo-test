import * as system from "./systems";

function main(): void{
	system.scene.onLoad.add(() => {
		system.bgmConfig();

		// 地面生成
		system.scene.append(system.ground);

		// 虫生成
		const insects = system.numberingInsects();

		// 草生成
		for (let i = 0; i < 7; i++) {
			system.createGrass();
		}

		// ステータス表示
		system.statusDisplay();

		system.setGoal(insects, insects.length);

	});

	g.game.pushScene(system.scene);

};

export = main;
