#!/usr/bin/env node
import { Command } from "commander";
import { createProject } from "./project/create.js";
import { addTool } from "./project/add-tool.js";
import { addPrompt } from "./project/add-prompt.js";
import { addResource } from "./project/add-resource.js";
import { buildFramework } from "./framework/build.js";

const program = new Command();

program
  .name("mcp")
  .description("CLI for managing MCP server projects")
  .version("0.1.27");

program
  .command("build")
  .description("Build the MCP project")
  .action(buildFramework);

program
  .command("create")
  .description("Create a new MCP server project")
  .argument("[name]", "project name")
  .action(createProject);

program
  .command("add")
  .description("Add a new component to your MCP server")
  .addCommand(
    new Command("tool")
      .description("Add a new tool")
      .argument("[name]", "tool name")
      .action(addTool)
  )
  .addCommand(
    new Command("prompt")
      .description("Add a new prompt")
      .argument("[name]", "prompt name")
      .action(addPrompt)
  )
  .addCommand(
    new Command("resource")
      .description("Add a new resource")
      .argument("[name]", "resource name")
      .action(addResource)
  );

program.parse();
