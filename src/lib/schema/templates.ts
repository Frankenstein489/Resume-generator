// Ported from Reactive Resume (packages/schema/src/templates.ts)
// Original project: https://github.com/AmruthPillai/Reactive-Resume — MIT License
// Copyright (c) 2026 Amruth Pillai

import z from "zod";

export const templateSchema = z.enum([
	"porsche",
	"ferrari",
	"lamborghini",
	"bugatti",
	"mclaren",
	"koenigsegg",
	"pagani",
	"maserati",
	"aston",
	"bentley",
	"corvette",
	"lotus",
	"jaguar",
	"alfa",
	"rimac",
]);

export type Template = z.infer<typeof templateSchema>;
