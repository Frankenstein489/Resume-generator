// Ported from Reactive Resume (packages/pdf/src/templates/index.ts)
// Original project: https://github.com/AmruthPillai/Reactive-Resume — MIT License
// Copyright (c) 2026 Amruth Pillai

import type { Template } from "../../schema/templates";
import type { TemplatePage } from "../document";
import { PorschePage } from "./porsche/PorschePage";
import { FerrariPage } from "./ferrari/FerrariPage";
import { LamborghiniPage } from "./lamborghini/LamborghiniPage";
import { BugattiPage } from "./bugatti/BugattiPage";
import { MclarenPage } from "./mclaren/MclarenPage";
import { KoenigseggPage } from "./koenigsegg/KoenigseggPage";
import { PaganiPage } from "./pagani/PaganiPage";
import { MaseratiPage } from "./maserati/MaseratiPage";
import { AstonPage } from "./aston/AstonPage";
import { BentleyPage } from "./bentley/BentleyPage";
import { CorvettePage } from "./corvette/CorvettePage";
import { LotusPage } from "./lotus/LotusPage";
import { JaguarPage } from "./jaguar/JaguarPage";
import { AlfaPage } from "./alfa/AlfaPage";
import { RimacPage } from "./rimac/RimacPage";

export const templatePages: Partial<Record<Template, TemplatePage>> = {
	porsche: PorschePage,
	ferrari: FerrariPage,
	lamborghini: LamborghiniPage,
	bugatti: BugattiPage,
	mclaren: MclarenPage,
	koenigsegg: KoenigseggPage,
	pagani: PaganiPage,
	maserati: MaseratiPage,
	aston: AstonPage,
	bentley: BentleyPage,
	corvette: CorvettePage,
	lotus: LotusPage,
	jaguar: JaguarPage,
	alfa: AlfaPage,
	rimac: RimacPage,
};

export const defaultTemplatePage = PorschePage;

export const getTemplatePage = (template: Template): TemplatePage => templatePages[template] ?? defaultTemplatePage;

export {
	PorschePage,
	FerrariPage,
	LamborghiniPage,
	BugattiPage,
	MclarenPage,
	KoenigseggPage,
	PaganiPage,
	MaseratiPage,
	AstonPage,
	BentleyPage,
	CorvettePage,
	LotusPage,
	JaguarPage,
	AlfaPage,
	RimacPage,
};
