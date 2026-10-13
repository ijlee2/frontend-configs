#!/usr/bin/env sh

# Clean slate
rm -rf "dist"

# Compile TypeScript
tsc --project "tsconfig.build.json"

echo "SUCCESS: Built dist.\n"
